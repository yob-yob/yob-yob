# I Got Locked Out of My Self-Hosted Termix Instance. Here's How I Got Back In.

**TL;DR:** Forgot your Termix username or password? [Use this script](https://gist.github.com/yob-yob/5fb290a23fbeccb758d6df7eafdd8bb9) -- it'll get you back in under a minute.

---

## The Problem

I run a self-hosted [Termix](https://github.com/lukegus/termix) instance on Proxmox for managing SSH connections to my servers. After setting it up, I forgot to save the credentials to my password manager. Entirely my fault. By the time I needed to log in again, I had no idea what my username or password was.

No big deal, right? I have root access to the host machine. The database is right there at `/opt/termix/data/db.sqlite.encrypted`. I have the `DATABASE_KEY` sitting in `data/.env`. This should take five minutes.

It did not take five minutes.

## What I Tried (and Why It All Failed)

**Attempt 1: Plain SQLite**
```bash
sqlite3 db.sqlite.encrypted "SELECT username FROM users;"
# → "file is not a database"
```
Fair enough -- it's encrypted.

**Attempt 2: SQLCipher**
```bash
sqlcipher db.sqlite.encrypted
PRAGMA key = '$DATABASE_KEY';
SELECT username FROM users;
```
```
ERROR CORE sqlcipher_page_cipher: hmac check failed for pgno=1
Parse error near line 2: file is not a database (26)
```
Hmm. Maybe the key needs hashing first? Tried PBKDF2, SHA-256, different KDF iterations. Nothing worked.

**Attempt 3: Node.js scripts**

Wrote inline scripts trying to use the `sqlite3` npm package with encryption wrappers. Got `MODULE_NOT_FOUND` errors everywhere because Termix doesn't even ship the `sqlite3` package -- it uses `better-sqlite3`, which is a completely different driver with no encryption support.

At this point I'd burned an evening and was starting to consider just nuking the database and starting fresh.

## The Actual Answer

I finally dug into Termix's source code and found the real answer: **Termix doesn't use SQLCipher at all.**

The file `db.sqlite.encrypted` isn't an encrypted SQLite database. It's a normal SQLite database wrapped in a custom binary envelope:

```
┌──────────────────────────────────────────────────────┐
│ 4-byte big-endian metadata length                    │
├──────────────────────────────────────────────────────┤
│ JSON metadata { iv, tag, version, algorithm }        │
├──────────────────────────────────────────────────────┤
│ AES-256-GCM ciphertext (the entire SQLite database)  │
└──────────────────────────────────────────────────────┘
```

At startup, Termix reads this file, decrypts the whole thing into memory using Node's `crypto.createDecipheriv`, and operates on it as an in-memory SQLite database via `better-sqlite3`. The `DATABASE_KEY` is used **directly** as a raw 32-byte AES key -- just hex-decoded, no KDF applied.

That's why SQLCipher never worked. It was looking for page-level encryption with HMAC verification and KDF-derived keys. The file doesn't have any of that. It's just a blob.

## The Fix

Once I understood the format, the recovery script was straightforward -- read the metadata header, decrypt with AES-256-GCM, load into `better-sqlite3`, query the users table:

```bash
cd /opt/termix
node recover.mjs list-users
```
```
  Registered Users
  ─────────────────────────────────────
  myusername  [ADMIN]
    ID: krmB6Yu_P3-Lz4AA4wIGJ
```

That's it. Username recovered. And if you also need to reset the password:

```bash
node recover.mjs reset-pass --user myusername --password 'NewSecurePassword!'
```

The script decrypts the database, updates the bcrypt hash, re-encrypts the file, and writes it back. It even creates an automatic backup before touching anything.

## Get the Script

The full recovery tool is available as a GitHub Gist:

**[termix-data-recovery.mjs](https://gist.github.com/yob-yob/5fb290a23fbeccb758d6df7eafdd8bb9)**

It supports five commands:
- `list-users` -- see all registered accounts
- `reset-pass` -- reset any user's password
- `dump-settings` -- view application settings
- `decrypt-only` -- export a plain SQLite file for manual inspection
- `info` -- show encryption metadata

No extra dependencies needed -- it uses the `better-sqlite3` and `bcryptjs` packages that ship with every Termix installation.

## Lessons Learned

1. **"Encrypted SQLite" doesn't always mean SQLCipher.** Applications can wrap SQLite files in custom encryption envelopes. Always check the source.
2. **Read the source before trying recovery tools.** I could've saved hours by grepping for `DATABASE_KEY` in the codebase first.
3. **Use a password manager.** Obviously.

Hope this saves someone else a frustrating evening.

---

*Tags: termix, self-hosted, sqlite, encryption, database-recovery, aes-256-gcm, sysadmin*

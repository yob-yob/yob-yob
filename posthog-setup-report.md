# PostHog post-wizard report

The wizard has completed a full PostHog analytics integration for this SvelteKit static portfolio site. Since the project uses `@sveltejs/adapter-static`, only the client-side SDK (`posthog-js`) was installed — no server SDK is needed. PostHog is initialized in `src/hooks.client.ts` using the EU host, with automatic exception capture enabled. `svelte.config.js` was updated to set `paths.relative: false`, which is required for session replay to work correctly with SSR. Ten events were instrumented across seven files, covering the key user interactions — resume views, outbound link clicks, side-nav section engagement, and error pages.

| Event name | Description | File |
|---|---|---|
| `resume_viewed` | User navigates to the resume page, indicating hiring intent. | `src/routes/resume/+page.svelte` |
| `resume_link_clicked` | User clicks the Resume link in the portfolio header. | `src/lib/components/portfolio/HeaderSection.svelte` |
| `header_github_clicked` | User clicks the GitHub icon link in the portfolio header. | `src/lib/components/portfolio/HeaderSection.svelte` |
| `header_linkedin_clicked` | User clicks the LinkedIn icon link in the portfolio header. | `src/lib/components/portfolio/HeaderSection.svelte` |
| `project_link_clicked` | User clicks a project link button to view a project on GitHub. | `src/lib/components/portfolio/ProjectsSection.svelte` |
| `social_link_clicked` | User clicks a social or certificate profile link in the Links section. | `src/lib/components/links/ProfileLinkButton.svelte` |
| `section_nav_clicked` | User clicks a side navigation item to jump to a portfolio section. | `src/lib/components/portfolio/PortfolioSideNav.svelte` |
| `resume_portfolio_link_clicked` | User clicks the Portfolio website link shown on the resume page. | `src/routes/resume/+page.svelte` |
| `resume_github_link_clicked` | User clicks the GitHub link shown on the resume page. | `src/routes/resume/+page.svelte` |
| `page_not_found` | User lands on a 404 or error page. | `src/routes/+error.svelte` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) dashboard](https://eu.posthog.com/project/212632/dashboard/782595)
- [Resume views over time](https://eu.posthog.com/project/212632/insights/GMvb1M5Z)
- [Portfolio vs resume views](https://eu.posthog.com/project/212632/insights/KRceW0II)
- [Outbound link clicks over time](https://eu.posthog.com/project/212632/insights/sI9ux7wX)
- [Project link clicks by project](https://eu.posthog.com/project/212632/insights/GyLNXtwE)
- [Section nav clicks by section](https://eu.posthog.com/project/212632/insights/vReQ16Jz)

## Verify before merging

- [ ] Run a full production build (`bun run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` to any CI/CD environment variable configuration (GitHub Actions secrets or deployment platform env vars) so the build has access to them.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify in PostHog error tracking.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

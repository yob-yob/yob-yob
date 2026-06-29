import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B1QQgS5N.js","_app/immutable/chunks/x6hNtP01.js","_app/immutable/chunks/CvnyNdeJ.js","_app/immutable/chunks/Cet9fq4w.js","_app/immutable/chunks/CGkJNhQj.js","_app/immutable/chunks/C46UG7nF.js","_app/immutable/chunks/yV8_-pGO.js","_app/immutable/chunks/DHOhZQ_J.js","_app/immutable/chunks/BZkqRDuP.js","_app/immutable/chunks/C36rzVfT.js","_app/immutable/chunks/Dr-Srf26.js"];
export const stylesheets = ["_app/immutable/assets/0.DdsBCDRB.css"];
export const fonts = [];

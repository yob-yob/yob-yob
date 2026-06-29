import { h as head, a as attr_class, e as escape_html, d as derived, b as attr } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import { p as portfolio } from "../../chunks/portfolio.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    const isResume = derived(() => page.url.pathname.startsWith("/resume"));
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(isResume() ? `${portfolio.personal.name} - Resume` : `${portfolio.personal.name} - Portfolio`)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", isResume() ? portfolio.about.resumeSummary : portfolio.about.summary)}/>`);
    });
    $$renderer2.push(`<div${attr_class(`dark min-h-screen ${isResume() ? "bg-slate-100 text-slate-900" : "bg-slate-900 text-slate-100 relative"}`)}>`);
    children($$renderer2);
    $$renderer2.push(`<!----> `);
    if (!isResume()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<footer class="relative z-10 text-center py-6 text-slate-400 space-y-2"><p>© ${escape_html(currentYear)} ${escape_html(portfolio.personal.name)}. All rights reserved.</p> <p class="text-sm">Made with ❤️ by Sean</p></footer>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _layout as default
};

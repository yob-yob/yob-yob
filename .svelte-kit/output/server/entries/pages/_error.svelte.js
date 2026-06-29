import { e as escape_html, h as head } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import "clsx";
import { B as Button } from "../../chunks/button.js";
import { p as portfolio } from "../../chunks/portfolio.js";
function NotFound($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="relative container mx-auto px-4 py-16 max-w-4xl z-10 text-center"><p class="text-8xl mb-6" aria-hidden="true">🚀</p> <h1 class="text-6xl font-bold mb-2 text-white">404</h1> <h2 class="text-2xl font-semibold mb-4 text-slate-200">Page not found</h2> <p class="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">The page you are looking for does not exist or may have moved. Head back to the portfolio
		or resume.</p> <div class="flex flex-wrap justify-center gap-3">`);
    Button($$renderer2, {
      href: "/",
      variant: "pill",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Back to Portfolio`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      href: "/resume/",
      variant: "outline",
      class: "border-slate-600 text-slate-200 hover:bg-slate-800",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->View Resume`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <p class="mt-12 text-sm text-slate-500">${escape_html(portfolio.personal.name)}</p></div>`);
  });
}
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1j96wlh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(page.status === 404 ? "404 - Page Not Found" : `Error ${page.status}`)} | Grover Sean Reyes</title>`);
      });
      $$renderer3.push(`<meta name="robots" content="noindex"/>`);
    });
    if (page.status === 404) {
      $$renderer2.push("<!--[0-->");
      NotFound($$renderer2);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="relative container mx-auto px-4 py-16 max-w-4xl z-10 text-center"><h1 class="text-4xl font-bold mb-4 text-white">Something went wrong</h1> <p class="text-slate-400 mb-6">Error ${escape_html(page.status)}: ${escape_html(page.error?.message ?? "Unexpected error")}</p> <a href="/" class="text-blue-400 hover:text-blue-300 underline">Return home</a></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _error as default
};

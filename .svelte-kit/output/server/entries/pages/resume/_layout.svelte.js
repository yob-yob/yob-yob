import { h as head } from "../../../chunks/index.js";
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head("1duvdsr", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Grover Sean Reyes - Resume</title>`);
    });
  });
  $$renderer.push(`<div class="legal-paper text-slate-900 svelte-1duvdsr">`);
  children($$renderer);
  $$renderer.push(`<!----></div> <div class="no-print text-center mt-4 text-slate-600 text-sm svelte-1duvdsr"><p>Press Ctrl+P (or Cmd+P on Mac) to print this resume</p></div>`);
}
export {
  _layout as default
};

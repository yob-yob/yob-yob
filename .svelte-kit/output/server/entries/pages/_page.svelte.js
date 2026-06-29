import { a7 as sanitize_props, a8 as rest_props, a9 as fallback, aa as attributes, ab as clsx, ac as ensure_array_like, ad as element, ae as slot, af as bind_props, ag as spread_props, a as attr_class, b as attr, e as escape_html, ah as stringify, d as derived, h as head } from "../../chunks/index.js";
import { p as portfolio, g as getAllTechStackItems } from "../../chunks/portfolio.js";
import { p as profilePhoto } from "../../chunks/profile.js";
import "clsx";
import { c as cn, B as Button } from "../../chunks/button.js";
import { tv } from "tailwind-variants";
import "@layerstack/utils";
import { cls } from "@layerstack/tailwind";
import memoize from "memoize";
import "@layerstack/utils/object";
import "d3-interpolate-path";
import "@dagrejs/dagre";
import "d3-tile";
import "d3-sankey";
/**
 * @license lucide-svelte v0.511.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
function Briefcase($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.511.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      { "d": "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }
    ],
    [
      "rect",
      { "width": "20", "height": "14", "x": "2", "y": "6", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "briefcase" },
    $$sanitized_props,
    {
      /**
       * @component @name Briefcase
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMjBWNGEyIDIgMCAwIDAtMi0yaC00YTIgMiAwIDAgMC0yIDJ2MTYiIC8+CiAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiB4PSIyIiB5PSI2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/briefcase
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Clock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.511.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["polyline", { "points": "12 6 12 12 16 14" }]
  ];
  Icon($$renderer, spread_props([
    { name: "clock" },
    $$sanitized_props,
    {
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cG9seWxpbmUgcG9pbnRzPSIxMiA2IDEyIDEyIDE2IDE0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/clock
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function File_text($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.511.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M10 9H8" }],
    ["path", { "d": "M16 13H8" }],
    ["path", { "d": "M16 17H8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file-text" },
    $$sanitized_props,
    {
      /**
       * @component @name FileText
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIiAvPgogIDxwYXRoIGQ9Ik0xNCAydjRhMiAyIDAgMCAwIDIgMmg0IiAvPgogIDxwYXRoIGQ9Ik0xMCA5SDgiIC8+CiAgPHBhdGggZD0iTTE2IDEzSDgiIC8+CiAgPHBhdGggZD0iTTE2IDE3SDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-text
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Graduation_cap($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.511.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
      }
    ],
    ["path", { "d": "M22 10v6" }],
    ["path", { "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "graduation-cap" },
    $$sanitized_props,
    {
      /**
       * @component @name GraduationCap
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuNDIgMTAuOTIyYTEgMSAwIDAgMC0uMDE5LTEuODM4TDEyLjgzIDUuMThhMiAyIDAgMCAwLTEuNjYgMEwyLjYgOS4wOGExIDEgMCAwIDAgMCAxLjgzMmw4LjU3IDMuOTA4YTIgMiAwIDAgMCAxLjY2IDB6IiAvPgogIDxwYXRoIGQ9Ik0yMiAxMHY2IiAvPgogIDxwYXRoIGQ9Ik02IDEyLjVWMTZhNiAzIDAgMCAwIDEyIDB2LTMuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/graduation-cap
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Link($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.511.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      }
    ],
    [
      "path",
      {
        "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "link" },
    $$sanitized_props,
    {
      /**
       * @component @name Link
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTNhNSA1IDAgMCAwIDcuNTQuNTRsMy0zYTUgNSAwIDAgMC03LjA3LTcuMDdsLTEuNzIgMS43MSIgLz4KICA8cGF0aCBkPSJNMTQgMTFhNSA1IDAgMCAwLTcuNTQtLjU0bC0zIDNhNSA1IDAgMCAwIDcuMDcgNy4wN2wxLjcxLTEuNzEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/link
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Sparkles($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.511.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      }
    ],
    ["path", { "d": "M20 3v4" }],
    ["path", { "d": "M22 5h-4" }],
    ["path", { "d": "M4 17v2" }],
    ["path", { "d": "M5 18H3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sparkles" },
    $$sanitized_props,
    {
      /**
       * @component @name Sparkles
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOS45MzcgMTUuNUEyIDIgMCAwIDAgOC41IDE0LjA2M2wtNi4xMzUtMS41ODJhLjUuNSAwIDAgMSAwLS45NjJMOC41IDkuOTM2QTIgMiAwIDAgMCA5LjkzNyA4LjVsMS41ODItNi4xMzVhLjUuNSAwIDAgMSAuOTYzIDBMMTQuMDYzIDguNUEyIDIgMCAwIDAgMTUuNSA5LjkzN2w2LjEzNSAxLjU4MWEuNS41IDAgMCAxIDAgLjk2NEwxNS41IDE0LjA2M2EyIDIgMCAwIDAtMS40MzcgMS40MzdsLTEuNTgyIDYuMTM1YS41LjUgMCAwIDEtLjk2MyAweiIgLz4KICA8cGF0aCBkPSJNMjAgM3Y0IiAvPgogIDxwYXRoIGQ9Ik0yMiA1aC00IiAvPgogIDxwYXRoIGQ9Ik00IDE3djIiIC8+CiAgPHBhdGggZD0iTTUgMThIMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sparkles
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Star($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.511.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "star" },
    $$sanitized_props,
    {
      /**
       * @component @name Star
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNTI1IDIuMjk1YS41My41MyAwIDAgMSAuOTUgMGwyLjMxIDQuNjc5YTIuMTIzIDIuMTIzIDAgMCAwIDEuNTk1IDEuMTZsNS4xNjYuNzU2YS41My41MyAwIDAgMSAuMjk0LjkwNGwtMy43MzYgMy42MzhhMi4xMjMgMi4xMjMgMCAwIDAtLjYxMSAxLjg3OGwuODgyIDUuMTRhLjUzLjUzIDAgMCAxLS43NzEuNTZsLTQuNjE4LTIuNDI4YTIuMTIyIDIuMTIyIDAgMCAwLTEuOTczIDBMNi4zOTYgMjEuMDFhLjUzLjUzIDAgMCAxLS43Ny0uNTZsLjg4MS01LjEzOWEyLjEyMiAyLjEyMiAwIDAgMC0uNjExLTEuODc5TDIuMTYgOS43OTVhLjUzLjUzIDAgMCAxIC4yOTQtLjkwNmw1LjE2NS0uNzU1YTIuMTIyIDIuMTIyIDAgMCAwIDEuNTk3LTEuMTZ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/star
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Trophy($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.511.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }],
    ["path", { "d": "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }],
    ["path", { "d": "M4 22h16" }],
    [
      "path",
      {
        "d": "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
      }
    ],
    [
      "path",
      {
        "d": "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
      }
    ],
    ["path", { "d": "M18 2H6v7a6 6 0 0 0 12 0V2Z" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trophy" },
    $$sanitized_props,
    {
      /**
       * @component @name Trophy
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiA5SDQuNWEyLjUgMi41IDAgMCAxIDAtNUg2IiAvPgogIDxwYXRoIGQ9Ik0xOCA5aDEuNWEyLjUgMi41IDAgMCAwIDAtNUgxOCIgLz4KICA8cGF0aCBkPSJNNCAyMmgxNiIgLz4KICA8cGF0aCBkPSJNMTAgMTQuNjZWMTdjMCAuNTUtLjQ3Ljk4LS45NyAxLjIxQzcuODUgMTguNzUgNyAyMC4yNCA3IDIyIiAvPgogIDxwYXRoIGQ9Ik0xNCAxNC42NlYxN2MwIC41NS40Ny45OC45NyAxLjIxQzE2LjE1IDE4Ljc1IDE3IDIwLjI0IDE3IDIyIiAvPgogIDxwYXRoIGQ9Ik0xOCAySDZ2N2E2IDYgMCAwIDAgMTIgMFYyWiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/trophy
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Wrench($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.511.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "wrench" },
    $$sanitized_props,
    {
      /**
       * @component @name Wrench
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQuNyA2LjNhMSAxIDAgMCAwIDAgMS40bDEuNiAxLjZhMSAxIDAgMCAwIDEuNCAwbDMuNzctMy43N2E2IDYgMCAwIDEtNy45NCA3Ljk0bC02LjkxIDYuOTFhMi4xMiAyLjEyIDAgMCAxLTMtM2w2LjkxLTYuOTFhNiA2IDAgMCAxIDcuOTQtNy45NGwtMy43NiAzLjc2eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/wrench
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function PhilippinesFlagIcon($$renderer, $$props) {
  let { class: className = "size-5 shrink-0" } = $$props;
  $$renderer.push(`<span${attr_class(clsx(className))}>🇵🇭</span>`);
}
function GitHubIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg>`);
}
function LinkedInIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
}
function HeaderSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<header class="text-center mb-12"><img${attr("src", profilePhoto)}${attr("alt", portfolio.personal.name)} class="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-slate-700 shadow-xl"/> <h1 class="text-4xl font-bold mb-2 text-white">${escape_html(portfolio.personal.name)}</h1> <p class="text-lg text-sky-400 mb-4 max-w-2xl mx-auto">${escape_html(portfolio.personal.title)}</p> <div class="text-slate-400 space-y-1"><p>📧 ${escape_html(portfolio.personal.primaryEmail)}</p> <p class="inline-flex items-center justify-center gap-2">`);
    PhilippinesFlagIcon($$renderer2, { class: "size-5 rounded-sm shadow-sm" });
    $$renderer2.push(`<!----> <span>${escape_html(portfolio.personal.address)}</span></p> <div class="flex items-center justify-center gap-4 mt-4"><a href="/resume" class="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors">`);
    File_text($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> Resume</a> <a${attr("href", portfolio.personal.githubUrl)} target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" aria-label="GitHub profile">`);
    GitHubIcon($$renderer2, { class: "size-5" });
    $$renderer2.push(`<!----></a> <a${attr("href", portfolio.personal.linkedinUrl)} target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn profile">`);
    LinkedInIcon($$renderer2, { class: "size-5" });
    $$renderer2.push(`<!----></a></div></div></header>`);
  });
}
function SectionHeading($$renderer, $$props) {
  let {
    id,
    title,
    icon: IconComponent,
    children,
    class: className = "mb-12"
  } = $$props;
  $$renderer.push(`<section${attr("id", id)}${attr_class(`${stringify(className)} scroll-mt-24`)}><h2 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">`);
  if (IconComponent) {
    $$renderer.push("<!--[0-->");
    if (IconComponent) {
      $$renderer.push("<!--[-->");
      IconComponent($$renderer, { class: "w-10 h-10 shrink-0" });
      $$renderer.push("<!--]-->");
    } else {
      $$renderer.push("<!--[!-->");
      $$renderer.push("<!--]-->");
    }
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> ${escape_html(title)}</h2> `);
  children($$renderer);
  $$renderer.push(`<!----></section>`);
}
function AboutSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    SectionHeading($$renderer2, {
      id: "about",
      title: "About Me",
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="text-slate-300 leading-relaxed">${escape_html(portfolio.about.summary)}</p>`);
      }
    });
  });
}
function SkillsSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    SectionHeading($$renderer2, {
      id: "skills",
      title: "Skills",
      icon: Star,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
        const each_array = ensure_array_like(portfolio.skills.categories);
        for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
          let category = each_array[$$index_1];
          $$renderer3.push(`<ul class="list-disc list-inside text-slate-300"><!--[-->`);
          const each_array_1 = ensure_array_like(category.items);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let item = each_array_1[$$index];
            $$renderer3.push(`<li>${escape_html(item)}</li>`);
          }
          $$renderer3.push(`<!--]--></ul>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
  });
}
const badgeVariants = tv({
  base: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground shadow",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive: "border-transparent bg-destructive text-white shadow",
      outline: "text-foreground",
      tech: "border-transparent bg-blue-900 text-blue-100 rounded",
      tag: "border-transparent bg-slate-700 text-slate-300 rounded text-sm",
      job: "border-transparent bg-green-800 text-green-100 rounded text-sm"
    }
  },
  defaultVariants: { variant: "default" }
});
function Badge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      variant = "default",
      href,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    if (href) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attributes({
        href,
        class: clsx(cn(badgeVariants({ variant }), className)),
        ...restProps
      })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span${attr_class(clsx(cn(badgeVariants({ variant }), className)))}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></span>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<div${attributes({
      class: clsx(cn("rounded-xl border bg-card text-card-foreground shadow", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Card_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<div${attributes({
      class: clsx(cn("flex flex-col space-y-1.5 p-6", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Card_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<div${attributes({ class: clsx(cn("p-6 pt-0", className)), ...restProps })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Card_title($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<h3${attributes({
      class: clsx(cn("font-semibold leading-none tracking-tight", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></h3>`);
  });
}
function TechStackSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    SectionHeading($$renderer2, {
      id: "tech-stack",
      title: "Tech Stack",
      icon: Wrench,
      children: ($$renderer3) => {
        Card($$renderer3, {
          class: "bg-slate-800 border-slate-700 shadow-lg",
          children: ($$renderer4) => {
            Card_content($$renderer4, {
              class: "p-6",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
                const each_array = ensure_array_like(getAllTechStackItems());
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let item = each_array[$$index];
                  Badge($$renderer5, {
                    variant: "tech",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(item)}`);
                    },
                    $$slots: { default: true }
                  });
                }
                $$renderer5.push(`<!--]--></div>`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      }
    });
  });
}
function formatProjectLastUpdated(isoDate) {
  return new Date(isoDate).toLocaleString(void 0, {
    dateStyle: "medium",
    timeStyle: "short"
  });
}
function ProjectsSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let projectUpdates = {};
    SectionHeading($$renderer2, {
      id: "projects",
      title: "Projects",
      icon: Trophy,
      children: ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(portfolio.projects);
        for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
          let project = each_array[$$index_1];
          const update = projectUpdates[project.id];
          Card($$renderer3, {
            class: "mb-6 bg-slate-800 border-slate-700 shadow-lg",
            children: ($$renderer4) => {
              Card_header($$renderer4, {
                class: "flex flex-row items-start justify-between space-y-0 pb-2",
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="space-y-1">`);
                  Card_title($$renderer5, {
                    class: "text-xl text-white",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(project.name)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  if (update) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<p class="inline-flex items-center gap-1.5 text-xs text-slate-400">`);
                    Clock($$renderer5, { class: "size-3.5 shrink-0", "aria-hidden": "true" });
                    $$renderer5.push(`<!----> <span>Last updated ${escape_html(formatProjectLastUpdated(update.lastUpdatedAt))} <span class="text-slate-500">(${escape_html(update.branch)})</span></span></p>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--></div> `);
                  Button($$renderer5, {
                    variant: "pill",
                    href: project.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(project.linkText)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Card_content($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<p class="text-slate-300 mb-4">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2"><!--[-->`);
                  const each_array_1 = ensure_array_like(project.tags);
                  for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                    let tag = each_array_1[$$index];
                    Badge($$renderer5, {
                      variant: "tag",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(tag)}`);
                      },
                      $$slots: { default: true }
                    });
                  }
                  $$renderer5.push(`<!--]--></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
  });
}
function HobbiesSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    SectionHeading($$renderer2, {
      id: "hobbies",
      title: "Hobbies & Interests",
      icon: Sparkles,
      class: "mb-12",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 class="text-xl font-semibold text-white mb-4">Hobbies</h3> <ul class="space-y-2 text-slate-300"><!--[-->`);
        const each_array = ensure_array_like(portfolio.hobbies.hobbies);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let hobby = each_array[$$index];
          $$renderer3.push(`<li class="flex items-center gap-2"><span class="text-xl">${escape_html(hobby.icon)}</span> <span>${escape_html(hobby.name)} `);
          if (hobby.note) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<span class="text-slate-500 text-sm">(${escape_html(hobby.note)})</span>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></span></li>`);
        }
        $$renderer3.push(`<!--]--></ul></div> <div><h3 class="text-xl font-semibold text-white mb-4">Interests</h3> <ul class="space-y-2 text-slate-300"><!--[-->`);
        const each_array_1 = ensure_array_like(portfolio.hobbies.interests);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let interest = each_array_1[$$index_1];
          $$renderer3.push(`<li class="flex items-center gap-2"><span class="text-xl">${escape_html(interest.icon)}</span> <span>${escape_html(interest.name)}</span></li>`);
        }
        $$renderer3.push(`<!--]--></ul></div></div>`);
      }
    });
  });
}
function WorkExperienceSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    SectionHeading($$renderer2, {
      id: "work-experience",
      title: "Work Experience",
      icon: Briefcase,
      children: ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(portfolio.workExperience);
        for (let $$index_3 = 0, $$length = each_array.length; $$index_3 < $$length; $$index_3++) {
          let job = each_array[$$index_3];
          Card($$renderer3, {
            class: `mb-6 shadow-lg border-slate-700 ${job.highlighted ? "bg-emerald-900/25" : "bg-slate-800"}`,
            children: ($$renderer4) => {
              Card_content($$renderer4, {
                class: "p-6",
                children: ($$renderer5) => {
                  $$renderer5.push(`<h3 class="text-xl font-semibold text-white">${escape_html(job.title)}</h3> <p${attr_class(clsx(job.highlighted ? "text-slate-200" : "text-slate-400"))}>${escape_html(job.company)} · ${escape_html(job.employmentType)}</p> <p${attr_class(clsx(job.highlighted ? "text-slate-300" : "text-slate-500"))}>${escape_html(job.dateRange)}</p> <p${attr_class(clsx(job.highlighted ? "text-slate-300" : "text-slate-500"))}>${escape_html(job.location)}</p> `);
                  if (job.note) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<p class="mt-3 text-slate-300 italic text-sm">${escape_html(job.note)}</p>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (job.careerJourney?.length) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<div class="mt-4 text-slate-300"><p class="mb-3 font-medium">Career Journey &amp; Growth:</p> <ul class="list-disc list-inside space-y-1 text-sm"><!--[-->`);
                    const each_array_1 = ensure_array_like(job.careerJourney);
                    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                      let item = each_array_1[$$index];
                      $$renderer5.push(`<li>${escape_html(item)}</li>`);
                    }
                    $$renderer5.push(`<!--]--></ul></div>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (job.keyResponsibilities?.length) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<div class="mt-4 text-slate-300"><p class="mb-3 font-medium">Key Responsibilities:</p> <ul class="list-disc list-inside space-y-1 text-sm"><!--[-->`);
                    const each_array_2 = ensure_array_like(job.keyResponsibilities);
                    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
                      let item = each_array_2[$$index_1];
                      $$renderer5.push(`<li>${escape_html(item)}</li>`);
                    }
                    $$renderer5.push(`<!--]--></ul></div>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (job.skills?.length) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<p class="mt-2 text-slate-300">Skills: ${escape_html(job.skills.join(", "))}</p>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (job.description) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<div class="mt-4 text-slate-300"><p class="mb-3 leading-relaxed">${escape_html(job.description)}</p> `);
                    if (job.impact) {
                      $$renderer5.push("<!--[0-->");
                      $$renderer5.push(`<p class="leading-relaxed">${escape_html(job.impact)}</p>`);
                    } else {
                      $$renderer5.push("<!--[-1-->");
                    }
                    $$renderer5.push(`<!--]--></div>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (job.techStack?.length) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<div class="mt-4"><p class="mb-2 text-slate-300 font-medium">${escape_html(job.id === "copyandpaste" ? "Company Tech Stack:" : "Tech Stack:")}</p> <div class="flex flex-wrap gap-2"><!--[-->`);
                    const each_array_3 = ensure_array_like(job.techStack);
                    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
                      let tech = each_array_3[$$index_2];
                      Badge($$renderer5, {
                        variant: "job",
                        children: ($$renderer6) => {
                          $$renderer6.push(`<!---->${escape_html(tech)}`);
                        },
                        $$slots: { default: true }
                      });
                    }
                    $$renderer5.push(`<!--]--></div></div>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
  });
}
function EducationSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    SectionHeading($$renderer2, {
      id: "education",
      title: "Education",
      icon: Graduation_cap,
      children: ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(portfolio.education);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let school = each_array[$$index];
          Card($$renderer3, {
            class: "mb-6 bg-slate-800 border-slate-700 shadow-lg",
            children: ($$renderer4) => {
              Card_content($$renderer4, {
                class: "p-6",
                children: ($$renderer5) => {
                  $$renderer5.push(`<h3 class="text-xl font-semibold text-white">${escape_html(school.degree)}</h3> <p class="text-slate-200">${escape_html(school.institution)}</p> <p class="text-slate-300">${escape_html(school.yearRange)}</p> <p class="text-slate-400 text-sm mt-2">${escape_html(school.address)}</p> `);
                  if (school.description) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<div class="mt-4 text-slate-300"><p class="mb-3 leading-relaxed">${escape_html(school.description)}</p> `);
                    if (school.impact) {
                      $$renderer5.push("<!--[0-->");
                      $$renderer5.push(`<p class="leading-relaxed">${escape_html(school.impact)}</p>`);
                    } else {
                      $$renderer5.push("<!--[-1-->");
                    }
                    $$renderer5.push(`<!--]--></div>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
  });
}
function InvestmentsSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const borderColors = {
      blue: "border-blue-500",
      green: "border-green-500",
      purple: "border-purple-500",
      yellow: "border-yellow-500",
      indigo: "border-indigo-500"
    };
    SectionHeading($$renderer2, {
      id: "investments",
      title: "Investment in Myself",
      class: "mb-12",
      children: ($$renderer3) => {
        Card($$renderer3, {
          class: "bg-slate-800 border-slate-700 shadow-lg",
          children: ($$renderer4) => {
            Card_content($$renderer4, {
              class: "p-6",
              children: ($$renderer5) => {
                $$renderer5.push(`<p class="text-slate-300 mb-6 leading-relaxed">${escape_html(portfolio.investments.description)}</p> <div class="space-y-4"><!--[-->`);
                const each_array = ensure_array_like(portfolio.investments.items);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let item = each_array[$$index];
                  $$renderer5.push(`<div${attr_class(`border-l-4 ${stringify(borderColors[item.borderColor])} pl-4`)}><h3 class="text-lg font-semibold text-white mb-1">${escape_html(item.name)}</h3> <p class="text-slate-300 text-sm">${escape_html(item.description)} `);
                  if (item.url) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`  <a${attr("href", item.url)} target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline">Learn more</a>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--></p></div>`);
                }
                $$renderer5.push(`<!--]--></div>`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      }
    });
  });
}
function BrandedProfileLink($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { href, label, icon: Icon2, class: className, iconClass } = $$props;
    $$renderer2.push(`<a${attr("href", href)} target="_blank" rel="noopener noreferrer"${attr_class(clsx(cn("inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900", className)))}>`);
    if (Icon2) {
      $$renderer2.push("<!--[-->");
      Icon2($$renderer2, { class: iconClass ?? "size-4 shrink-0" });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(` <span>${escape_html(label)}</span></a>`);
  });
}
function GitHubLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: GitHubIcon,
    class: "bg-[#24292f] text-white hover:bg-[#32383f] border border-[#30363d]"
  });
}
function LinkedInLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: LinkedInIcon,
    class: "bg-[#0a66c2] text-white hover:bg-[#004182]"
  });
}
function GoogleIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg>`);
}
function GoogleLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: GoogleIcon,
    class: "bg-white text-slate-800 hover:bg-slate-100 border border-slate-300"
  });
}
function FacebookIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>`);
}
function FacebookLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: FacebookIcon,
    class: "bg-[#1877f2] text-white hover:bg-[#166fe5]"
  });
}
function XIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>`);
}
function XLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: XIcon,
    class: "bg-black text-white hover:bg-slate-900 border border-slate-700"
  });
}
function AwsIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.763 10.036h8.884L18.89 4H5.113l1.65 6.036zm-.654 1.097H14.8l-1.674 6.051H3.435l2.674-6.05zM14.013 4 12 10.066 9.987 4H2.25l3.263 11.903L2.25 20h7.737L12 13.934 13.513 20h7.737l-3.263-4.097L21.75 4h-7.737z"></path></svg>`);
}
function AwsLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: AwsIcon,
    class: "bg-[#232f3e] text-[#ff9900] hover:bg-[#1a242f] border border-[#ff9900]/30"
  });
}
function StackOverflowIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z"></path><path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0 9.108.852l4.26 5.727 1.146-.852zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468z"></path></svg>`);
}
function StackOverflowLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: StackOverflowIcon,
    class: "bg-[#f48024] text-white hover:bg-[#e4721a]"
  });
}
function GitLabIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="112 115 155 149" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#e24329" d="M265.26416,174.37243l-.2134-.55822-21.19899-55.30908c-.4236-1.08359-1.18542-1.99642-2.17699-2.62689-.98837-.63373-2.14749-.93253-3.32305-.87014-1.1689.06239-2.29195.48925-3.20809,1.21821-.90957.73554-1.56629,1.73047-1.87493,2.85346l-14.31327,43.80662h-57.90965l-14.31327-43.80662c-.30864-1.12299-.96536-2.11791-1.87493-2.85346-.91614-.72895-2.03911-1.15582-3.20809-1.21821-1.17548-.06239-2.33468.23641-3.32297.87014-.99166.63047-1.75348,1.5433-2.17707,2.62689l-21.19891,55.31237-.21348.55493c-6.28158,16.38521-.92929,34.90803,13.05891,45.48782.02621.01641.04922.03611.07552.05582l.18719.14119,32.29094,24.17392,15.97151,12.09024,9.71951,7.34871c2.34117,1.77316,5.57877,1.77316,7.92002,0l9.71943-7.34871,15.96822-12.09024,32.48142-24.31511c.02958-.02299.05588-.04269.08538-.06568,13.97834-10.57977,19.32735-29.09604,13.04905-45.47796Z"></path><path fill="#fc6d26" d="M265.26416,174.37243l-.2134-.55822c-10.5174,2.16062-20.20405,6.6099-28.49844,12.81593-.1346.0985-25.20497,19.05805-46.55171,35.19699,15.84998,11.98517,29.6477,22.40405,29.6477,22.40405l32.48142-24.31511c.02958-.02299.05588-.04269.08538-.06568,13.97834-10.57977,19.32735-29.09604,13.04905-45.47796Z"></path><path fill="#fca326" d="M160.34962,244.23117l15.97151,12.09024,9.71951,7.34871c2.34117,1.77316,5.57877,1.77316,7.92002,0l9.71943-7.34871,15.96822-12.09024s-13.79772-10.41888-29.6477-22.40405c-15.85327,11.98517-29.65099,22.40405-29.65099,22.40405Z"></path><path fill="#fc6d26" d="M143.44561,186.63014c-8.29111-6.20274-17.97446-10.65531-28.49507-12.81264l-.21348.55493c-6.28158,16.38521-.92929,34.90803,13.05891,45.48782.02621.01641.04922.03611.07552.05582l.18719.14119,32.29094,24.17392s13.79772-10.41888,29.65099-22.40405c-21.34673-16.13894-46.42031-35.09848-46.55499-35.19699Z"></path></svg>`);
}
function GitLabLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: GitLabIcon,
    class: "bg-white text-slate-800 hover:bg-slate-100 border border-slate-300"
  });
}
function YoutubeIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 397 278" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#ee1d3a" d="M158.728,198.635L261.556,138.967L158.728,79.589L158.728,198.635ZM43.448,269.6C26.358,264.965 13.034,251.352 8.109,234.552C0,203.559 0,138.967 0,138.967C0,138.967 0,74.375 8.109,43.673C13.034,26.583 26.358,13.259 43.448,8.624C74.15,0.224 198.121,0.224 198.121,0.224C198.121,0.224 322.382,0.224 353.085,8.624C370.464,13.259 383.498,26.583 388.134,43.673C396.532,74.375 396.532,138.967 396.532,138.967C396.532,138.967 396.532,203.559 388.134,234.552C383.498,251.352 370.464,264.965 353.085,269.6C322.382,278 198.121,278 198.121,278C198.121,278 74.15,278 43.448,269.6Z"></path><path fill="white" d="M158.728,198.635L261.556,138.967L158.728,79.589L158.728,198.635Z"></path></svg>`);
}
function YoutubeLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: YoutubeIcon,
    class: "bg-[#ffffff] text-black hover:bg-[#ffe3e7]"
  });
}
function HackerRankIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.615 18.5h-1.77V5.5h1.77v13zm4.615 0h-1.77v-7.5h1.77v7.5zm-9.23 0H4.385V9.5h1.77v9z"></path></svg>`);
}
function HackerRankLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: HackerRankIcon,
    class: "bg-[#101517] text-[#00ea64] hover:bg-[#1a2128] border border-[#00ea64]/30"
  });
}
function GenericIcon($$renderer, $$props) {
  let { class: className = "size-4 shrink-0" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`);
}
function GenericLink($$renderer, $$props) {
  let { href, label } = $$props;
  BrandedProfileLink($$renderer, {
    href,
    label,
    icon: GenericIcon,
    class: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-600"
  });
}
const websiteLinkComponents = {
  github: GitHubLink,
  linkedin: LinkedInLink,
  google: GoogleLink,
  facebook: FacebookLink,
  x: XLink,
  aws: AwsLink,
  stackoverflow: StackOverflowLink,
  gitlab: GitLabLink,
  youtube: YoutubeLink,
  hackerrank: HackerRankLink,
  generic: GenericLink
};
function getWebsiteLinkComponent(website) {
  return websiteLinkComponents[website] ?? GenericLink;
}
function ProfileLinkButton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { link } = $$props;
    const LinkComponent = derived(() => getWebsiteLinkComponent(link.website));
    if (LinkComponent()) {
      $$renderer2.push("<!--[-->");
      LinkComponent()($$renderer2, { href: link.url, label: link.label });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
  });
}
function LinksSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    SectionHeading($$renderer2, {
      id: "links",
      title: "Links",
      icon: Link,
      class: "mb-12",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="space-y-8"><div><h3 class="text-xl font-semibold text-white mb-4">Social Links</h3> <div class="flex flex-wrap gap-3"><!--[-->`);
        const each_array = ensure_array_like(portfolio.links.social);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let link = each_array[$$index];
          ProfileLinkButton($$renderer3, { link });
        }
        $$renderer3.push(`<!--]--></div></div> `);
        if (portfolio.links.certificates.length > 0) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div><h3 class="text-xl font-semibold text-white mb-4">Certificates</h3> <div class="flex flex-wrap gap-3"><!--[-->`);
          const each_array_1 = ensure_array_like(portfolio.links.certificates);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let link = each_array_1[$$index_1];
            ProfileLinkButton($$renderer3, { link });
          }
          $$renderer3.push(`<!--]--></div></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
  });
}
const defaultWindow = void 0;
function getActiveElement(document2) {
  let activeElement = document2.activeElement;
  while (activeElement?.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
function createSubscriber(_) {
  return () => {
  };
}
class ActiveElement {
  #document;
  #subscribe;
  constructor(options = {}) {
    const { window: window2 = defaultWindow, document: document2 = window2?.document } = options;
    if (window2 === void 0) return;
    this.#document = document2;
    this.#subscribe = createSubscriber();
  }
  get current() {
    this.#subscribe?.();
    if (!this.#document) return null;
    return getActiveElement(this.#document);
  }
}
new ActiveElement();
class Settings {
  layer;
  debug;
  constructor(options = {}) {
    this.layer = options.layer ?? "svg";
    this.debug = options.debug ?? false;
  }
}
new Settings();
function isTransparentFill(fill) {
  if (!fill || fill === "none" || fill === "transparent")
    return true;
  return /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0\s*\)/.test(fill);
}
const CANVAS_STYLES_ELEMENT_ID = "__layerchart_canvas_styles_id";
function parseStyleString(styleString) {
  if (!styleString)
    return {};
  const styles = {};
  const declarations = styleString.split(";").filter((s) => s.trim());
  for (const declaration of declarations) {
    const colonIndex = declaration.indexOf(":");
    if (colonIndex === -1)
      continue;
    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();
    if (!property || !value)
      continue;
    const camelProperty = property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    styles[camelProperty] = value;
  }
  return styles;
}
const supportedStyles = [
  "fill",
  "fillOpacity",
  "stroke",
  "strokeOpacity",
  "strokeWidth",
  "strokeDasharray",
  "opacity",
  "fontWeight",
  "fontSize",
  "fontFamily",
  "textAnchor",
  "textAlign",
  "paintOrder"
];
function _getComputedStyles(canvas, { styles, classes } = {}) {
  try {
    let svg = document.getElementById(CANVAS_STYLES_ELEMENT_ID);
    if (!svg) {
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("id", CANVAS_STYLES_ELEMENT_ID);
      svg.style.display = "none";
      canvas.after(svg);
    }
    svg = svg;
    svg.removeAttribute("style");
    svg.removeAttribute("class");
    if (styles) {
      Object.assign(svg.style, styles);
    }
    svg.style.display = "none";
    if (classes) {
      svg.setAttribute("class", cls(classes).split(" ").filter((s) => !s.startsWith("transition-")).join(" "));
    }
    const computedStyles = supportedStyles.reduce((acc, style) => {
      acc[style] = window.getComputedStyle(svg)[style];
      return acc;
    }, {});
    return computedStyles;
  } catch (e) {
    console.error("Unable to get computed styles", e);
    return {};
  }
}
function getComputedStylesKey(canvas, { styles, classes } = {}) {
  return JSON.stringify({ canvasId: canvas.id, styles, classes });
}
const getComputedStyles = memoize(_getComputedStyles, {
  cacheKey: ([canvas, styleOptions]) => {
    return getComputedStylesKey(canvas, styleOptions);
  }
});
function render(ctx, render2, styleOptions = {}, { applyText } = {}) {
  const parsedInlineStyles = parseStyleString(styleOptions.style);
  const mergedStyles = { ...styleOptions.styles, ...parsedInlineStyles };
  let resolvedStyles;
  if (styleOptions.classes == null && !Object.values(mergedStyles).some((v) => typeof v === "string" && v.includes("var("))) {
    resolvedStyles = mergedStyles;
  } else {
    const { constantStyles, variableStyles } = Object.entries(mergedStyles).reduce((acc, [key, value]) => {
      if (typeof value === "number" || typeof value === "string" && !value.includes("var(")) {
        acc.constantStyles[key] = value;
      } else if (typeof value === "string" && value.includes("var(")) {
        acc.variableStyles[key] = value;
      }
      return acc;
    }, { constantStyles: {}, variableStyles: {} });
    const computedStyles = getComputedStyles(ctx.canvas, {
      styles: variableStyles,
      classes: styleOptions.classes
    });
    resolvedStyles = { ...computedStyles, ...constantStyles };
  }
  const paintOrder = resolvedStyles?.paintOrder === "stroke" ? ["stroke", "fill"] : ["fill", "stroke"];
  if (resolvedStyles?.opacity) {
    ctx.globalAlpha = Number(resolvedStyles?.opacity);
  }
  if (applyText) {
    ctx.font = `${resolvedStyles.fontWeight} ${resolvedStyles.fontSize} ${resolvedStyles.fontFamily}`;
    if (resolvedStyles.textAnchor === "middle") {
      ctx.textAlign = "center";
    } else if (resolvedStyles.textAnchor === "end") {
      ctx.textAlign = "right";
    } else if (resolvedStyles.textAnchor === "start") {
      ctx.textAlign = "left";
    } else if (resolvedStyles.textAlign) {
      ctx.textAlign = resolvedStyles.textAlign;
    }
  }
  if (resolvedStyles.strokeDasharray && resolvedStyles.strokeDasharray !== "none") {
    const dashArray = resolvedStyles.strokeDasharray.split(/[\s,]+/).filter((s) => s.length > 0).map((s) => Number(s.replace("px", "")));
    if (dashArray.length > 0 && dashArray.every((n) => !isNaN(n))) {
      ctx.setLineDash(dashArray);
    }
  }
  for (const attr2 of paintOrder) {
    if (attr2 === "fill") {
      const fill = styleOptions.styles?.fill && (styleOptions.styles?.fill instanceof CanvasGradient || styleOptions.styles?.fill instanceof CanvasPattern || !styleOptions.styles?.fill?.includes("var")) ? styleOptions.styles.fill : resolvedStyles?.fill;
      if (fill && !isTransparentFill(fill)) {
        const currentGlobalAlpha = ctx.globalAlpha;
        const fillOpacity = Number(resolvedStyles?.fillOpacity);
        const opacity = Number(resolvedStyles?.opacity);
        ctx.globalAlpha = fillOpacity * opacity;
        ctx.fillStyle = fill;
        render2.fill(ctx);
        ctx.globalAlpha = currentGlobalAlpha;
      }
    } else if (attr2 === "stroke") {
      const stroke = styleOptions.styles?.stroke && (styleOptions.styles?.stroke instanceof CanvasGradient || !styleOptions.styles?.stroke?.includes("var")) ? styleOptions.styles?.stroke : resolvedStyles?.stroke;
      if (stroke && !["none"].includes(stroke)) {
        const currentGlobalAlpha = ctx.globalAlpha;
        const strokeOpacity = Number(resolvedStyles?.strokeOpacity);
        const opacity = Number(resolvedStyles?.opacity);
        if (!isNaN(strokeOpacity) && strokeOpacity !== 1) {
          ctx.globalAlpha = strokeOpacity * (isNaN(opacity) ? 1 : opacity);
        }
        ctx.lineWidth = typeof resolvedStyles?.strokeWidth === "string" ? Number(resolvedStyles?.strokeWidth?.replace("px", "")) : resolvedStyles?.strokeWidth ?? 1;
        ctx.strokeStyle = stroke;
        render2.stroke(ctx);
        ctx.globalAlpha = currentGlobalAlpha;
      }
    }
  }
}
function renderPathData(ctx, pathData, styleOptions = {}) {
  const path = new Path2D(pathData ?? "");
  render(ctx, {
    fill: (ctx2) => ctx2.fill(path),
    stroke: (ctx2) => ctx2.stroke(path)
  }, styleOptions);
}
function renderCircle(ctx, coords, styleOptions = {}) {
  ctx.beginPath();
  ctx.arc(coords.cx, coords.cy, coords.r, 0, 2 * Math.PI);
  render(ctx, {
    fill: (ctx2) => {
      ctx2.fill();
    },
    stroke: (ctx2) => {
      ctx2.stroke();
    }
  }, styleOptions);
  ctx.closePath();
}
function _createLinearGradient(ctx, x0, y0, x1, y1, stops) {
  const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  for (const { offset, color } of stops) {
    gradient.addColorStop(offset, color);
  }
  return gradient;
}
memoize(_createLinearGradient, {
  cacheKey: (args) => JSON.stringify(args.slice(1))
  // Ignore `ctx` argument
});
function _createPattern(ctx, width, height, shapes, background) {
  const patternCanvas = document.createElement("canvas");
  const patternCtx = patternCanvas.getContext("2d");
  ctx.canvas.after(patternCanvas);
  patternCanvas.width = width;
  patternCanvas.height = height;
  if (background) {
    patternCtx.fillStyle = background;
    patternCtx.fillRect(0, 0, width, height);
  }
  for (const shape of shapes) {
    patternCtx.save();
    if (shape.type === "circle") {
      renderCircle(patternCtx, { cx: shape.cx, cy: shape.cy, r: shape.r }, { styles: { fill: shape.fill, opacity: shape.opacity } });
    } else if (shape.type === "line") {
      renderPathData(patternCtx, shape.path, {
        styles: { stroke: shape.stroke, strokeWidth: shape.strokeWidth, opacity: shape.opacity }
      });
    }
    patternCtx.restore();
  }
  const pattern = ctx.createPattern(patternCanvas, "repeat");
  ctx.canvas.parentElement?.removeChild(patternCanvas);
  return pattern;
}
memoize(_createPattern, {
  cacheKey: (args) => JSON.stringify(args.slice(1))
  // Ignore `ctx` argument
});
const MEASUREMENT_ELEMENT_ID = "__text_measurement_id";
function _getStringWidth(str, style) {
  try {
    let textEl = document.getElementById(MEASUREMENT_ELEMENT_ID);
    if (!textEl) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.style.width = "0";
      svg.style.height = "0";
      svg.style.position = "absolute";
      svg.style.top = "-100%";
      svg.style.left = "-100%";
      textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textEl.setAttribute("id", MEASUREMENT_ELEMENT_ID);
      svg.appendChild(textEl);
      document.body.appendChild(svg);
    }
    Object.assign(textEl.style, style);
    textEl.textContent = str;
    return textEl.getComputedTextLength();
  } catch (e) {
    return null;
  }
}
memoize(_getStringWidth, {
  cacheKey: ([str, style]) => `${str}_${JSON.stringify(style)}`
});
function GithubCards($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const updatedLabel = derived(() => null);
    $$renderer2.push(`<section id="github-cards" class="scroll-mt-24"><div class="mb-6 flex flex-wrap items-end justify-between gap-2"><h2 class="text-2xl font-bold text-white">Github Cards</h2> `);
    if (updatedLabel()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="text-sm text-muted-foreground">Updated ${escape_html(updatedLabel())}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex flex-col gap-5">`);
      Card($$renderer2, {
        children: ($$renderer3) => {
          Card_header($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="h-6 w-40 animate-pulse rounded bg-secondary/60"></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Card_content($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="h-48 animate-pulse rounded bg-secondary/40"></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Card($$renderer2, {
        children: ($$renderer3) => {
          Card_header($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="h-6 w-40 animate-pulse rounded bg-secondary/60"></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Card_content($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="h-32 animate-pulse rounded bg-secondary/40"></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> <div class="grid grid-cols-1 gap-5 md:grid-cols-2"><!--[-->`);
      const each_array = ensure_array_like(Array.from({ length: 2 }));
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        each_array[index];
        Card($$renderer2, {
          children: ($$renderer3) => {
            Card_header($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="h-6 w-40 animate-pulse rounded bg-secondary/60"></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> `);
            Card_content($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="h-48 animate-pulse rounded bg-secondary/40"></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></section>`);
  });
}
function ParticlesBackground($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div id="particles-js"${attr_class(`print:hidden absolute top-0 left-0 bottom-0 right-0 z-0 ${"opacity-0"}`)} aria-hidden="true"></div>`);
  });
}
const portfolioSections = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "hobbies", label: "Hobbies & Interests" },
  { id: "work-experience", label: "Work Experience" },
  { id: "education", label: "Education" },
  { id: "investments", label: "Investment in Myself" },
  { id: "links", label: "Links" },
  { id: "github-cards", label: "Github Cards" }
];
function PortfolioSideNav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let activeId = portfolioSections[0].id;
    $$renderer2.push(`<nav class="fixed left-4 top-1/2 z-20 hidden -translate-y-1/2 xl:block" aria-label="Portfolio sections"><ul class="max-h-[calc(100vh-4rem)] overflow-y-auto rounded-lg border border-slate-700/80 bg-slate-900/85 py-2 pl-2 pr-3 shadow-xl backdrop-blur-sm"><!--[-->`);
    const each_array = ensure_array_like(portfolioSections);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let section = each_array[$$index];
      $$renderer2.push(`<li><button type="button"${attr_class(`group relative flex w-full items-center gap-2 rounded-md py-1.5 pl-3 pr-2 text-left text-xs transition-colors ${activeId === section.id ? "text-sky-400" : "text-slate-400 hover:text-slate-200"}`)}${attr("aria-current", activeId === section.id ? "location" : void 0)}><span${attr_class(`absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full transition-colors ${activeId === section.id ? "bg-sky-400" : "bg-transparent group-hover:bg-slate-600"}`)} aria-hidden="true"></span> ${escape_html(section.label)}</button></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta property="og:title"${attr("content", `${stringify(portfolio.personal.name)} - Portfolio`)}/> <meta property="og:description"${attr("content", portfolio.about.summary)}/> <meta property="og:type" content="website"/> <meta property="og:url"${attr("content", portfolio.personal.portfolioUrl)}/> <meta property="og:image"${attr("content", profilePhoto)}/>`);
    });
    ParticlesBackground($$renderer2);
    $$renderer2.push(`<!----> `);
    PortfolioSideNav($$renderer2);
    $$renderer2.push(`<!----> <div class="relative container mx-auto px-4 py-8 max-w-4xl z-10">`);
    HeaderSection($$renderer2);
    $$renderer2.push(`<!----> `);
    AboutSection($$renderer2);
    $$renderer2.push(`<!----> `);
    SkillsSection($$renderer2);
    $$renderer2.push(`<!----> `);
    TechStackSection($$renderer2);
    $$renderer2.push(`<!----> `);
    ProjectsSection($$renderer2);
    $$renderer2.push(`<!----> `);
    HobbiesSection($$renderer2);
    $$renderer2.push(`<!----> `);
    WorkExperienceSection($$renderer2);
    $$renderer2.push(`<!----> `);
    EducationSection($$renderer2);
    $$renderer2.push(`<!----> `);
    InvestmentsSection($$renderer2);
    $$renderer2.push(`<!----> `);
    LinksSection($$renderer2);
    $$renderer2.push(`<!----> `);
    GithubCards($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};

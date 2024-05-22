import postcss from "rollup-plugin-postcss"
import { pluginsDefault } from "../default/index.js"

// We can't refer to another file as CI has trouble properly resolving
// From https://github.com/egoist/style-inject
const styleInjectFn = `
function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;
  if (typeof document === 'undefined') { return; }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
`

export const pluginsSharedUi = [
  ...pluginsDefault,
  postcss({
    modules: true,
    extract: false,
    inject: cssVariableName =>
      `${styleInjectFn}\nstyleInject(${cssVariableName});`,
    extensions: [".scss", ".css"],
  }),
]

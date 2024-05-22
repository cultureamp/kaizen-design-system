import { RollupOptions } from "rollup"
import postcss from "rollup-plugin-postcss"

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

export const rollupTailwindConfig = (): RollupOptions[] => {
  const sharedConfig = {
    input: "./src/tailwind.css",
    plugins: [
      postcss({
        modules: false,
        extract: false,
        inject: cssVariableName =>
          `${styleInjectFn}\nstyleInject(${cssVariableName});`,
        extensions: [".css"],
      }),
    ],
  } satisfies RollupOptions

  // CommonJS
  const cjsConfig = {
    ...sharedConfig,
    output: {
      dir: "dist/cjs",
      format: "commonjs",
      entryFileNames: "tailwind.css.cjs",
    },
  } satisfies RollupOptions

  // ESModules
  const esmConfig = {
    ...sharedConfig,
    output: {
      dir: "dist/esm",
      format: "esm",
      entryFileNames: "tailwind.css.mjs",
    },
  } satisfies RollupOptions

  return [cjsConfig, esmConfig]
}

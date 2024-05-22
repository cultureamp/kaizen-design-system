import commonjs from "@rollup/plugin-commonjs"
import { RollupOptions } from "rollup"
import postcss from "rollup-plugin-postcss"

const styleInjectCjs = `
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

const styleInjectMjs = `
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
    // external: ["style-inject"],
  }

  // CommonJS
  const cjsConfig = {
    ...sharedConfig,
    plugins: [
      postcss({
        modules: false,
        extract: false,
        inject: cssVariableName =>
          `${styleInjectCjs}\n\nstyleInject(${cssVariableName});`,
        extensions: [".css"],
      }),
      commonjs()
    ],
    output: {
      dir: "dist/cjs",
      format: "commonjs",
      entryFileNames: "tailwind.css.cjs",
      exports: "named",
    },
  } satisfies RollupOptions

  // ESModules
  const esmConfig = {
    ...sharedConfig,
    plugins: [
      postcss({
        modules: false,
        extract: false,
        inject: cssVariableName =>
          `${styleInjectMjs}\n\nstyleInject(${cssVariableName});`,
        extensions: [".css"],
      }),
    ],
    output: {
      dir: "dist/esm",
      format: "esm",
      entryFileNames: "tailwind.css.mjs",
    },
  } satisfies RollupOptions

  return [cjsConfig, esmConfig]
}

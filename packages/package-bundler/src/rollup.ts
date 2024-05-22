import fs from "fs"
import path from "path"
import alias, { RollupAliasOptions } from "@rollup/plugin-alias"
import typescript from "@rollup/plugin-typescript"
import { InputPluginOption, RollupOptions } from "rollup"
import postcss from "rollup-plugin-postcss"
import { pluginsDefault } from "./presets/index.js"
import { rollupTailwindConfig } from "./presets/shared-ui/rollup-tailwind.js"


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

type Config = {
  input?: RollupOptions["input"]
  plugins?: InputPluginOption[]
  alias?: RollupAliasOptions
}

export const rollupConfig = (
  config: Config = {
    input: { index: "./src/index.ts" },
    plugins: pluginsDefault as InputPluginOption[],
  }
): RollupOptions[] => {
  // Shared config
  const userConfig = {
    input: config.input,
    plugins: [
      alias(config.alias),
      ...((config?.plugins as InputPluginOption[]) || pluginsDefault),
    ],
  }

  // CommonJS
  const cjsConfig = {
    ...userConfig,
    plugins: [
      ...userConfig.plugins,
      postcss({
        modules: true,
        extract: false,
        inject: cssVariableName =>
          `${styleInjectCjs}\n\nstyleInject(${cssVariableName});`,
        extensions: [".scss", ".css"],
      }),
      typescript({
        tsconfig: "./tsconfig.dist.json",
        compilerOptions: {
          esModuleInterop: false,
          allowSyntheticDefaultImports: true,
        },
      }),
    ],
    output: {
      dir: "dist/cjs",
      format: "commonjs",
      preserveModules: true,
      entryFileNames: "[name].cjs",
      interop: "auto",
    },
  } satisfies RollupOptions

  // ESModules
  const esmConfig = {
    ...userConfig,
    plugins: [
      ...userConfig.plugins,
      postcss({
        modules: true,
        extract: false,
        inject: cssVariableName =>
          `${styleInjectMjs}\n\nstyleInject(${cssVariableName});`,
        extensions: [".scss", ".css"],
      }),
      typescript({ tsconfig: "./tsconfig.dist.json" }),
    ],
    output: {
      dir: "dist/esm",
      format: "esm",
      preserveModules: true,
      entryFileNames: "[name].mjs",
    },
  } satisfies RollupOptions

  const hasTailwind = fs.existsSync(
    path.resolve(process.cwd(), "./tailwind.config.js")
  )

  return hasTailwind
    ? [cjsConfig, esmConfig, ...rollupTailwindConfig()]
    : [cjsConfig, esmConfig]
}

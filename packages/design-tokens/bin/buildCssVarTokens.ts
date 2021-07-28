import fs from "fs"
import path from "path"
import omit from "lodash.omit"
import { format } from "prettier"
import * as yargs from "yargs"
import { defaultTheme, heartTheme, Theme, zenTheme } from "../"
import {
  augmentCssVariable,
  cssVariableThemeNamespace,
  makeCSSVariablesOfTheme,
  makeCSSVariableTheme,
  mapLeafsOfObject,
  objectPathToCssVarIdentifier,
  objectPathToCssVarReference,
} from "../src/utils"

const omitHeartColorNames = (obj: Record<any, any>) =>
  omit(obj, "purple", "blue", "orange", "yellow", "red", "green", "gray")

const { jsonOutput, cssOutput } = yargs
  .option("jsonOutput", {
    description:
      "The directory which JSON builds should be written to. Defaults to `./tokens` in your current working directory",
    default: `${process.cwd()}/tokens`,
    type: "string",
  })
  .option("cssOutput", {
    description:
      "The directory which CSS builds should be written to. Defaults to `./css` in your current working directory",
    default: `${process.cwd()}/css`,
    type: "string",
  })
  .env().argv

const formatJson = (jsonString: string) =>
  format(jsonString, { parser: "json" })

const themeToCssVariableStylesheetString = (theme: Record<string, unknown>) =>
  format(
    `:root {
${Object.entries(makeCSSVariablesOfTheme(theme))
  .map(([key, value]) => `${key}: ${value};`)
  .join("  \n")}
}`,
    { parser: "css" }
  )

/**
 * REMOVE THIS IN THE NEXT BREAKING CHANGE
 * @deprecated
 *
 * Given a Theme (which is the source of truth and doesn't contain any computed properties), add extra necessary properties to the tree such as `-rgb` suffixed keys, with R, G, B triple values.
 * It is only relevant for generating SASS files of our theme.
 * See {@link augmentCssVariable} to understand what happens to each leaf variable in the theme.
 */
export const augmentThemeForSassVariables = (theme: Theme): Theme => {
  const augmentedTheme: Record<string, unknown> = {}
  mapLeafsOfObject(theme, (leafPath, value) => {
    const leafKey = leafPath[leafPath.length - 1]
    const pathWithoutLast = leafPath.slice(0, leafPath.length - 1)
    const leafObject = pathWithoutLast.reduce(
      (child, segment) =>
        (child[segment] || (child[segment] = {})) as Record<string, unknown>,
      augmentedTheme as Record<string, unknown>
    )
    const cssVariablesOfToken = augmentCssVariable(
      leafPath,
      leafKey,
      value,
      objectPathToCssVarReference
    )
    Object.assign(leafObject, cssVariablesOfToken)
  })
  return augmentedTheme as Theme
}

const run = () => {
  fs.mkdirSync(jsonOutput, { recursive: true })
  fs.mkdirSync(cssOutput, { recursive: true })

  /**
   *
   * It will look something like:
   * ```
   * {
   *    color: {
   *       wisteria: {
   *         100: "var(--kz-var-color-wisteria-100, #012345)",
   *         100-id: "--kz-var-color-wisteria-100",
   *         100-rgb: "var(--kz-var-color-wisteria-100-rgb, 000, 111, 222)",
   *         100-rgb-id: "--kz-var-color-wisteria-100-rgb",
   *       }
   *    },
   *
   *    "kz-var": {
   *      color: {
   *          wisteria: {
   *            100: "var(--kz-var-color-wisteria-100, #012345)",
   *            100-rgb-params: "var(--kz-var-color-wisteria-100-rgb-params, 000, 111, 222)",
   *          }
   *        }
   *     }
   *     ...
   *     ...
   * }
   * ```
   */
  const augmentedThemeWithCSSVariableValuesVersion = makeCSSVariableTheme(
    defaultTheme
  )

  /*
    WILL BE REMOVED IN THE FUTURE IN FAVOR OF THE ABOVE'S ^^ ABILITY TO ADD IDENTIFIERS
    This is used for compiling a json file contianing the identifiers of variables rather than CSS var() functions as values.
    e.g.
    {
      themeKey: "--theme-key"
    }

    This is useful for situations when you want to access CSS variables from javascript.
    E.g.
    ```ts
      document.documentElement.style.getPropertyValue(identifiers.themeKey)
    ```
   */
  const customPropertiesThemeIdentifiers = makeCSSVariableTheme(
    defaultTheme,
    objectPathToCssVarIdentifier
  )

  /* Write JSON tokens */

  fs.writeFileSync(
    path.resolve(jsonOutput, "color.json"),
    formatJson(
      JSON.stringify({
        dataViz: augmentedThemeWithCSSVariableValuesVersion.dataViz,
        color: augmentedThemeWithCSSVariableValuesVersion.color,
        kz: {
          color: omitHeartColorNames(defaultTheme.color),
          DEPRECATED: defaultTheme.DEPRECATED,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "border.json"),
    formatJson(
      JSON.stringify({
        kz: { border: defaultTheme.border },
        border: augmentedThemeWithCSSVariableValuesVersion.border,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "animation.json"),
    formatJson(
      JSON.stringify({
        kz: { animation: defaultTheme.animation },
        animation: augmentedThemeWithCSSVariableValuesVersion.animation,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "layout.json"),
    formatJson(
      JSON.stringify({
        kz: { layout: defaultTheme.layout },
        // Don't use customPropertiesTheme for layout. We need concrete values exposed for use in @media queries.
        layout: defaultTheme.layout,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "shadow.json"),
    formatJson(
      JSON.stringify({
        kz: { shadow: defaultTheme.shadow },
        shadow: augmentedThemeWithCSSVariableValuesVersion.shadow,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "spacing.json"),
    formatJson(
      JSON.stringify({
        kz: { spacing: defaultTheme.spacing },
        spacing: augmentedThemeWithCSSVariableValuesVersion.spacing,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "typography.json"),
    formatJson(
      JSON.stringify({
        kz: { typography: defaultTheme.typography },
        typography: augmentedThemeWithCSSVariableValuesVersion.typography,
      })
    )
  )

  // The following generated files should be removed in the next breaking change

  /* Write JSON CSS variable tokens */

  fs.writeFileSync(
    path.resolve(jsonOutput, "variable-identifiers.json"),
    formatJson(
      JSON.stringify({
        [`${cssVariableThemeNamespace}-id`]: customPropertiesThemeIdentifiers[
          cssVariableThemeNamespace
        ],
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "color-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          color:
            augmentedThemeWithCSSVariableValuesVersion[
              cssVariableThemeNamespace
            ].color,
          DEPRECATED:
            augmentedThemeWithCSSVariableValuesVersion[
              cssVariableThemeNamespace
            ].DEPRECATED,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "border-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          border:
            augmentedThemeWithCSSVariableValuesVersion[
              cssVariableThemeNamespace
            ].border,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "animation-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          animation:
            augmentedThemeWithCSSVariableValuesVersion[
              cssVariableThemeNamespace
            ].animation,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "layout-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          layout:
            augmentedThemeWithCSSVariableValuesVersion[
              cssVariableThemeNamespace
            ].layout,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "shadow-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          shadow:
            augmentedThemeWithCSSVariableValuesVersion[
              cssVariableThemeNamespace
            ].shadow,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "spacing-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          spacing:
            augmentedThemeWithCSSVariableValuesVersion[
              cssVariableThemeNamespace
            ].spacing,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "typography-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          typography:
            augmentedThemeWithCSSVariableValuesVersion[
              cssVariableThemeNamespace
            ].typography,
        },
      })
    )
  )

  /* Write CSS variable theme files */
  fs.writeFileSync(
    path.resolve(cssOutput, "zen-theme.css"),
    themeToCssVariableStylesheetString(zenTheme)
  )
  fs.writeFileSync(
    path.resolve(cssOutput, "heart-theme.css"),
    themeToCssVariableStylesheetString(heartTheme)
  )
  fs.writeFileSync(
    path.resolve(cssOutput, "default-theme.css"),
    themeToCssVariableStylesheetString(defaultTheme)
  )
}

run()

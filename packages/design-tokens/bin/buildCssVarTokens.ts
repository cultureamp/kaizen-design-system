import fs from "fs"
import path from "path"
import { format } from "prettier"
import * as yargs from "yargs"
import { defaultTheme, heartTheme, Theme, zenTheme } from "../"
import {
  augmentCssVariable,
  mapLeafsOfObject,
  makeCSSVariableTheme,
  cssVariableThemeNamespace,
  objectPathToCssVarIdentifier,
  makeCSSVariablesOfTheme,
} from "../src/utils"

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

const themeToCssVariableStylesheetString = (theme: Theme) =>
  format(
    `:root {
${Object.entries(makeCSSVariablesOfTheme(theme))
  .map(([key, value]) => `${key}: ${value};`)
  .join("  \n")}
}`,
    { parser: "css" }
  )

/**
 * WIP: Need a better name and articulation of this.
 * See {@link augmentCssVariable} to understand what happens to each leaf variable in the theme.
 * Writing this as a solution to the add-alpha and add-tint/shade problem, and to spit out sass variables with `-default` and `-rgb-params` suffixes (where applicable).
 * We need to have additional tokens that reference variables, which contain a tuple (R, G, B).
 * This tuple can then be used within the CSS [runtime] function as a CSS variable, e.g. `rgba(var(--kz-color-wisteria-800-rgb))`.
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
    const cssVariablesOfToken = augmentCssVariable(leafKey, value, {
      augmentWithDefault: false,
    })
    Object.assign(leafObject, cssVariablesOfToken)
  })
  return augmentedTheme as Theme
}

const run = () => {
  fs.mkdirSync(jsonOutput, { recursive: true })
  fs.mkdirSync(cssOutput, { recursive: true })

  // Any theme passed into the factory function will be fine, as they all have the same keys
  const customPropertiesTheme = makeCSSVariableTheme(
    augmentThemeForSassVariables(defaultTheme)
  )

  /*
    This is used for compiling a json file contianing the identifiers of variables rather than CSS var() functions as values.
    e.g.
    {
      themeKey: "--kz-var-theme-key"
    }

    This is useful for situations when you want to access CSS variables from javascript.
    E.g.
    ```ts
      document.documentElement.style.getPropertyValue(identifiers.themeKey)
    ```
   */
  const customPropertiesThemeIdentifiers = makeCSSVariableTheme(
    augmentThemeForSassVariables(defaultTheme),
    objectPathToCssVarIdentifier
  )

  /* Write JSON tokens */

  fs.writeFileSync(
    path.resolve(jsonOutput, "color.json"),
    formatJson(
      JSON.stringify({
        kz: {
          color: defaultTheme.color,
          DEPRECATED: defaultTheme.DEPRECATED,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "border.json"),
    formatJson(JSON.stringify({ kz: { border: defaultTheme.border } }))
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "animation.json"),
    formatJson(JSON.stringify({ kz: { animation: defaultTheme.animation } }))
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "layout.json"),
    formatJson(JSON.stringify({ kz: { layout: defaultTheme.layout } }))
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "shadow.json"),
    formatJson(JSON.stringify({ kz: { shadow: defaultTheme.shadow } }))
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "spacing.json"),
    formatJson(JSON.stringify({ kz: { spacing: defaultTheme.spacing } }))
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "typography.json"),
    formatJson(JSON.stringify({ kz: { typography: defaultTheme.typography } }))
  )

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
          color: customPropertiesTheme[cssVariableThemeNamespace].color,
          DEPRECATED:
            customPropertiesTheme[cssVariableThemeNamespace].DEPRECATED,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "border-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          border: customPropertiesTheme[cssVariableThemeNamespace].border,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "animation-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          animation: customPropertiesTheme[cssVariableThemeNamespace].animation,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "layout-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          layout: customPropertiesTheme[cssVariableThemeNamespace].layout,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "shadow-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          shadow: customPropertiesTheme[cssVariableThemeNamespace].shadow,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "spacing-vars.json"),
    formatJson(
      JSON.stringify({
        [cssVariableThemeNamespace]: {
          spacing: customPropertiesTheme[cssVariableThemeNamespace].spacing,
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
            customPropertiesTheme[cssVariableThemeNamespace].typography,
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

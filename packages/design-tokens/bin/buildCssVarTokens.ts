import fs from "fs"
import path from "path"
import { format } from "prettier"
import * as yargs from "yargs"
import omit from "lodash.omit"
import { defaultTheme, heartTheme, Theme, zenTheme } from "../"
import {
  augmentCssVariable,
  mapLeafsOfObject,
  makeCSSVariableTheme,
  objectPathToCssVarIdentifier,
  makeCSSVariablesOfTheme,
  objectPathToCssVarReference,
  cssVariableThemeNamespace,
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

  const customPropertiesThemeVersion2 = makeCSSVariableTheme(
    defaultTheme,
    objectPathToCssVarReference,
    false
  )

  const customPropertiesThemeVersion3 = makeCSSVariableTheme(
    defaultTheme,
    objectPathToCssVarReference,
    true
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
    objectPathToCssVarIdentifier,
    false
  )

  /* Write JSON tokens */

  fs.writeFileSync(
    path.resolve(jsonOutput, "color.json"),
    formatJson(
      JSON.stringify({
        dataViz: customPropertiesThemeVersion3.dataViz,
        color: omit(
          customPropertiesThemeVersion3.color,
          "ash",
          "stone",
          "slate",
          "iron",
          "wisteria",
          "cluny",
          "peach",
          "yuzu",
          "coral",
          "seedling"
        ),
        kz: {
          color: defaultTheme.color,
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
        border: customPropertiesThemeVersion3.border,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "animation.json"),
    formatJson(
      JSON.stringify({
        kz: { animation: defaultTheme.animation },
        animation: customPropertiesThemeVersion3.animation,
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
        shadow: customPropertiesThemeVersion3.shadow,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "spacing.json"),
    formatJson(
      JSON.stringify({
        kz: { spacing: defaultTheme.spacing },
        spacing: customPropertiesThemeVersion3.spacing,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "typography.json"),
    formatJson(
      JSON.stringify({
        kz: { typography: defaultTheme.typography },
        typography: customPropertiesThemeVersion3.typography,
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
          color: omit(
            customPropertiesThemeVersion2[cssVariableThemeNamespace].color,
            "purple",
            "blue",
            "orange",
            "yellow",
            "red",
            "green",
            "gray"
          ),
          DEPRECATED:
            customPropertiesThemeVersion2[cssVariableThemeNamespace].DEPRECATED,
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
            customPropertiesThemeVersion2[cssVariableThemeNamespace].border,
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
            customPropertiesThemeVersion2[cssVariableThemeNamespace].animation,
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
            customPropertiesThemeVersion2[cssVariableThemeNamespace].layout,
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
            customPropertiesThemeVersion2[cssVariableThemeNamespace].shadow,
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
            customPropertiesThemeVersion2[cssVariableThemeNamespace].spacing,
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
            customPropertiesThemeVersion2[cssVariableThemeNamespace].typography,
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

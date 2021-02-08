import fs from "fs"
import path from "path"
import { format } from "prettier"
import * as yargs from "yargs"
import { heartTheme, Theme } from "../src"
import { zenTheme } from "../src/themes/zen"
import {
  augmentCssVariable,
  flattenObjectToCSSVariables,
  makeCSSVariableTheme,
  mapLeafsOfObject,
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
${Object.entries(flattenObjectToCSSVariables({ kz: theme }))
  .map(([key, value]) => `${key}: ${value};`)
  .join("  \n")}
}`,
    { parser: "css" }
  )

/**
 * WIP: Need a better name and articulation of this.
 * Writing this as a solution to the add-alpha and add-tint/shade problem, and to spit out sass variables with `-default` and `-rgb-params` suffixes (where applicable).
 * We need to have additional tokens that reference variables, which contain a triple (R, G, B).
 * This triple can then be used within the CSS [runtime] function as a CSS variable, e.g. `rgba(var(--kz-color-wisteria-800-rgb))`.
 * Adds extra keys as leaf siblings, named `${key}-default`, containing the value within the theme provided as the parameter.
 * See [augmentCssVariable]
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
    const cssVariablesOfToken = augmentCssVariable(leafKey, value)
    Object.assign(leafObject, cssVariablesOfToken)
  })
  return augmentedTheme as Theme
}

const run = () => {
  fs.mkdirSync(jsonOutput, { recursive: true })
  fs.mkdirSync(cssOutput, { recursive: true })

  // Any theme passed into the factory function will be fine, as they all have the same keys
  const customPropertiesTheme = makeCSSVariableTheme(
    augmentThemeForSassVariables(zenTheme)
  ).kz

  /* Write JSON tokens */

  fs.writeFileSync(
    path.resolve(jsonOutput, "color.json"),
    formatJson(
      JSON.stringify({
        kz: {
          color: customPropertiesTheme.color,
          DEPRECATED: customPropertiesTheme.DEPRECATED,
        },
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "border.json"),
    formatJson(JSON.stringify({ kz: { border: customPropertiesTheme.border } }))
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "animation.json"),
    formatJson(
      JSON.stringify({ kz: { animation: customPropertiesTheme.animation } })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "layout.json"),
    formatJson(JSON.stringify({ kz: { layout: customPropertiesTheme.layout } }))
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "shadow.json"),
    formatJson(JSON.stringify({ kz: { shadow: customPropertiesTheme.shadow } }))
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "spacing.json"),
    formatJson(
      JSON.stringify({ kz: { spacing: customPropertiesTheme.spacing } })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "typography.json"),
    formatJson(
      JSON.stringify({ kz: { typography: customPropertiesTheme.typography } })
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
}

run()

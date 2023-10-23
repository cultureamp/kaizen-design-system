import fs from "fs"
import path from "path"
import { toCustomPropertiesString } from "object-to-css-variables"
import { format } from "prettier"
import * as yargs from "yargs"
import { defaultTheme, makeCssVariableDefinitionsMap } from "../src"
import { makeCSSVariableTheme } from "../src/lib/makeCssVariableTheme"

const output = yargs
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

const formatJson = (jsonString: string): Promise<string> =>
  format(jsonString, { parser: "json" })

const run = async (): Promise<void> => {
  // as of v17 returns a promise
  const { jsonOutput, cssOutput } = await output
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
  const augmentedThemeWithCSSVariableValuesVersion =
    makeCSSVariableTheme(defaultTheme)

  const cssVars = toCustomPropertiesString(
    makeCssVariableDefinitionsMap(defaultTheme)
  )

  fs.writeFileSync(
    path.resolve(cssOutput, "variables.css"),
    `html {${cssVars}}`
  )

  /* Write JSON tokens */
  fs.writeFileSync(
    path.resolve(jsonOutput, "color.json"),
    await formatJson(
      JSON.stringify({
        dataViz: augmentedThemeWithCSSVariableValuesVersion.dataViz,
        color: augmentedThemeWithCSSVariableValuesVersion.color,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "border.json"),
    await formatJson(
      JSON.stringify({
        border: augmentedThemeWithCSSVariableValuesVersion.border,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "animation.json"),
    await formatJson(
      JSON.stringify({
        animation: augmentedThemeWithCSSVariableValuesVersion.animation,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "layout.json"),
    await formatJson(
      JSON.stringify({
        layout: defaultTheme.layout,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "shadow.json"),
    await formatJson(
      JSON.stringify({
        shadow: augmentedThemeWithCSSVariableValuesVersion.shadow,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "spacing.json"),
    await formatJson(
      JSON.stringify({
        spacing: augmentedThemeWithCSSVariableValuesVersion.spacing,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "typography.json"),
    await formatJson(
      JSON.stringify({
        typography: augmentedThemeWithCSSVariableValuesVersion.typography,
      })
    )
  )
}

run()

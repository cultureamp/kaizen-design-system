import fs from "fs"
import path from "path"
import { format } from "prettier"
import * as yargs from "yargs"
import { defaultTheme } from "../"
import { makeCSSVariableTheme } from "../src/lib/makeCssVariableTheme"

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

  /* Write JSON tokens */

  fs.writeFileSync(
    path.resolve(jsonOutput, "color.json"),
    formatJson(
      JSON.stringify({
        dataViz: augmentedThemeWithCSSVariableValuesVersion.dataViz,
        color: augmentedThemeWithCSSVariableValuesVersion.color,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "border.json"),
    formatJson(
      JSON.stringify({
        border: augmentedThemeWithCSSVariableValuesVersion.border,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "animation.json"),
    formatJson(
      JSON.stringify({
        animation: augmentedThemeWithCSSVariableValuesVersion.animation,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "layout.json"),
    formatJson(
      JSON.stringify({
        layout: defaultTheme.layout,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "shadow.json"),
    formatJson(
      JSON.stringify({
        shadow: augmentedThemeWithCSSVariableValuesVersion.shadow,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "spacing.json"),
    formatJson(
      JSON.stringify({
        spacing: augmentedThemeWithCSSVariableValuesVersion.spacing,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "typography.json"),
    formatJson(
      JSON.stringify({
        typography: augmentedThemeWithCSSVariableValuesVersion.typography,
      })
    )
  )
}

run()

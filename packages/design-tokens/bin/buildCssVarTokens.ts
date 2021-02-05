import fs from "fs"
import path from "path"
import { format } from "prettier"
import * as yargs from "yargs"
import { zenTheme } from "../src/themes/zen"
import {
  augmentThemeWithRGBTripletsAndDefaults,
  makeCSSVariableTheme,
} from "../src/utils"

const { jsonOutput } = yargs
  .option("jsonOutput", {
    alias: ["j"],
    description:
      "The directory which JSON builds should be written to. Defaults to `./tokens` in your current working directory",
    default: `${process.cwd()}/tokens`,
    type: "string",
  })
  .env().argv

const formatJson = (jsonString: string) =>
  format(jsonString, { parser: "json" })

const run = () => {
  // Any theme passed into the factory function will be fine, as they all have the same keys
  const customPropertiesTheme = makeCSSVariableTheme(
    augmentThemeWithRGBTripletsAndDefaults(zenTheme)
  ).kz

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
}

run()

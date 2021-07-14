import fs from "fs"
import path from "path"
import { format } from "prettier"
import * as yargs from "yargs"
import { defaultTheme } from "../"
import { makeCSSVariableTheme, objectPathToCssVarReference } from "../src/utils"

const { jsonOutput } = yargs
  .option("jsonOutput", {
    description:
      "The directory which JSON builds should be written to. Defaults to `./tokens` in your current working directory",
    default: `${process.cwd()}/tokens`,
    type: "string",
  })
  .env().argv

const formatJson = (jsonString: string) =>
  format(jsonString, { parser: "json" })

const run = () => {
  fs.mkdirSync(jsonOutput, { recursive: true })

  const customPropertiesTheme = makeCSSVariableTheme(
    defaultTheme,
    objectPathToCssVarReference,
    true
  )

  /* Write JSON tokens */

  fs.writeFileSync(
    path.resolve(jsonOutput, "color.json"),
    formatJson(
      JSON.stringify({
        color: customPropertiesTheme.color,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "border.json"),
    formatJson(
      JSON.stringify({
        border: customPropertiesTheme.border,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "animation.json"),
    formatJson(
      JSON.stringify({
        animation: customPropertiesTheme.animation,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "layout.json"),
    formatJson(
      JSON.stringify({
        // Don't use customPropertiesTheme for layout. We need concrete values exposed for use in @media queries.
        layout: defaultTheme.layout,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "shadow.json"),
    formatJson(
      JSON.stringify({
        shadow: customPropertiesTheme.shadow,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "spacing.json"),
    formatJson(
      JSON.stringify({
        spacing: customPropertiesTheme.spacing,
      })
    )
  )
  fs.writeFileSync(
    path.resolve(jsonOutput, "typography.json"),
    formatJson(
      JSON.stringify({
        typography: customPropertiesTheme.typography,
      })
    )
  )
}

run()

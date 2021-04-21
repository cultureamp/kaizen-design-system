#!/usr/bin/env node
/* eslint-disable no-console */
import fs from "fs"
import glob from "glob"
import postcss from "postcss"
import yargs from "yargs"
import { getParser } from "./utils"
import { deprecatedTokensPlugin } from "./postcssPlugin"

yargs.command(
  "* <files>",
  "runs the codemod on a glob of files",
  commandYargs =>
    commandYargs
      .positional("files", {
        type: "string",
        demandOption: true,
        description:
          "A glob string that describes the source files you want to migrate",
      })
      .option("fix", {
        default: false,
        type: "boolean",
        description:
          "if this is true, the codemod will fix anything it can rather than just report on them (lint)",
      })
      .option("withStylelint", {
        default: false,
        type: "boolean",
        description:
          "this option enables stylelint as a postcss plugin, thus using your stylelint configuration to run fixes as well as the codemod",
      }),
  async argv => {
    const postcssInstance = postcss([
      deprecatedTokensPlugin({ fix: argv.fix }),
      ...(argv.withStylelint ? [require("stylelint")({ fix: argv.fix })] : []),
    ])

    const filePaths = glob.sync(argv.files)
    for (const filePath of filePaths) {
      const contents = fs.readFileSync(filePath).toString()
      const language = /\.less$/.test(filePath) ? "less" : "scss"

      try {
        const result = await postcssInstance.process(contents, {
          from: filePath,
          syntax: getParser(language),
          to: filePath,
        })
        const warnings = result.warnings()
        if (warnings.length) {
          console.error(
            `File: ${filePath}:\n${warnings
              .map(
                warning =>
                  `\t${warning.node.source?.start?.line || 0}:${
                    warning.node.source?.start?.column || 0
                  } \t${warning.text}`
              )
              .join("\n")}`
          )
        }
        if (argv.fix) fs.writeFileSync(filePath, result.css)
      } catch (e) {
        console.error(`Failed to run postcss on file: ${filePath}`, e)
      }
    }
  }
).argv

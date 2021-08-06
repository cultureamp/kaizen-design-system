// Migrated from https://github.com/cultureamp/node-packages/tree/0407d85/packages/stylelint-kaizen/lib
// converted to TypeScript, and modified to be integratable with our stylelint plugin.

import postcss from "postcss"
import { messages, preferColorTokens } from "./prefer-color-tokens"

const tests = {
  accept: [
    { code: ".foo { color: $color-blue-500; }" },
    { code: ".foo { z-index: 22; }" },
  ],
  reject: [
    {
      code: ".foo { background-color: #0168b3; }",
      fixed: ".foo { background-color: $color-blue-500; }",
      warnings: [messages.expected("$color-blue-500", "#0168b3")],
    },
    {
      code: `
      .foo {
        background-color: #0168b3;
        border-color: #6b6e94
      }`,
      fixed: `
      .foo {
        background-color: $color-blue-500;
        border-color: $color-purple-600
      }`,
      warnings: [
        messages.expected("$color-blue-500", "#0168b3"),
        messages.expected("$color-purple-600", "#6b6e94"),
      ],
    },
  ],
} as const

describe(`kaizen/${preferColorTokens.name}`, () => {
  tests.accept.forEach(acceptTest => {
    test(`Accepts: ${acceptTest.code}`, () => {
      let reports = 0
      preferColorTokens.ruleFunction(postcss.parse(acceptTest.code), {
        fix: true,
        reporter: () => {
          reports++
        },
        language: "scss",
      })
    })
  })
  tests.reject.forEach(rejectTest => {
    test(`Rejects: ${rejectTest.code}`, () => {
      const reports: string[] = []
      const root = postcss.parse(rejectTest.code)
      preferColorTokens.ruleFunction(root, {
        fix: false,
        reporter: ({ message }) => {
          reports.push(message)
        },
        language: "scss",
      })
      expect(reports.join(", ")).toBe(rejectTest.warnings.join(", "))

      preferColorTokens.ruleFunction(root, {
        fix: true,
        reporter: () => {
          //
        },
        language: "scss",
      })
      expect(root.toString()).toBe(rejectTest.fixed)
    })
  })
})

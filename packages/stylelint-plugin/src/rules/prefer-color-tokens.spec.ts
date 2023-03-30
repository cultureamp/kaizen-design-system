// Migrated from https://github.com/cultureamp/node-packages/tree/0407d85/packages/stylelint-kaizen/lib
// converted to TypeScript, and modified to be integratable with our stylelint plugin.
/* eslint-disable jest/consistent-test-it */
/* eslint-disable jest/expect-expect */
import postcss from "postcss"
import { defaultTheme } from "@kaizen/design-tokens"
import { messages, preferColorTokens } from "./prefer-color-tokens"

const tests = {
  accept: [
    { code: ".foo { color: $color-blue-500; }" },
    {
      code: `
        .foo {
          z-index: 22;
          padding: 1.5rem;
          color: #123456;
          background-color: rgb(123, 123, 123)
        }
    `,
    },
  ],
  reject: [
    {
      code: `.foo { background-color: ${defaultTheme.color.blue[500]}; }`,
      fixed: ".foo { background-color: $color-blue-500; }",
      warnings: [
        messages.expected("$color-blue-500", defaultTheme.color.blue[500]),
      ],
    },
    {
      code: `
      .foo {
        background-color: ${defaultTheme.color.blue[500]};
        border-color: ${defaultTheme.color.purple[600]};
      }`,
      fixed: `
      .foo {
        background-color: $color-blue-500;
        border-color: $color-purple-600;
      }`,
      warnings: [
        messages.expected("$color-blue-500", defaultTheme.color.blue[500]),
        messages.expected("$color-purple-600", defaultTheme.color.purple[600]),
      ],
    },
  ],
} as const

describe(`kaizen/${preferColorTokens.name}`, () => {
  tests.accept.forEach(acceptTest => {
    test(`Accepts: ${acceptTest.code}`, () => {
      preferColorTokens.ruleFunction(postcss.parse(acceptTest.code), {
        fix: true,
        reporter: () => {
          // no-op
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
          // no-op
        },
        language: "scss",
      })
      expect(root.toString()).toBe(rejectTest.fixed)
    })
  })
})

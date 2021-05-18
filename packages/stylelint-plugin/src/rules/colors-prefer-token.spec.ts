import postcss from "postcss"
import {
  messages,
  colorsPreferTokenRuleName,
  colorsPreferTokenRule,
} from "./colors-prefer-token"

const tests = {
  accept: [
    { code: ".foo { color: $kz-color-cluny-500; }" },
    { code: ".foo { z-index: 22; }" },
  ],

  reject: [
    {
      code: ".foo { background-color: #0168b3; }",
      fixed: ".foo { background-color: $kz-var-color-cluny-500; }",
      warnings: [messages.expected("$kz-var-color-cluny-500", "#0168b3")],
    },
    {
      code: `
      .foo {
        background-color: #0168b3;
        border-color: #6b6e94
      }`,
      fixed: `
      .foo {
        background-color: $kz-var-color-cluny-500;
        border-color: $kz-var-color-wisteria-600
      }`,
      warnings: [
        messages.expected("$kz-var-color-cluny-500", "#0168b3"),
        messages.expected("$kz-var-color-wisteria-600", "#6b6e94"),
      ],
    },
  ],
} as const

describe(`kaizen/${colorsPreferTokenRuleName}`, () => {
  tests.accept.forEach(acceptTest => {
    test(`Accepts: ${acceptTest.code}`, () => {
      let reports = 0
      colorsPreferTokenRule(postcss.parse(acceptTest.code), {
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
      colorsPreferTokenRule(root, {
        fix: false,
        reporter: ({ message }) => {
          reports.push(message)
        },
        language: "scss",
      })
      expect(reports.join(", ")).toBe(rejectTest.warnings.join(", "))

      colorsPreferTokenRule(root, {
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

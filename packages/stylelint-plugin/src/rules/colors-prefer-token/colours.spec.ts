require("ts-node").register()
// @ts-ignore
import getTestRule from "jest-preset-stylelint/getTestRule"
import { messages, colorsPreferTokenRuleName } from "./colours"
const testRule = getTestRule()
const tests = {
  accept: [
    { code: ".foo { color: $kz-color-cluny-500; }" },
    { code: ".foo { z-index: 22; }" },
  ],

  reject: [
    {
      code: ".foo { background-color: #0168b3; }",
      fixed: ".foo { background-color: $kz-color-cluny-500; }",
      message: messages.expected("$kz-color-cluny-500", "#0168b3"),
    },
    {
      code: `
      .foo {
        background-color: #0168b3;
        border-color: #6b6e94
      }`,
      fixed: `
      .foo {
        background-color: $kz-color-cluny-500;
        border-color: $kz-color-wisteria-600
      }`,
      warnings: [
        { message: messages.expected("$kz-color-cluny-500", "#0168b3") },
        { message: messages.expected("$kz-color-wisteria-600", "#6b6e94") },
      ],
    },
  ],
}

testRule({
  plugins: [require.resolve("../../stylelintPlugin")],
  ruleName: `kaizen/${colorsPreferTokenRuleName}`,
  config: [],
  fix: true,
  ...tests,
})

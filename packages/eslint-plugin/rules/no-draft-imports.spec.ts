const RuleTester = require("eslint").RuleTester;
const rule = require("./no-draft-imports")

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  }
});

ruleTester.run("no-draft-imports", rule, {
  valid: [
    {
      code: "import foo from '@kaizen/foo';",
    },
    {
      code: "const foo = require('@kaizen/foo');",
    }
  ],

  invalid: [
    {
      code: "import foo from '@kaizen/draft-foo';",
      errors: [{ message: /^Unexpected draft import/ }]
    },
    {
      code: "const foo = require('@kaizen/draft-foo');",
      errors: [{ message: /^Unexpected draft import/ }]
    }
  ]
});

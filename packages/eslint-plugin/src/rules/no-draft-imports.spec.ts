import { RuleTester } from "eslint"

const rule = require("./no-draft-imports")

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
})

ruleTester.run("no-draft-imports", rule, {
  valid: [
    {
      code: "import foo from '@kaizen/foo';",
    },
    {
      code: "import { bar } from '@kaizen/foo';",
    },
    {
      code: "const foo = require('@kaizen/foo');",
    },
    {
      code: "const foo = '@kaizen/foo';",
    },
    {
      code: "import * as FooBar from '@kaizen/foo'",
    },
    {
      code: "import defaultExport, { foo } from 'fake-package';",
    },
    {
      code: "const foo = exampleFunction('@kaizen/draft-foo')",
    },
  ],
  invalid: [
    {
      code: "const foo = require('@kaizen/draft-foo');",
      output: "const foo = require('@kaizen/foo');",
      errors: 1,
    },
    {
      code: "import foo from '@kaizen/draft-foo';",
      output: "import foo from '@kaizen/foo';",
      errors: 1,
    },
    {
      code: "import { foo, bar, baz } from '@kaizen/draft-foo';",
      output: "import { foo, bar, baz } from '@kaizen/foo';",
      errors: [{ message: /^Unexpected draft import/ }],
    },
    {
      code: "const foo = require('@kaizen/draft-foo');",
      output: "const foo = require('@kaizen/foo');",
      errors: [{ message: /^Unexpected draft import/ }],
    },
    {
      code: "import foo from '@kaizen/draft-foo/nested/imports';",
      output: "import foo from '@kaizen/foo/nested/imports';",
      errors: [{ message: /^Unexpected draft import/ }],
    },
    {
      code: "const foo = require('@kaizen/draft-foo/nested/imports');",
      output: "const foo = require('@kaizen/foo/nested/imports');",
      errors: [{ message: /^Unexpected draft import/ }],
    },
  ],
})

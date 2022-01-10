import { RuleTester } from "eslint"

const rule = require("./no-inline-notification-imports-from-component-library")

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
})

ruleTester.run("no-inline-notification-imports-from-component-library", rule, {
  valid: [
    // Valid other targets
    {
      code: "import foo from '@kaizen/component-library';",
    },
    {
      code: "import { bar } from '@kaizen/component-library';",
    },
    {
      code: "const foo = require('@kaizen/component-library');",
    },
    {
      code: "const foo = '@kaizen/component-library';",
    },
    {
      code: "import * as FooBar from '@kaizen/component-library'",
    },
    {
      code: "import defaultExport, { foo } from 'fake-package';",
    },
    {
      code: "const foo = exampleFunction('@kaizen/component-library')",
    },
    // Valid targeted
    {
      code:
        "import InlineNotification from '@kaizen/notification/InlineNotification';",
    },
    {
      code: "import { InlineNotification } from '@kaizen/notification';",
    },
    {
      code:
        "const InlineNotification = require('@kaizen/notification/InlineNotification');",
    },
    {
      code: "const { InlineNotification } = require('@kaizen/notification');",
    },
  ],
  invalid: [
    {
      code:
        "import InlineNotification from '@kaizen/component-library/InlineNotification';",
      output:
        "import InlineNotification from '@kaizen/notification/InlineNotification';",
      errors: [{ message: /moved import/ }],
    },
    {
      code:
        "import { Icon, InlineNotification, Heading } from '@kaizen/component-library';",
      output: `import { Icon, Heading } from '@kaizen/component-library';
import { InlineNotification } from '@kaizen/notification';`,
      errors: [{ message: /moved import/ }],
    },
    {
      code: "import { InlineNotification } from '@kaizen/component-library';",
      output: "import { InlineNotification } from '@kaizen/notification';",
      errors: [{ message: /moved import/ }],
    },
    {
      code:
        "const InlineNotification = require('@kaizen/component-library/InlineNotification');",
      output:
        "const InlineNotification = require('@kaizen/notification/InlineNotification');",
      errors: [{ message: /moved import/ }],
    },
    {
      code:
        "const { Icon, InlineNotification, Heading } = require('@kaizen/component-library');",
      output: `const { Icon, Heading } = require('@kaizen/component-library');
const { InlineNotification } = require('@kaizen/notification');`,
      errors: [{ message: /moved import/ }],
    },
    {
      code:
        "const { InlineNotification } = require('@kaizen/component-library');",
      output: "const { InlineNotification } = require('@kaizen/notification');",
      errors: [{ message: /moved import/ }],
    },
  ],
})

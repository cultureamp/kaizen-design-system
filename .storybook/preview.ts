import "./styles.css"

import type { Preview } from "@storybook/react"
import { decorators } from "./decorators"
import { backgrounds } from "./backgrounds"
import { globalA11yRules } from "./global-a11y-rules"
import { DefaultDocsContainer } from "./components/DocsContainer"

const globalTypes = {
  textDirection: {
    name: "Text direction",
    description: "",
    defaultValue: "ltr",
    toolbar: {
      icon: "globe",
      items: ["ltr", "rtl"],
    },
  },
} satisfies Preview["globalTypes"]

const preview = {
  parameters: {
    backgrounds: {
      default: "White",
      values: backgrounds,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: DefaultDocsContainer,
      source: {
        excludeDecorators: true,
        language: "tsx",
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Introduction",
          "Guides",
          "Systems",
          [
            "*",
            "Tailwind",
            [
              "Overview",
              "Getting Started",
              "Configuration",
              "Working with Tailwind",
              "*",
              "Utility Class References",
              ["Overview", "*"],
            ],
          ],
          "Components",
          ["Kaizen Provider", "*"],
          "Pages",
          "Helpers",
          "Design Tokens",
          "Deprecated",
          "AIO",
        ],
      },
    },
    chromatic: { disable: true },
    a11y: {
      config: {
        rules: globalA11yRules,
      },
    },
  },
  globalTypes,
  decorators,
} satisfies Preview

export default preview

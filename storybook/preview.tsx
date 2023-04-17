import "./tailwind.scss"
import React from "react"
import { Preview } from "@storybook/react"
import { QueryClient } from "@tanstack/react-query"
import { createIntl, createIntlCache } from "react-intl"
import { defaultTheme, ThemeContext } from "@kaizen/design-tokens"
import { KaizenProvider } from "~components/KaizenProvider"
import { backgrounds } from "./backgrounds"
import { DefaultDocsContainer } from "./components/DocsContainer"

import "highlight.js/styles/a11y-light.css"
// -----------------------------
// Changes in this file are for testing fallback behaviour when
// intl object is/isn't present.
// Don't merge before resetting this file.
// intl object is expected to be provided by consumer. We will need
// to create our own translation files that get picked up by CA's
// intl object (somehow...)

const cache = createIntlCache()
const intl = createIntl(
  {
    locale: "fr",
    defaultLocale: "en",
    messages: {
      myMessage: "Bonsoir bro",
    },
  },
  cache
)

// -----------------------------

const queryClient = new QueryClient()

// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
import "focus-visible"

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
import "normalize.css"
import "@kaizen/component-library/styles/fonts.scss"

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

const decorators = [
  (Story): JSX.Element => (
    <ThemeContext.Provider value={defaultTheme}>
      <Story />
    </ThemeContext.Provider>
  ),
  (Story, props): JSX.Element => {
    const dir = props.args.textDirection ?? props.globals.textDirection
    return (
      <div dir={dir}>
        <KaizenProvider intlConfig={intl}>
          <Story {...props} />
        </KaizenProvider>
      </div>
    )
  },
] satisfies Preview["decorators"]

const preview = {
  parameters: {
    backgrounds: {
      default: "White",
      values: backgrounds,
    },
    docs: {
      container: DefaultDocsContainer,
      source: {
        excludeDecorators: true,
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
          "Helpers",
          "Design Tokens",
          "Deprecated",
          "AIO",
        ],
      },
    },
    chromatic: { disable: true },
  },
  globalTypes,
  decorators,
} satisfies Preview

export default preview

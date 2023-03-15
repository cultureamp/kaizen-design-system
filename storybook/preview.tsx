/* eslint import/no-extraneous-dependencies: 0 */
import "./tailwind.scss"
import React from "react"
import { addParameters } from "@storybook/react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { createIntl, createIntlCache } from "react-intl"
import { ThemeManager, heartTheme } from "@kaizen/components"
import { defaultTheme, ThemeContext } from "@kaizen/design-tokens"
import { KaizenProvider } from "../packages/components"
import { backgrounds } from "./backgrounds"
import { CATEGORIES, SORT_ORDER } from "./constants"
import "highlight.js/styles/a11y-light.css"

// -----------------------------

const themeManager = new ThemeManager(heartTheme)

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

const withQueryProvider = (Story): JSX.Element => (
  <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
)
// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
require("focus-visible")

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
require("normalize.css")

require("@kaizen/component-library/styles/fonts.scss")
require("./global.scss")

addParameters({
  backgrounds: {
    default: "White",
    values: backgrounds,
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        CATEGORIES.introduction,
        "Guides",
        ...SORT_ORDER.systems,
        CATEGORIES.components,
        CATEGORIES.helpers,
        CATEGORIES.designTokens,
        CATEGORIES.deprecated,
      ],
    },
  },
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === "string" ? notes : notes.markdown || notes.text
      }
      return null
    },
  },
  chromatic: { disable: true },
})

export const globalTypes = {
  textDirection: {
    name: "Text direction",
    description: "",
    defaultValue: "ltr",
    toolbar: {
      icon: "globe",
      items: ["ltr", "rtl"],
    },
  },
}

export const decorators = [
  (Story: React.ComponentType): JSX.Element => (
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
  withQueryProvider,
]

/* eslint import/no-extraneous-dependencies: 0 */
import "./tailwind.scss"
import { addParameters } from "@storybook/react"
import React from "react"
import { defaultTheme, ThemeContext } from "@kaizen/design-tokens"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { backgrounds } from "./backgrounds"
import { CATEGORIES } from "./constants"

const queryClient = new QueryClient()

const withQueryProvider = Story => (
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
  (Story: React.ComponentType) => (
    <ThemeContext.Provider value={defaultTheme}>
      <Story />
    </ThemeContext.Provider>
  ),
  (Story, props) => {
    const dir = props.args.textDirection ?? props.globals.textDirection
    return (
      <div dir={dir}>
        <Story {...props} />
      </div>
    )
  },
  withQueryProvider,
]

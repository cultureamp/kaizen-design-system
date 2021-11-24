/* eslint import/no-extraneous-dependencies: 0 */
import React from "react"
import {
  defaultTheme,
  ThemeProvider,
  ThemeManager
} from "@kaizen/design-tokens"
import { addParameters } from "@storybook/react"
import { backgrounds } from "./backgrounds"
import { CATEGORIES } from "./constants"

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
        CATEGORIES.elm,
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

export const themeManager = new ThemeManager(defaultTheme);

export const decorators = [
  (Story: React.ComponentType) => (
    <ThemeProvider themeManager={themeManager}>
      <Story />
    </ThemeProvider>
  ),
  (Story, props) => {
    const dir = props.args.textDirection ?? props.globals.textDirection
    return (
      <div dir={dir}>
        <Story {...props} />
      </div>
    )
  },
]

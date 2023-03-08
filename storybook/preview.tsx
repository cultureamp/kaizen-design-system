/* eslint import/no-extraneous-dependencies: 0 */
import "./tailwind.scss"
import React from "react"
import { defaultTheme, ThemeContext } from "@kaizen/design-tokens"
import { backgrounds } from "./backgrounds"
import "highlight.js/styles/a11y-light.css"

// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
import "focus-visible"

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
import "normalize.css"

import "@kaizen/component-library/styles/fonts.scss"
import "./global.scss"

export const parameters = {
  backgrounds: {
    default: "White",
    values: backgrounds,
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Introduction",
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
  // docs: {
  //   // @note: Do we need this?
  //   // https://github.com/storybookjs/storybook/blob/next/code/addons/docs/docs/recipes.md#migrating-from-notesinfo-addons
  //   // https://storybook.js.org/addons/@dblechoc/storybook-addon-docs
  //   extractComponentDescription: (component, { notes }): unknown => {
  //     if (notes) {
  //       return typeof notes === "string" ? notes : notes.markdown || notes.text
  //     }
  //     return null
  //   },
  // },
  chromatic: { disable: true },
}

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
        <Story {...props} />
      </div>
    )
  },
]

/* eslint import/no-extraneous-dependencies: 0 */
import "./tailwind.scss"
import React from "react"
import { DocsContainer } from "@storybook/addon-docs"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
  DocsContextProps,
  DocsContainerProps,
} from "@storybook/blocks"
import { Preview } from "@storybook/react"
import { Renderer } from "@storybook/types"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { defaultTheme, ThemeContext } from "@kaizen/design-tokens"
import { CustomDocsContainer } from "./CustomDocsContainer"
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
  docs: {
    container: ({
      context,
    }: DocsContainerProps): React.ReactElement<typeof DocsContainer> => (
      <CustomDocsContainer context={context} />
    ),
  },
  chromatic: { disable: true },
}

const globalTypes: Preview["globalTypes"] = {
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

const decorators: Preview["decorators"] = [
  (Story): JSX.Element => (
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

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "White",
      values: backgrounds,
    },
    docs: {
      source: {
        excludeDecorators: true,
      },
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
  },
  globalTypes,
  decorators,
}

export default preview

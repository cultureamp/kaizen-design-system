/* eslint import/no-extraneous-dependencies: 0 */
import "./tailwind.scss"
import React from "react"
import { DocsContainer, DocsContainerProps, Unstyled } from "@storybook/blocks"
import { Preview } from "@storybook/react"
import { defaultTheme, ThemeContext } from "@kaizen/design-tokens"
import "highlight.js/styles/a11y-light.css"

// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
import "focus-visible"

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
import "normalize.css"
import "@kaizen/component-library/styles/fonts.scss"

import { backgrounds } from "./backgrounds"
import { BackToTop } from "./components/BackToTop"
import { Content, Main, Sidebar } from "./components/Layout"
import { TableOfContents } from "./components/TableOfContents"

export const PageContainer = ({
  children,
  ...props
}: DocsContainerProps & { children: any }): any => (
  <DocsContainer {...props}>
    <Main>
      <Sidebar>
        {/* This is due to Unstyled typed as a being a FC pre-react-18 */}
        {/* @ts-ignore */}
        <Unstyled>
          <TableOfContents />
        </Unstyled>
      </Sidebar>
      <Content>
        {children}
        <BackToTop />
      </Content>
    </Main>
  </DocsContainer>
)

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
      container: PageContainer,
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
    chromatic: { disable: true },
  },
  globalTypes,
  decorators,
}

export default preview

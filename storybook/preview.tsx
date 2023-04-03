import "./tailwind.scss"
import React from "react"
import { DocsContainer, DocsContainerProps, Unstyled } from "@storybook/blocks"
import { Preview } from "@storybook/react"
import { defaultTheme, ThemeContext } from "@kaizen/design-tokens"
import { backgrounds } from "./backgrounds"
import { BackToTop } from "./components/BackToTop"
import { Content, Main, Sidebar } from "./components/Layout"
import { TableOfContents } from "./components/TableOfContents"

import "highlight.js/styles/a11y-light.css"

// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
import "focus-visible"

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
import "normalize.css"
import "@kaizen/component-library/styles/fonts.scss"

const PageContainer = ({
  children,
  ...props
}: DocsContainerProps & { children: React.ReactNode }): any => (
  <DocsContainer {...props}>
    <Main>
      <Sidebar>
        <div className="sticky right-0 top-12">
          <Unstyled>
            <TableOfContents />
          </Unstyled>
        </div>
      </Sidebar>
      <Content>
        {children}
        <BackToTop />
      </Content>
    </Main>
  </DocsContainer>
)

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
        <Story {...props} />
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

import "./tailwind.css"

import React, { useEffect } from "react"
import { decorators as bgDecorators } from "@storybook/addon-backgrounds/preview"
import { Preview } from "@storybook/react"
import isChromatic from "chromatic"
import { KaizenProvider } from "@kaizen/components"
import { I18nProvider } from "@kaizen/components/v3/react-aria-components"
import { ReversedColors } from "@kaizen/components/v3/utilities"
import { DefaultDocsContainer } from "../storybook/components/DocsContainer"
import { backgrounds } from "./backgrounds"
import { globalA11yRules } from "./global-a11y-rules"

const [, withBackground] = bgDecorators
const IS_CHROMATIC = isChromatic()

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

const RACDecorator = (Story, context): JSX.Element => {
  const dir = context.parameters.textDirection ?? context.globals.textDirection

  useEffect(() => {
    if (document.body.getAttribute("dir") !== dir)
      document.body.setAttribute("dir", dir)
  }, [dir])

  return (
    <I18nProvider locale={dir === "rtl" ? "ar" : "en"}>
      <Story />
    </I18nProvider>
  )
}

const KaizenProviderDecorator = (Story): JSX.Element => (
  <KaizenProvider>
    <Story />
  </KaizenProvider>
)

const decorators: Preview["decorators"] = [
  RACDecorator,
  KaizenProviderDecorator,
  (Story, context) =>
    (context.args.isReversed || context.args.reversed) && !IS_CHROMATIC ? (
      <div className="p-16 m-[-1rem]">
        <Story />
      </div>
    ) : (
      <Story />
    ),
  // reverseColor parameter wraps story in ReversedColors context and sets default background to Purple 700
  // @ts-ignore
  (Story, context) => {
    if (
      // set in top toolbar
      !context.globals.backgrounds &&
      // set on story
      !context.moduleExport?.parameters?.backgrounds
    ) {
      context.parameters.backgrounds.default = context.parameters.reverseColors
        ? "Purple 700"
        : "White"
    }

    return withBackground(
      () =>
        context.parameters.reverseColors ? (
          <ReversedColors>
            <Story />
          </ReversedColors>
        ) : (
          <Story />
        ),
      context
    )
  },
]

const preview = {
  parameters: {
    backgrounds: {
      default: "White",
      values: backgrounds,
    },
    docs: {
      toc: {
        title: "Table of contents",
        headingSelector: ".tocbot-content > h2, .tocbot-content > h3",
        ignoreSelector: "#primary",
      },
      source: {
        excludeDecorators: true,
        language: "tsx",
      },
      container: DefaultDocsContainer,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Introduction",
          "Guides",
          [
            "App starter",
            "Layout and spacing",
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
          // This will group new folders like Actions, Overlays, etc in the same way
          "*",
          ["*", ["*", ["Usage Guidelines", "API Specification", "*"]]],
          "Components",
          ["Kaizen Provider", "*"],
          "Pages",
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

import "./styles/tailwind.scss"

import React, { useEffect } from "react"
import { Preview } from "@storybook/react"
import isChromatic from "chromatic"
import { KaizenProvider } from "~components/KaizenProvider"
import { backgrounds } from "./backgrounds"
import { DefaultDocsContainer } from "./components/DocsContainer"
import { globalA11yRules } from "./global-a11y-rules"

const IS_CHROMATIC = isChromatic()

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
    <KaizenProvider>
      <Story />
    </KaizenProvider>
  ),
  (Story, context): JSX.Element => {
    useEffect(() => {
      const dir =
        context.parameters.textDirection ?? context.globals.textDirection
      if (document.body.getAttribute("dir") !== dir)
        document.body.setAttribute("dir", dir)
    }, [context])

    return <Story />
  },
  (Story, context) =>
    (context.args.isReversed || context.args.reversed) && !IS_CHROMATIC ? (
      <div className="bg-purple-700 p-16 m-[-1rem]">
        <Story />
      </div>
    ) : (
      <Story />
    ),
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
        language: "tsx",
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Introduction",
          "Tier 1",
          ["Tokens", "*"],
          "Tier 2",
          "Utilities",
          "Deprecated",
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

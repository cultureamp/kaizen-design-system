import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "max-w-"
const classEntries: Array<{
  utilityClassName: string
  cssProperty: string
}> = Object.entries(kaizenTailwindTheme?.extend.maxWidth || []).map(
  ([suffix, cssPropertyArr]) => ({
    utilityClassName: `${prefix}${suffix}`,
    cssProperty: cssPropertyArr as string,
  })
)

export default {
  title: "Systems/Tailwind/Utility Class References/Typography/Max Text Width",
  parameters: {
    chromatic: { disable: false },
    docsLayout: "fullPage",
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
} satisfies Meta

const fontClasses = {
  "max-w-paragraph-lede": "text-paragraph-lede leading-paragraph-lede",
  "max-w-paragraph": "text-paragraph leading-paragraph",
  "max-w-paragraph-sm": "text-paragraph-sm leading-paragraph-sm",
  "max-w-paragraph-xs": "text-paragraph-xs leading-paragraph-xs",
}

export const MaxTextWidth: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <UtilityClassTemplate
    compiledCssPropertyName="max-width"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <>
        <p
          className={[utilityClass, fontClasses[utilityClass] || ""].join(" ")}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio
          incidunt explicabo facilis ipsam, porro magni vero libero itaque rerum
          deserunt quo molestiae expedita dolor? Alias iusto ad maiores odit! (
          {[utilityClass, fontClasses[utilityClass] || ""].join(" ")})
        </p>
        <code className="text-paragraph-sm bg-gray-300 py-4 px-8">
          {[utilityClass, fontClasses[utilityClass] || ""].join(" ")}
        </code>
      </>
    )}
    isReversed={isReversed}
  />
)

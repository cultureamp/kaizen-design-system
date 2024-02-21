import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "kz-max-w-"
const classEntries = Object.entries(
  kaizenTailwindTheme.extend.maxWidth || []
).map(([suffix, cssPropertyArr]) => ({
  utilityClassName: `${prefix}${suffix}`,
  cssProperty: cssPropertyArr as string,
}))

export default {
  title: "Systems/Tailwind/Utility Class References/Typography/Max Text Width",
  parameters: {
    a11y: { disable: true },
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
  "kz-max-w-paragraph-lede": "kz-text-paragraph-lede kz-leading-paragraph-lede",
  "kz-max-w-paragraph": "kz-text-paragraph kz-leading-paragraph",
  "kz-max-w-paragraph-sm": "kz-text-paragraph-sm kz-leading-paragraph-sm",
  "kz-max-w-paragraph-xs": "kz-text-paragraph-xs kz-leading-paragraph-xs",
}

const getFontClass = (utilityClass: string): string =>
  fontClasses[utilityClass as keyof typeof fontClasses] || ""

export const MaxTextWidth: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <UtilityClassTemplate
    compiledCssPropertyName="max-width"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <>
        <p className={[utilityClass, getFontClass(utilityClass)].join(" ")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio
          incidunt explicabo facilis ipsam, porro magni vero libero itaque rerum
          deserunt quo molestiae expedita dolor? Alias iusto ad maiores odit! (
          {[utilityClass, getFontClass(utilityClass)].join(" ")})
        </p>
        <code className="kz-text-paragraph-sm kz-bg-gray-300 kz-py-4 kz-px-8">
          {[utilityClass, getFontClass(utilityClass)].join(" ")}
        </code>
      </>
    )}
    isReversed={isReversed}
  />
)

import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { Card } from "@kaizen/draft-card"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "border-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.borderWidth || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Systems/Tailwind/Utility Class References/Borders/Border Width",
  parameters: {
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <div className="flex flex-col items-center">
    <Card variant="informative" classNameOverride="mb-24">
      <div className="p-24 font-family-paragraph max-w-[1000px]">
        <p>
          This document demonstrates the list of border-width suffixes available
          from the Kaizen preset, by showing what they look like on the
          'border-' prefix.
        </p>
        <p>
          Note that there are other border-width prefixes (such as `border-l-`
          for `border-left-width`) that can be used instead. Available
          border-width prefixes can be referenced{" "}
          <a href="https://tailwindcss.com/docs/border-width">here</a>.
        </p>
      </div>
    </Card>
    <UtilityClassTemplate
      compiledCssPropertyName="border-width"
      classKeyValues={classEntries}
      renderExampleComponent={(utilityClass): React.ReactElement => (
        <div
          className={classnames(
            "w-[100px] h-[100px] border-solid border-[black] border-default",
            utilityClass
          )}
        />
      )}
      isReversed={isReversed}
    />
  </div>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Border Width"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

import React from "react"
import { Story } from "@storybook/react"
import { Card } from "@kaizen/draft-card"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../storybook/constants"
import { UtilityClassTemplate } from "../components/UtilityClassTemplate"
import { utilityDescription } from "../helpers/utilityDescription"

const prefix = "m-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.spacing || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Spacing & Layouts/Margin`,
  parameters: {
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <div className="flex flex-col items-center">
    <Card variant="informative" classNameOverride="mb-24">
      <div className="font-family-paragraph max-w-[1000px] p-24">
        <p>
          The padding prefix 'm-' has been used in the examples in this
          document, which compiles to the `margin` property in CSS.
        </p>
        <p>
          Note that there are other prefixes (such as `ml-` for `margin-left`)
          that can be used instead. Available padding prefixes can be referenced{" "}
          <a href="https://tailwindcss.com/docs/margin#basic-usage">here</a>.
        </p>
      </div>
    </Card>
    <UtilityClassTemplate
      compiledCssPropertyName="margin"
      classKeyValues={classEntries}
      renderExampleComponent={(cssProperty): React.ReactElement => (
        <div className="border-solid w-min rounded-default">
          <p
            className="p-4 border-dashed w-min rounded-default bg-blue-100"
            style={{ margin: cssProperty }}
          >
            Margin
          </p>
        </div>
      )}
      isReversed={isReversed}
    />
  </div>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Margin"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

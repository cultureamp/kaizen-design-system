import React from "react"
import { Story } from "@storybook/react"
import { Card } from "@kaizen/draft-card"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../storybook/constants"
import { UtilityClassTemplate } from "../components/UtilityClassTemplate"
import { utilityDescription } from "../helpers/utilityDescription"

const prefix = "p-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.spacing || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Spacing & Layouts/Padding`,
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
          The padding prefix 'p-' has been used in the examples in this
          document, which compiles to the `padding` property in CSS.
        </p>
        <p>
          Note that there are other prefixes (such as `pl-` for `padding-left`)
          that can be used instead. Available padding prefixes can be referenced{" "}
          <a href="https://tailwindcss.com/docs/padding#basic-usage">here</a>.
        </p>
      </div>
    </Card>
    <UtilityClassTemplate
      compiledCssPropertyName="padding"
      classKeyValues={classEntries}
      renderExampleComponent={(cssProperty): React.ReactElement => (
        <p
          className="border-solid w-min rounded-default bg-blue-100"
          style={{ padding: cssProperty }}
        >
          Padding
        </p>
      )}
      isReversed={isReversed}
    />
  </div>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Padding"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

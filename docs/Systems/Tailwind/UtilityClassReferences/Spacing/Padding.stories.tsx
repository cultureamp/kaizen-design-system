import React from "react"
import { Story } from "@storybook/react"
import classnames from "classnames"
import { GlobalNotification } from "@kaizen/notification"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../../storybook/constants"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "p-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.spacing || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: `${CATEGORIES.tailwind}/Utility Class References/Spacing/Padding`,
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
    <GlobalNotification persistent type="informative">
      <p>
        For information regarding our spacing system, see our{" "}
        <a href="/?path=/story/systems-layout-and-spacing--page">
          spacing docs
        </a>
        .
      </p>
      <p>
        The padding prefix 'p-' has been used in the examples in this document,
        which compiles to the `padding` property in CSS.
      </p>
      <p>
        Note that there are other prefixes (such as `pl-` for `padding-left`)
        that can be used instead. Available padding prefixes can be referenced{" "}
        <a href="https://tailwindcss.com/docs/padding#basic-usage">here</a>.
      </p>
    </GlobalNotification>
    <UtilityClassTemplate
      compiledCssPropertyName="padding"
      classKeyValues={classEntries}
      renderExampleComponent={(utilityClass): React.ReactElement => (
        <p
          className={classnames(
            "border-solid w-min rounded-default bg-blue-100",
            utilityClass
          )}
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

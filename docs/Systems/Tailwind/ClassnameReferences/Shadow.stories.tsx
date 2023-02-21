import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../storybook/constants"
import { UtilityClassTemplate } from "../components/UtilityClassTemplate"
import { utilityDescription } from "../helpers/utilityDescription"
import styles from "./styles.module.scss"

const prefix = "shadow-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.boxShadow || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Effects/Box Shadow`,
  component: <div>Hello</div>,
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
  <UtilityClassTemplate
    compiledCssPropertyName="box-shadow"
    classKeyValues={classEntries}
    renderExampleComponent={(cssProperty): React.ReactElement => (
      <div style={{ boxShadow: cssProperty }} className={styles.box} />
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Box Shadow"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

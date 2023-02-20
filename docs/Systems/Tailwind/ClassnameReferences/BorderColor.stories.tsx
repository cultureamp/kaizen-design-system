import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../storybook/constants"
import { UtilityClassTemplate } from "../components/UtilityClassTemplate"
import { flattenEntries } from "../helpers/flatten-entries"
import { utilityDescription } from "../helpers/utilityDescription"
import styles from "./styles.module.scss"

const prefix = "border-"
const classEntries = flattenEntries(
  prefix,
  kaizenTailwindTheme?.borderColor || {}
)

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Borders/Border Color`,
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
    classKeyValues={classEntries}
    renderExampleComponent={(cssProperty): React.ReactElement => (
      <div
        style={{ borderColor: cssProperty }}
        className={styles.boxWithBorder}
      />
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Border Color"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

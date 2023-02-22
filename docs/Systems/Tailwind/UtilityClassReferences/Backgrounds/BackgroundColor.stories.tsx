import React from "react"
import { Story } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../../storybook/constants"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { flattenEntries } from "../../helpers/flatten-entries"
import { utilityDescription } from "../../helpers/utilityDescription"
import styles from "../styles.module.scss"

const prefix = "bg-"
const classEntries = flattenEntries(
  prefix,
  kaizenTailwindTheme?.borderColor || {}
)

export default {
  title: `${CATEGORIES.tailwind}/Utility Class References/Backgrounds/Background Color`,
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
    compiledCssPropertyName="background-color"
    classKeyValues={classEntries}
    renderExampleComponent={(cssProperty): React.ReactElement => (
      <div
        style={{ backgroundColor: cssProperty }}
        className={classnames(styles.boxWithBorder, "rounded-default")}
      />
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Background Color"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

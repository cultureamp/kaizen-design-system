import React from "react"
import { Story } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../../storybook/constants"
import { CodeSnippet } from "../../components/CodeSnippet"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { flattenEntries } from "../../helpers/flatten-entries"
import { utilityDescription } from "../../helpers/utilityDescription"
import styles from "../styles.module.scss"

const prefix = "text-"
const classEntries = flattenEntries(prefix, kaizenTailwindTheme?.colors || {})

export default {
  title: `${CATEGORIES.tailwind}/Utility Class References/Typography/Text Color`,
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
    compiledCssPropertyName="color"
    classKeyValues={classEntries}
    renderExampleComponent={(cssProperty): React.ReactElement => (
      <div className="flex items-center h-100">
        <p
          className={classnames(
            "font-family-paragraph p-8 rounded-default font-weight-display text-heading-3 m-0 mr-16"
          )}
          style={{ color: cssProperty }}
        >
          Light bg
        </p>
        <p
          className={classnames(
            "font-family-paragraph p-8 bg-[black] rounded-default font-weight-display text-heading-3 m-0"
          )}
          style={{ color: cssProperty }}
        >
          Dark bg
        </p>
      </div>
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Text Color"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

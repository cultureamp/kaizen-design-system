import React from "react"
import { Story } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../../storybook/constants"
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
  <>
    <StoryWrapper hasRowDivider isReversed={isReversed}>
      <StoryWrapper.RowHeader
        headings={[
          "Utility Class",
          "Compiled CSS",
          "Example",
          "Example (dark background)",
        ]}
      />
      {classEntries.map(({ utilityClassName, cssProperty }, index) => (
        <React.Fragment key={index}>
          <StoryWrapper.Row rowTitle="">
            <p className="font-family-paragraph">{utilityClassName}</p>
            <p className="font-family-paragraph">color: {cssProperty}</p>
            <p
              className={classnames(
                "font-family-paragraph",
                styles.textColorExample
              )}
              style={{ color: cssProperty }}
            >
              Aa
            </p>
            <p
              className={classnames(
                "font-family-paragraph",
                styles.textColorExampleDark
              )}
              style={{ color: cssProperty }}
            >
              Aa
            </p>
          </StoryWrapper.Row>
        </React.Fragment>
      ))}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Text Color"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

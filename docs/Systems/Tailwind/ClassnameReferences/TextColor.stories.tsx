import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../storybook/constants"
import { flattenEntries } from "../helpers/flatten-entries"
import styles from "./styles.module.scss"

const prefix = "text-"
const classEntries = flattenEntries(prefix, kaizenTailwindTheme?.colors || {})
export default {
  title: `${CATEGORIES.tailwind}/Classname References/Typography/Text Color`,
  parameters: {
    docs: {
      description: {
        component: `Use class "${prefix}\\$\\{modifier}", ie: className="${prefix}${classEntries[0].className}"`,
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
          "Class",
          "Properties",
          "Example",
          "Example (dark background)",
        ]}
      />
      {classEntries.map(({ className, classValue }, index) => (
        <React.Fragment key={index}>
          <StoryWrapper.Row rowTitle="">
            <p className={className}>{className}</p>
            <p>{classValue}</p>
            {/* TODO: Figure out why colorValue can't be used as a TW class here */}
            {/* (too dynamic? Constructing a similar {colorName, colorValue}[] array and looping over it works, but not the one declared above) */}
            <p
              className={styles.textColorExample}
              style={{ color: classValue }}
            >
              Aa
            </p>
            <p
              className={styles.textColorExampleDark}
              style={{ color: classValue }}
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

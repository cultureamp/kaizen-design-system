import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../storybook/constants"
import styles from "./styles.module.scss"

const prefix = "leading-"
const classKeyVal: string[][] = Object.entries(
  kaizenTailwindTheme?.lineHeight || []
)

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Typography/Line Height`,
  parameters: {
    docs: {
      description: {
        component: `Use class "${prefix}\\$\\{modifier}", ie: className="${prefix}${classKeyVal[0][0]}"`,
      },
    },
  },
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Class", "Properties", "Example"]} />
      {classKeyVal.map((presetData, index) => {
        const [leadingHeightClassName, leadingHeightValue] = presetData

        return (
          <React.Fragment key={index}>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <p>leading-{leadingHeightClassName}</p>
              <p>{leadingHeightValue}</p>
              <p
                style={{ lineHeight: leadingHeightValue }}
                className={styles.wrappedText}
              >
                Tutant Meenage Neetle Teetles
              </p>
            </StoryWrapper.Row>
          </React.Fragment>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Line Height"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

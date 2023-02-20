import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../storybook/constants"

const prefix = "text-"
const classKeyVal: string[][] = Object.entries(
  kaizenTailwindTheme?.fontSize || []
)

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Typography/Font Size`,
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
    <StoryWrapper hasRowDivider isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Class", "Properties", "Example"]} />
      {classKeyVal.map((presetData, index) => {
        const [fontSizeName, fontSizeValue] = presetData

        return (
          <React.Fragment key={index}>
            <StoryWrapper.Row rowTitle="">
              <p>text-{fontSizeName}</p>
              <p>{fontSizeValue}</p>
              <p style={{ fontSize: fontSizeValue }}>Aa</p>
            </StoryWrapper.Row>
          </React.Fragment>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Font Size"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

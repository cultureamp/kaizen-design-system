import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../storybook/constants"

const prefix = "font-"
const classKeyVal: string[][] = Object.entries(
  kaizenTailwindTheme?.fontFamily || []
)
export default {
  title: `${CATEGORIES.tailwind}/Classname References/Typography/Font Family`,
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
        const [fontFamilyClassName, fontFamilyValue] = presetData

        return (
          <React.Fragment key={index}>
            <StoryWrapper.Row rowTitle="">
              <p>font-{fontFamilyClassName}</p>
              <p>{fontFamilyValue}</p>
              <p style={{ fontFamily: fontFamilyValue[0] }}>Aa</p>
            </StoryWrapper.Row>
          </React.Fragment>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Font Family"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

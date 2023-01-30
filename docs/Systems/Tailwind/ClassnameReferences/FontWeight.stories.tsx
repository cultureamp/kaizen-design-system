import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../storybook/constants"

const prefix = "font-"
const classKeyVal: string[][] = Object.entries(
  kaizenTailwindTheme?.fontWeight || []
)

export default {
  title: `${CATEGORIES.tailwind}/ClassName References/Typography/Font Weight`,
  component: <div>Hello</div>,
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
        const [fontWeightClassName, fontWeightValue] = presetData

        return (
          <React.Fragment key={index}>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <p className="height">font-{fontWeightClassName}</p>
              <p>{fontWeightValue}</p>
              <p style={{ fontWeight: fontWeightValue }}>Aa</p>
            </StoryWrapper.Row>
          </React.Fragment>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Font Weight"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

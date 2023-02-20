import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../storybook/constants"

const prefix = "w-"
const classKeyVal: string[][] = Object.entries(kaizenTailwindTheme?.width || [])

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Spacing & layouts/Width`,
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
        const [widthName, widthValue] = presetData

        return (
          <React.Fragment key={index}>
            <StoryWrapper.Row rowTitle="">
              <p>w-{widthName}</p>
              <p>{widthValue}</p>
              <div className="w-100 border-solid rounded-default">
                <div
                  className="h-100 flex items-center bg-blue-400"
                  style={{ width: widthValue }}
                >
                  {widthValue.includes("content") ? (
                    <div className="font-family-paragraph bg-blue-100 p-4 border-dashed border-w-[1px]">
                      Inner content
                    </div>
                  ) : null}
                </div>
              </div>
            </StoryWrapper.Row>
          </React.Fragment>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Width"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

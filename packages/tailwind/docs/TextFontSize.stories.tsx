import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const prefix = "text-"

export default {
  title: "Tailwind/Typography/Text Font Size",
  component: <div>Hello</div>,
  parameters: {
    docs: {
      description: {
        component: `<p className="${prefix}${
          kaizenTailwindTheme.fontSize as { [key: string]: string }
        }"></p>`,
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
      {Object.entries(
        kaizenTailwindTheme.fontSize as { [key: string]: string }
      ).map(presetData => {
        const [fontSizeName, fontSizeValue] = presetData
        if (!fontSizeValue) return <></>

        return (
          <>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <p>text-{fontSizeName}</p>
              <p>{fontSizeValue}</p>
              <p style={{ fontSize: fontSizeValue }}>Aa</p>
            </StoryWrapper.Row>
          </>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

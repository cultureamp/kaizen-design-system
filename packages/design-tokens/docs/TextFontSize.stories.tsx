import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const TailwindPreset = require("@kaizen/design-tokens").TailwindPreset

export default {
  title: "TAILWIND/Typography/Text Font Size",
  component: <div>Hello</div>,
  parameters: {
    docs: {
      description: {
        component: 'import { Avatar } from "@kaizen/draft-avatar"',
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
        TailwindPreset.theme.fontSize as { [key: string]: string }
      ).map(presetData => {
        const [fontSizeName, fontSizeValue] = presetData
        if (!fontSizeValue) return <></>

        return (
          <>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <div>text-{fontSizeName}</div>
              <div>{fontSizeValue}</div>
              <div style={{ fontSize: fontSizeValue }}>Aa</div>
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

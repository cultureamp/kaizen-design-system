import React from "react"
import { Story } from "@storybook/react"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const TailwindPreset = require("@kaizen/design-tokens").TailwindPreset

export default {
  title: "TAILWIND/Typography/Text Color",
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
}) => {
  const colors: Array<{ colorName: string; colorValue: string }> = []
  Object.entries(TailwindPreset.theme.colors).forEach(colorGroup => {
    const [colorName, colorValue] = colorGroup
    if (typeof colorValue === "string") {
      colors.push({ colorName: `text-${colorName}`, colorValue })
    } else {
      Object.entries(colorValue as Record<string, string>).forEach(
        colorNamePair =>
          colors.push({
            colorName: `text-${colorName}-${colorNamePair[0]}`,
            colorValue: colorNamePair[1],
          })
      )
    }
  })

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader headings={["Class", "Properties", "Example"]} />
        {colors.map(({ colorName, colorValue }) => (
          <StoryWrapper.Row rowTitle="">
            <div>{colorName}</div>
            <div>{colorValue}</div>
            {/* TODO: Figure out why colorValue can't be used as a TW class here */}
            {/* (too dynamic? Constructing a similar {colorName, colorValue}[] array and looping over it works, but not the one declared above) */}
            <div style={{ color: colorValue }}>Aa</div>
          </StoryWrapper.Row>
        ))}
      </StoryWrapper>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

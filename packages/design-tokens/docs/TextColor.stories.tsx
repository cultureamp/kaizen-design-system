import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

import styles from "./styles.module.scss"
const TailwindPreset = require("@kaizen/design-tokens").TailwindPreset

export default {
  title: "Tailwind/Typography/Text Color",
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
        <StoryWrapper.RowHeader
          headings={[
            "Class",
            "Properties",
            "Example",
            "Example (dark background)",
          ]}
        />
        {colors.map(({ colorName, colorValue }) => (
          <>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <p>{colorName}</p>
              <p>{colorValue}</p>
              {/* TODO: Figure out why colorValue can't be used as a TW class here */}
              {/* (too dynamic? Constructing a similar {colorName, colorValue}[] array and looping over it works, but not the one declared above) */}
              <p
                className={styles.textColorExample}
                style={{ color: colorValue }}
              >
                Aa
              </p>
              <p
                className={styles.textColorExampleDark}
                style={{ color: colorValue }}
              >
                Aa
              </p>
            </StoryWrapper.Row>
          </>
        ))}
      </StoryWrapper>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

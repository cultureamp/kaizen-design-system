import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import styles from "./styles.module.scss"

const TailwindPreset = require("@kaizen/design-tokens").TailwindPreset

export default {
  title: "Tailwind/Borders/Border Width",
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
        TailwindPreset.theme.borderWidth as { [key: string]: string }
      ).map(presetData => {
        const [borderWidthClassName, borderWidthValue] = presetData
        if (!borderWidthValue) return <></>

        return (
          <>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <p>border-{borderWidthClassName}</p>
              <p>{borderWidthValue}</p>
              <div
                style={{ borderWidth: borderWidthValue }}
                className={styles.boxWithBorder}
              />
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

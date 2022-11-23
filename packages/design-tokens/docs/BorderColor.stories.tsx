import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import styles from "./styles.module.scss"
import { kaizenTailwindTheme } from "@kaizen/design-tokens"
// the old way
// const TailwindPreset = require("@kaizen/design-tokens").TailwindPreset
// the new way

export default {
  title: "Tailwind/Borders/Border Color",
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
        kaizenTailwindTheme.borderColor as { [key: string]: string }
      ).map((presetData, index) => {
        const [borderColorClassName, borderColorValue] = presetData
        if (!borderColorValue) return <></>

        return (
          <React.Fragment key={index}>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <p>border-{borderColorClassName}</p>
              <p>{borderColorValue}</p>
              <div
                style={{ borderColor: borderColorValue }}
                className={styles.boxWithBorder}
              />
            </StoryWrapper.Row>
          </React.Fragment>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import styles from "./styles.module.scss"

const prefix = "border-"

export default {
  title: "Tailwind/Borders/Border Color",
  parameters: {
    docs: {
      description: {
        component: `<p className="${prefix}${
          kaizenTailwindTheme.borderColor as { [key: string]: string }
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
StickerSheetDefault.storyName = "Border Color"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

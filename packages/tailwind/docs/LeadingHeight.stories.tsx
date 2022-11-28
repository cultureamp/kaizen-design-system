import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import styles from "./styles.module.scss"

export default {
  title: "Tailwind/Typography/Line Height",
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
        kaizenTailwindTheme.lineHeight as { [key: string]: string }
      ).map(presetData => {
        const [leadingHeightClassName, leadingHeightValue] = presetData
        if (!leadingHeightValue) return <></>

        return (
          <>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <p>leading-{leadingHeightClassName}</p>
              <p>{leadingHeightValue}</p>
              <p
                style={{ lineHeight: leadingHeightValue }}
                className={styles.wrappedText}
              >
                Tutant Meenage Neetle Teetles
              </p>
            </StoryWrapper.Row>
          </>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Line Height"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

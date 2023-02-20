import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../storybook/constants"
import styles from "./styles.module.scss"

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Borders/Border Width`,
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
    <StoryWrapper hasRowDivider isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Class", "Properties", "Example"]} />
      {Object.entries(
        kaizenTailwindTheme.borderWidth as { [key: string]: string }
      ).map(presetData => {
        const [borderWidthClassName, borderWidthValue] = presetData
        if (!borderWidthValue) return <></>

        return (
          <>
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
StickerSheetDefault.storyName = "Border Width"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

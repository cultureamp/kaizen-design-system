import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../storybook/constants"
import styles from "./styles.module.scss"

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Effects/Box Shadow`,
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
        kaizenTailwindTheme.boxShadow as { [key: string]: string }
      ).map(presetData => {
        const [shadowClassName, shadowValue] = presetData
        if (!shadowValue) return <></>

        return (
          <>
            <StoryWrapper.Row rowTitle="">
              <p>shadow-{shadowClassName}</p>
              <p>{shadowValue}</p>
              <div style={{ boxShadow: shadowValue }} className={styles.box} />
            </StoryWrapper.Row>
          </>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Box Shadow"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

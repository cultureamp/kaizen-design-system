import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import styles from "./styles.module.scss"

const TailwindPreset = require("@kaizen/design-tokens").TailwindPreset

export default {
  title: "TAILWIND/Effects/Shadow",
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
        TailwindPreset.theme.boxShadow as { [key: string]: string }
      ).map(presetData => {
        const [shadowClassName, shadowValue] = presetData
        if (!shadowValue) return <></>

        return (
          <>
            <Divider variant="canvas" />
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
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

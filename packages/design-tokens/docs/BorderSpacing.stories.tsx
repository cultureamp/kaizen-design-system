import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import styles from "./styles.module.scss"

const TailwindPreset = require("@kaizen/design-tokens").TailwindPreset

export default {
  title: "Tailwind/Borders/Border Spacing",
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
        TailwindPreset.theme.spacing as { [key: string]: string }
      ).map(presetData => {
        const [borderSpacingClassName, borderSpacingValue] = presetData
        if (!borderSpacingValue) return <></>

        return (
          <>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <p>border-{borderSpacingClassName}</p>
              <p>{borderSpacingValue}</p>
              {/* <div
                style={{ borderSpacing: borderSpacingValue }}
                className={styles.boxWithBorder}
              /> */}
              <table style={{ borderSpacing: borderSpacingValue }}>
                <tr>
                  <td className={styles.outlined}>Tutant</td>
                  <td className={styles.outlined}>Meenage</td>
                </tr>
                <tr>
                  <td className={styles.outlined}>Neetle</td>
                  <td className={styles.outlined}>Teetles</td>
                </tr>
              </table>
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

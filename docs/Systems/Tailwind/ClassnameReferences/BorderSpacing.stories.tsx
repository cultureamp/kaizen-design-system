import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../storybook/constants"
import styles from "./styles.module.scss"

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Borders/Border Spacing`,
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
        kaizenTailwindTheme.spacing as { [key: string]: string }
      ).map(presetData => {
        const [borderSpacingClassName, borderSpacingValue] = presetData
        if (!borderSpacingValue) return <></>

        return (
          <>
            <StoryWrapper.Row rowTitle="">
              <p>border-{borderSpacingClassName}</p>
              <p>{borderSpacingValue}</p>
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
StickerSheetDefault.storyName = "Border Spacing"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

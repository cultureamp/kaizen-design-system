import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { flattenEntries } from "../helpers/flatten-entries"
import styles from "./styles.module.scss"

const prefix = "border-"
const classEntries = flattenEntries(
  prefix,
  kaizenTailwindTheme?.borderColor || {}
)

export default {
  title: "Tailwind/Classname References/Borders/Border Color",
  parameters: {
    docs: {
      description: {
        component: `Use class "${prefix}\\$\\{modifier}", ie: className="${prefix}${classEntries[0].className}"`,
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
      {classEntries.map(({ className, classValue }, index) => (
        <React.Fragment key={index}>
          <Divider variant="canvas" />
          <StoryWrapper.Row rowTitle="">
            <p>{className}</p>
            <p>{classValue}</p>
            <div
              style={{ borderColor: classValue }}
              className={styles.boxWithBorder}
            />
          </StoryWrapper.Row>
        </React.Fragment>
      ))}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Border Color"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

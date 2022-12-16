import React, { ButtonHTMLAttributes } from "react"
import { ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { withDesign } from "storybook-addon-designs"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { NewButton, NewButtonProps } from "../src/StyledButton/NewButton"
import styles from "./StyledButton.module.scss"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/StyledButton/NewButton`,
  component: NewButton,
  parameters: {
    // actions: {
    //   argTypesRegex: "^on.*",
    // },
    docs: {
      description: {
        component:
          'import { Button, IconButton } from "@kaizen/button". This Button supersedes "@kaizen/draft-button".',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory: ComponentStory<typeof NewButton> = args => (
  <NewButton {...args} />
)
DefaultStory.storyName = "NewButton"
DefaultStory.args = {
  variant: "default",
  children: "Click for pancakes",
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const VARIANTS: Array<NewButtonProps["variant"]> = [
    "default",
    "primary",
    "secondary",
    "secondaryDestructive",
  ]

  return (
    <>
      <StickerSheet isReversed={isReversed} heading="NewButton">
        <StickerSheet.Header
          headings={[
            "Default / Disabled",
            "Hover / Working",
            "Active / classNameOverride",
            "Focus",
          ]}
          hasVerticalHeadings
        />
        {VARIANTS.map(variant => (
          <StickerSheet.Body key={variant}>
            <StickerSheet.Row rowTitle={variant}>
              <NewButton isReversed={isReversed} variant={variant}>
                Pancakes
              </NewButton>

              <NewButton
                isReversed={isReversed}
                variant={variant}
                classNameOverride="story__NewButton--hover"
              >
                Pancakes
              </NewButton>

              <NewButton
                isReversed={isReversed}
                variant={variant}
                classNameOverride="story__NewButton--active"
              >
                Pancakes
              </NewButton>

              <NewButton
                isReversed={isReversed}
                variant={variant}
                classNameOverride="story__NewButton--focus"
              >
                Pancakes
              </NewButton>
            </StickerSheet.Row>

            <StickerSheet.Row>
              <div />
              <NewButton
                isReversed={isReversed}
                variant={variant}
                disabled
              >
                Pancakes
              </NewButton>

              <NewButton isReversed={isReversed} variant={variant} isWorking>
                Pancakes
              </NewButton>

              <NewButton isReversed={isReversed} variant={variant} classNameOverride={styles.red}>
                Pancakes
              </NewButton>
            </StickerSheet.Row>

            {/* <StickerSheet.Row>
              <div />
              <NewButton
                isReversed={isReversed}
                variant={variant}
                icon={addIcon}
              >
                <button>
                  Button qwerty qwerty qwerty qwerty qwerty qwerty
                </button>
              </NewButton>

              <NewButton
                isReversed={isReversed}
                variant={variant}
                icon={arrowRight}
                iconPosition="end"
              >
                Pancakes
              </NewButton>
            </StickerSheet.Row> */}
          </StickerSheet.Body>
        ))}
      </StickerSheet>
          </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}

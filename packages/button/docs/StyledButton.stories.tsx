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
import { StyledIconButton } from "../src/StyledButton/StyledIconButton"
import { StyledButton, StyledButtonProps, StyledButton2, NewButton } from ".."
import styles from "./StyledButton.module.scss"

const IS_CHROMATIC = isChromatic()

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/StyledButton`,
  component: StyledButton2,
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

export const DefaultStory: ComponentStory<typeof StyledButton2> = args => (
  <StyledButton2 {...args} />
)
DefaultStory.storyName = "StyledButton2"
DefaultStory.args = {
  variant: "default",
  element: <button>Button</button>,
}

type CustomButtonProps = OverrideClassName<
  ButtonHTMLAttributes<HTMLButtonElement>
>

const CustomButton: React.VFC<CustomButtonProps> = ({
  classNameOverride,
  ...restProps
}) => <button className={classNameOverride} {...restProps} />

type LabelButtonProps = Omit<
  OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>>,
  "children"
> & { label: React.ReactNode }

const LabelButton: React.VFC<LabelButtonProps> = ({
  label,
  classNameOverride,
  ...restProps
}) => (
  <button className={classNameOverride} {...restProps}>
    {label}
  </button>
)

const AddIcon = () => <Icon icon={addIcon} title="Add" />

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const VARIANTS: Array<StyledButtonProps["variant"]> = [
    "default",
    "primary",
    "secondary",
    "secondaryDestructive",
  ]

  return (
    <>
      <StickerSheet isReversed={isReversed} heading="StyledButton">
        <StickerSheet.Header
          headings={[
            "Default / Disabled",
            "Hover / Working",
            "Active / className",
            "Focus / classNameOverride",
          ]}
          hasVerticalHeadings
          headingsWidth={250}
        />
        {VARIANTS.map(variant => (
          <StickerSheet.Body key={variant}>
            <StickerSheet.Row rowTitle={variant}>
              <StyledButton isReversed={isReversed} variant={variant}>
                <button>Button</button>
              </StyledButton>

              <StyledButton
                isReversed={isReversed}
                variant={variant}
                classNameOverride="story__StyledButton--hover"
              >
                <button>Button</button>
              </StyledButton>

              <StyledButton
                isReversed={isReversed}
                variant={variant}
                classNameOverride="story__StyledButton--active"
              >
                <button>Button</button>
              </StyledButton>

              <StyledButton
                isReversed={isReversed}
                variant={variant}
                classNameOverride="story__StyledButton--focus"
              >
                <button>Button</button>
              </StyledButton>
            </StickerSheet.Row>

            <StickerSheet.Row>
              <div />
              <StyledButton
                isReversed={isReversed}
                variant={variant}
                isDisabled
              >
                <button disabled>Button</button>
              </StyledButton>

              <StyledButton isReversed={isReversed} variant={variant} isWorking>
                <button>Button</button>
              </StyledButton>

              <StyledButton isReversed={isReversed} variant={variant}>
                <button className={styles.red}>Button</button>
              </StyledButton>

              <StyledButton isReversed={isReversed} variant={variant}>
                <CustomButton classNameOverride={styles.red}>
                  Button
                </CustomButton>
              </StyledButton>
            </StickerSheet.Row>

            <StickerSheet.Row>
              <div />
              <StyledButton
                isReversed={isReversed}
                variant={variant}
                contentsPropName="label"
              >
                <LabelButton label="Label" />
              </StyledButton>

              <StyledButton
                isReversed={isReversed}
                variant={variant}
                contentsPropName="label"
                isWorking
              >
                <LabelButton label="Label" />
              </StyledButton>
            </StickerSheet.Row>

            <StickerSheet.Row>
              <div />
              <StyledButton
                isReversed={isReversed}
                variant={variant}
                icon={addIcon}
              >
                <button>
                  Button qwerty qwerty qwerty qwerty qwerty qwerty
                </button>
              </StyledButton>

              <StyledButton
                isReversed={isReversed}
                variant={variant}
                icon={arrowRight}
                iconPosition="end"
              >
                <button>Button</button>
              </StyledButton>
            </StickerSheet.Row>
          </StickerSheet.Body>
        ))}
      </StickerSheet>

      <StickerSheet isReversed={isReversed} heading="StyledButton2">
        <StickerSheet.Header
          headings={[
            "Default / Disabled",
            "Hover / Working",
            "Active / className",
            "Focus / classNameOverride",
          ]}
          hasVerticalHeadings
          headingsWidth={250}
        />
        {VARIANTS.map(variant => (
          <StickerSheet.Body key={variant}>
            <StickerSheet.Row rowTitle={variant}>
              <StyledButton2
                isReversed={isReversed}
                element={<button>Button</button>}
                variant={variant}
              />

              <StyledButton2
                isReversed={isReversed}
                element={<button>Button</button>}
                variant={variant}
                classNameOverride="story__StyledButton--hover"
              />

              <StyledButton2
                isReversed={isReversed}
                element={<button>Button</button>}
                variant={variant}
                classNameOverride="story__StyledButton--active"
              />

              <StyledButton2
                isReversed={isReversed}
                element={<button>Button</button>}
                variant={variant}
                classNameOverride="story__StyledButton--focus"
              />
            </StickerSheet.Row>

            <StickerSheet.Row>
              <div />
              <StyledButton2
                isReversed={isReversed}
                element={<button disabled>Button</button>}
                variant={variant}
                isDisabled
              />

              <StyledButton2
                isReversed={isReversed}
                element={<button disabled>Button</button>}
                variant={variant}
                isWorking
              />

              <StyledButton2
                isReversed={isReversed}
                element={<button className={styles.red}>Button</button>}
                variant={variant}
              />

              <StyledButton2
                isReversed={isReversed}
                element={
                  <CustomButton classNameOverride={styles.red}>
                    Button
                  </CustomButton>
                }
                variant={variant}
              />
            </StickerSheet.Row>

            <StickerSheet.Row>
              <div />
              <StyledButton2
                isReversed={isReversed}
                variant={variant}
                contentsPropName="label"
                element={<LabelButton label="Label" />}
              />

              <StyledButton2
                isReversed={isReversed}
                variant={variant}
                contentsPropName="label"
                element={<LabelButton label="Label" />}
                isWorking
              />
            </StickerSheet.Row>
          </StickerSheet.Body>
        ))}
      </StickerSheet>

      <StickerSheet isReversed={isReversed} heading="StyledIconButton">
        <StickerSheet.Header
          headings={[
            "Default / Disabled",
            "Hover / Working",
            "Active / className",
            "Focus / classNameOverride",
          ]}
          hasVerticalHeadings
          headingsWidth={250}
        />
        {VARIANTS.map(variant => (
          <StickerSheet.Body key={variant}>
            <StickerSheet.Row rowTitle={variant}>
              <StyledIconButton
                isReversed={isReversed}
                element={
                  <button>
                    <AddIcon />
                  </button>
                }
                variant={variant}
              />

              <StyledIconButton
                isReversed={isReversed}
                element={
                  <button>
                    <AddIcon />
                  </button>
                }
                variant={variant}
                classNameOverride="story__StyledButton--hover"
              />

              <StyledIconButton
                isReversed={isReversed}
                element={
                  <button>
                    <AddIcon />
                  </button>
                }
                variant={variant}
                classNameOverride="story__StyledButton--active"
              />

              <StyledIconButton
                isReversed={isReversed}
                element={
                  <button>
                    <AddIcon />
                  </button>
                }
                variant={variant}
                classNameOverride="story__StyledButton--focus"
              />
            </StickerSheet.Row>

            <StickerSheet.Row>
              <div />
              <StyledIconButton
                isReversed={isReversed}
                element={
                  <button disabled>
                    <AddIcon />
                  </button>
                }
                variant={variant}
                isDisabled
              />

              <StyledIconButton
                isReversed={isReversed}
                element={
                  <button>
                    <AddIcon />
                  </button>
                }
                variant={variant}
                isWorking
              />

              <StyledIconButton
                isReversed={isReversed}
                element={
                  <button className={styles.red}>
                    <AddIcon />
                  </button>
                }
                variant={variant}
              />

              <StyledIconButton
                isReversed={isReversed}
                element={
                  <CustomButton classNameOverride={styles.red}>
                    <AddIcon />
                  </CustomButton>
                }
                variant={variant}
              />
            </StickerSheet.Row>

            <StickerSheet.Row>
              <div />
              <StyledIconButton
                isReversed={isReversed}
                variant={variant}
                contentsPropName="label"
                element={<LabelButton label={<AddIcon />} />}
              />

              <StyledIconButton
                isReversed={isReversed}
                variant={variant}
                contentsPropName="label"
                element={<LabelButton label={<AddIcon />} />}
                isWorking
              />
            </StickerSheet.Row>
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

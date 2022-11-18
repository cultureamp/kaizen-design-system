import React, { ButtonHTMLAttributes } from "react"
import { ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { withDesign } from "storybook-addon-designs"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import { Heading } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StyledIconButton } from "../src/StyledButton/StyledIconButton"
import { StyledButton, StyledButtonProps, StyledButton2 } from ".."
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

export const DefaultStory: ComponentStory<typeof StyledButton2> = args => <StyledButton2 {...args} />
DefaultStory.storyName = "StyledButton2"
DefaultStory.args = {
  variant: "default",
  element: <button>Button</button>
}

type CustomButtonProps = OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>>

const CustomButton: React.VFC<CustomButtonProps> = ({
  classNameOverride,
  ...restProps
}) => (
  <button className={classNameOverride} {...restProps} />
)

const AddIcon = () => (
  <Icon icon={addIcon} title="Add" />
)

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const VARIANTS: Array<StyledButtonProps["variant"]> = [
    "default",
    "primary",
    "secondary",
    "secondaryDestructive",
  ]

  const SectionHeading: React.VFC<{ heading: string }> = ({ heading }) => (
    <Heading variant="heading-3" tag="h1" color={isReversed ? "white" : "dark"}>
      {heading}
    </Heading>
  )

  return (
    <StoryWrapper isReversed={isReversed}>
      <SectionHeading heading="StyledButton" />
      <StoryWrapper.RowHeader
        headings={["Default", "Hover", "Active", "Focus", "Disabled", "className", "classNameOverride"]}
      />
      {VARIANTS.map(variant => (
        <React.Fragment key={variant}>
        <StoryWrapper.Row rowTitle={variant}>
          <StyledButton variant={variant}>
            <button>Button</button>
          </StyledButton>

          <StyledButton variant={variant} classNameOverride="story__StyledButton--hover">
            <button>Button</button>
          </StyledButton>

          <StyledButton variant={variant} classNameOverride="story__StyledButton--active">
            <button>Button</button>
          </StyledButton>

          <StyledButton variant={variant} classNameOverride="story__StyledButton--focus">
            <button>Button</button>
          </StyledButton>

          <StyledButton variant={variant}>
            <button disabled>Button</button>
          </StyledButton>

          <StyledButton variant={variant}>
            <button className={styles.red}>Button</button>
          </StyledButton>

          <StyledButton variant={variant}>
            <CustomButton classNameOverride={styles.red}>Button</CustomButton>
          </StyledButton>
        </StoryWrapper.Row>
        </React.Fragment>
      ))}

      <SectionHeading heading="StyledButton2" />
      <StoryWrapper.RowHeader
        headings={["Default", "Hover", "Active", "Focus", "Disabled", "className", "classNameOverride"]}
      />
      {VARIANTS.map(variant => (
        <React.Fragment key={variant}>
        <StoryWrapper.Row rowTitle={variant}>
          <StyledButton2
            element={<button>Button</button>}
            variant={variant}
          />

          <StyledButton2
            element={<button>Button</button>}
            variant={variant}
            classNameOverride="story__StyledButton--hover"
          />

          <StyledButton2
            element={<button>Button</button>}
            variant={variant}
            classNameOverride="story__StyledButton--active"
          />

          <StyledButton2
            element={<button>Button</button>}
            variant={variant}
            classNameOverride="story__StyledButton--focus"
          />

          <StyledButton2
            element={<button disabled>Button</button>}
            variant={variant}
          />

          <StyledButton2
            element={<button className={styles.red}>Button</button>}
            variant={variant}
          />

          <StyledButton2
            element={<CustomButton classNameOverride={styles.red}>Button</CustomButton>}
            variant={variant}
          />
        </StoryWrapper.Row>
        </React.Fragment>
      ))}

      <SectionHeading heading="StyledIconButton" />
      <StoryWrapper.RowHeader
        headings={["Default", "Hover", "Active", "Focus", "Disabled", "className", "classNameOverride"]}
      />
      {VARIANTS.map(variant => (
        <React.Fragment key={variant}>
        <StoryWrapper.Row rowTitle={variant}>
          <StyledIconButton
            element={<button><AddIcon /></button>}
            variant={variant}
          />

          <StyledIconButton
            element={<button><AddIcon /></button>}
            variant={variant}
            classNameOverride="story__StyledButton--hover"
          />

          <StyledIconButton
            element={<button><AddIcon /></button>}
            variant={variant}
            classNameOverride="story__StyledButton--active"
          />

          <StyledIconButton
            element={<button><AddIcon /></button>}
            variant={variant}
            classNameOverride="story__StyledButton--focus"
          />

          <StyledIconButton
            element={<button disabled><AddIcon /></button>}
            variant={variant}
          />

          <StyledIconButton
            element={
            <button className={styles.red}>
              <AddIcon />
            </button>
            }
            variant={variant}
          />

          <StyledIconButton
            element={
            <CustomButton classNameOverride={styles.red}>
              <AddIcon />
            </CustomButton>
            }
            variant={variant}
          />
        </StoryWrapper.Row>
        </React.Fragment>
      ))}
    </StoryWrapper>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

// export const StickerSheetReversed = StickerSheetTemplate.bind({})
// StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
// StickerSheetReversed.args = { isReversed: true }
// StickerSheetReversed.parameters = {
//   controls: { disable: true },
//   backgrounds: { default: "Purple 700" },
//   chromatic: { disable: false },
// }

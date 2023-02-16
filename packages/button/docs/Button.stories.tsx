import React from "react"
import isChromatic from "chromatic"
import { withDesign } from "storybook-addon-designs"
import { Story } from "@storybook/react"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import { Heading } from "@kaizen/typography"
import { Button, ButtonProps } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const IS_CHROMATIC = isChromatic()

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/Button`,
  component: Button,
  args: {
    label: "Label",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
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

export const DefaultKaizenSiteDemo = args => <Button {...args} />
DefaultKaizenSiteDemo.storyName = "Button"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const REVERSED__VARIANT_PROPS: Array<{
    title: string
    props: ButtonProps
  }> = [
    {
      title: "Default",
      props: {
        label: "Label",
      },
    },
    {
      title: "Primary",
      props: {
        label: "Label",
        primary: true,
      },
    },
    {
      title: "Destructive",
      props: {
        label: "Label",
        destructive: true,
      },
    },
    {
      title: "Secondary",
      props: {
        label: "Label",
        secondary: true,
      },
    },
  ]

  const VARIANTS_PROPS: Array<{
    title: string
    props: ButtonProps
  }> = isReversed
    ? REVERSED__VARIANT_PROPS
    : [
        ...REVERSED__VARIANT_PROPS,
        {
          title: "Secondary Destructive",
          props: {
            label: "Label",
            secondary: true,
            destructive: true,
          },
        },
      ]

  const WORKING_PROPS: ButtonProps = {
    label: "Label",
    working: true,
    workingLabel: "Submitting",
    workingLabelHidden: true,
  }

  const ICON_LEFT_PROPS: ButtonProps = {
    label: "Label",
    icon: addIcon,
  }

  const ICON_RIGHT_PROPS: ButtonProps = {
    label: "Label",
    icon: arrowRight,
    iconPosition: "end",
  }

  const SectionHeading: React.VFC<{ heading: string }> = ({ heading }) => (
    <Heading variant="heading-3" tag="h1" color={isReversed ? "white" : "dark"}>
      {heading}
    </Heading>
  )

  return (
    <div style={{ paddingBottom: "1rem" }}>
      <StoryWrapper isReversed={isReversed}>
        <SectionHeading heading="Button" />
        <StoryWrapper.RowHeader
          headings={["Base", "Hover", "Active", "Focus", "Disabled"]}
        />
        {VARIANTS_PROPS.map(({ title, props }) => (
          <StoryWrapper.Row rowTitle={title}>
            <Button reversed={isReversed} {...props} />
            <Button
              reversed={isReversed}
              classNameOverride="story__button-hover"
              {...props}
            />
            <Button
              reversed={isReversed}
              classNameOverride="story__button-active"
              {...props}
            />
            <Button
              reversed={isReversed}
              classNameOverride="story__button-focus"
              {...props}
            />
            <Button reversed={isReversed} {...props} disabled />
          </StoryWrapper.Row>
        ))}
      </StoryWrapper>

      {IS_CHROMATIC && (
        <StoryWrapper isReversed={isReversed}>
          <SectionHeading heading="Form (to be deprecated)" />
          <StoryWrapper.RowHeader
            headings={[
              "Base",
              "Hover",
              "Active",
              "Focus",
              "Disabled",
              "Working",
              "Working Focus",
            ]}
          />
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StoryWrapper.Row rowTitle={title}>
              <Button reversed={isReversed} {...props} compact />
              <Button
                reversed={isReversed}
                classNameOverride="story__button-hover"
                {...props}
                compact
              />
              <Button
                reversed={isReversed}
                classNameOverride="story__button-active"
                {...props}
                compact
              />
              <Button
                reversed={isReversed}
                classNameOverride="story__button-focus"
                {...props}
                compact
              />
              <Button reversed={isReversed} {...props} disabled compact />
              <Button
                reversed={isReversed}
                {...props}
                compact
                {...WORKING_PROPS}
              />
              <Button
                reversed={isReversed}
                {...props}
                compact
                classNameOverride="story__button-focus"
                {...WORKING_PROPS}
              />
            </StoryWrapper.Row>
          ))}
        </StoryWrapper>
      )}

      <StoryWrapper isReversed={isReversed}>
        <SectionHeading heading="Working / With Icon" />
        <StoryWrapper.RowHeader
          headings={["Working", "Working (Focus)", "Icon Left", "Icon Right"]}
        />
        {VARIANTS_PROPS.map(({ title, props }) => (
          <StoryWrapper.Row rowTitle={title}>
            <Button reversed={isReversed} {...props} {...WORKING_PROPS} />
            <Button
              reversed={isReversed}
              classNameOverride="story__button-focus"
              {...props}
              {...WORKING_PROPS}
            />
            <Button reversed={isReversed} {...props} {...ICON_LEFT_PROPS} />
            <Button reversed={isReversed} {...props} {...ICON_RIGHT_PROPS} />
          </StoryWrapper.Row>
        ))}
      </StoryWrapper>
    </div>
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

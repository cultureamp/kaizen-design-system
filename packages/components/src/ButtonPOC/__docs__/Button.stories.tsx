import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { withDesign } from "storybook-addon-designs"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { SUB_CATEGORIES } from "../../../../../storybook/constants"
import { figmaEmbed } from "../../../../../storybook/helpers"
import { Button, ButtonProps } from ".."

const IS_CHROMATIC = isChromatic()

export default {
  title: `AIO/${SUB_CATEGORIES.button}/Button`,
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
} as ComponentMeta<typeof Button>

export const DefaultStory: ComponentStory<typeof Button> = args => (
  <Button {...args} />
)
DefaultStory.storyName = "Button"

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

  const BADGE_PROPS: ButtonProps = {
    label: "Label",
    badge: { text: "4" },
  }
  const BADGE_LEFT_PROPS: ButtonProps = {
    ...BADGE_PROPS,
    icon: filterIcon,
  }

  const BADGE_RIGHT_PROPS: ButtonProps = {
    ...BADGE_PROPS,
    icon: arrowRight,
    iconPosition: "end",
  }

  return (
    <>
      <StickerSheet heading="Button" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Base", "Hover", "Active", "Focus", "Disabled"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row rowTitle={title}>
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
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>

      {IS_CHROMATIC && (
        <StickerSheet isReversed={isReversed} heading="Form (to be deprecated)">
          <StickerSheet.Header
            headings={[
              "Base",
              "Hover",
              "Active",
              "Focus",
              "Disabled",
              "Working",
              "Working Focus",
            ]}
            hasVerticalHeadings
          />
          <StickerSheet.Body>
            {VARIANTS_PROPS.map(({ title, props }) => (
              <StickerSheet.Row rowTitle={title}>
                <Button reversed={isReversed} {...props} form />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-hover"
                  {...props}
                  form
                />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-active"
                  {...props}
                  form
                />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-focus"
                  {...props}
                  form
                />
                <Button reversed={isReversed} {...props} disabled form />
                <Button
                  reversed={isReversed}
                  {...props}
                  form
                  {...WORKING_PROPS}
                />
                <Button
                  reversed={isReversed}
                  {...props}
                  form
                  classNameOverride="story__button-focus"
                  {...WORKING_PROPS}
                />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>
      )}

      <StickerSheet
        isReversed={isReversed}
        heading="Working / With Icon / With Badge"
      >
        <StickerSheet.Header
          headings={[
            "Working",
            "Working (Focus)",
            "Icon Left",
            "Icon Right",
            "Icon Left with Badge",
            "Icon Right with Badge",
            "Badge Only",
          ]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row rowTitle={title}>
              <Button reversed={isReversed} {...props} {...WORKING_PROPS} />
              <Button
                reversed={isReversed}
                classNameOverride="story__button-focus"
                {...props}
                {...WORKING_PROPS}
              />
              <Button reversed={isReversed} {...props} {...ICON_LEFT_PROPS} />
              <Button reversed={isReversed} {...props} {...ICON_RIGHT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_LEFT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_RIGHT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_PROPS} />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
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

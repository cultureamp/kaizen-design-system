import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { IconButtonProps } from "@kaizen/button"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { IconButton, ButtonProps } from ".."

export default {
  title: "Components/Icon Button",
  component: IconButton,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component:
          'import { IconButton } from "@kaizen/button". This Button supersedes "@kaizen/draft-button".',
      },
    },
  },
} as Meta<typeof IconButton>

export const DefaultKaizenSiteDemo: StoryFn<typeof IconButton> = args => (
  <IconButton {...args} />
)
DefaultKaizenSiteDemo.storyName = "Icon Button"
DefaultKaizenSiteDemo.args = {
  label: "Icon label",
  icon: trashIcon,
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const WORKING_PROPS: ButtonProps = {
    label: "Label",
    working: true,
    workingLabel: "Submitting",
    workingLabelHidden: true,
  }

  const REVERSED__VARIANT_PROPS: Array<{
    title: string
    props: IconButtonProps
  }> = [
    {
      title: "Default",
      props: {
        label: "Default label",
        icon: meatballsIcon,
      },
    },
    {
      title: "Primary",
      props: {
        label: "Primary label",
        icon: meatballsIcon,
        primary: true,
      },
    },
    {
      title: "Destructive",
      props: {
        label: "Label",
        icon: trashIcon,
        destructive: true,
      },
    },
    {
      title: "Secondary",
      props: {
        label: "Label",
        icon: filterIcon,
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
            icon: trashIcon,
            secondary: true,
            destructive: true,
          },
        },
      ]

  return (
    <div style={{ paddingBottom: "1rem" }}>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Base", "Hover", "Active", "Focus", "Disabled", "Working"]}
        />
        {VARIANTS_PROPS.map(({ title, props }) => (
          <StoryWrapper.Row key={title} rowTitle={title}>
            <IconButton reversed={isReversed} {...props} />
            <IconButton
              reversed={isReversed}
              classNameOverride="story__button-hover"
              {...props}
            />
            <IconButton
              reversed={isReversed}
              classNameOverride="story__button-active"
              {...props}
            />
            <IconButton
              reversed={isReversed}
              classNameOverride="story__button-focus"
              {...props}
            />
            <IconButton reversed={isReversed} {...props} disabled />
            <IconButton reversed={isReversed} {...props} {...WORKING_PROPS} />
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
  chromatic: { disable: false },
  backgrounds: { default: "Purple 700" },
  controls: { disable: true },
}

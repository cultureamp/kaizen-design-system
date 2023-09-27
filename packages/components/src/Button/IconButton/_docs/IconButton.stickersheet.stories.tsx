import React from "react"
import { Meta } from "@storybook/react"
import { ButtonProps } from "~components/Button"
import { FilterIcon, MeatballsIcon, TrashIcon } from "~components/Icons"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { IconButton, IconButtonProps } from "../index"

export default {
  title: "KAIO-staging/Buttons/IconButton",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

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
      icon: <MeatballsIcon role="presentation" />,
    },
  },
  {
    title: "Primary",
    props: {
      label: "Primary label",
      icon: <MeatballsIcon role="presentation" />,
      primary: true,
    },
  },
  {
    title: "Destructive",
    props: {
      label: "Label",
      icon: <TrashIcon role="presentation" />,
      destructive: true,
    },
  },
  {
    title: "Secondary",
    props: {
      label: "Label",
      icon: <FilterIcon role="presentation" />,
      secondary: true,
    },
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
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
              icon: <TrashIcon role="presentation" />,
              secondary: true,
              destructive: true,
            },
          },
        ]
    return (
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Base", "Hover", "Active", "Focus", "Disabled", "Working"]}
        />
        <StickerSheet.Body>
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} rowTitle={title}>
              <IconButton reversed={isReversed} {...props} />
              <IconButton
                reversed={isReversed}
                classNameOverride="story__icon-button--hover"
                {...props}
              />
              <IconButton
                reversed={isReversed}
                classNameOverride="story__icon-button--active"
                {...props}
              />
              <IconButton
                reversed={isReversed}
                classNameOverride="story__icon-button--focus"
                {...props}
              />
              <IconButton reversed={isReversed} {...props} disabled />
              <IconButton reversed={isReversed} {...props} {...WORKING_PROPS} />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
    )
  },
  parameters: {
    pseudo: {
      hover: ".story__icon-button--hover",
      active: ".story__icon-button--active",
      focus: ".story__icon-button--focus",
      focusVisible: ".story__icon-button--focus",
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}

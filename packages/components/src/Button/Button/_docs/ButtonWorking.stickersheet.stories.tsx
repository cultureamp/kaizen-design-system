import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Button, ButtonProps } from "../index"

export default {
  title: "Components/Buttons/Button",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
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

    return (
      <>
        <StickerSheet heading="Button" isReversed={isReversed}>
          <StickerSheet.Header
            headings={[
              "Working",
              "Working (Focus)",
            ]}
            headingsWidth="10rem"
            hasVerticalHeadings
            verticalHeadingsWidth="12rem"
          />
          <StickerSheet.Body>
            {VARIANTS_PROPS.map(({ title, props }) => (
              <StickerSheet.Row key={title} rowTitle={title}>
                <Button reversed={isReversed} {...props} {...WORKING_PROPS} />
                <Button
                  reversed={isReversed}
                  data-sb-pseudo-styles="focus"
                  {...props}
                  {...WORKING_PROPS}
                />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          heading="Size small (formerly form)"
        >
          <StickerSheet.Header
            headings={[
              "Working",
              "Working Focus",
            ]}
            hasVerticalHeadings
          />
          <StickerSheet.Body>
            {VARIANTS_PROPS.map(({ title, props }) => (
              <StickerSheet.Row key={title} rowTitle={title}>
                <Button
                  reversed={isReversed}
                  {...props}
                  size="small"
                  {...WORKING_PROPS}
                />
                <Button
                  reversed={isReversed}
                  {...props}
                  size="small"
                  data-sb-pseudo-styles="focus"
                  {...WORKING_PROPS}
                />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>
      </>
    )
  },
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetWorkingDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet Working (Default)",
}

export const StickerSheetWorkingReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet Working (Reversed)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetWorkingRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet Working (RTL)",
  parameters: {
    chromatic: {
      delay: 1200,
    },
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}

import React from "react"
import { Meta } from "@storybook/react"
import { Heading } from "~components/Heading"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { TextAreaField, TextAreaFieldProps } from "../index"

export default {
  title: "Components/Text Input controls/Text Area Field",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const TAFieldStatus = ["default", "error", "caution"] as const

const TAFieldStatusGroup = ({
  isReversed,
  ...props
}: Omit<TextAreaFieldProps, "labelText"> & {
  isReversed?: boolean
}): JSX.Element => (
  <>
    {TAFieldStatus.map(status => (
      <StickerSheet.Row key={status} rowTitle={status} isReversed={isReversed}>
        <TextAreaField
          labelText={`Variant: ${props.variant}`}
          reversed={isReversed}
          status={status}
          validationMessage="A valid question"
          description="A short description"
          {...props}
        />
        <TextAreaField
          labelText={`Variant: ${props.variant}`}
          reversed={isReversed}
          status={status}
          validationMessage="A valid question"
          description="A short description"
          data-sb-pseudo-styles="hover"
          {...props}
        />
        <TextAreaField
          labelText={`Variant: ${props.variant}`}
          reversed={isReversed}
          status={status}
          validationMessage="A valid question"
          description="A short description"
          data-sb-pseudo-styles="active"
          {...props}
        />
        <TextAreaField
          labelText={`Variant: ${props.variant}`}
          reversed={isReversed}
          status={status}
          validationMessage="A valid question"
          description="A short description"
          data-sb-pseudo-styles="focus"
          {...props}
        />
      </StickerSheet.Row>
    ))}
  </>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <Heading variant="heading-2" color={isReversed ? "white" : "dark"}>
        Enabled
      </Heading>
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Default", "Hover", "Active", "Focus"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          <TAFieldStatusGroup isReversed={isReversed} variant="default" />
          <TAFieldStatusGroup isReversed={isReversed} variant="prominent" />
        </StickerSheet.Body>
      </StickerSheet>
      <Heading variant="heading-2" color={isReversed ? "white" : "dark"}>
        Read only
      </Heading>
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Default", "Hover", "Active", "Focus"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          <TAFieldStatusGroup
            readOnly
            isReversed={isReversed}
            variant="default"
          />
          <TAFieldStatusGroup
            readOnly
            isReversed={isReversed}
            variant="prominent"
          />
        </StickerSheet.Body>
      </StickerSheet>
      <Heading variant="heading-2" color={isReversed ? "white" : "dark"}>
        Disabled
      </Heading>
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Default", "Hover", "Active", "Focus"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          <TAFieldStatusGroup
            isReversed={isReversed}
            disabled
            variant="default"
          />
          <TAFieldStatusGroup
            isReversed={isReversed}
            disabled
            variant="prominent"
          />
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
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

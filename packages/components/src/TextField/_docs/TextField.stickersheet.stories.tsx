import React from "react"
import { Meta } from "@storybook/react"
import { InputStatus, InputTypes } from "~components/Input"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { TextField, TextFieldProps } from "../index"

export default {
  title: "Components/Text Input controls/Text Field",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const TextFieldExampleGroup = (props: TextFieldProps): JSX.Element => (
  <ul className="grid gap-16 list-none p-0 m-0">
    {InputTypes.map(type => (
      <li key={type}>
        <TextField
          value={type}
          type={type}
          {...props}
          description="A short description"
        />
      </li>
    ))}
  </ul>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet
      isReversed={isReversed}
      headers={["Default", "Hover", "Active", "Focus", "Disabled"]}
    >
      {InputStatus.map(status => (
        <StickerSheet.Row key={status} header={status}>
          <TextFieldExampleGroup
            reversed={isReversed}
            labelText="TextField"
            description="A short description"
            status={status}
            validationMessage="A valid question"
          />
          <TextFieldExampleGroup
            reversed={isReversed}
            labelText="TextField"
            description="A short description"
            status={status}
            validationMessage="A valid question"
            data-sb-pseudo-styles="hover"
          />
          <TextFieldExampleGroup
            reversed={isReversed}
            labelText="TextField"
            description="A short description"
            status={status}
            validationMessage="A valid question"
            data-sb-pseudo-styles="active"
          />
          <TextFieldExampleGroup
            reversed={isReversed}
            labelText="TextField"
            description="A short description"
            status={status}
            validationMessage="A valid question"
            data-sb-pseudo-styles="focus"
          />
          <TextFieldExampleGroup
            reversed={isReversed}
            labelText="TextField"
            description="A short description"
            status={status}
            validationMessage="A valid question"
            disabled
          />
        </StickerSheet.Row>
      ))}
    </StickerSheet>
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

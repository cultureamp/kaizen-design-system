import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import dateIcon from "@kaizen/component-library/icons/date-start.icon.svg"
import { TextField } from "@kaizen/draft-form"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { TextFieldProps } from "../KaizenDraft/Form/TextField/TextField"

export default {
  tags: ["autodocs"],
  title: "Components/Text Input/Text Field",
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'import { TextField } from "@kaizen/draft-form"',
      },
    },
  },
} satisfies Meta<typeof TextField>

export const DefaultStory: StoryFn<typeof TextField> = args => (
  <TextField {...args} />
)
DefaultStory.args = {
  id: "kaizen-demo-text-field",
  labelText: "Label Text",
  type: "text",
  defaultInputValue: "test",
  placeholder: "",
  description: "Example / description text",
  validationMessage: "",
  inputValue: "",
  status: "default",
  inline: false,
  reversed: false,
}
DefaultStory.argTypes = {
  inputRef: {
    control: {
      disable: true,
    },
  },
  icon: {
    control: {
      disabled: true,
    },
  },
  placeholder: {
    description:
      "It is advised that this is only used to give an example response",
  },
  validationMessage: {
    description:
      "A message that describes `status` for error or caution states. The Storybook example uses a String but the component can also take HTML or React Nodes",
  },
}
DefaultStory.storyName = "Default (Kaizen Demo)"

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const DEFAULT__ROW_PROPS: TextFieldProps[] = [
    {
      id: "text-field--default",
      labelText: "Default",
    },
    {
      id: "text-field--description",
      labelText: "Description",
      description: "Description text",
    },
    {
      id: "text-field--placeholder",
      labelText: "Placeholder",
      description: "Description text",
      placeholder: "Enter some text here",
    },
    {
      id: "text-field--placeholder",
      type: "email",
      labelText: "Email",
      description: "Description text",
      placeholder: "jane.doe@email.com",
    },
    {
      id: "text-field--placeholder",
      type: "password",
      labelText: "Password",
      description: "Description text",
      value: "abc123",
      placeholder: "Enter a password...",
    },
    {
      id: "text-field--positive",
      type: "email",
      labelText: "Positive",
      status: "success",
      defaultInputValue: "Input Text",
      description: "Description text",
    },
    {
      id: "text-field--negative",
      type: "email",
      labelText: "Negative",
      status: "error",
      defaultInputValue: "Input Text",
      description: "Description text",
      validationMessage: <span>Error message</span>,
    },
    {
      id: "text-field--cautionary",
      type: "email",
      labelText: "Cautionary",
      status: "caution",
      defaultInputValue: "Input Text",
      description: "Description text",
      validationMessage: "Warning message",
    },
  ]

  const ICON__ROW_PROPS: TextFieldProps[] = [
    {
      id: "text-field--icon--default",
      type: "email",
      labelText: "Default",
      defaultInputValue: "Input Text",
      description: "Description text",
    },
    {
      id: "text-field--icon--positive",
      type: "email",
      labelText: "Positive",
      status: "success",
      defaultInputValue: "Input Text",
      description: "Description text",
    },
    {
      id: "text-field--icon--negative",
      type: "email",
      labelText: "Negative",
      status: "error",
      defaultInputValue: "Input Text",
      description: "Description text",
      validationMessage: <span>Error message</span>,
    },
    {
      id: "text-field--icon--cautionary",
      type: "email",
      labelText: "Cautionary",
      status: "caution",
      defaultInputValue: "Input Text",
      description: "Description text",
      validationMessage: "Warning message",
    },
  ]

  return (
    <>
      <StickerSheet heading="Default" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Base", "Disabled"]}
          headingsWidth="15rem"
        />
        <StickerSheet.Body>
          {DEFAULT__ROW_PROPS.map(({ id, ...restProps }) => (
            <StickerSheet.Row key={id}>
              <TextField
                reversed={isReversed}
                id={`${id}--base`}
                {...restProps}
              />
              <TextField
                reversed={isReversed}
                id={`${id}--disabled`}
                disabled
                {...restProps}
              />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Icon" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Base", "Disabled"]}
          headingsWidth="15rem"
        />
        <StickerSheet.Body>
          {ICON__ROW_PROPS.map(({ id, ...restProps }) => (
            <StickerSheet.Row key={id}>
              <TextField
                reversed={isReversed}
                id={`${id}--base`}
                icon={dateIcon}
                {...restProps}
              />
              <TextField
                reversed={isReversed}
                id={`${id}--disabled`}
                disabled
                icon={dateIcon}
                {...restProps}
              />
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
  chromatic: { disable: false, pauseAnimationAtEnd: true },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false, pauseAnimationAtEnd: true },
}

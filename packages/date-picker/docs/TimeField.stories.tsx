import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { TimeField, ValueType } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Time Field",
  component: TimeField,
  argTypes: {
    locale: {
      options: ["en-US", "en-AU", "en-GB", "fr-CA", "zh-Hant"],
      control: "radio",
    },
    status: { control: { type: "radio" }, options: ["default", "error"] },
    isReadOnly: { control: { type: "radio" }, options: [true, false] },
    isDisabled: { control: { type: "radio" }, options: [true, false] },
    isRequired: { control: { type: "radio" }, options: [true, false] },
    validationMessage: {
      control: "text",
      if: { arg: "status", eq: "error" },
    },
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    installation: [
      "npm install @kaizen/date-picker",
      "import { TimeField } from '@kaizen/date-picker'",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/date-picker/src/TimeField",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-37847&t=RMu1SWjjx5YKnlEJ-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3078095243/Time+Field",
    },
    alternatives: ["components-text-field--docs", "components-select--docs"],
  },
} satisfies Meta<typeof TimeField>

export default meta

/**
 * A time field allows users to input and edit time values using a keyboard.
 */
export const Playground: StoryFn<typeof TimeField> = args => {
  const [value, setValue] = useState<ValueType | null>(null)
  return <TimeField {...args} value={value} onChange={setValue} />
}

Playground.args = {
  id: "time-field-input",
  label: "Launch time",
  locale: "en-AU",
}
Playground.parameters = {
  docs: {
    canvas: {
      sourceState: "shown",
    },
  },
}

/**
 * Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.
 */
export const HourCycle: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Header headings={["12 hour (default)", "24 hour"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <TimeField
          id="timefield-hour-minute"
          label="Label"
          locale="en-AU"
          value={{
            hour: 13,
            minutes: 30,
          }}
          onChange={(): void => undefined}
        />
        <TimeField
          id="timefield-hour"
          label="Label"
          locale="en-AU"
          value={{
            hour: 13,
            minutes: 30,
          }}
          hourCycle={24}
          onChange={(): void => undefined}
        />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * Determines the smallest unit that is displayed in the time picker.
 */
export const Granularity: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Header headings={["Hour", "Minute (default)", "Second"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <TimeField
          id="timefield-hour-minute"
          label="Label"
          locale="en-AU"
          value={{
            hour: 1,
            minutes: 30,
          }}
          granularity="hour"
          onChange={(): void => undefined}
        />
        <TimeField
          id="timefield-minute"
          label="Label"
          locale="en-AU"
          value={{
            hour: 1,
            minutes: 30,
          }}
          onChange={(): void => undefined}
        />
        <TimeField
          id="timefield-second"
          label="Label"
          locale="en-AU"
          value={{
            hour: 1,
            minutes: 30,
          }}
          granularity="second"
          onChange={(): void => undefined}
        />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * <p>Similar to other Field components in Kaizen, you can display an error message by combining `status` and `validationMessage`</p>
 * <ul>
 *  <li> `status`: controls the colour and icon of the error corresponding to the type you give it</li>
 *  <li> `validationMessage`: adds text to the validation area</li>
 * </ul>
 */
export const FormFieldOptions: StoryFn = () => (
  <TimeField
    id="timefield-error"
    label="Label (en-AU)"
    locale="en-AU"
    value={{
      hour: 1,
      minutes: 30,
    }}
    onChange={(): void => undefined}
    status="error"
    validationMessage="Date is invalid"
  />
)

import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { I18nProvider } from "@react-aria/i18n"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { TimePicker } from "../index"
import { ValueType } from "../src/TimePicker/types"

export default {
  title: `${CATEGORIES.components}/TimePicker`,
  component: TimePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { TimePicker } from "@kaizen/time-picker"',
      },
    },
  },
  argTypes: {
    locale: {
      options: ["en-US", "en-AU", "en-GB", "zh-Hant"],
      control: { type: "radio" },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof TimePicker>

export const DefaultStory: ComponentStory<typeof TimePicker> = args => {
  const [value, setValue] = useState<undefined | ValueType | null>(undefined)
  return (
    <I18nProvider locale={args.locale}>
      <TimePicker {...args} value={value} onChange={setValue} />
    </I18nProvider>
  )
}
DefaultStory.storyName = "TimePicker"
DefaultStory.args = {
  isDisabled: false,
  status: "default",
  id: "time-picker-input",
  label: "Launch time",
  dropdownIncrements: 15,
  locale: "en-US",
  dropdownButtonAriaLabel: "Toggle dropdown button",
}

const StickerSheetTemplate: Story = () => (
  <StoryWrapper>
    <StoryWrapper.RowHeader
      headings={[
        "Default",
        "Dropdown Menu Open",
        "Selected Value",
        "Disabled",
        "Error",
      ]}
    />
    <StoryWrapper.Row rowTitle="Input">
      <I18nProvider locale={"en-GB"}>
        <TimePicker
          dropdownButtonAriaLabel="Toggle dropdown button"
          locale="en-GB"
          id="timepicker-default"
          value={undefined}
          label="Label"
          onChange={() => undefined}
        />
      </I18nProvider>
      <I18nProvider locale={"en-GB"}>
        <TimePicker
          isDropdownMenuOpen
          dropdownButtonAriaLabel="Toggle dropdown button"
          locale="en-GB"
          id="timepicker-default"
          value={undefined}
          label="Label"
          onChange={() => undefined}
        />
      </I18nProvider>
      <I18nProvider locale={"en-GB"}>
        <TimePicker
          locale="en-GB"
          dropdownButtonAriaLabel="Toggle dropdown button"
          id="timepicker-selected"
          value={{ hour: 1, minutes: 30 }}
          label="Label"
          onChange={() => undefined}
        />
      </I18nProvider>
      <I18nProvider locale={"en-GB"}>
        <TimePicker
          locale="en-GB"
          isDisabled
          id="timepicker-disabled"
          value={{ hour: 1, minutes: 30 }}
          label="Label"
          dropdownButtonAriaLabel="Toggle dropdown button"
          onChange={() => undefined}
        />
      </I18nProvider>
      <I18nProvider locale={"en-GB"}>
        <TimePicker
          locale="en-GB"
          validationMessage="Date is invalid"
          status="error"
          id="timepicker-error"
          value={{ hour: 1, minutes: 30 }}
          dropdownButtonAriaLabel="Toggle dropdown button"
          label="Label"
          onChange={() => undefined}
        />
      </I18nProvider>
    </StoryWrapper.Row>
    <StoryWrapper.RowHeader headings={["en-US", "en-GB", "zh-HANS-SG"]} />
    <StoryWrapper.Row rowTitle="Localisation">
      <I18nProvider locale="en-US">
        <TimePicker
          locale="en-US"
          id="timepicker-en-US"
          dropdownButtonAriaLabel="Toggle dropdown button"
          value={undefined}
          label="Label"
          onChange={() => undefined}
        />
      </I18nProvider>
      <I18nProvider locale={"en-GB"}>
        <TimePicker
          locale="en-GB"
          id="timepicker-en-GB"
          dropdownButtonAriaLabel="Toggle dropdown button"
          value={undefined}
          label="Label"
          onChange={() => undefined}
        />
      </I18nProvider>
      <I18nProvider locale={"zh-HANS-SG"}>
        <TimePicker
          locale="zh-HANS-SG"
          id="timepicker-zh-HANS-SG"
          dropdownButtonAriaLabel="Toggle dropdown button"
          value={undefined}
          label="Label"
          onChange={() => undefined}
        />
      </I18nProvider>
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

/** @todo: Add extra stories to showcase props which don't appear in sticker sheets */

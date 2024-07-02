import { ArgTypes } from "@storybook/react"

const DATE_PICKER_SUPPORTED_LOCALES = ["en-US", "en-AU", "fr-CA"]

export const datePickerLocaleControls: Partial<ArgTypes> = {
  locale: {
    options: DATE_PICKER_SUPPORTED_LOCALES,
    control: { type: "radio" },
  },
}

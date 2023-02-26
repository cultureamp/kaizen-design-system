const DATE_PICKER_SUPPORTED_LOCALES = ["en-US", "en-AU"]
const DATE_RANGE_PICKER_SUPPORTED_LOCALES = ["en-US", "en-AU"]

export const datePickerLocaleControls = {
  locale: {
    options: DATE_PICKER_SUPPORTED_LOCALES,
    control: { type: "radio" },
  },
}

export const dateRangePickerLocaleControls = {
  locale: {
    options: DATE_RANGE_PICKER_SUPPORTED_LOCALES,
    control: { type: "radio" },
  },
}

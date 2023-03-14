const DATE_PICKER_SUPPORTED_LOCALES = ["en-US", "en-AU", "ja-JP"]
const DATE_RANGE_PICKER_SUPPORTED_LOCALES = ["en-US", "en-AU", "ja-JP"]

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

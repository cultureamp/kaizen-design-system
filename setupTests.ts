import "@testing-library/jest-dom/extend-expect"

/** @ts-ignore */
global.IS_REACT_ACT_ENVIRONMENT = true

// This avoids errors related to our jest environment not having an Intl
// object present in the app's context
jest.mock("@cultureamp/i18n-react-intl", () => ({
  useIntl: () => ({
    formatMessage: (options: { defaultMessage: string }) =>
      options.defaultMessage,
  }),
}))

// @ts-ignore
global.vi = jest

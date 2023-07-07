import "@testing-library/jest-dom/extend-expect"

/** @ts-ignore */
global.IS_REACT_ACT_ENVIRONMENT = true

jest.mock("@cultureamp/i18n-react-intl", () => ({
  useIntl: () => ({
    formatMessage: (options: { defaultMessage: string }) =>
      options.defaultMessage,
  }),
}))

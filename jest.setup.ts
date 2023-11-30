import "@testing-library/jest-dom"

/** @ts-ignore */
global.IS_REACT_ACT_ENVIRONMENT = true

const CONSOLE_FAIL_TYPES = ["error", "warn"] as const

// Throw errors when a `console.error` or `console.warn` happens
// by overriding the functions
CONSOLE_FAIL_TYPES.forEach(type => {
  // eslint-disable-next-line no-console
  console[type] = message => {
    throw new Error(
      `Failing due to console.${type} while running test!\n\n${message}`
    )
  }
})

// This avoids errors related to our jest environment not having an Intl
// object present in the app's context
jest.mock("@cultureamp/i18n-react-intl", () => ({
  useIntl: () => ({
    formatMessage: (options: { defaultMessage: string }) =>
      options.defaultMessage,
  }),
}))

import "@testing-library/jest-dom/extend-expect"
import matchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"
import { vi, expect, afterEach } from "vitest"

// This avoids errors related to our jest environment not having an Intl
// object present in the app's context
vi.mock("@cultureamp/i18n-react-intl", () => ({
  useIntl: () => ({
    formatMessage: (options: { defaultMessage: string }) =>
      options.defaultMessage,
  }),
}))


expect.extend(matchers)

afterEach(() => {
  cleanup()
})

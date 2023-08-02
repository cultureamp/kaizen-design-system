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

// @note: Renable this when we get rid of jest
// When using `jest.useFakeTimers`, `waitFor` gets stuck.
// Simulate Jest for waitFor()
// see https://github.com/testing-library/dom-testing-library/blob/0ce0c7054dfa64d1cd65053790246aed151bda9d/src/helpers.ts#L5
// and https://github.com/testing-library/dom-testing-library/blob/0ce0c7054dfa64d1cd65053790246aed151bda9d/src/wait-for.js#L53
// global.jest = {
//   advanceTimersByTime: (ms: number) => jest.advanceTimersByTime(ms),
// } as any

// @note: Delete this when we get rid of jest
// We need to use Jest for rich-text-editor and React 16/17,
// so we alias `vi` to `jest` (since jest refuses to allow this to work)
global.jest = vi as any

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

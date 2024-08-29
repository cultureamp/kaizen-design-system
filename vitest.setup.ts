import * as JestDomMatchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"
import { expect, afterEach, beforeEach } from "vitest"
import * as AxeMatchers from "vitest-axe/matchers"
import "vitest-axe/extend-expect"
import { reactIntlMock } from "~tests"

expect.extend(JestDomMatchers)
expect.extend(AxeMatchers)

beforeEach(() => {
  reactIntlMock()
})

afterEach(() => {
  cleanup()
})

process.env.TZ = "UTC"

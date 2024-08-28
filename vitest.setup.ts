import * as matchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"
import { expect, afterEach, beforeEach } from "vitest"
import "vitest-axe/extend-expect"
import { reactIntlMock } from "~tests/reactIntlMock"

expect.extend(matchers)

beforeEach(() => {
  reactIntlMock()
})

afterEach(() => {
  cleanup()
})

process.env.TZ = "UTC"

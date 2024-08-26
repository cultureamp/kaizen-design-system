import * as matchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"
import { expect, afterEach } from "vitest"
import "vitest-axe/extend-expect"

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

process.env.TZ = "UTC"

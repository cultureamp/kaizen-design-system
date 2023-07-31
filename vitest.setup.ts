import "@testing-library/jest-dom/extend-expect"
import matchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"
import { expect, afterEach } from "vitest"

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

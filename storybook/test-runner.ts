import { getStoryContext, TestHook } from "@storybook/test-runner"
import { configureAxe, getAxeResults, injectAxe } from "axe-playwright"
import { toHaveNoViolations } from "jest-axe"

export const setup: () => void = () => {
  expect.extend(toHaveNoViolations)
}

export const preRender: TestHook = async page => {
  await injectAxe(page)
}

export const postRender: TestHook = async (page, context) => {
  const { parameters } = await getStoryContext(page, context)

  if (parameters?.a11y?.disable) {
    return
  }

  await configureAxe(page, parameters?.a11y?.config ?? {})

  // give it time to finish all fade-in animations
  await page.waitForTimeout(1000)

  const a11yResults = await getAxeResults(
    page,
    parameters?.a11y?.element ?? "#storybook-root",
    parameters?.a11y?.options
  )
  expect(a11yResults).toHaveNoViolations()
}

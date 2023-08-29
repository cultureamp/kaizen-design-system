import { getStoryContext, TestHook } from "@storybook/test-runner"
import { configureAxe, getAxeResults, injectAxe } from "axe-playwright"
import { toHaveNoViolations } from "jest-axe"
import { globalA11yRules } from "./global-a11y-rules"

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

  // setting story level rules overrides global rules by default. Instead we're making sure globals are always included
  const storyRules = parameters?.a11y?.config?.rules || []
  const rules = [...globalA11yRules, ...storyRules]

  await configureAxe(page, { ...parameters.a11y?.config, rules })

  if (parameters?.a11y?.timeout) {
    await page.waitForTimeout(parameters.a11y.timeout)
  }

  const a11yResults = await getAxeResults(
    page,
    parameters?.a11y?.element ?? "#storybook-root",
    parameters?.a11y?.options
  )
  expect(a11yResults).toHaveNoViolations()
}

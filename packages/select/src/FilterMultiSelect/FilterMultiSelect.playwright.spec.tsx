import { expect, test } from "@playwright/test"

const iframePath = "iframe.html?args=&id="
const storyId =
  "components-select-filter-multi-select--default-kaizen-site-demo"
test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto(`./${iframePath}${storyId}`)
})

test.describe("Selecting an unselected option", async () => {
  test("Selects the option", async ({ page }) => {
    // Click trigger button
    await page.locator("role=button").click()

    // const devOpsOption = await page.locator('[aria-label="Dev-ops"]')
    const devOpsOption = page.locator('[aria-label="Dev-ops"]')
    await devOpsOption.click()
    expect(await devOpsOption.locator('svg[role="presentation"]').count()).toBe(
      1
    )
  })
})

test.describe("Deselecting a selected option", async () => {
  test("Selects the option", async ({ page }) => {
    // Click trigger button
    await page.locator("role=button").click()

    const frontEndOption = await page.locator("text=Front-End1245 available")
    await frontEndOption.click()
    expect(
      await frontEndOption.locator('svg[role="presentation"]').count()
    ).toBe(0)
  })
})

test.describe("Filtering by text", async () => {
  test("Keeps text matches, and filters out non-matches", async ({ page }) => {
    // Click trigger button
    await page.locator("role=button").click()
    // Enter text "dev" in search field
    await page.locator('[placeholder="Search…"]').fill("dev")

    expect(await page.locator('[aria-label="Dev-ops"]').count()).toBe(1)
    expect(await page.locator('[aria-label="Others"]').count()).toBe(0)
  })
})

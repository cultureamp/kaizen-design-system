import { expect, test } from "@playwright/test"

const iframePath = "iframe.html?args=&id="
const storyId = "components-filter-multi-select--default"
test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto(`./${iframePath}${storyId}`)
})

test.describe("Selecting an unselected option", async () => {
  test("Selects the option", async ({ page }) => {
    // Click trigger button
    await page.locator("role=button").click()

    const devOpsOption = page.locator('[aria-label="Dev-ops"]')
    await devOpsOption.click()
    // Expect "Dev-ops" to be selected
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
    // Expect "Front-End" option to not be selected
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

test.describe("Clicking 'Clear'", async () => {
  test.describe("Without filtering", async () => {
    test("Deselects all non-disabled options", async ({ page }) => {
      // Click trigger button
      await page.locator("role=button").click()
      // Click Clear button
      await page.locator('role=button[name="Clear selections"]').click()

      const dropdown = page.locator("ul[aria-multiselectable]")
      const selectedAndNonDisabledOptions = dropdown.locator(
        'li:not([aria-disabled="true"]) >> svg'
      )
      expect(await selectedAndNonDisabledOptions.count()).toBe(0)
    })
  })
  test.describe("With filtering", async () => {
    test("Deselects all filtered, non-disabled options without deselecting non-filtered options", async ({
      page,
    }) => {
      // Click trigger button
      await page.locator("role=button").click()
      // Select all items
      await page.locator('role=button[name="Select all"]').click()
      // Filter "Others" option
      await page.locator('[placeholder="Search…"]').fill("Others")
      // Click "Clear" button
      await page.locator('role=button[name="Clear selections"]').click()
      // Empty search field
      await page.locator('[aria-label="clear search"]').click()

      const dropdown = page.locator("ul[aria-multiselectable]")
      const numberOfNonDisabledItems = await dropdown
        .locator('li:not([aria-disabled="true"])')
        .count()
      const numberOfselectedAndNonDisabledOptions = await dropdown
        .locator('li:not([aria-disabled="true"]) >> svg')
        .count()
      // Expect all to be selected, except one
      expect(numberOfselectedAndNonDisabledOptions).toBe(
        numberOfNonDisabledItems - 1
      )
      // Expect "Others" not to be selected
      expect(
        await dropdown.locator("li[aria-la1el='Others'] >> svg").count()
      ).toBe(0)
    })
  })
})

test.describe("Clicking 'Select all'", async () => {
  test.describe("Without filtering", async () => {
    test("Selects all non-disabled options", async ({ page }) => {
      // Click trigger button
      await page.locator("role=button").click()
      // Click Select all button
      await page.locator('role=button[name="Select all"]').click()

      const dropdown = page.locator("ul[aria-multiselectable]")
      const numberOfNonDisabledItems = await dropdown
        .locator('li:not([aria-disabled="true"])')
        .count()
      const numberOfSelectedAndNonDisabledOptions = await dropdown
        .locator('li:not([aria-disabled="true"]) >> svg')
        .count()
      expect(numberOfSelectedAndNonDisabledOptions).toBe(
        numberOfNonDisabledItems
      )
    })
  })
  test.describe("With filtering", async () => {
    test("Selects all filtered, non-disabled options without selecting non-filtered options", async ({
      page,
    }) => {
      // Click trigger button
      await page.locator("role=button").click()
      // Click clear button
      await page.locator('role=button[name="Clear selections"]').click()
      await page.locator('[placeholder="Search…"]').fill("Others")
      await page.locator('role=button[name="Select all"]').click()
      // Empty search field
      await page.locator('[aria-label="clear search"]').click()

      const dropdown = page.locator("ul[aria-multiselectable]")
      const numberOfSelectedAndNonDisabledOptions = await dropdown
        .locator('li[role="option"]:not([aria-disabled="true"]) >> svg')
        .count()
      expect(numberOfSelectedAndNonDisabledOptions).toBe(1)
      // Expect the "Others" option to be selected
      expect(
        await dropdown.locator("li[aria-label='Others'] >> svg").count()
      ).toBe(1)
    })
  })
})

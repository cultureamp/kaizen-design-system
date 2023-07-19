import { expect, test } from "@playwright/test"

const iframePath = "iframe.html?args=&id="
const storyId = "components-filter-date-picker--playground"
test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto(`./${iframePath}${storyId}`)
})

test.describe("<FilterDatePicker>", () => {
  test("popover does not re-open after submitting using the Enter key", async ({
    page,
  }) => {
    const triggerButton = page.getByRole("button", { name: "Date" })
    await triggerButton.click()

    await expect(page.getByRole("dialog")).toBeVisible()

    const inputDate = page.getByLabel("Date")
    await inputDate.click()
    await inputDate.type("03/05/2022")
    await page.keyboard.press("Enter")

    // Ensure the popover didn't re-open.
    await expect(page.getByRole("dialog")).not.toBeVisible()
  })
})

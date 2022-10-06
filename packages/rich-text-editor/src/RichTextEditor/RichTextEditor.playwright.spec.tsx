import { expect, test } from "@playwright/test"

const iframePath = "iframe.html?args=&id="
const storyId = "components-rich-text-editor-rich-text-editor--default"

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto(`./${iframePath}${storyId}`)
})

test.describe("Keyboard shortcuts for lists", async () => {
  test("<ul> can be created", async ({ page }) => {
    const editor = await page.locator('div[role="textbox"]')
    expect(await editor.locator("ul li").count()).toBe(0)

    await editor.click()
    await editor.type("-")
    await editor.press("Space")
    await editor.type("By the pricking of my thumbs")
    await editor.press("Enter")
    await editor.type("Something wicked this way comes")

    expect(await editor.locator("ul li").count()).toBe(2)
  })

  test("<ol> can be created", async ({ page }) => {
    const editor = await page.locator('div[role="textbox"]')
    expect(await editor.locator("ul li").count()).toBe(0)

    await editor.click()
    await editor.type("1.")
    await editor.press("Space")
    await editor.type("By the pricking of my thumbs")
    await editor.press("Enter")
    await editor.type("Something wicked this way comes")

    expect(await editor.locator("ol li").count()).toBe(2)
  })
})

test.describe("Indentation of lists", async () => {
  test("indent can be decrease on list items", async ({ page }) => {
    const editor = await page.locator('div[role="textbox"]')
    const decreaseIndentBtn = await page.locator(
      '[aria-label="Decrease indent"]'
    )

    await editor.click()
    await editor.type("-")
    await editor.press("Space")
    await editor.type("By the pricking of my thumbs")
    await decreaseIndentBtn.click()

    expect(await page.$$('div[role="textbox"] ul')).toHaveLength(0)
  })

  test("indent can only be increased on the second list item and onwards", async ({
    page,
  }) => {
    const editor = await page.locator('div[role="textbox"]')
    const increaseIndentBtn = await page.locator(
      '[aria-label="Increase indent"]'
    )

    await editor.click()
    await editor.type("-")
    await editor.press("Space")
    await editor.type("By the pricking of my thumbs")
    await expect(increaseIndentBtn).not.toBeEnabled()
    await editor.press("Enter")
    await editor.type("Something wicked this way comes")
    await increaseIndentBtn.click()

    expect(await page.$$('div[role="textbox"] ul')).toHaveLength(2)
  })

  test("Some rando test", async ({ page }) => {
    const editor = await page.locator('div[role="textbox"]')
    const increaseIndentBtn = await page.locator(
      '[aria-label="Increase indent"]'
    )

    await editor.click()
    await editor.type("-")
    await editor.press("Space")
    await editor.type("By the pricking of my thumbs")
    await expect(increaseIndentBtn).not.toBeEnabled()
    await editor.press("Enter")
    await editor.type("Something wicked this way comes")
    await increaseIndentBtn.click()

    expect(await page.$$('div[role="textbox"] ul')).toHaveLength(2)
  })
  test("indent can only be increased on the second list item and onwards", async ({
    page,
  }) => {
    const editor = await page.locator('div[role="textbox"]')
    const increaseIndentBtn = await page.locator(
      '[aria-label="Increase indent"]'
    )
    // Click [aria-label="Numbered List"]
    await page.locator('[aria-label="Numbered List"]').click()
    // Click div[role="textbox"] p
    await page.locator('div[role="textbox"] p').click()
    // Press Enter
    await page.locator('div[role="textbox"]').press("Enter")
    // Press Enter
    await page
      .locator('div[role="textbox"]:has-text("the quick brown fox")')
      .press("Enter")
    // Press Enter with modifiers
    await page
      .locator('div[role="textbox"]:has-text("the quick brown foxzsdcsdsd")')
      .press("Shift+Enter")
    // Click html
    await page.locator("html").click()
    expect(await page.$$('div[role="textbox"] ul')).toHaveLength(2)
  })
})

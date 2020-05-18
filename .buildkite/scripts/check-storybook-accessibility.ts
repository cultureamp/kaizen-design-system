// import __STORYBOOK_CLIENT_API__ from "@storybook/react"
import AxePuppeteer from "axe-puppeteer"
import puppeteer from "puppeteer"

const getExamples = async page => {
  const handle = await page.evaluateHandle(() => ({ window, document }))
  const properties = await handle.getProperties()
  const windowHandle = properties.get("window")
  const clientApiHandle = await (await windowHandle.getProperties()).get(
    "__STORYBOOK_CLIENT_API__"
  )
  const storyStore = await clientApiHandle.evaluate(thing => thing.store())
  const getStorybook = await clientApiHandle.evaluate(thing =>
    thing.getStorybook()
  )

  const result = []
  getStorybook.forEach(story => {
    const { kind } = story
    story.stories.forEach(example => {
      const { name } = example
      result.push({
        kind,
        name,
      })
    })
  })
  return result
}

const getViolations = async storybookExampleUrls => {
  const analysisPromise = async url => {
    const newBrowser = await puppeteer.launch()
    const examplePage = await newBrowser.newPage()
    await examplePage.goto(url)
    const analysis = await new AxePuppeteer(examplePage).analyze()
    newBrowser.close()
    return { url, violations: analysis.violations }
  }
  return Promise.all(storybookExampleUrls.map(url => analysisPromise(url)))
}

// import __STORYBOOK_CLIENT_API__ from "@storybook/react"
import AxePuppeteer from "axe-puppeteer"
import puppeteer from "puppeteer"

// Avoid memory leak error
process.setMaxListeners(0)

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

const getExampleAnalyses = async storybookExampleUrls => {
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

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setBypassCSP(true)

  const baseIframeUrl = "http://localhost:57357/iframe.html"
  await page.goto(`${baseIframeUrl}?id=table-elm--default`)

  const storybookExamples = await getExamples(page)
  const storybookExampleUrls = storybookExamples.map(({ kind, name }) => {
    return `${baseIframeUrl}?selectedKind=${encodeURIComponent(
      kind
    )}&selectedStory=${encodeURIComponent(name)}`
  })

  const analysedExamples = await getExampleAnalyses(storybookExampleUrls)

  const analysedExamplesWithViolations = analysedExamples.filter(e => !!e)

  await page.close()
  await browser.close()

  if (analysedExamplesWithViolations.length > 0) {
    console.log("Accessibility violations found:")
    analysedExamplesWithViolations.forEach(analysis => {
      console.log(analysis)
    })
    process.exit(1)
  } else {
    console.log("No accessibility violations found")
    process.exit(0)
  }
}

main()

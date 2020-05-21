import AxePuppeteer from "axe-puppeteer"
import puppeteer from "puppeteer"

const getExamples = async page => {
  const handle = await page.evaluateHandle(() => ({ window, document }))
  const properties = await handle.getProperties()
  const windowHandle = properties.get("window")
  const clientApiHandle = await (await windowHandle.getProperties()).get(
    "__STORYBOOK_CLIENT_API__"
  )
  const getStorybook = await clientApiHandle.evaluate(clientApi =>
    clientApi.getStorybook()
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

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const getViolations = async (storybookExampleUrls, page) => {
  const axePuppeteerInstance = new AxePuppeteer(page)
  const analyses = []
  await asyncForEach(storybookExampleUrls, async url => {
    await page.goto(url)
    const analysis = await axePuppeteerInstance.analyze()
    if (analysis.violations.length > 0) {
      analyses.push({ url, violations: analysis.violations })
    }
  })
  return analyses
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

  const violations = await getViolations(storybookExampleUrls, page)

  await page.close()
  await browser.close()

  if (violations.length > 0) {
    console.log("Accessibility violations found:")
    violations.forEach(analysis => {
      console.log(analysis)
    })
    process.exit(1)
  } else {
    console.log("No accessibility violations found")
    process.exit(0)
  }
}

main()

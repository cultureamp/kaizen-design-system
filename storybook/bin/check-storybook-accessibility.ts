import AxePuppeteer from "axe-puppeteer"
import puppeteer from "puppeteer"
const passableViolationCount = 2079

const printUsage = () => {
  console.log(`
    Usage:
    yarn storybook-axe BASE_STORYBOOK_URL
      eg. yarn storybook-axe http://localhost:1234
          yarn storybook-axe storybook/public
  `)
}

const args = process.argv.slice(2)

if (!args[0]) {
  console.log("Please provide url")
  process.exit(1)
}

const baseStorybookUrl = args[0]

const getExamples = async page => {
  const handle = await page.evaluateHandle(() => ({ window, document }))
  const properties = await handle.getProperties()
  const windowHandle = properties.get("window")
  const clientApiHandle = await (await windowHandle.getProperties()).get(
    "__STORYBOOK_CLIENT_API__"
  )
  const storybook = await clientApiHandle.evaluate(clientApi =>
    clientApi.getStorybook()
  )

  const storybookExamples = []
  storybook.forEach(story => {
    const { kind } = story
    story.stories.forEach(storybookExample => {
      const { name } = storybookExample
      storybookExamples.push({
        kind,
        name,
      })
    })
  })
  return storybookExamples
}

type ExampleWithViolations = {
  url: string
  violations: Array<{}>
}

const examplesWithViolations = async (
  storybookExampleUrls,
  page
): Promise<ExampleWithViolations[]> => {
  const axePuppeteerInstance = new AxePuppeteer(page)
  const result = []
  for (const url of storybookExampleUrls) {
    await page.goto(url)
    const analysis = await axePuppeteerInstance.analyze()
    if (analysis.violations.length > 0) {
      result.push({ url, violations: analysis.violations })
    }
  }
  return result
}

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const baseIframeUrl = `${baseStorybookUrl}/iframe.html`
  await page.goto(baseIframeUrl)

  const storybookExamples = await getExamples(page)
  const storybookExampleUrls = storybookExamples.map(({ kind, name }) => {
    return `${baseIframeUrl}?selectedKind=${encodeURIComponent(
      kind
    )}&selectedStory=${encodeURIComponent(name)}`
  })

  const examples: ExampleWithViolations[] = await examplesWithViolations(
    storybookExampleUrls,
    page
  )

  const violationCount = examples.reduce(
    (tally, example) => tally + example.violations.length,
    0
  )

  await page.close()
  await browser.close()

  if (violationCount == 0) {
    console.log("No accessibility violations found")
  } else if (violationCount > passableViolationCount) {
    console.log("Accessibility violations found:")
    examples.forEach(example => {
      console.log(example)
    })
    console.log(
      `More accessibility violations were found than the current allowable limit of ${passableViolationCount}. This likely means that a new accessibility violation has been added to the code base.`
    )
    process.exit(1)
  } else {
    console.log(`${violationCount} accessibility violations found.`)
    console.log(
      `This number is below the current allowable limit of ${passableViolationCount}.`
    )
  }
}

main()

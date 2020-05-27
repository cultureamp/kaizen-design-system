import AxePuppeteer from "axe-puppeteer"
import puppeteer from "puppeteer"
const passableViolationCount = 2079

// To avoid running ts-ignore on all log statements
function printToConsole(...messages: string[]) {
  messages.forEach(message => {
    // tslint:disable-next-line:no-console
    console.log(message)
  })
}

const printUsage = () => {
  printToConsole(
    `
    Usage:
    yarn storybook-axe BASE_STORYBOOK_URL
      eg. yarn storybook-axe http://localhost:1234
          yarn storybook-axe storybook/public
  `
  )
}

const args = process.argv.slice(2)

if (!args[0]) {
  printUsage()
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
    printToConsole(["No accessibility violations found"])
  } else if (violationCount > passableViolationCount) {
    printToConsole(["Accessibility violations found:"])
    examples.forEach(example => {
      printToConsole([example])
    })
    printToConsole([
      `More accessibility violations were found than the current allowable limit of ${passableViolationCount}. This likely means that a new accessibility violation has been added to the code base.`,
    ])
    process.exit(1)
  } else {
    printToConsole([`${violationCount} accessibility violations found.`])
    printToConsole([
      `This number is below the current allowable limit of ${passableViolationCount}.`,
    ])
    printToConsole([
      `This is good news! It means that your work has removed some accessibility violations.`,
    ])
    printToConsole([
      `Please update the passableViolationCount value at the top of this file to the new minimum of ${violationCount}.`,
    ])
    printToConsole([
      `This will prevent future work from regressing back to a higher violation count.`,
    ])
    process.exit(1)
  }
}

main()

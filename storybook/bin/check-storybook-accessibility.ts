import { ClientApi, StoryStore } from "@storybook/client-api"
import AxePuppeteer from "axe-puppeteer"
import { JSHandle, launch, Page } from "puppeteer"

// To avoid running ts-ignore on all log statements
function printToConsole(...messages: any[]) {
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
          yarn storybook-axe file:///path/to/kaizen-design-system/storybook/public
  `
  )
}

const args = process.argv.slice(2)

if (!args[0]) {
  printUsage()
  process.exit(1)
}

type StoryExample = { kind: string; name: string }

const baseStorybookUrl = args[0]

const getExamples = async (page: Page) => {
  const clientApiHandle: JSHandle<ClientApi> = await page.evaluateHandle(
    () => (window as any).__STORYBOOK_CLIENT_API__
  )
  const storybook = await clientApiHandle.evaluate(clientApi =>
    clientApi.getStorybook()
  )
  const storeHandle: JSHandle<StoryStore> = await clientApiHandle.evaluateHandle(
    clientApi => clientApi.store()
  )

  const storybookExamples: StoryExample[] = []

  for (const story of storybook) {
    const { kind } = story
    for (const storybookExample of story.stories) {
      const { name } = storybookExample
      const currentStory = await storeHandle.evaluate(
        (store, storyKind, storyName) => {
          return store
            .getStoriesForKind(storyKind)
            .find(s => s.name === storyName)
        },
        kind,
        name
      )

      if (
        currentStory &&
        currentStory.parameters &&
        currentStory.parameters.axe &&
        currentStory.parameters.axe.enabled === true
      ) {
        storybookExamples.push({
          kind,
          name,
        })
      }
    }
  }
  return storybookExamples
}

type ExampleWithViolations = {
  url: string
  violations: Array<{}>
}

const analyzeStories = async (
  storybookExampleUrls: string[],
  page: Page
): Promise<ExampleWithViolations[]> => {
  const axePuppeteerInstance = new AxePuppeteer(page)
    .configure({
      rules: [
        { id: "landmark-one-main", enabled: false },
        { id: "page-has-heading-one", enabled: false },
        { id: "region", enabled: false },
      ],
    })
    .options({
      runOnly: ["wcag2a", "wcag2aa"],
    })
  const result: ExampleWithViolations[] = []
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
  const browser = await launch()
  const page = await browser.newPage()

  const baseIframeUrl = `${baseStorybookUrl}/iframe.html`
  await page.goto(baseIframeUrl)

  const storybookExamples = await getExamples(page)
  const storybookExampleUrls = storybookExamples.map(({ kind, name }) => {
    return `${baseIframeUrl}?selectedKind=${encodeURIComponent(
      kind
    )}&selectedStory=${encodeURIComponent(name)}`
  })

  const storyResults: ExampleWithViolations[] = await analyzeStories(
    storybookExampleUrls,
    page
  )

  await page.close()
  await browser.close()

  const violationCount = storyResults.reduce(
    (tally, example) => tally + example.violations.length,
    0
  )

  if (violationCount == 0) {
    printToConsole("No accessibility violations found")
    process.exit(0)
  }

  for (const example of storyResults) {
    printToConsole("Violations", example.url, example.violations)
  }
  printToConsole("Violation count", violationCount)
  process.exit(1)
}

main()

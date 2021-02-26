import type { ClientApi, StoryStore } from "@storybook/client-api"
import AxePuppeteer from "axe-puppeteer"
import type * as Axe from "axe-core"
import { JSHandle, launch, Page } from "puppeteer"

// To avoid running ts-ignore on all log statements
const printToConsole = (...messages: any[]) => {
  // eslint-disable-next-line no-console
  console.log(...messages)
}

const printUsage = () => {
  printToConsole(
    `
    Usage:
    yarn storybook-axe BASE_STORYBOOK_URL
      eg. yarn storybook-axe http://localhost:6006
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
const baseIframeUrl = `${baseStorybookUrl}/iframe.html`

const getExamples = async (page: Page) => {
  const clientApiHandle: JSHandle<ClientApi> = await page.evaluateHandle(
    // eslint-disable-next-line no-underscore-dangle
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
        (store, storyKind, storyName) =>
          store.getStoriesForKind(storyKind).find(s => s.name === storyName),
        kind,
        name
      )

      const accessibilityCheckDisabled =
        currentStory &&
        currentStory.parameters &&
        currentStory.parameters.a11y &&
        currentStory.parameters.a11y.disable === false

      if (!accessibilityCheckDisabled) {
        storybookExamples.push({
          kind,
          name,
        })
      }
    }
  }
  return storybookExamples
}

type StoryIdentifier = {
  kind: string
  name: string
}

type ExampleWithViolations = {
  id: StoryIdentifier
  violations: Axe.Result[]
}

const getIframeUrlFromExampleId = ({ kind, name }: StoryIdentifier) =>
  `${baseIframeUrl}?selectedKind=${encodeURIComponent(
    kind
  )}&selectedStory=${encodeURIComponent(name)}`

const getFullUrlFromExampleId = ({ kind, name }: StoryIdentifier) =>
  `${baseStorybookUrl}?selectedKind=${encodeURIComponent(
    kind
  )}&selectedStory=${encodeURIComponent(name)}`

const analyzeStories = async (
  storybookExamples: StoryIdentifier[],
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
  const total = storybookExamples.length
  let i = 0
  for (const exampleId of storybookExamples) {
    const bookmark = `[${++i}/${total}] `
    await page.goto(getIframeUrlFromExampleId(exampleId))
    const analysis = await axePuppeteerInstance.analyze()
    if (analysis.violations.length > 0) {
      const report: ExampleWithViolations = {
        id: exampleId,
        violations: analysis.violations,
      }
      printViolation(report, bookmark)
      result.push(report)
    } else {
      const { kind, name } = exampleId
      printToConsole(
        `${bookmark}Accessibility tests passed for "${kind}: ${name}"`
      )
    }
  }
  return result
}

const printViolation = (
  violation: ExampleWithViolations,
  bookmark: string = ""
) => {
  const { kind, name } = violation.id
  printToConsole("")
  printToConsole(`${bookmark}Accessibility tests failed for "${kind}: ${name}"`)
  for (const item of violation.violations) {
    printToConsole(`  Issue: (${item.id}) ${item.help}`)
    printToConsole(`  Help: ${item.helpUrl}`)
    printToConsole(`  Link to story: ${getFullUrlFromExampleId(violation.id)}`)
    printToConsole("")
  }
}

const main = async () => {
  const browser = await launch()
  const page = await browser.newPage()

  await page.goto(baseIframeUrl)

  const storybookExamples = await getExamples(page)
  printToConsole(`Found ${storybookExamples.length} stories to analyze`)

  const storyResults: ExampleWithViolations[] = await analyzeStories(
    storybookExamples,
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

  printToConsole("")
  printToConsole("All Violations")
  printToConsole("==============")

  for (const report of storyResults) {
    printViolation(report)
  }

  printToConsole("Violation count", violationCount)
  process.exit(1)
}

main()

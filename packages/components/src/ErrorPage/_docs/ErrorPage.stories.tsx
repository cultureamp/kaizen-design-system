import { Meta, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { ErrorPage } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/ErrorPage",
  component: ErrorPage,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/components",
      "import { ErrorPage } from `@kaizen/components`",
    ],
    resourceLinks: {
      /** @todo: Add Github link (adjust as needed) */
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/master/packages/components/src/ErrorPage",
    },
  },
} satisfies Meta<typeof ErrorPage>

export default meta

export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  args: {
    code: 500,
    callToAction: {
      onContactSupport: () => alert("Custom handler"),
    },
  },
}

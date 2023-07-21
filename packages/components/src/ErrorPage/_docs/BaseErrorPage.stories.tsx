import { Meta, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { BaseErrorPage } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/ErrorPage/BaseErrorPage",
  component: BaseErrorPage,
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
} satisfies Meta<typeof BaseErrorPage>

export default meta

/**
 * This is the underlying component on which all the Error Pages are built upon. If you need to
 * customise your Error Page, use this component.
 */
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
    message: "Custom error message",
    title: "Custom error title",
  },
}

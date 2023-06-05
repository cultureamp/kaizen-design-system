import { Meta, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { LabelledMessage } from "../LabelledMessage"

const meta = {
  tags: ["autodocs"],
  title: "Components/Utilities/Labelled Message",
  component: LabelledMessage,
  args: {
    label: "Label",
    message: "Custom message here",
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    isInKaio: true,
    installation: [
      "npm install @kaizen/components",
      'import { LabelledMessage } from "@kaizen/components"',
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/LabelledMessage",
    },
  },
} satisfies Meta<typeof LabelledMessage>

export default meta

/**
 * A label and message with a separator in between. This component supports `dir="ltr"`.
 */
export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

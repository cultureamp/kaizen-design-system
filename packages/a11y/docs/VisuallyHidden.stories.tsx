import { Meta, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { VisuallyHidden } from ".."

const meta = {
  tags: ["autodocs"],
  title: "Components/Visually Hidden",
  component: VisuallyHidden,
  args: {
    children: "Hello I'm visually hidden",
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    installation: [
      "npm install @kaizen/a11y",
      "import { VisuallyHidden } from `@kaizen/a11y`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/a11y",
    },
  },
} satisfies Meta<typeof VisuallyHidden>

export default meta

/**
 * To visually hide something on the screen, normally reserved for screen reader only content.
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

type Story = StoryObj<typeof VisuallyHidden>

/**
 * You can use the `tag` prop to change the rendered HTMl tag from the default `span` to a `div`
 */

export const Tag: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  args: { children: "I'm a div, not a span" },
}

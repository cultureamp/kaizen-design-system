import { Meta, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { MenuLoadingSkeleton } from "../src/FilterMultiSelect/components/MenuLayout/MenuLoadingSkeleton/index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Filter Multi-Select/Menu Loading Skeleton",
  component: MenuLoadingSkeleton,
  args: {
    isAnimated: false,
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/master/packages/select",
    },
  },
} satisfies Meta<typeof MenuLoadingSkeleton>

export default meta

/**
 * Menu Loading Skeleton is the loading skeleton for a FilterMultiSelect MenuLayout component.
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

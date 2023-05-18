import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { MenuLoadingSkeleton } from "../src/FilterMultiSelect/components/MenuLayout/MenuLoadingSkeleton/index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Filter Multi-Select/Menu Loading Skeleton",
  component: MenuLoadingSkeleton,
  args: {
    isAnimated: false,
  },
  parameters: {
    installation: [
      "npm install @kaizen/select",
      "import { FilterMultiSelect } from `@kaizen/select`",
    ],
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
    chromatic: { disable: false },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Animated: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <MenuLoadingSkeleton isAnimated={true} />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

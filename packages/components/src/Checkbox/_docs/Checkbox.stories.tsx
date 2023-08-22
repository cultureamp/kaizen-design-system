import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { Checkbox } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/components",
      "import { Checkbox } from `@kaizen/components`",
    ],
    resourceLinks: {
      /** @todo: Add Github link (adjust as needed) */
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/master/packages/components/src/Checkbox",
      /** @todo (optional): Add Figma link */
      figma: "Add Figma link here",
      /** @todo (optional): Add Confluence link */
      designGuidelines: "Add Confluence link here",
    },
    /**
     * @todo (optional): Add alternate components
     * Provide the storybook docs id
     */
    alternatives: ["components-component-name-1--docs", "components-component-name-2--docs"],
  },
} satisfies Meta<typeof Checkbox>

export default meta

/**
 * @todo: Main Description goes here
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

/** @todo: Add extra stories to showcase props which don't appear in sticker sheets - Delete the unused example stories below */

const VariantsTemplate: StoryFn<{ isReversed?: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        /** Change `variant` to the relevant prop name */
        <Checkbox variant="variantName" isReversed={isReversed} />
        <Checkbox variant="variantName" isReversed={isReversed} />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * @todo: Description here
 */
export const Variants = VariantsTemplate.bind({})

export const Reversed = VariantsTemplate.bind({})
Reversed.args = { isReversed: true }
Reversed.parameters = {
  backgrounds: { default: "Purple 700" },
}

/**
 * @todo: Description here
 */
export const Disabled: StoryObj<typeof meta> = {
  args: { disabled: true },
}

/**
 * @todo: Description here
 * @note: This will likely be a Loading Skeleton component
 */
export const Loading: StoryFn = () => (
  <div></div>
)

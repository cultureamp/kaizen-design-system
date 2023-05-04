import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { WorkflowHeader } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/WorkflowHeader",
  component: WorkflowHeader,
  args: {
    prefixTitle: {
      content: "Prefix",
    },
    pageTitle: {
      content: "Title",
    },
    status: {
      content: "Draft",
    },
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/workflow",
      "import { Worflow } from `@kaizen/workflow`",
    ],
    resourceLinks: {
      /** @todo: Add Github link (adjust as needed) */
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/master/packages/components/src/Worflow",
      /** @todo (optional): Add Figma link */
      figma: "Add Figma link here",
      /** @todo (optional): Add Confluence link */
      designGuidelines: "Add Confluence link here",
    },
    /**
     * @todo (optional): Add alternate components
     * Provide the storybook docs id
     */
    alternatives: [
      "components-component-name-1--docs",
      "components-component-name-2--docs",
    ],
  },
} satisfies Meta<typeof WorkflowHeader>

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

const VariantsTemplate: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <WorkflowHeader
          prefixTitle={{
            content: "Prefix title",
          }}
          pageTitle={{
            content: "Page title",
          }}
          status={{ content: "draft", vairant: "default" }}
          // confirmationAction={{ prop1: "thing" }}
        />
        {/*
        <WorkflowHeader>
          <WorkflowBrand />
          <WorkflowTitles
            prefixTitle="Create a self reflection cycke"
            prefixTag="h1"
            pageTitle="Settings"
            pageTitleTag="h2"
            status={{ content: "Draft", varint: "draft" }}
          />
          <WorkflowActions
            actions={[<Button />]}
            confirmationAction={{ prop1: "thing" }}
          />
        </WorkflowHeader>
        */}
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
 * @note: This will likely be a Loading Skeleton component
 */
export const Loading: StoryFn = () => <div></div>

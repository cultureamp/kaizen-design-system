import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { WorkflowHeader, WorkflowHeaderProps } from "../index"

const defaultWorkflowProps: WorkflowHeaderProps = {
  classNameOverride: "",
  prefixTitle: "Create cycle",
  prefixTitleTag: "h1",
  pageTitle: "Settings",
  pageTitleTag: "h2",
  status: {
    content: "Draft",
    vairant: "default",
  },
  confirmationTriggerLabel: "Save and close",
  modalTitle: "Before you exit",
  modalContent:
    "Your content has not yet been saved. Click the button below or discard the changes",
  modalConfirmLabel: "Save",
  modalDismissLabel: "Dismiss",
  modalConfirmAction: (): void => alert("mock example of a save action"),
  modalMood: "cautionary",
  brandingAlt: "Culture amp alt (prop for a11y reasons)",
  brandingVariant: "logo-horizontal",
}

const meta = {
  tags: ["autodocs"],
  title: "Components/WorkflowHeader",
  component: WorkflowHeader,
  args: defaultWorkflowProps,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/workflow",
      "import { WorflowHeader } from `@kaizen/workflow`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/workflow/",
      figma:
        "https://www.figma.com/file/IJTy1JpS4Xyop5cQwroRje/%F0%9F%9B%A0%EF%B8%8F-Self-reflection%3A-Build-Handoff?node-id=188%3A62005&t=x4zyx07E2G3BmKGw-1",
      /** @todo (optional): Add Confluence link */
      designGuidelines: "Add Confluence link here",
    },
  },
} satisfies Meta<typeof WorkflowHeader>

export default meta

/**
 * This is the workflow header component used to create per cycles... Better description to come!
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
        <WorkflowHeader {...defaultWorkflowProps} />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * @todo: Add neccessary variants
 */
export const Variants = VariantsTemplate.bind({})

// export const WithHelpIcon = VariantsTemplate.bind({})
// Reversed.args = { isReversed: true }
// Reversed.parameters = {
//   backgrounds: { default: "Purple 700" },
// }

// export const ContentLoadingHeaders = VariantsTemplate.bind({})
// Reversed.args = { isReversed: true }
// Reversed.parameters = {
//   backgrounds: { default: "Purple 700" },
// }

// TODO: The number of props is pretty gnarly - explore adding these as more composable elements like below:
{
  /*
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
*/
}

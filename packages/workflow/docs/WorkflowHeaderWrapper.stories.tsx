import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
// import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { WorkflowHeader, WorkflowRootProps } from "../index"

export const DefaultKaizenSiteDemo: StoryFn<WorkflowRootProps> = ({
  children,
  classNameOverride,
  ...rootProps
}) => (
  <WorkflowHeader classNameOverride={classNameOverride} {...rootProps}>
    {children}
  </WorkflowHeader>
)

const meta = {
  tags: ["autodocs"],
  title: "Components/Workflow Header Components",
  component: WorkflowHeader,
  parameters: {
    docs: {
      source: { type: "code" },
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

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = {}

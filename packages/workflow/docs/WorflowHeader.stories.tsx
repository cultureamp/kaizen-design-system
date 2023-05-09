import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
// import { StickerSheet } from "../../../storybook/components/StickerSheet"
import {
  WorkflowHeader,
  WorkflowHeaderProps,
  // WorkflowRootProps,
  // WorkflowActionsProps,
  // ExitTriggerProps,
  // WorkflowTitlesProps,
} from "../index"

/** This is an example of how to put together a header type.
 * Not having this an exported as an actual type mean the data
 * can be passed to the components as the consumer pleases */

const WorkflowHeaderDefault: WorkflowHeaderProps = {
  workflowName: "Create a self-reflection cycle",
  stepName: "Settings",
  status: {
    content: "Draft",
    vairant: "statusDraft",
  },
  exitLabel: "Save and close",
  exitTitle: "Before you exit",
  exitDescription:
    "Your content has not yet been saved. Click the button below or discard the changes",
  confirmExitLabel: "Close and save",
  dismissExitLabel: "Dismiss",
  onExit: (): void => alert("mock example of a save action"),
}

export const DefaultKaizenSiteDemo: StoryFn<WorkflowHeaderProps> = ({
  workflowName,
  stepName,
  status,
  exitLabel,
  exitTitle,
  exitDescription,
  confirmExitLabel,
  dismissExitLabel,
  onExit,
  ...rootProps
}) => (
  <WorkflowHeader
    workflowName={workflowName}
    stepName={stepName}
    status={status}
    exitLabel={exitLabel}
    exitTitle={exitTitle}
    exitDescription={exitDescription}
    confirmExitLabel={confirmExitLabel}
    dismissExitLabel={dismissExitLabel}
    onExit={onExit}
    {...rootProps}
  />
)

// Export the internals but create sensible default component with smaller props pool wew

const meta = {
  tags: ["autodocs"],
  title: "Components/Workflow Header",
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
// export const Playground: StoryObj<typeof meta> = {
//   parameters: {
//     docs: {
//       canvas: {
//         source: { type: "code" },
//         container: ComponentDocsTemplate,
//       },
//     },
//   },
// }

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = WorkflowHeaderDefault

// export const WorkflowHeaderWrapper: StoryObj<typeof meta> = {
//   tags: ["autodocs"],
//   parameters: {
//     component: WorkflowHeader,
//     docs: {
//       canvas: {
//         sourceState: "shown",
//       },
//     },
//   },
// }
// WorkflowHeaderWrapper.storyName = "WorkflowHeader root wrapper"
// WorkflowHeaderWrapper.args = {
//   children: "",
//   classNameOverride: "",
// }

// /** @todo: Add extra stories to showcase props which don't appear in sticker sheets - Delete the unused example stories below */

// const VariantsTemplate: StoryFn = () => (
//   <StickerSheet>
//     <StickerSheet.Body>
//       <StickerSheet.Row>
//         <WorkflowHeader>
//           <WorkflowHeader.Branding {...WorkflowHeaderDefault.branding} />
//           <WorkflowHeader.Titles {...WorkflowHeaderDefault.titles} />
//           <WorkflowHeader.Actions {...WorkflowHeaderDefault.actions}>
//             <div>Help icon</div>
//           </WorkflowHeader.Actions>
//         </WorkflowHeader>
//       </StickerSheet.Row>
//     </StickerSheet.Body>
//   </StickerSheet>
// )

// /**
//  * @todo: Add neccessary variants
//  */
// export const Variants = VariantsTemplate.bind({})

// // export const WithHelpIcon = VariantsTemplate.bind({})
// // Reversed.args = { isReversed: true }
// // Reversed.parameters = {
// //   backgrounds: { default: "Purple 700" },
// // }

// // export const ContentLoadingHeaders = VariantsTemplate.bind({})
// // Reversed.args = { isReversed: true }
// // Reversed.parameters = {
// //   backgrounds: { default: "Purple 700" },
// // }

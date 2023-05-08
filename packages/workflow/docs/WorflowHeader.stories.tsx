import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
// import { StickerSheet } from "../../../storybook/components/StickerSheet"
import {
  WorkflowHeader,
  WorkflowRootProps,
  WorflowBrandingProps,
  WorkflowActionsProps,
  ConfirmationTriggerProps,
  WorkflowTitlesProps,
} from "../index"

/** This is an example of how to put together a header type.
 * Not having this an exported as an actual type mean the data
 * can be passed to the components as the consumer pleases */
interface WorkflowHeaderCompositionProps extends WorkflowRootProps {
  branding: WorflowBrandingProps
  titles: WorkflowTitlesProps
  actions: WorkflowActionsProps & {
    confirmationTrigger: ConfirmationTriggerProps
  }
}

const WorkflowHeaderDefault: WorkflowHeaderCompositionProps = {
  branding: {
    alt: "Culture amp alt (prop for a11y reasons)",
    variant: "logo-horizontal",
  },
  titles: {
    prefix: "Create a self-reflection cycle",
    prefixTag: "h1",
    title: "Settings",
    titleTag: "h2",
    status: {
      content: "Draft",
      vairant: "statusDraft",
    },
  },
  actions: {
    confirmationTrigger: {
      triggerLabel: "Save and close",
      title: "Before you exit",
      content:
        "Your content has not yet been saved. Click the button below or discard the changes",
      confirmLabel: "Save and close",
      dismissLabel: "Dismiss",
      confirmAction: (): void => alert("mock example of a save action"),
      mood: "cautionary",
    },
  },
}

export const DefaultKaizenSiteDemo: StoryFn<WorkflowHeaderCompositionProps> = ({
  branding,
  titles,
  actions: { confirmationTrigger, ...otherActionProps },
  ...rootProps
}) => (
  <WorkflowHeader {...rootProps}>
    <WorkflowHeader.Branding alt={branding.alt} variant={branding.variant} />
    <WorkflowHeader.Titles
      prefix={titles.prefix}
      prefixTag={titles.prefixTag}
      title={titles.title}
      titleTag={titles.titleTag}
      status={titles.status}
    />
    <WorkflowHeader.Actions {...otherActionProps}>
      <div>Help icon</div>
      <WorkflowHeader.ConfirmationTrigger
        triggerLabel={confirmationTrigger.triggerLabel}
        title={confirmationTrigger.title}
        content={confirmationTrigger.content}
        dismissLabel={confirmationTrigger.dismissLabel}
        confirmLabel={confirmationTrigger.confirmLabel}
        confirmAction={confirmationTrigger.confirmAction}
        mood={confirmationTrigger.mood}
      />
    </WorkflowHeader.Actions>
  </WorkflowHeader>
)

const WorflowHeaderComponent: () => JSX.Element = () => (
  <WorkflowHeader>
    <>
      <WorkflowHeader.Branding {...WorkflowHeaderDefault.branding} />
      <WorkflowHeader.Titles {...WorkflowHeaderDefault.titles} />
      <WorkflowHeader.Actions {...WorkflowHeaderDefault.actions}>
        <div>Help icon</div>
      </WorkflowHeader.Actions>
    </>
  </WorkflowHeader>
)

const meta = {
  tags: ["autodocs"],
  title: "Components/Workflow Header",
  component: WorflowHeaderComponent,
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
DefaultKaizenSiteDemo.args = WorkflowHeaderDefault

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

// // TODO: The number of props is pretty gnarly - explore adding these as more composable elements like below:
// {
//   /*
//   <WorkflowHeader>
//     <WorkflowBrand />
//     <WorkflowTitles
//       prefixTitle="Create a self reflection cycke"
//       prefixTag="h1"
//       pageTitle="Settings"
//       pageTitleTag="h2"
//       status={{ content: "Draft", varint: "draft" }}
//     />
//     <WorkflowActions
//       actions={[<Button />]}
//       confirmationAction={{ prop1: "thing" }}
//     />
//   </WorkflowHeader>
// */
// }

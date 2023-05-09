import {
  Root,
  Branding,
  Titles,
  Actions,
  ConfirmationTrigger,
} from "./components"
// import styles from "./WorkflowHeader.module.scss"

/** WorkflowHeader is composable component using dot notation to access its child components
 * ie: <WorkflowHeader.Branding />
 */
export const WorkflowHeader = Object.assign(Root, {
  Branding,
  Titles,
  Actions,
  ConfirmationTrigger,
})

// export interface WorkflowHeaderProps
//   extends WorkflowTitlesProps,
//     WorkflowActionsProps,
//     WorflowBrandingProps,
//     OverrideClassName<HTMLAttributes<HTMLDivElement>> {
//   // TODO: Check with Dale what the renderChild props was meant for (it didn't get used / called anywhere) in the original
//   // renderChild?: JSX.Element
// }

// TODO: remove once checked
// export const WorkflowHeader = ({
//   classNameOverride,
//   prefixTitle,
//   prefixTitleTag,
//   pageTitle,
//   pageTitleTag,
//   status,
//   confirmationTriggerLabel,
//   modalTitle,
//   modalContent,
//   modalConfirmLabel,
//   modalDismissLabel,
//   modalConfirmAction,
//   modalMood,
//   brandingAlt,
//   brandingVariant,
//   ...restProps
// }: WorkflowHeaderProps): JSX.Element => (
//   <Header classNameOverride={classNameOverride} {...restProps}>
//     <Brand
//       brandingAlt={brandingAlt || "CA"}
//       brandingVariant={brandingVariant}
//     />
//     <Titles
//       prefixTitle={prefixTitle}
//       // Tags are provided options for more accessible layouts / future proofixing the heading hirarchy
//       prefixTitleTag={prefixTitleTag}
//       pageTitle={pageTitle}
//       pageTitleTag={pageTitleTag}
//       // This is now changed to a object instead of two seperate props
//       status={status}
//     />
//     <Actions
//       confirmationTriggerLabel={confirmationTriggerLabel}
//       modalTitle={modalTitle}
//       modalContent={modalContent}
//       modalConfirmLabel={modalConfirmLabel}
//       modalConfirmAction={modalConfirmAction}
//       modalDismissLabel={modalDismissLabel}
//       modalMood={modalMood}
//     >
//       {/* can now take children to be used as a diplsay for multiple items. We could lock this down to "actions" and type the compatible components? */}
//     </Actions>
//   </Header>
// )

WorkflowHeader.displayName = "WorkflowHeader"

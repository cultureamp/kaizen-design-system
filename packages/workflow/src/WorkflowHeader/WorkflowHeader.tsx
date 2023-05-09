import React, { ReactNode, HTMLAttributes, ComponentType } from "react"
import { Root, Branding, Titles, Actions, WorkflowExit } from "./components"
import {
  // WorkflowRootProps,
  WorkflowActionsProps,
  WorkflowExitProps,
  WorkflowTitlesProps,
} from "./"

// import styles from "./WorkflowHeader.module.scss"

/** WorkflowHeader is composable component using dot notation to access its child components
 * ie: <WorkflowHeader.Branding />
 */
// export const WorkflowHeaderWrapper = Object.assign(Root, {
//   Branding,
//   Titles,
//   Actions,
//   WorkflowExit,
// })

// export interface WorkflowHeaderProps
//   extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "children">> {
//   children?: ComponentType<WorkflowExitProps> | ReactNode
// }

export type WorkflowHeaderProps = WorkflowExitProps &
  WorkflowTitlesProps &
  WorkflowActionsProps

export const WorkflowHeader = ({
  workflowName,
  stepName,
  status,
  exitLabel,
  exitTitle,
  exitDescription,
  confirmExitLabel,
  dismissExitLabel,
  onExit,
  ...restProps
}: WorkflowHeaderProps): JSX.Element => (
  <Root {...restProps}>
    <Branding alt="Cultureamp" />
    <Titles workflowName={workflowName} stepName={stepName} status={status} />
    <Actions>
      <WorkflowExit
        exitLabel={exitLabel}
        exitTitle={exitTitle}
        exitDescription={exitDescription}
        confirmExitLabel={confirmExitLabel}
        dismissExitLabel={dismissExitLabel}
        onExit={onExit}
        mood="cautionary"
      />
    </Actions>
  </Root>
)

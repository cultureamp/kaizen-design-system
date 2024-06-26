import React from "react"
import {
  HeaderRoot,
  Branding,
  Titles,
  Actions,
  WorkflowActionsProps,
  WorkflowTitlesProps,
} from "./components"

export type HeaderProps = WorkflowTitlesProps & WorkflowActionsProps

export const Header = ({
  workflowName,
  stepName,
  status,
  headerActions,
  ...restProps
}: HeaderProps): JSX.Element => (
  <HeaderRoot {...restProps}>
    <Branding alt="Culture Amp" />
    <Titles workflowName={workflowName} stepName={stepName} status={status} />
    <Actions headerActions={headerActions} />
  </HeaderRoot>
)

Header.displayName = "Workflow.Header"

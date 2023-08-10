import React from "react"
import {
  HeaderRoot,
  Branding,
  Titles,
  Actions,
  WorkflowTitlesProps,
  WorkflowActionsProps,
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
    <Branding alt="Cultureamp" />
    <Titles workflowName={workflowName} stepName={stepName} status={status} />
    <Actions headerActions={headerActions} />
  </HeaderRoot>
)

Header.displayName = "Workflow.Header"

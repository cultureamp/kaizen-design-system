import React from "react"
import { HeaderRoot, Branding, Titles, Actions } from "./components"
import { WorkflowActionsProps, WorkflowTitlesProps } from "./"

export type HeaderProps = WorkflowTitlesProps & WorkflowActionsProps

export const Header = ({
  workflowName,
  stepName,
  status,
  actions,
  ...restProps
}: HeaderProps): JSX.Element => (
  <HeaderRoot {...restProps}>
    <Branding alt="Cultureamp" />
    <Titles workflowName={workflowName} stepName={stepName} status={status} />
    <Actions actions={actions} />
  </HeaderRoot>
)

Header.displayName = "Header"

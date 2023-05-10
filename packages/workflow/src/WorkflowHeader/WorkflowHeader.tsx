import React from "react"
import { Root, Branding, Titles, Actions } from "./components"
import { WorkflowActionsProps, WorkflowTitlesProps } from "./"

export type WorkflowHeaderProps = WorkflowTitlesProps & WorkflowActionsProps

export const WorkflowHeader = ({
  workflowName,
  stepName,
  status,
  actions,
  ...restProps
}: WorkflowHeaderProps): JSX.Element => (
  <Root {...restProps}>
    <Branding alt="Cultureamp" />
    <Titles workflowName={workflowName} stepName={stepName} status={status} />
    <Actions actions={actions} />
  </Root>
)

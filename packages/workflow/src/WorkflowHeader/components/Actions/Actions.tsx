import React, { PropsWithChildren, HTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Actions.module.scss"

export interface WorkflowActionsProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "children">> {
  /**
   * Header actions will render in order of the array.
   */
  actions?: JSX.Element[]
}

/** A wrapper for the exit trigger (and other) actions of the Header Workflow  */
export const Actions = ({
  actions,
  ...restProps
}: PropsWithChildren<WorkflowActionsProps>): JSX.Element => (
  <div className={styles.actions} {...restProps}>
    {actions?.map(action => action)}
  </div>
)

Actions.displayName = "Actions"

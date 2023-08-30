import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Actions.module.scss"

export type WorkflowActionsProps = {
  /**
   * Header actions will render in order of the array.
   */
  headerActions?: JSX.Element[]
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "children">>

/** A wrapper for an exit trigger (and other) actions of the Header Workflow  */
export const Actions = ({
  headerActions,
  ...restProps
}: WorkflowActionsProps): JSX.Element => (
  <div className={styles.actions} {...restProps}>
    {headerActions?.map((action, index) => (
      <action.type key={`header-actions ${index}`} {...action.props} />
    ))}
  </div>
)

Actions.displayName = "Workflow.Actions"

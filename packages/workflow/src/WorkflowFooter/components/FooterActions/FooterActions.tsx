import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./FooterActions.module.scss"

export interface WorkflowFooterActionsProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "children">> {
  /** @default "start" */
  actionType?: "Previous" | "Next"
  action?: JSX.Element
}

/** A simple wrapper for a Footer previous or next action  */
export const FooterAction = ({
  actionType = "Previous",
  action,
  ...restProps
}: WorkflowFooterActionsProps): JSX.Element => (
  <div
    className={classnames([
      styles.footerAction,
      styles[`footerAction${actionType}`],
    ])}
    {...restProps}
  >
    {action}
  </div>
)

FooterAction.displayName = "FooterAction"

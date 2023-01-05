import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { useMediaQueries } from "@kaizen/responsive"
import styles from "./Actions.scss"

export interface ActionsProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

export const Actions: React.FC<ActionsProps> = ({
  children,
  classNameOverride,
}): JSX.Element => {
  const {
    queries: { isSmall },
  } = useMediaQueries()
  return (
    <div
      className={classnames(styles.actions, classNameOverride, {
        [styles.fullWidth]: isSmall,
      })}
    >
      {children}
    </div>
  )
}

Actions.displayName = "Actions"

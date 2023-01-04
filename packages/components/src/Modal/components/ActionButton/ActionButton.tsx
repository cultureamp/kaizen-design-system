import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { useMediaQueries } from "@kaizen/responsive"
import { Button, ButtonProps } from "~components/Button"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./ActionButton.module.scss"

export interface ActionButtonProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  isAlignedStart?: boolean
}

export const ActionButton: React.FC<ButtonProps & ActionButtonProps> = ({
  isAlignedStart = false,
  classNameOverride,
  ...restProps
}): JSX.Element => {
  const {
    queries: { isSmall },
  } = useMediaQueries()

  return (
    <div
      className={classnames(classNameOverride, {
        [styles.alignStart]: isAlignedStart,
      })}
    >
      <Button fullWidth={isSmall} {...restProps} />
    </div>
  )
}

ActionButton.displayName = "ActionButton"

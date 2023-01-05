import React from "react"
import classnames from "classnames"
import { Button, ButtonProps } from "@kaizen/button"
import { useMediaQueries } from "@kaizen/responsive"
import styles from "./ActionButton.scss"

export interface ActionButtonProps {
  isAlignedStart?: boolean
}

export const ActionButton = ({
  isAlignedStart = false,
  ...restProps
}: ButtonProps & ActionButtonProps): JSX.Element => {
  const {
    queries: { isSmall },
  } = useMediaQueries()

  return (
    <div
      className={classnames({
        [styles.alignStart]: isAlignedStart,
      })}
    >
      <Button fullWidth={isSmall} {...restProps} />
    </div>
  )
}

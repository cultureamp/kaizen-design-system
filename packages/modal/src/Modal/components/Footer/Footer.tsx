import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { useMediaQueries } from "@kaizen/responsive"
import styles from "./Footer.scss"

export interface FooterProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

export const Footer: React.FC<FooterProps> = ({
  children,
  classNameOverride,
}): JSX.Element => {
  const {
    queries: { isSmall },
  } = useMediaQueries()
  return (
    <div
      className={classnames(styles.footer, classNameOverride, {
        [styles.fullWidth]: isSmall,
      })}
    >
      {children}
    </div>
  )
}

Footer.displayName = "Footer"

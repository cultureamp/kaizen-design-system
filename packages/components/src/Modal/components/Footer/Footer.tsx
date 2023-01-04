import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { useMediaQueries } from "@kaizen/responsive"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Footer.module.scss"

export interface FooterProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  hasFormControls?: boolean
}

export const Footer: React.FC<FooterProps> = ({
  children,
  hasFormControls = false,

  classNameOverride,
}): JSX.Element => {
  const {
    queries: { isSmall },
  } = useMediaQueries()
  return (
    <div
      className={classnames(
        styles.footer,
        hasFormControls && styles.formFooter,
        classNameOverride,
        {
          [styles.fullWidth]: isSmall,
        }
      )}
    >
      {children}
    </div>
  )
}

Footer.displayName = "Footer"

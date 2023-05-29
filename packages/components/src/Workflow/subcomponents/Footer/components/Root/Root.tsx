import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./FooterRoot.module.scss"

export type FooterRootProps = OverrideClassName<
  HTMLAttributes<HTMLHeadingElement>
>

export const FooterRoot = ({
  children,
  classNameOverride,
  ...restProps
}: FooterRootProps): JSX.Element => (
  <footer
    className={classnames(styles.footerRoot, classNameOverride)}
    {...restProps}
  >
    {children}
  </footer>
)

FooterRoot.displayName = "Workflow.FooterRoot"

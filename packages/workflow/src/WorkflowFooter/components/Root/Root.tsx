import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./FooterRoot.module.scss"

export type WorkflowFooterRootProps = OverrideClassName<
  HTMLAttributes<HTMLHeadingElement>
>

export const FooterRoot = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowFooterRootProps): JSX.Element => (
  <footer
    className={classnames(styles.footerRoot, classNameOverride)}
    {...restProps}
  >
    {children}
  </footer>
)

FooterRoot.displayName = "FooterRoot"

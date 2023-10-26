import React from "react"
import classnames from "classnames"
import { ContentProps } from "~components/Content"
import styles from "./Container.module.scss"

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3086156812/Layout Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-content--docs Storybook}
 */
export const Container = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, style, classNameOverride, ...restProps }, ref) => (
    <div
      ref={ref}
      className={classnames(styles.container, classNameOverride)}
      style={style}
      {...restProps}
    >
      {children}
    </div>
  )
)

Container.displayName = "Container"

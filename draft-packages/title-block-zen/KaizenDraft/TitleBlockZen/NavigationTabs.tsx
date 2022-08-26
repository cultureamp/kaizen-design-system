import React from "react"
import classnames from "classnames"
import { NON_REVERSED_VARIANTS, Variant } from "./TitleBlockZen"
import styles from "./NavigationTabs.module.scss"

export type CustomNavigationTabProps = Omit<
  NavigationTabProps,
  "component" | "variant"
> & {
  className: string
}

export type NavigationTabProps = {
  text: string
  href: string
  active?: boolean
  handleClick?: (event: React.MouseEvent) => void
  variant?: Variant
  id?: string
  automationId?: string
  /**
   * Custom render for the tab. Commonly used to replace the link with a router link component.
   * Props given to the NavigationTab component will be passed back, along with a decorated className.
   * It is up to you to reapply them to your custom component.
   */
  renderTab?: (props: CustomNavigationTabProps) => JSX.Element
}

const isLight = (variant: Variant | undefined): boolean =>
  variant !== undefined && NON_REVERSED_VARIANTS.includes(variant)

const NavigationTab = (props: NavigationTabProps) => {
  const className = classnames(styles.linkAnchor, {
    [styles.lightBackground]: isLight(props.variant),
    [styles.active]: props.active,
  })

  if (props.renderTab) {
    const { renderTab: Component, ...otherProps } = props
    return <Component {...otherProps} className={className} />
  }

  return (
    <a
      className={className}
      href={props.href}
      onClick={props.handleClick}
      id={props.id}
      data-automation-id={props.automationId}
    >
      {props.text}
    </a>
  )
}

export default NavigationTab

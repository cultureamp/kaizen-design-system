import React from "react"
import classnames from "classnames"
import { TitleBlockVariant } from "../types"
import { NON_REVERSED_VARIANTS } from "../utils"
import styles from "./NavigationTabs.module.scss"

export type CustomNavigationTabProps = Omit<NavigationTabProps, "render"> & {
  className: string
}

export type NavigationTabProps = {
  text: string
  href: string
  active?: boolean
  handleClick?: (event: React.MouseEvent) => void
  variant?: TitleBlockVariant
  id?: string
  automationId?: string
  /**
   * Custom render for the tab. Commonly used to replace the link with a router link component.
   * Props given to the NavigationTab component will be passed back, along with a decorated className.
   * It is up to you to reapply them to your custom component.
   */
  render?: (props: CustomNavigationTabProps) => JSX.Element
}

const isLight = (variant: TitleBlockVariant | undefined): boolean =>
  variant !== undefined && NON_REVERSED_VARIANTS.includes(variant)

export const NavigationTab = (props: NavigationTabProps): JSX.Element => {
  const className = classnames(
    styles.linkAnchor,
    isLight(props.variant) && styles.lightBackground,
    props.active && styles.active
  )

  if (props.render) {
    const { render: Component, ...otherProps } = props
    return <Component {...otherProps} className={className} />
  }

  return (
    <a
      className={className}
      href={props.href}
      onClick={props.handleClick}
      id={props.id}
      data-automation-id={props.automationId}
      data-testid={props.automationId}
      aria-current={props.active ? "page" : undefined}
    >
      {props.text}
    </a>
  )
}

NavigationTab.displayName = "NavigationTab"

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
  component?: (props: CustomNavigationTabProps) => JSX.Element
}

const isLight = (variant: Variant | undefined): boolean =>
  variant !== undefined && NON_REVERSED_VARIANTS.includes(variant)

const NavigationTab = (props: NavigationTabProps) => {
  const className = classnames(styles.linkAnchor, {
    [styles.lightBackground]: isLight(props.variant),
    [styles.active]: props.active,
  })

  if (props.component) {
    const { component: Component, ...otherProps } = props
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

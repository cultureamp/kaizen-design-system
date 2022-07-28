import React from "react"
import classnames from "classnames"
import { NON_REVERSED_VARIANTS, Variant } from "./TitleBlockZen"
import styles from "./NavigationTabs.module.scss"

export type NavigationTabProps = {
  text: string
  href: string
  active?: boolean
  handleClick?: (event: React.MouseEvent) => void
  variant?: Variant
  id?: string
  automationId?: string
  component?: (props: Omit<NavigationTabProps, "component">) => JSX.Element
}

const isLight = (variant: Variant | undefined): boolean =>
  variant !== undefined && NON_REVERSED_VARIANTS.includes(variant)

const NavigationTab = (props: NavigationTabProps) => {
  if (props.component) {
    const { component: Component, ...otherProps } = props
    return <Component {...otherProps} />
  }

  return (
    <a
      className={classnames(styles.linkAnchor, {
        [styles.lightBackground]: isLight(props.variant),
        [styles.active]: props.active,
      })}
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

import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import * as React from "react"

const styles = require("./GenericButton.module.scss")

type GenericProps = {
  id?: string
  label: string
  destructive?: boolean
  disabled?: boolean
  form?: boolean
  reversed?: boolean
  icon?: React.SVGAttributes<SVGSymbolElement>
  onClick?: (e: MouseEvent) => void
  onMouseDown?: (e: MouseEvent) => void
  href?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
  type?: "submit" | "reset" | "button"
  automationId?: string
  fullWidth?: boolean
  disableTabFocusAndIUnderstandTheAccessibilityImplications?: boolean
  analytics?: Analytics
}

type LabelProps = {
  iconPosition?: "start" | "end"
  primary?: boolean
  secondary?: boolean
  reverseColor?: "cluny" | "peach" | "seedling" | "wisteria" | "yuzu"
}

type Analytics = {
  eventName: string
  properties: object
}

export type IconButtonProps = GenericProps
export type ButtonProps = GenericProps & LabelProps

type Props = ButtonProps & {
  iconButton?: boolean
}

const GenericButton: React.FunctionComponent<Props> = props => {
  return (
    <span
      className={classNames(styles.container, {
        [styles.fullWidth]: props.fullWidth,
      })}
    >
      {props.href ? renderLink(props) : renderButton(props)}
    </span>
  )
}

GenericButton.defaultProps = {
  iconPosition: "start",
  iconButton: false,
  primary: false,
  secondary: false,
  newTabAndIUnderstandTheAccessibilityImplications: false,
  disableTabFocusAndIUnderstandTheAccessibilityImplications: false,
  type: "button",
}

const renderButton: React.FunctionComponent<Props> = props => {
  const {
    id,
    disabled,
    onClick,
    onMouseDown,
    type,
    disableTabFocusAndIUnderstandTheAccessibilityImplications,
  } = props
  const label = props.icon && props.iconButton ? props.label : undefined

  return (
    <button
      id={id}
      disabled={disabled}
      className={buttonClass(props)}
      onClick={(e: any) => {
        if (onClick) {
          e.preventDefault()
          onClick && onClick(e)
        }
      }}
      onMouseDown={(e: any) => onMouseDown && onMouseDown(e)}
      type={type}
      data-automation-id={props.automationId}
      title={label}
      aria-label={label}
      tabIndex={
        disableTabFocusAndIUnderstandTheAccessibilityImplications
          ? -1
          : undefined
      }
      data-analytics-click={props.analytics && props.analytics.eventName}
      data-analytics-properties={
        props.analytics && JSON.stringify(props.analytics.properties)
      }
    >
      {renderContent(props)}
    </button>
  )
}

const renderLink: React.FunctionComponent<Props> = props => {
  const {
    id,
    href,
    onClick,
    newTabAndIUnderstandTheAccessibilityImplications,
  } = props

  return (
    <a
      id={id}
      href={href}
      target={
        newTabAndIUnderstandTheAccessibilityImplications ? "_blank" : "_self"
      }
      className={buttonClass(props)}
      onClick={(e: any) => {
        if (onClick) {
          e.preventDefault()
          onClick && onClick(e)
        }
      }}
      data-automation-id={props.automationId}
      data-analytics-click={props.analytics && props.analytics.eventName}
      data-analytics-properties={
        props.analytics && JSON.stringify(props.analytics.properties)
      }
    >
      {renderContent(props)}
    </a>
  )
}

const buttonClass = (props: Props) => {
  const variantClass =
    (props.destructive && styles.destructive) ||
    (props.primary && styles.primary) ||
    (props.secondary && styles.secondary)

  return classNames(styles.button, variantClass, {
    [styles.form]: props.form,
    [styles.reversed]: props.reversed,
    [styles.iconButton]: props.iconButton,
    [styles.reverseColorCluny]: props.reverseColor === "cluny",
    [styles.reverseColorPeach]: props.reverseColor === "peach",
    [styles.reverseColorSeedling]: props.reverseColor === "seedling",
    [styles.reverseColorWisteria]: props.reverseColor === "wisteria",
    [styles.reverseColorYuzu]: props.reverseColor === "yuzu",
    [styles.reversedIconButton]: props.iconButton && props.reversed,
  })
}

const renderContent: React.FunctionComponent<Props> = props => (
  <span className={styles.content}>
    {props.icon && props.iconPosition !== "end" && renderIcon(props.icon)}
    {(!props.icon || !props.iconButton) && (
      <span className={styles.label}>{props.label}</span>
    )}
    {props.icon && props.iconPosition === "end" && renderIcon(props.icon)}
  </span>
)

const renderIcon = (icon: React.SVGAttributes<SVGSymbolElement>) => (
  <span className={styles.iconWrapper}>
    <Icon icon={icon} role="presentation" />
  </span>
)

export default GenericButton

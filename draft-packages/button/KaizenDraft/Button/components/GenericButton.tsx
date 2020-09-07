import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import React, {
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
  ComponentType,
  FocusEvent,
  MouseEvent,
} from "react"

const styles = require("./GenericButton.module.scss")

export type CustomButtonProps = {
  id?: string
  className: string
  ref: Ref<any>
  disabled?: boolean
  onClick?: (e: MouseEvent) => void
  onFocus?: (e: FocusEvent<HTMLElement>) => void
  onBlur?: (e: FocusEvent<HTMLElement>) => void
}

export type GenericProps = {
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
  ariaControls?: string
  ariaDescribedBy?: string
  ariaExpanded?: boolean
  onFocus?: (e: FocusEvent<HTMLElement>) => void
  onBlur?: (e: FocusEvent<HTMLElement>) => void
  component?: ComponentType<CustomButtonProps>
}

export type AdditionalContentProps = {
  additionalContent?: React.ReactNode
}

export type LabelProps = {
  iconPosition?: "start" | "end"
  primary?: boolean
  secondary?: boolean
  reverseColor?: "cluny" | "peach" | "seedling" | "wisteria" | "yuzu"
}

type Analytics = {
  eventName: string
  properties: Record<string, unknown>
}

export type IconButtonProps = GenericProps
export type ButtonProps = GenericProps & LabelProps

type Props = ButtonProps & {
  iconButton?: boolean
} & AdditionalContentProps

export type ButtonRef = { focus: () => void }

// We're treating custom props as anything that is kebab cased.
// This is so we can support properties like aria-* or data-*
const getCustomProps = (props: object) => {
  const keys = Object.keys(props).filter(k => k.indexOf("-") !== -1)
  return keys.reduce((acc, val) => {
    acc[val] = props[val]
    return acc
  }, {})
}

const GenericButton = forwardRef(
  (props: Props, ref: Ref<ButtonRef | undefined>) => {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>()
    useImperativeHandle(ref, () => ({
      focus: () => {
        buttonRef.current?.focus()
      },
    }))

    const determineButtonRenderer = () => {
      if (props.component) {
        return renderCustomComponent(props, buttonRef as Ref<HTMLElement>)
      }

      if (props.href && !props.disabled) {
        return renderLink(props, buttonRef as Ref<HTMLAnchorElement>)
      }

      return renderButton(props, buttonRef as Ref<HTMLButtonElement>)
    }

    return (
      <span
        className={classNames(styles.container, {
          [styles.fullWidth]: props.fullWidth,
        })}
      >
        {determineButtonRenderer()}
      </span>
    )
  }
)

GenericButton.defaultProps = {
  iconPosition: "start",
  iconButton: false,
  primary: false,
  secondary: false,
  newTabAndIUnderstandTheAccessibilityImplications: false,
  disableTabFocusAndIUnderstandTheAccessibilityImplications: false,
  type: "button",
}

const renderCustomComponent = (props: Props, ref: Ref<any>) => {
  if (!props.component) {
    return null
  }

  const Element = props.component
  return (
    <Element
      id={props.id}
      className={buttonClass(props)}
      disabled={props.disabled}
      ref={ref}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {renderContent(props)}
    </Element>
  )
}

const renderButton = (props: Props, ref: Ref<HTMLButtonElement>) => {
  const {
    id,
    disabled,
    onClick,
    onMouseDown,
    type,
    ariaDescribedBy,
    ariaExpanded,
    ariaControls,
    disableTabFocusAndIUnderstandTheAccessibilityImplications,
    onFocus,
    onBlur,
    component,
    ...rest
  } = props
  const label = props.icon && props.iconButton ? props.label : undefined
  const customProps = getCustomProps(rest)

  return (
    <button
      id={id}
      disabled={disabled}
      className={buttonClass(props)}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={(e: any) => onMouseDown && onMouseDown(e)}
      type={type}
      data-automation-id={props.automationId}
      title={label}
      aria-controls={ariaControls}
      aria-describedby={ariaDescribedBy}
      aria-expanded={ariaExpanded}
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
      ref={ref}
      {...customProps}
    >
      {renderContent(props)}
    </button>
  )
}

const renderLink = (props: Props, ref: Ref<HTMLAnchorElement>) => {
  const {
    id,
    href,
    onClick,
    newTabAndIUnderstandTheAccessibilityImplications,
    onFocus,
    onBlur,
    component,
    ...rest
  } = props
  const customProps = getCustomProps(rest)

  return (
    <a
      id={id}
      href={href}
      target={
        newTabAndIUnderstandTheAccessibilityImplications ? "_blank" : "_self"
      }
      className={buttonClass(props)}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      data-automation-id={props.automationId}
      data-analytics-click={props.analytics && props.analytics.eventName}
      data-analytics-properties={
        props.analytics && JSON.stringify(props.analytics.properties)
      }
      ref={ref}
      {...customProps}
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
  })
}

const renderContent: React.FunctionComponent<Props> = props => (
  <span className={styles.content}>
    {props.icon && props.iconPosition !== "end" && renderIcon(props.icon)}
    {(!props.icon || !props.iconButton) && (
      <span className={styles.label}>{props.label}</span>
    )}
    {props.additionalContent && (
      <span className={styles.additionalContentWrapper}>
        {props.additionalContent}
      </span>
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

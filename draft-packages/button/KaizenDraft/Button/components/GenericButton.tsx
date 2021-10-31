import { Icon } from "@kaizen/component-library"
import { LoadingSpinner } from "@kaizen/draft-loading-spinner"
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
import { Badge, BadgeAnimated } from "@kaizen/draft-badge"

import styles from "./GenericButton.module.scss"

export type CustomButtonProps = {
  id?: string
  className: string
  ref: Ref<any>
  href?: string
  disabled?: boolean
  onClick?: (e: MouseEvent<any>) => void
  onFocus?: (e: FocusEvent<HTMLElement>) => void
  onBlur?: (e: FocusEvent<HTMLElement>) => void
}

export type GenericProps = {
  id?: string
  label: string
  primary?: boolean
  destructive?: boolean
  secondary?: boolean
  disabled?: boolean
  form?: boolean
  reversed?: boolean
  icon?: React.SVGAttributes<SVGSymbolElement>
  badge?: BadgeProps
  onClick?: (e: MouseEvent) => void
  onMouseDown?: (e: MouseEvent) => void
  href?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
  type?: "submit" | "reset" | "button"
  fullWidth?: boolean
  disableTabFocusAndIUnderstandTheAccessibilityImplications?: boolean
  onFocus?: (e: FocusEvent<HTMLElement>) => void
  onBlur?: (e: FocusEvent<HTMLElement>) => void
  component?: ComponentType<CustomButtonProps>
}

export type AdditionalContentProps = {
  additionalContent?: React.ReactNode
}

type LabelPropsGeneric = {
  iconPosition?: "start" | "end"
  primary?: boolean
}

type WorkingProps = {
  working: true
  workingLabel: string
  workingLabelHidden?: boolean
}

type WorkingUndefinedProps = {
  working?: false
}

export type LabelProps = LabelPropsGeneric &
  (WorkingProps | WorkingUndefinedProps)

export type IconButtonProps = GenericProps
export type ButtonProps = GenericProps & LabelProps

type Props = ButtonProps & {
  iconButton?: boolean
} & AdditionalContentProps

type BadgeProps = {
  text: string
  animateChange?: boolean
  variant?: "default" | "dark" | "active"
  reversed?: boolean
}

export type ButtonRef = { focus: () => void }

// We're treating custom props as anything that is kebab cased.
// This is so we can support properties like aria-* or data-*
const getCustomProps = (props: Record<string, any>) => {
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
        return renderCustomComponent(
          props.component,
          props,
          buttonRef as Ref<HTMLElement>
        )
      }

      if (props.href && !props.disabled && !props.working) {
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

const renderCustomComponent = (
  CustomComponent: ComponentType<CustomButtonProps>,
  props: Props,
  ref: Ref<any>
) => (
  <CustomComponent
    id={props.id}
    className={buttonClass(props)}
    disabled={props.disabled}
    ref={ref}
    href={props.href}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    aria-label={generateAriaLabel(props)}
  >
    {renderContent(props)}
  </CustomComponent>
)

const renderButton = (props: Props, ref: Ref<HTMLButtonElement>) => {
  const {
    id,
    disabled,
    onClick,
    onMouseDown,
    type,
    disableTabFocusAndIUnderstandTheAccessibilityImplications,
    onFocus,
    onBlur,
    iconButton,
    ...rest
  } = props
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
      aria-label={generateAriaLabel(props)}
      aria-disabled={disabled || props.working ? true : undefined}
      tabIndex={
        disableTabFocusAndIUnderstandTheAccessibilityImplications
          ? -1
          : undefined
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
    iconButton,
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
      ref={ref}
      aria-label={generateAriaLabel(props)}
      {...customProps}
    >
      {renderContent(props)}
    </a>
  )
}

const buttonClass = (props: Props) => {
  const variantClass =
    (props.destructive &&
      props.secondary &&
      !props.reversed &&
      styles.secondaryDestructive) ||
    (props.destructive && styles.destructive) ||
    (props.primary && styles.primary) ||
    (props.secondary && styles.secondary)

  return classNames(styles.button, variantClass, {
    [styles.form]: props.form,
    [styles.reversed]: props.reversed,
    [styles.iconButton]: props.iconButton,
    [styles.working]: !props.iconButton && props.working,
  })
}

const renderLoadingSpinner = () => (
  <div className={styles.loadingSpinner}>
    <LoadingSpinner accessibilityLabel="" size="sm" />
  </div>
)

const renderWorkingContent = (props: Extract<Props, { working: true }>) => {
  if (props.workingLabelHidden) {
    return (
      <>
        {/* This is to ensure the button stays at the correct width */}
        <span className={styles.hidden} aria-hidden="true">
          {renderDefaultContent(props)}
        </span>
        <span className={styles.centeredLoadingSpinner}>
          {renderLoadingSpinner()}
        </span>
      </>
    )
  }

  return (
    <>
      {props.iconPosition !== "end" && renderLoadingSpinner()}
      <span className={styles.label}>{props.workingLabel}</span>
      {props.additionalContent && (
        <span className={styles.additionalContentWrapper}>
          {props.additionalContent}
        </span>
      )}
      {props.iconPosition === "end" && renderLoadingSpinner()}
    </>
  )
}

const renderDefaultContent = (props: Props) => (
  <>
    {props.icon && props.iconPosition !== "end" && renderIcon(props.icon)}
    {(!props.icon || !props.iconButton) && (
      <span className={styles.label}>{props.label}</span>
    )}
    {props.additionalContent && (
      <span className={styles.additionalContentWrapper}>
        {props.additionalContent}
      </span>
    )}
    {renderBadge(props)}
    {props.icon && props.iconPosition === "end" && renderIcon(props.icon)}
  </>
)

const renderBadge = (props: Props) => {
  if (!props.badge) return null

  const { text, animateChange, reversed, variant } = props.badge

  if (animateChange) {
    return (
      <BadgeAnimated variant={variant} reversed={reversed}>
        {text}
      </BadgeAnimated>
    )
  }
  return (
    <Badge variant={variant} reversed={reversed}>
      {text}
    </Badge>
  )
}

const renderContent: React.FunctionComponent<Props> = props => (
  <span className={styles.content}>
    {props.working && !props.iconButton
      ? renderWorkingContent(props)
      : renderDefaultContent(props)}
  </span>
)

const renderIcon = (icon: React.SVGAttributes<SVGSymbolElement>) => (
  <span className={styles.iconWrapper}>
    <Icon icon={icon} role="presentation" />
  </span>
)

// We only want an aria-label in the case that the button has just an icon and no text
// This can happen when the button is working and workingLabelHidden is true,
// or when this is an IconButton
const generateAriaLabel = (props: Props) => {
  if (props.working && props.workingLabelHidden) {
    return props.workingLabel
  }

  if (props.iconButton) {
    return props.label
  }

  return undefined
}

export default GenericButton

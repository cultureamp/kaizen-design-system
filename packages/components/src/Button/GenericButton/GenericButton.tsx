import React, {
  ComponentType,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
  MouseEvent,
  FocusEvent,
  MutableRefObject,
} from "react"
import classnames from "classnames"
import { useButton, useLink } from "react-aria"
import {
  ButtonContext,
  LinkContext,
  useContextProps,
} from "react-aria-components"
import { Badge, BadgeAnimated } from "~components/Badge"
import { LoadingSpinner } from "~components/Loading"
import styles from "./GenericButton.module.scss"

export type CustomButtonProps = {
  id?: string
  className: string
  href?: string
  disabled?: boolean
  onClick?: (e: MouseEvent<any>) => void
  onFocus?: (e: FocusEvent<HTMLElement>) => void
  onBlur?: (e: FocusEvent<HTMLElement>) => void
  children?: React.ReactNode
  "data-testid"?: string
}

export type ButtonFormAttributes = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  | "form"
  | "formAction"
  | "formMethod"
  | "formEncType"
  | "formTarget"
  | "formNoValidate"
>

export type GenericProps = {
  id?: string
  reversed?: boolean
  onClick?: (e: MouseEvent) => void
  onMouseDown?: (e: MouseEvent) => void
  href?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
  disableTabFocusAndIUnderstandTheAccessibilityImplications?: boolean
  onFocus?: (e: FocusEvent<HTMLElement>) => void
  onBlur?: (e: FocusEvent<HTMLElement>) => void
  component?: ComponentType<CustomButtonProps>
  classNameOverride?: string
}

export type WorkingProps = {
  working: true
  workingLabel: string
  workingLabelHidden?: boolean
}

export type WorkingUndefinedProps = {
  working?: false
}

export type ButtonBadgeProps = {
  text: string
  animateChange?: boolean
  variant?: "default" | "dark" | "active"
  reversed?: boolean
}

export type RenderProps = GenericButtonProps & {
  additionalContent?: React.ReactNode
  iconButton?: boolean
  directionalLink?: boolean
  paginationLink?: boolean
  isActive?: boolean
}

export type ButtonRef = { focus: () => void }

export type SharedButtonProps = {
  label: string
  primary?: boolean
  destructive?: boolean
  secondary?: boolean
  /** @default "regular" */
  size?: "small" | "regular"
  badge?: ButtonBadgeProps
  type?: "submit" | "reset" | "button"
  fullWidth?: boolean
  iconPosition?: "start" | "end"
  icon?: JSX.Element
  disabled?: boolean
}

export type WorkingButtonProps = WorkingProps | WorkingUndefinedProps

export type BaseButtonProps = GenericProps &
  ButtonFormAttributes & {
    label: string
    primary?: boolean
    destructive?: boolean
    secondary?: boolean
    /** @default "regular" */
    size?: "small" | "regular"
    badge?: ButtonBadgeProps
    type?: "submit" | "reset" | "button"
    fullWidth?: boolean
    iconPosition?: "start" | "end"
    icon?: JSX.Element
    disabled?: boolean
  }

export type GenericButtonProps = BaseButtonProps & WorkingButtonProps

// We're treating custom props as anything that is kebab cased.
// This is so we can support properties like aria-* or data-*
const getCustomProps = (props: Record<string, any>): Record<string, string> => {
  const keys = Object.keys(props).filter(k => k.indexOf("-") !== -1)
  return keys.reduce<Record<string, any>>((acc, val) => {
    acc[val] = props[val]
    return acc
  }, {})
}

export const GenericButton = forwardRef(
  (
    {
      iconPosition = "start",
      iconButton = false,
      primary = false,
      secondary = false,
      newTabAndIUnderstandTheAccessibilityImplications = false,
      disableTabFocusAndIUnderstandTheAccessibilityImplications = false,
      type = "button",
      ...otherProps
    }: RenderProps,
    ref: Ref<ButtonRef | undefined>
  ) => {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>()
    const wrapperRef = useRef<HTMLSpanElement>(null)
    useImperativeHandle(ref, () => ({
      focus: (): void => {
        buttonRef.current?.focus()
      },
    }))

    const props = {
      iconPosition,
      iconButton,
      primary,
      secondary,
      newTabAndIUnderstandTheAccessibilityImplications,
      disableTabFocusAndIUnderstandTheAccessibilityImplications,
      type,
      ...otherProps,
    }

    if (props.component) {
      return renderCustomComponent(props.component, props, wrapperRef)
    }

    return (
      <span
        ref={wrapperRef}
        className={classnames(
          styles.container,
          props.fullWidth && styles.fullWidth
        )}
        aria-live={"workingLabel" in props ? "polite" : undefined}
      >
        {props.href && !props.disabled && !props.working
          ? renderLink(props, buttonRef as Ref<HTMLAnchorElement>)
          : renderButton(props, buttonRef as Ref<HTMLButtonElement>)}
      </span>
    )
  }
)

GenericButton.displayName = "GenericButton"

const renderCustomComponent = (
  CustomComponent: ComponentType<CustomButtonProps>,
  props: RenderProps,
  ref: Ref<HTMLSpanElement>
): JSX.Element => {
  const passedInProps = {
    id: props.id,
    className: buttonClass(props),
    disabled: props.disabled,
    href: props.href,
    onClick: props.onClick,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    "aria-label": generateAriaLabel(props),
    ...getCustomProps(props),
  }

  const [contextProps, contextRef] = useContextProps(
    passedInProps,
    ref,
    // @ts-ignore we're using span ref on link context, but that's ok because we need only sizing
    LinkContext
  )
  // @ts-ignore
  const { linkProps } = useLink(contextProps, contextRef)

  return (
    <span
      ref={contextRef}
      className={classnames(
        styles.container,
        props.fullWidth && styles.fullWidth
      )}
      aria-live={"workingLabel" in props ? "polite" : undefined}
    >
      <CustomComponent {...contextProps} {...linkProps}>
        {renderContent(props)}
      </CustomComponent>
    </span>
  )
}

const renderButton = (
  props: RenderProps,
  ref: Ref<HTMLButtonElement>
): JSX.Element => {
  const passedInProps: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > = {
    id: props.id,
    disabled: props.disabled,
    onClick: props.onClick,
    onMouseDown: props.onMouseDown,
    type: props.type,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    form: props.form,
    formAction: props.formAction,
    formMethod: props.formMethod,
    formEncType: props.formEncType,
    formTarget: props.formTarget,
    formNoValidate: props.formNoValidate,
    className: buttonClass(props),
    "aria-label": generateAriaLabel(props),
    "aria-disabled": props.disabled || props.working ? true : undefined,
    tabIndex: props.disableTabFocusAndIUnderstandTheAccessibilityImplications
      ? -1
      : undefined,
    ...getCustomProps(props),
  }

  const [contextProps, contextRef] = useContextProps(
    passedInProps,
    ref,
    ButtonContext
  )
  // @ts-ignore
  const { buttonProps } = useButton(contextProps, contextRef)

  return (
    // eslint-disable-next-line react/button-has-type
    <button {...contextProps} {...buttonProps} ref={contextRef}>
      {renderContent(props)}
    </button>
  )
}

const renderLink = (
  props: RenderProps,
  ref: Ref<HTMLAnchorElement>
): JSX.Element => {
  const target = props.newTabAndIUnderstandTheAccessibilityImplications
    ? "_blank"
    : "_self"

  const passedInProps: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > = {
    id: props.id,
    href: props.href,
    target,
    rel: target === "_blank" ? "noopener noreferrer" : undefined,
    className: buttonClass(props),
    onClick: props.onClick,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    "aria-label": generateAriaLabel(props),
    ...getCustomProps(props),
  }

  const [contextProps, contextRef] = useContextProps(
    passedInProps,
    ref,
    LinkContext
  )
  // @ts-ignore
  const { linkProps } = useLink(contextProps, contextRef)

  return (
    <a {...contextProps} {...linkProps} ref={contextRef}>
      {renderContent(props)}
    </a>
  )
}

const buttonClass = (props: RenderProps): string => {
  const isDefault = !props.primary && !props.destructive && !props.secondary
  return classnames(
    styles.button,
    isDefault && styles.default,
    (props.disabled || props["aria-disabled"]) && styles.disabled,
    props.primary && styles.primary,
    props.destructive && styles.destructive,
    props.secondary && styles.secondary,
    props.size && styles[props.size],
    props.reversed && styles.reversed,
    props.iconButton && styles.iconButton,
    props.working && styles.working,
    (props.directionalLink || props.paginationLink) && styles.circleButton,
    props.directionalLink && styles.directionalLink,
    props.paginationLink && styles.paginationLink,
    props.isActive && styles.isPaginationLinkActive,
    props.classNameOverride
  )
}

const renderLoadingSpinner = (): JSX.Element => (
  <div className={styles.loadingSpinner}>
    <LoadingSpinner accessibilityLabel="" size="sm" />
  </div>
)

const renderWorkingContent = (
  props: Extract<RenderProps, { working: true }>
): JSX.Element => {
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

const renderDefaultContent = (props: RenderProps): JSX.Element => (
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

const renderBadge = (props: RenderProps): JSX.Element | null => {
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

const renderContent = (props: RenderProps): JSX.Element => (
  <span className={styles.content}>
    {props.working ? renderWorkingContent(props) : renderDefaultContent(props)}
  </span>
)

const renderIcon = (icon: JSX.Element): JSX.Element => (
  <span className={styles.iconWrapper}>{icon}</span>
)

// We only want an aria-label in the case that the button has just an icon and no text
// This can happen when the button is working and workingLabelHidden is true,
// or when this is an IconButton
const generateAriaLabel = (props: RenderProps): string | undefined => {
  if (props.working && props.workingLabelHidden) {
    return props.workingLabel
  }

  if (props.iconButton) {
    return props.label
  }

  return undefined
}

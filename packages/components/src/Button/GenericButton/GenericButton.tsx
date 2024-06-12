import React, {
  ComponentType,
  forwardRef,
  Ref,
  useRef,
  MouseEvent,
  FocusEvent,
} from "react"
import classnames from "classnames"
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
  ButtonFormAttributes &
  SharedButtonProps

export type GenericButtonProps = BaseButtonProps & WorkingButtonProps

const getHTMLAttributesFromProps = (
  props: Record<string, any>
): Record<string, string> => {
  const renderProps = [
    "label",
    "primary",
    "destructive",
    "secondary",
    "size",
    "badge",
    "fullWidth",
    "reversed,",
  ]

  const iconProps = ["iconPosition", "iconButton", "icon"]

  const workingProps = ["working", "workingLabel", "workingLabelHidden"]

  const a11yProps = [
    "newTabAndIUnderstandTheAccessibilityImplications",
    "disableTabFocusAndIUnderstandTheAccessibilityImplications",
  ]

  const customProps = [
    ...renderProps,
    ...iconProps,
    ...workingProps,
    ...a11yProps,
  ]

  return Object.keys(props).reduce<Record<string, any>>((acc, key) => {
    if (customProps.includes(key)) return acc
    acc[key] = props[key]
    return acc
  }, {})
}

export const GenericButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  RenderProps
>(
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
    },
    ref
  ) => {
    const inbuiltRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
    const buttonRef = ref ?? inbuiltRef

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

    const determineButtonRenderer = (): JSX.Element => {
      if (props.component) {
        return renderCustomComponent(props.component, props)
      }

      if (props.href && !props.disabled && !props.working) {
        return renderLink(props, buttonRef as Ref<HTMLAnchorElement>)
      }

      return renderButton(props, buttonRef as Ref<HTMLButtonElement>)
    }

    return (
      <span
        className={classnames(
          styles.container,
          props.fullWidth && styles.fullWidth
        )}
        aria-live={"workingLabel" in props ? "polite" : undefined}
      >
        {determineButtonRenderer()}
      </span>
    )
  }
)

GenericButton.displayName = "GenericButton"

const renderCustomComponent = (
  CustomComponent: ComponentType<CustomButtonProps>,
  props: RenderProps
): JSX.Element => {
  const { id, disabled, href, onClick, onFocus, onBlur, ...rest } = props
  const customProps = getHTMLAttributesFromProps(rest)
  return (
    <CustomComponent
      id={id}
      className={buttonClass(props)}
      disabled={disabled}
      href={href}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={generateAriaLabel(props)}
      {...customProps}
    >
      {renderContent(props)}
    </CustomComponent>
  )
}

const renderButton = (
  props: RenderProps,
  ref: Ref<HTMLButtonElement>
): JSX.Element => {
  const {
    id,
    disabled,
    disableTabFocusAndIUnderstandTheAccessibilityImplications,
    ...rest
  } = props
  const customProps = getHTMLAttributesFromProps(rest)

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      id={id}
      className={buttonClass(props)}
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

const renderLink = (
  props: RenderProps,
  ref: Ref<HTMLAnchorElement>
): JSX.Element => {
  const { newTabAndIUnderstandTheAccessibilityImplications, ...rest } = props
  const customProps = getHTMLAttributesFromProps(rest)

  const target = newTabAndIUnderstandTheAccessibilityImplications
    ? "_blank"
    : "_self"

  return (
    <a
      ref={ref}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={buttonClass(props)}
      aria-label={generateAriaLabel(props)}
      {...customProps}
    >
      {renderContent(props)}
    </a>
  )
}

const buttonClass = (props: RenderProps): string => {
  const isDefault = !props.primary && !props.destructive && !props.secondary
  return classnames(
    styles.button,
    isDefault && styles.default,
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

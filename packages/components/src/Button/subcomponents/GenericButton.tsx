import React, {
  ComponentType,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
  MouseEvent,
  FocusEvent,
} from "react"
import classnames from "classnames"
import { Badge, BadgeAnimated } from "@kaizen/draft-badge"
import { LoadingSpinner } from "@kaizen/loading-spinner"
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

export type ButtonType = "submit" | "reset" | "button"

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

export type RenderProps = ButtonProps & {
  additionalContent?: React.ReactNode
  iconButton?: boolean
  directionalLink?: boolean
  paginationLink?: boolean
  isActive?: boolean
}

export type ButtonRef = { focus: () => void }

export type ButtonProps = GenericProps &
  ButtonFormAttributes &
  (WorkingProps | WorkingUndefinedProps) & {
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

// We're treating custom props as anything that is kebab cased.
// This is so we can support properties like aria-* or data-*
const getCustomProps = (props: Record<string, any>): Record<string, string> => {
  const keys = Object.keys(props).filter(k => k.indexOf("-") !== -1)
  return keys.reduce<Record<string, any>>((acc, val) => {
    acc[val] = props[val]
    return acc
  }, {})
}

const GenericButton = forwardRef(
  (props: RenderProps, ref: Ref<ButtonRef | undefined>) => {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>()
    useImperativeHandle(ref, () => ({
      focus: (): void => {
        buttonRef.current?.focus()
      },
    }))

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
        aria-live="polite"
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
GenericButton.displayName = "GenericButton"

const renderCustomComponent = (
  CustomComponent: ComponentType<CustomButtonProps>,
  props: RenderProps
): JSX.Element => {
  const { id, disabled, href, onClick, onFocus, onBlur, ...rest } = props
  const customProps = getCustomProps(rest)
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
    onClick,
    onMouseDown,
    type,
    disableTabFocusAndIUnderstandTheAccessibilityImplications,
    onFocus,
    onBlur,
    form,
    formAction,
    formMethod,
    formEncType,
    formTarget,
    formNoValidate,
    ...rest
  } = props
  const customProps = getCustomProps(rest)

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      id={id}
      disabled={disabled}
      className={buttonClass(props)}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={(e): void => onMouseDown && onMouseDown(e)}
      aria-label={generateAriaLabel(props)}
      aria-disabled={disabled || props.working ? true : undefined}
      form={form}
      formAction={formAction}
      formMethod={formMethod}
      formEncType={formEncType}
      formTarget={formTarget}
      formNoValidate={formNoValidate}
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
  const {
    id,
    href,
    onClick,
    newTabAndIUnderstandTheAccessibilityImplications,
    onFocus,
    onBlur,
    ...rest
  } = props
  const customProps = getCustomProps(rest)

  const target = newTabAndIUnderstandTheAccessibilityImplications
    ? "_blank"
    : "_self"

  return (
    <a
      id={id}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
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

export default GenericButton

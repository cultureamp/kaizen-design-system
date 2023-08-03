import { MouseEvent, FocusEvent, ComponentType } from "react"

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

export type Props = ButtonProps & {
  additionalContent?: React.ReactNode
  iconButton?: boolean
  directionalLink?: boolean
  paginationLink?: boolean
  isActive?: boolean
}

export type BadgeProps = {
  text: string
  animateChange?: boolean
  variant?: "default" | "dark" | "active"
  reversed?: boolean
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
    badge?: BadgeProps
    type?: "submit" | "reset" | "button"
    fullWidth?: boolean
    iconPosition?: "start" | "end"
    icon?: JSX.Element
    disabled?: boolean
  }

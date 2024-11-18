import React, { forwardRef } from "react"
import classNames from "classnames"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import { ButtonContent, PendingContent } from "./subcomponents"
import { ButtonSizes, ButtonVariants, PendingButtonProps } from "./types"
import styles from "./Button.module.css"

type ButtonBaseProps = Omit<RACButtonProps, "children"> & {
  /** Used as the label for the button. */
  children: RACButtonProps["children"]
  /** Visually hides the Button's child content used as the label and the `pendingLabel`. Use for icon-only `Button`. @default "false" */
  hasHiddenLabel?: boolean
  /** The visual style of the button.
   *  @default "default" */
  variant?: ButtonVariants
  /** The visual size of the button. `medium` was formerly `regular`
   *  @default "medium" */
  size?: ButtonSizes
  /** Renders an icon at the `iconPosition` provided. To the size scales with the button, we recommend using the `Icon` component from `"@kaizen/components/future"` */
  icon?: JSX.Element
  /** Controls the position of the Icon passed in as props. @default "start" */
  iconPosition?: "start" | "end"
  /** Controls if the button inherits width from its parent. @default "false" */
  isFullWidth?: boolean
}

export type ButtonProps = ButtonBaseProps & PendingButtonProps

export const Button = forwardRef(
  (
    {
      variant = "primary",
      size = "medium",
      className,
      children,
      isDisabled,
      isFullWidth = false,
      icon,
      iconPosition,
      hasHiddenLabel = false,
      isPending,
      hasHiddenPendingLabel = false,
      pendingLabel,
      ...restProps
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const isReversed = useReversedColors()
    const pendingProps: PendingButtonProps = isPending
      ? {
          isPending,
          hasHiddenPendingLabel: hasHiddenLabel || hasHiddenPendingLabel,
          pendingLabel,
        }
      : {}
    return (
      <RACButton
        ref={ref}
        className={mergeClassNames(
          styles.button,
          styles[size],
          hasHiddenLabel && styles[`${size}IconButton`],
          isDisabled && styles.isDisabled,
          isReversed ? styles[`${variant}Reversed`] : styles[variant],
          isFullWidth && styles.fullWidth,
          className
        )}
        isDisabled={isDisabled}
        isPending={isPending}
        {...restProps}
      >
        {racStateProps => {
          const childIsFunction = typeof children === "function"

          return (
            <>
              <ButtonContent
                size={size}
                icon={icon}
                iconPosition={iconPosition}
                hasHiddenLabel={hasHiddenLabel}
                className={classNames(
                  isPending && hasHiddenPendingLabel
                    ? styles.buttonContentHidden
                    : isPending && styles.buttonContentPending
                )}
              >
                {childIsFunction ? children(racStateProps) : children}
              </ButtonContent>
              <span aria-live="polite">
                {pendingProps.isPending && (
                  <PendingContent {...pendingProps} size={size} />
                )}
              </span>
            </>
          )
        }}
      </RACButton>
    )
  }
)

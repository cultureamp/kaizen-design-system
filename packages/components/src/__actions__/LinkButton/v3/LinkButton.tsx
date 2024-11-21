import React, { forwardRef } from "react"
import {
  Link as RACLink,
  LinkProps as RACLinkProps,
} from "react-aria-components"
import { ButtonBaseProps } from "~components/__actions__/Button/v3"
import buttonStyles from "~components/__actions__/Button/v3/Button.module.css"
import { ButtonContent } from "~components/__actions__/Button/v3/subcomponents"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./LinkButton.module.css"

export type LinkButtonProps = ButtonBaseProps &
  Omit<RACLinkProps, "children"> & {
    /** Used as the label for the LinkButton. */
    children: RACLinkProps["children"]
  }

export const LinkButton = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      icon,
      iconPosition = "start",
      hasHiddenLabel = false,
      isFullWidth = false,
      isDisabled,
      className,
      ...otherProps
    }: LinkButtonProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const isReversed = useReversedColors()

    return (
      <RACLink
        ref={ref}
        className={mergeClassNames(
          styles.linkButton,
          buttonStyles.button,
          buttonStyles[size],
          hasHiddenLabel && buttonStyles[`${size}IconButton`],
          isDisabled && buttonStyles.isDisabled,
          isReversed
            ? buttonStyles[`${variant}Reversed`]
            : buttonStyles[variant],
          isFullWidth && buttonStyles.fullWidth,
          className
        )}
        {...otherProps}
      >
        {racStateProps => {
          const childIsFunction = typeof children === "function"

          return (
            <ButtonContent
              size={size}
              icon={icon}
              iconPosition={iconPosition}
              hasHiddenLabel={hasHiddenLabel}
            >
              {childIsFunction ? children(racStateProps) : children}
            </ButtonContent>
          )
        }}
      </RACLink>
    )
  }
)

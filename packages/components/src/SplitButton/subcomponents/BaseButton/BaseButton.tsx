import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./BaseButton.module.scss"

type AnchorAttributes = AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type AnchorButtonAttributes = AnchorAttributes & ButtonAttributes

const isAnchor = (attributes: AnchorButtonAttributes): boolean =>
  !attributes.disabled && attributes.href !== undefined

export type BaseButtonProps = OverrideClassName<AnchorButtonAttributes> & {
  label: string
  icon?: React.SVGAttributes<SVGSymbolElement>
  isReversed?: boolean
}

export const BaseButton = ({
  label,
  icon,
  isReversed,
  classNameOverride,
  ...attributes
}: BaseButtonProps): JSX.Element => {
  const className = classnames(
    styles.baseButton,
    classNameOverride,
    isReversed ? styles.isReversed : styles.default
  )

  const contentProps = icon
    ? {
        children: <>{icon}</>,
        "aria-label": label,
      }
    : { children: label }

  const { children, ...restContentProps } = contentProps

  if (isAnchor(attributes)) {
    return (
      <a className={className} {...restContentProps} {...attributes}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={className}
      {...restContentProps}
      {...attributes}
    >
      {children}
    </button>
  )
}

BaseButton.displayName = "BaseButton"

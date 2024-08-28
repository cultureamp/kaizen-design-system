import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import styles from "./Icon.module.css"

type BaseIconProps = {
  /** Options available at https://fonts.google.com/icons */
  name: string
  isFilled?: boolean
  shouldMirrorInRTL?: boolean
} & HTMLAttributes<HTMLSpanElement>

type PresentationalIcon = {
  isPresentational: true
  alt?: never
}

type MeaningfulIcon = {
  isPresentational?: false
  alt: string
}

export type IconProps = BaseIconProps & (PresentationalIcon | MeaningfulIcon)

export const Icon = ({
  name,
  isFilled,
  shouldMirrorInRTL,
  isPresentational,
  alt,
  className,
  ...restProps
}: IconProps): JSX.Element => (
  <span
    className={classNames(
      "material-symbols-outlined",
      styles.icon,
      isFilled && styles.filled,
      shouldMirrorInRTL && styles.shouldMirrorInRTL,
      className
    )}
    aria-hidden={isPresentational}
    role={isPresentational ? undefined : "img"}
    aria-label={alt}
    {...restProps}
  >
    {name}
  </span>
)

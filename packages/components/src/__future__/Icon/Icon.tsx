import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import { StringSuggestions } from "~components/types/StringSuggestions"
import { handledRtlIcons } from "./constants"
import { IconNames } from "./types"
import styles from "./Icon.module.css"

type PresentationalIcon = {
  isPresentational: true
  alt?: never
}

type MeaningfulIcon = {
  isPresentational?: false
  alt: string
}

type BaseIconProps = {
  isFilled?: boolean
} & HTMLAttributes<HTMLSpanElement> &
  (PresentationalIcon | MeaningfulIcon)

type MaterialIconProps = BaseIconProps & {
  children: React.ReactNode
}

const MaterialIcon = ({
  children,
  isFilled,
  isPresentational,
  alt,
  className,
  ...restProps
}: MaterialIconProps): JSX.Element => (
  <span
    className={classNames(
      "material-symbols-outlined",
      styles.icon,
      "IconOverride",
      isFilled && styles.filled,
      className
    )}
    aria-hidden={isPresentational}
    role={isPresentational ? undefined : "img"}
    aria-label={alt}
    {...restProps}
  >
    {children}
  </span>
)

export type IconProps = BaseIconProps & {
  /** Options available at https://fonts.google.com/icons */
  name: StringSuggestions<IconNames>
  shouldMirrorInRTL?: boolean
}

export const Icon = ({
  name,
  shouldMirrorInRTL,
  ...restProps
}: IconProps): JSX.Element => {
  if (!shouldMirrorInRTL) {
    return <MaterialIcon {...restProps}>{name}</MaterialIcon>
  }

  if (Object.keys(handledRtlIcons).includes(name)) {
    return (
      <MaterialIcon {...restProps}>
        <span className={styles.iconLTR}>{name}</span>
        <span className={styles.iconRTL}>
          {handledRtlIcons[name as keyof typeof handledRtlIcons]}
        </span>
      </MaterialIcon>
    )
  }

  return (
    <MaterialIcon
      {...restProps}
      className={classNames(styles.shouldMirrorInRTL, restProps.className)}
    >
      {name}
    </MaterialIcon>
  )
}

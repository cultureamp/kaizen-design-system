import React from "react"
import classNames from "classnames"
import { Container, Content, ContentProps } from "../../"
import { DOMRectReadOnly, useResizeObserver } from "../useResizeObserver"
import styles from "./Skirt.module.scss"

const spacing = 24
const maxHeight = 222
const fallbackPercentage = 0.8

type Variant = "default" | "education"

export interface SkirtProps extends ContentProps {
  children: React.ReactNode
  /**
   * **Deprecated:** Use `classNameOverride` instead.
   */
  className?: string
  variant?: Variant
  titleBlockHasNavigation?: boolean
}

export const Skirt = ({
  children,
  className,
  variant = "default",
  titleBlockHasNavigation = true,
  classNameOverride,
  ...restProps
}: SkirtProps): JSX.Element => {
  const [ref, skirtHeight] = useResizeObserver<number, HTMLDivElement>(
    entry => {
      if (entry.contentRect) {
        return deriveSkirtHeight(entry.contentRect, titleBlockHasNavigation)
      }
      return undefined
    }
  )

  return (
    <Container
      ref={ref}
      classNameOverride={classNames(
        styles.container,
        className,
        classNameOverride
      )}
      {...restProps}
    >
      <div
        style={{ ...(skirtHeight && { height: `${skirtHeight}px` }) }}
        className={classNames(styles.underlay, {
          [styles.defaultVariant]: variant === "default",
          [styles.educationVariant]: variant === "education",
        })}
      />
      <Content classNameOverride={styles.content}>{children}</Content>
    </Container>
  )
}

Skirt.displayName = "Skirt"

const deriveSkirtHeight = (
  rect: DOMRectReadOnly,
  titleBlockHasNavigation: boolean
): number => {
  const { height, width } = rect
  let responsiveOffset: number = 0
  if (width > 768) {
    responsiveOffset = 2.8125 * 16
  }

  // This ensures the maximum height of the skirt is consistent between pages
  // where the title block has/doesn’t have navigation
  const derivedMaxHeight = titleBlockHasNavigation
    ? maxHeight
    : maxHeight + responsiveOffset
  const maxHeightWithSpacing = derivedMaxHeight + spacing

  return Math.max(
    spacing,
    height > maxHeightWithSpacing
      ? derivedMaxHeight
      : height * fallbackPercentage - spacing
  )
}

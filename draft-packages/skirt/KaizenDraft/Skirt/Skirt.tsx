import * as React from "react"
import { Container, Content } from "@kaizen/draft-page-layout"
import classNames from "classnames"
import styles from "./styles.scss"
import { DOMRectReadOnly, useResizeObserver } from "./useResizeObserver"

const spacing = 24
const maxHeight = 222
const fallbackPercentage = 0.8

type Variant = "default" | "education"

type SkirtProps = {
  children: React.ReactNode
  className?: string
  variant?: Variant
  titleBlockHasNavigation?: boolean
}

export const Skirt = ({
  children,
  className,
  variant = "default",
  titleBlockHasNavigation = true,
}: SkirtProps) => {
  const [ref, skirtHeight] = useResizeObserver<number, HTMLDivElement>(
    entry => {
      if (entry.contentRect) {
        return deriveSkirtHeight(entry.contentRect, titleBlockHasNavigation)
      }
      return null
    }
  )

  return (
    <Container
      ref={ref}
      classNameAndIHaveSpokenToDST={classNames(styles.container, className)}
    >
      <div
        style={{ ...(skirtHeight && { height: `${skirtHeight}px` }) }}
        className={classNames(styles.underlay, {
          [styles.defaultVariant]: variant === "default",
          [styles.educationVariant]: variant === "education",
        })}
      />
      <Content classNameAndIHaveSpokenToDST={styles.content}>
        {children}
      </Content>
    </Container>
  )
}

const deriveSkirtHeight = (
  rect: DOMRectReadOnly,
  titleBlockHasNavigation: boolean
) => {
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

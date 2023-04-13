import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import { Placement } from "@popperjs/core"
import classnames from "classnames"
import { usePopper } from "react-popper"
import { AnimationProvider, useAnimation } from "./AppearanceAnim"
import { useUuid } from "./useUuid"
import styles from "./Tooltip.module.scss"

type Position = "above" | "below" | "left" | "right"

type Mood = "default" | "informative" | "positive" | "cautionary" | "highlight"

export type TooltipProps = {
  /**
   * Use `display="inline"` instead
   * @deprecated
   */
  inline?: boolean
  display?: "block" | "inline" | "inline-block" | "flex" | "inline-flex"
  position?: Position
  text: React.ReactNode
  children?: React.ReactNode
  classNameOverride?: string
  mood?: Mood
  portalSelector?: string
  isInitiallyVisible?: boolean
  animationDuration?: number
}

const positionToPlacement = new Map<Position, Placement>([
  ["above", "top"],
  ["below", "bottom"],
  ["left", "left"],
  ["right", "right"],
])

// Sync with Tooltip.scss
const arrowHeight = 7
const arrowWidth = 14

const TooltipContent = ({
  position,
  text,
  referenceElement,
  tooltipId,
  mood = "default",
}): JSX.Element | null => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrowElement,
            // Ensures that the arrow doesn't go too far to the left or right
            // of the tooltip.
            padding: arrowWidth / 2 + 10,
          },
        },
        {
          name: "offset",
          options: {
            offset: [0, arrowHeight + 6],
          },
        },
        {
          name: "preventOverflow",
          options: {
            // Makes sure that the tooltip isn't flush up against the end of the
            // viewport
            padding: 8,
            altAxis: true,
            altBoundary: true,
            tetherOffset: 50,
          },
        },
        {
          name: "flip",
          options: {
            padding: 8,
            altBoundary: true,
            fallbackPlacements: ["left", "top", "bottom", "right"],
          },
        },
      ],
      placement: positionToPlacement.get(position),
    }
  )
  const { isVisible, isAnimIn, isAnimOut } = useAnimation()

  return isVisible || isAnimOut || isAnimIn ? (
    <div
      ref={setPopperElement}
      className={classnames({
        [styles.tooltip]: true,
      })}
      style={popperStyles.popper}
      {...attributes.popper}
      role="tooltip"
      id={tooltipId}
    >
      <div className={classnames(styles.tooltipContent, styles[mood])}>
        {text}
      </div>
      <div
        ref={setArrowElement}
        className={classnames({
          [styles.arrow]: true,
        })}
        style={popperStyles.arrow}
      >
        <div className={styles.arrowInner}>
          <div className={classnames(styles.arrowMain, styles[mood])} />
          <div className={styles.arrowShadow} />
        </div>
      </div>
    </div>
  ) : null
}

/**
 * {@link https://cultureamp.design/components/tooltip/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-tooltip--default-kaizen-site-demo Storybook}
 */
export const Tooltip = ({
  children,
  text,
  inline,
  display = "block",
  position = "above",
  classNameOverride,
  portalSelector,
  animationDuration,
  isInitiallyVisible = false,
  mood = "default",
}: TooltipProps): JSX.Element => {
  const [isHover, setIsHover] = useState(isInitiallyVisible)
  const [isFocus, setIsFocus] = useState(false)
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const tooltipId = useUuid()

  // Legacy support for the inline prop
  const displayToUse = inline != null ? (inline ? "inline" : "block") : display

  const tooltip = (
    <TooltipContent
      text={text}
      position={position}
      referenceElement={referenceElement}
      tooltipId={tooltipId}
      mood={mood}
    />
  )

  const portalSelectorElementRef = useRef<Element | null>(null)

  useEffect(() => {
    portalSelectorElementRef.current = portalSelector
      ? document.querySelector(portalSelector)
      : null
  }, [portalSelector])

  useEffect(() => {
    if (portalSelector && !portalSelectorElementRef.current) {
      // eslint-disable-next-line no-console
      console.warn(
        "The portal could not be created using the selector: " + portalSelector
      )
    }
  }, [portalSelectorElementRef, portalSelector])

  return (
    <AnimationProvider
      isVisible={isHover || isFocus}
      animationDuration={animationDuration}
    >
      <>
        <div
          ref={setReferenceElement}
          className={classnames(classNameOverride, {
            [styles.displayInline]: displayToUse === "inline",
            [styles.displayBlock]: displayToUse === "block",
            [styles.displayInlineBlock]: displayToUse === "inline-block",
            [styles.displayFlex]: displayToUse === "flex",
            [styles.displayInlineFlex]: displayToUse === "inline-flex",
          })}
          onMouseEnter={(): void => setIsHover(true)}
          onMouseLeave={(): void => setIsHover(false)}
          onFocusCapture={(): void => setIsFocus(true)}
          onBlurCapture={(): void => setIsFocus(false)}
          aria-describedby={tooltipId}
        >
          {children}
        </div>

        {portalSelector && portalSelectorElementRef.current
          ? ReactDOM.createPortal(tooltip, portalSelectorElementRef.current)
          : tooltip}
      </>
    </AnimationProvider>
  )
}

Tooltip.displayName = "Tooltip"

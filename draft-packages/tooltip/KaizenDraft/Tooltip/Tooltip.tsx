import { usePopper } from "react-popper"
import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import classnames from "classnames"
import { Placement } from "@popperjs/core"
import tooltipStyles from "./Tooltip.scss"
import animationStyles from "./AppearanceAnim.scss"
import { AnimationProvider, useAnimation } from "./AppearanceAnim"
import { useUuid } from "./useUuid"

type Position = "above" | "below" | "left" | "right"

type Mood = "default" | "informative" | "positive" | "cautionary" | "highlight"

export type TooltipProps = {
  /**
   * Use `display="inline"` instead
   * @deprecated
   */
  inline?: boolean
  /**
   * Unfortunately, the content needed to be wrapped in a div. This can sometimes
   * break the css layout. To get around this, we allow you to specify the css
   * display value directly. If you need to need to modify more values, feel free
   * to use the `classNameOverride` prop, but avoid it if you can.
   */
  display?: "block" | "inline" | "inline-block" | "flex" | "inline-flex"
  /**
   * This is more a "desired position". The tooltip will automatically change
   * its position, if there's not enough room to show it in the one specified.
   */
  position?: Position
  text: React.ReactNode
  children?: React.ReactNode
  classNameOverride?: string
  mood?: Mood
  /**
   * Render the tooltip inside a react portal, given the ccs selector.
   * This is typically used for instances where the menu is a descendant of an
   * `overflow: scroll` or `overflow: hidden` element.
   */
  portalSelector?: string
  /**
   * Should the tooltip be visible on the first render. Useful for visual
   * regression testing.
   */
  isInitiallyVisible?: boolean
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
}) => {
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
        [tooltipStyles.tooltip]: true,
        [animationStyles.defaultHiddenState]: true,
        [animationStyles.visibleState]: isVisible && !isAnimIn,
      })}
      style={popperStyles.popper}
      {...attributes.popper}
      role="tooltip"
      id={tooltipId}
    >
      <div
        className={classnames(
          tooltipStyles.tooltipContent,
          tooltipStyles[mood]
        )}
      >
        {text}
      </div>
      <div
        ref={setArrowElement}
        className={classnames({
          [tooltipStyles.arrow]: true,
        })}
        style={popperStyles.arrow}
      >
        <div className={tooltipStyles.arrowInner}>
          <div
            className={classnames(tooltipStyles.arrowMain, tooltipStyles[mood])}
          />
          <div className={tooltipStyles.arrowShadow} />
        </div>
      </div>
    </div>
  ) : null
}

const Tooltip = ({
  children,
  text,
  inline,
  display = "block",
  position = "above",
  classNameOverride,
  portalSelector,
  isInitiallyVisible = false,
  mood = "default",
}: TooltipProps) => {
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
    <AnimationProvider isVisible={isHover || isFocus}>
      <>
        <div
          ref={setReferenceElement}
          className={classnames(classNameOverride, {
            [tooltipStyles.displayInline]: displayToUse === "inline",
            [tooltipStyles.displayBlock]: displayToUse === "block",
            [tooltipStyles.displayInlineBlock]: displayToUse === "inline-block",
            [tooltipStyles.displayFlex]: displayToUse === "flex",
            [tooltipStyles.displayInlineFlex]: displayToUse === "inline-flex",
          })}
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}
          onFocusCapture={() => {
            setIsFocus(true)
          }}
          onBlurCapture={() => {
            setIsFocus(false)
          }}
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

Tooltip.defaultProps = {
  position: "above",
}

export default Tooltip

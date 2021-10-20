import { usePopper } from "react-popper"
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import classnames from "classnames"
import tooltipStyles from "./Tooltip.scss"
import animationStyles from "./AppearanceAnim.scss"
import { AnimationProvider, useAnimation } from "./AppearanceAnim"
import { useUuid } from "./useUuid"

type Position = "above" | "below"

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
   * to use the `classNameAndIHaveSpokenToDST` prop, but avoid it if you can.
   */
  display?: "block" | "inline" | "inline-block" | "flex" | "inline-flex"
  /**
   * This is more a "desired position". The tooltip will automatically change
   * its position, if there's not enough room to show it in the one specified.
   */
  position?: Position
  text: React.ReactNode
  children?: React.ReactNode
  classNameAndIHaveSpokenToDST?: string
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

// Sync with Tooltip.scss
const arrowHeight = 10
const arrowWidth = 20

const TooltipContent = ({ position, text, referenceElement, tooltipId }) => {
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
            offset: [0, arrowHeight],
          },
        },
        {
          name: "preventOverflow",
          options: {
            // Makes sure that the tooltip isn't flush up against the end of the
            // viewport
            padding: 4,
          },
        },
      ],
      placement: position === "below" ? "bottom" : "top",
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
      <div className={classnames(tooltipStyles.tooltipContent)}>{text}</div>
      <div
        ref={setArrowElement}
        className={classnames({
          [tooltipStyles.arrow]: true,
        })}
        style={popperStyles.arrow}
      >
        <div className={tooltipStyles.arrowInner}>
          <div className={tooltipStyles.arrowWhite} />
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
  classNameAndIHaveSpokenToDST,
  portalSelector,
  isInitiallyVisible = false,
}: TooltipProps) => {
  const [isHover, setIsHover] = useState(isInitiallyVisible)
  const [isFocus, setIsFocus] = useState(false)
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLDivElement | null>(null)
  const tooltipId = useUuid()

  // Legacy support for the inline prop
  const displayToUse = inline != null ? (inline ? "inline" : "block") : display

  const tooltip = (
    <TooltipContent
      text={text}
      position={position}
      referenceElement={referenceElement}
      tooltipId={tooltipId}
    />
  )

  const portalSelectorElement: Element | null = portalSelector
    ? document.querySelector(portalSelector)
    : null

  useEffect(() => {
    if (portalSelector && !portalSelectorElement) {
      // eslint-disable-next-line no-console
      console.warn(
        "The portal could not be created using the selector: " + portalSelector
      )
    }
  }, [portalSelectorElement, portalSelector])

  return (
    <AnimationProvider isVisible={isHover || isFocus}>
      <>
        <div
          ref={setReferenceElement}
          className={classnames(classNameAndIHaveSpokenToDST, {
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

        {portalSelector && portalSelectorElement
          ? ReactDOM.createPortal(tooltip, portalSelectorElement)
          : tooltip}
      </>
    </AnimationProvider>
  )
}

Tooltip.defaultProps = {
  position: "above",
}

export default Tooltip

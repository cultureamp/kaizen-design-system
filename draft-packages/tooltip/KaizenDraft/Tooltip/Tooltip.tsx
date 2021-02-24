import { usePopper } from "react-popper"
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import classnames from "classnames"
import styles from "./Tooltip.scss"
import AppearanceAnim from "./AppearanceAnim"
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
   */
  portalSelector?: string
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
      ],
      placement: position === "below" ? "bottom" : "top",
    }
  )

  return (
    <div
      ref={setPopperElement}
      style={popperStyles.popper}
      {...attributes.popper}
      className={styles.tooltip}
      role="tooltip"
      id={tooltipId}
    >
      <div className={classnames(styles.tooltipContent)}>{text}</div>
      <div
        ref={setArrowElement}
        className={classnames({
          [styles.arrow]: true,
        })}
        style={popperStyles.arrow}
      >
        <div className={styles.arrowInner}>
          <div className={styles.arrowWhite} />
          <div className={styles.arrowShadow} />
        </div>
      </div>
    </div>
  )
}

const Tooltip = ({
  children,
  text,
  inline,
  display = "block",
  position = "above",
  classNameAndIHaveSpokenToDST,
  portalSelector,
}: TooltipProps) => {
  const [isHover, setIsHover] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLDivElement | null>(null)
  const tooltipId = useUuid()

  // Legacy support for the inline prop
  const displayToUse = inline != null ? (inline ? "inline" : "block") : display

  const tooltip = (
    <AppearanceAnim isVisible={isHover || isFocus}>
      <TooltipContent
        text={text}
        position={position}
        referenceElement={referenceElement}
        tooltipId={tooltipId}
      />
    </AppearanceAnim>
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
    <>
      <div
        ref={setReferenceElement}
        className={classnames(classNameAndIHaveSpokenToDST, {
          [styles.displayInline]: displayToUse === "inline",
          [styles.displayBlock]: displayToUse === "block",
          [styles.displayInlineBlock]: displayToUse === "inline-block",
          [styles.displayFlex]: displayToUse === "flex",
          [styles.displayInlineFlex]: displayToUse === "inline-flex",
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
  )
}

Tooltip.defaultProps = {
  position: "above",
}

export default Tooltip

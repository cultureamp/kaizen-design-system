import { usePopper } from "react-popper"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import classnames from "classnames"
import styles from "./Tooltip.scss"
import AppearanceAnim from "./AppearanceAnim"

type Position = "above" | "below"

export type TooltipProps = {
  inline?: boolean
  /**
   * This is more a "desired position". The tooltip will automatically change
   * its position, if there's not enough room to show it in the one specified.
   */
  position?: Position
  text: React.ReactNode
  children?: React.ReactNode
  classNameAndIHaveSpokenToDST?: string
  portalSelector?: string
}

// Sync with Tooltip.scss
const arrowHeight = 10
const arrowWidth = 20

const TooltipContent = ({ position, text, referenceElement }) => {
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
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
  position,
  classNameAndIHaveSpokenToDST,
}: TooltipProps) => {
  const [isHover, setIsHover] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [referenceElement, setReferenceElement] = useState(null)

  return (
    <>
      <div
        ref={setReferenceElement}
        className={classnames(classNameAndIHaveSpokenToDST, {
          [styles.inline]: inline === true,
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
      >
        {children}
      </div>

      <AppearanceAnim isVisible={isHover || isFocus}>
        <TooltipContent
          text={text}
          position={position}
          referenceElement={referenceElement}
        />
      </AppearanceAnim>
    </>
  )
}

Tooltip.defaultProps = {
  position: "above",
}

export default Tooltip

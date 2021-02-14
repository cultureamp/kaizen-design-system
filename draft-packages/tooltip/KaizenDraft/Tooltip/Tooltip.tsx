import { usePopper } from "react-popper"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import classnames from "classnames"
import styles from "./Tooltip.scss"

type Position = "above" | "below"

export type TooltipProps = {
  inline?: boolean
  position?: Position
  text: React.ReactNode
  children?: React.ReactNode
  classNameAndIHaveSpokenToDST?: string
  portalSelector?: string
}

const Tooltip = ({
  children,
  text,
  inline,
  position,
  classNameAndIHaveSpokenToDST,
  portalSelector,
}: TooltipProps) => {
  const [isHover, setIsHover] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      // modifiers: [
      //   {
      //     name: "arrow",
      //     options: {
      //       element: arrowElement,
      //       padding: 10,
      //     },
      //   },
      // ],
      placement: position === "below" ? "bottom" : "top",
    }
  )

  const tooltip = (
    <div
      ref={setPopperElement}
      style={popperStyles.popper}
      {...attributes.popper}
      className={styles.tooltip}
    >
      <div className={classnames(styles.tooltipContent)}>{text}</div>
      <div
        ref={setArrowElement}
        className={styles.arrow}
        style={popperStyles.arrow}
      >
        <div className={styles.arrowWhite} />
        <div className={styles.arrowShadow} />
      </div>
    </div>
  )

  const isPopoverVisible = isHover || isFocus

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

      {isPopoverVisible &&
        (portalSelector
          ? ReactDOM.createPortal(
              tooltip,
              document.querySelector(portalSelector)
            )
          : tooltip)}
    </>
  )
}

Tooltip.defaultProps = {
  position: "above",
}

export default Tooltip

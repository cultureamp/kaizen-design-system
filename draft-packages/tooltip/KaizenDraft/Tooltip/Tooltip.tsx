import { usePopper } from "react-popper"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import classnames from "classnames"
import styles from "./Tooltip.scss"
import AppearanceAnim from "./AppearanceAnim"

type Position = "above" | "below"

export type TooltipProps = {
  inline?: boolean
  position?: Position
  text: React.ReactNode
  children?: React.ReactNode
  classNameAndIHaveSpokenToDST?: string
  portalSelector?: string
}

const arrowHeight = 10

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
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrowElement,
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

  const tooltip = (
    <AppearanceAnim isVisible={isHover || isFocus}>
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
            [styles.arrowAbove]: position === "above",
            [styles.arrowBelow]: position === "below",
          })}
          style={popperStyles.arrow}
        >
          <div className={styles.arrowInner}>
            <div className={styles.arrowWhite} />
            <div className={styles.arrowShadow} />
          </div>
        </div>
      </div>
    </AppearanceAnim>
  )

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

      {portalSelector
        ? ReactDOM.createPortal(tooltip, document.querySelector(portalSelector))
        : tooltip}
    </>
  )
}

Tooltip.defaultProps = {
  position: "above",
}

export default Tooltip

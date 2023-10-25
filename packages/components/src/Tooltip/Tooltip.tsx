import React, {
  ReactNode,
  cloneElement,
  useEffect,
  useRef,
  useState,
  useId,
} from "react"
import ReactDOM from "react-dom"
import { Placement } from "@popperjs/core"
import classnames from "classnames"
import { usePopper } from "react-popper"
import { AnimationProvider, useAnimation } from "./AppearanceAnim"
import { isSemanticElement } from "./utils/isSemanticElement"
import styles from "./Tooltip.module.scss"

type Position = "above" | "below" | "left" | "right"
type Mood = "default" | "informative" | "positive" | "cautionary" | "highlight"

export type TooltipProps = {
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
  /** The text content for the tooltip */
  text: React.ReactNode
  /**
   * This is the interactable element that is being described by the tooltip `text`
   */
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

type TooltipContentProps = Pick<TooltipProps, "position" | "text" | "mood"> & {
  tooltipId: string
  referenceElement: HTMLDivElement | null
}

const TooltipContent = ({
  position,
  text,
  referenceElement,
  tooltipId,
  mood = "default",
}: TooltipContentProps): JSX.Element | null => {
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
      placement: position ? positionToPlacement.get(position) : undefined,
    }
  )
  const { isVisible, isAnimIn, isAnimOut } = useAnimation()

  return isVisible || isAnimOut || isAnimIn ? (
    <div
      ref={setPopperElement}
      className={styles.tooltip}
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
        className={styles.arrow}
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

const renderChildren = (
  content: ReactNode,
  tooltipId: string,
  hasActiveTooltip: boolean
): ReactNode => {
  if (isSemanticElement(content)) {
    return cloneElement(content, {
      "aria-describedby": hasActiveTooltip ? tooltipId : undefined,
    })
  }
  // We don't want to block them from this but just provide context for better a11y guidance
  // eslint-disable-next-line no-console
  console.warn(
    "<Tooltip /> is not directly wrapping a semantic element, screen reader users will not be able to access the tooltip info. To ensure accessibility, Tooltip should be wrapping a semantic and focusable element directly."
  )
  return content
}

export const Tooltip = ({
  children,
  text,
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
  const tooltipId = useId()
  const hasActiveTooltip = isHover || isFocus

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

  const getDisplayClassName = (): string | undefined => {
    switch (display) {
      case "inline":
        return styles.displayInline
      case "block":
        return styles.displayBlock
      case "inline-block":
        return styles.displayInlineBlock
      case "flex":
        return styles.displayFlex
      case "inline-flex":
        return styles.displayInlineFlex
      default:
        return undefined
    }
  }

  return (
    <AnimationProvider
      isVisible={hasActiveTooltip}
      animationDuration={animationDuration}
    >
      <>
        <div
          ref={setReferenceElement}
          className={classnames(classNameOverride, getDisplayClassName())}
          onMouseEnter={(): void => setIsHover(true)}
          onMouseLeave={(): void => setIsHover(false)}
          onFocusCapture={(): void => setIsFocus(true)}
          onBlurCapture={(): void => setIsFocus(false)}
        >
          {renderChildren(children, tooltipId, hasActiveTooltip)}
        </div>

        {portalSelector && portalSelectorElementRef.current
          ? ReactDOM.createPortal(tooltip, portalSelectorElementRef.current)
          : tooltip}
      </>
    </AnimationProvider>
  )
}

Tooltip.displayName = "Tooltip"

import React, { forwardRef, useContext, useLayoutEffect, useState } from "react"
import { VisuallyHidden } from "react-aria"
import {
  OverlayArrow,
  Tooltip as RACTooltip,
  TooltipContext,
  TooltipProps,
  TooltipTriggerStateContext,
  useContextProps,
} from "react-aria-components"
import { mergeClassNames } from "~utils/mergeClassNames"
import styles from "./Tooltip.module.scss"

export { TooltipContext, TooltipProps }


const arrowSize = 8 // sync with styles
const defaultOffset = arrowSize + 6

/**
 * A tooltip displays a description of an element on hover or focus.
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  // eslint-disable-next-line arrow-body-style
  ({ children, className, ...props }, ref): JSX.Element => {
    const [{ triggerRef }] = useContextProps(
      { children, className, ...props },
      ref,
      TooltipContext
    )
    const contextState = useContext(TooltipTriggerStateContext)
    const [isNonInteractive, setIsNonInteractive] = useState(false)
    const offset = props.offset ?? defaultOffset

    useLayoutEffect(() => {
      setIsNonInteractive(
        !!triggerRef?.current?.getAttribute("data-non-interactive")
      )
    }, [triggerRef])

    return (
      <>
        <RACTooltip
          ref={ref}
          {...props}
          offset={offset}
          className={mergeClassNames(styles.tooltip, className)}
        >
          {renderProps => (
            <>
              <OverlayArrow
                className={styles.overlayArrow}
                style={{
                  transform:
                    (renderProps.placement === "right" && "rotate(90deg)") ||
                    (renderProps.placement === "bottom" && "rotate(180deg)") ||
                    (renderProps.placement === "left" && "rotate(270deg)") ||
                    "rotate(0deg)",
                }}
              >
                <div className={styles.overlayArrowBody} />
                <div className={styles.overlayArrowShadow} />
              </OverlayArrow>
              {typeof children === "function"
                ? children(renderProps)
                : children}
            </>
          )}
        </RACTooltip>
        {isNonInteractive ? (
          <VisuallyHidden>
            {typeof children === "function"
              ? children({
                  placement: "center",
                  isEntering: false,
                  isExiting: false,
                  state: contextState,
                  defaultChildren: undefined,
                })
              : children}
          </VisuallyHidden>
        ) : null}
      </>
    )
  }
)

Tooltip.displayName = "Tooltip"

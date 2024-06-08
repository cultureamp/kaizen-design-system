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
import { useReversedColors } from "./ReversedColors"
import styles from "./Tooltip.module.scss"

export { TooltipContext, type TooltipProps }

const arrowSize = 5
const defaultOffset = arrowSize + 6

/**
 * A tooltip displays a description of an element on hover or focus.
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const [{ triggerRef }] = useContextProps(
      { children, className, ...props },
      ref,
      TooltipContext
    )
    const contextState = useContext(TooltipTriggerStateContext)
    const reverseColors = useReversedColors()
    const [shouldInlineHiddenContent, setShouldInlineHiddenContent] =
      useState(false)
    const offset = props.offset ?? defaultOffset

    useLayoutEffect(() => {
      setShouldInlineHiddenContent(
        !!triggerRef?.current?.getAttribute("data-inline-hidden-content")
      )
    }, [triggerRef])

    return (
      <>
        <RACTooltip
          ref={ref}
          {...props}
          offset={offset}
          className={mergeClassNames(
            styles.tooltip,
            className,
            reverseColors && styles.reversed
          )}
        >
          {renderProps => (
            <>
              <OverlayArrow
                className={mergeClassNames(
                  styles.overlayArrow,
                  reverseColors && styles.reversed
                )}
              >
                <svg
                  width={arrowSize * 2}
                  height={arrowSize * 2}
                  viewBox="0 0 8 8"
                >
                  <path d="M0 0 L4 4 L8 0" />
                </svg>
              </OverlayArrow>
              {typeof children === "function"
                ? children(renderProps)
                : children}
            </>
          )}
        </RACTooltip>
        {shouldInlineHiddenContent ? (
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

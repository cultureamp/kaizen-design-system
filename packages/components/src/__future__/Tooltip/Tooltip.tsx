import React, { forwardRef, useContext, useLayoutEffect, useState } from "react"
import { VisuallyHidden } from "react-aria"
import {
  Tooltip as RACTooltip,
  TooltipContext,
  TooltipProps as RACTooltipProps,
  TooltipTriggerStateContext,
  useContextProps,
} from "react-aria-components"
import { mergeClassNames } from "~utils/mergeClassNames"
import { OverlayArrow } from "./OverlayArrow"
import { useReversedColors } from "./ReversedColors"
import styles from "./Tooltip.module.scss"

export { TooltipContext }

export type TooltipProps = Omit<RACTooltipProps, "offset"> & {
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   * @default 8
   */
  offset?: number
}

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

    useLayoutEffect(() => {
      setShouldInlineHiddenContent(
        !!triggerRef?.current?.getAttribute("data-inline-hidden-content")
      )
    }, [triggerRef])

    return (
      <>
        <RACTooltip
          ref={ref}
          offset={8}
          {...props}
          className={mergeClassNames(
            styles.tooltip,
            className,
            reverseColors && styles.reversed
          )}
        >
          {renderProps => (
            <>
              <OverlayArrow />
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

import React, { forwardRef, useContext, useLayoutEffect, useState } from "react"
import { VisuallyHidden } from "react-aria"
import {
  Tooltip as RACTooltip,
  TooltipContext,
  TooltipProps as RACTooltipProps,
  TooltipTriggerStateContext,
  useContextProps,
} from "react-aria-components"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import { OverlayArrow } from "./OverlayArrow"
import styles from "./Tooltip.module.scss"

export { TooltipContext }

export type TooltipProps = Omit<RACTooltipProps, "offset"> & {
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   * @default 8
   */
  offset?: number
  /**
   * The placement of the tooltip relative to the trigger.
   * + we're intentionally limiting the placement options to rtl friendly ones (start, end, top, bottom)
   */
  placement?:
    | "bottom"
    | "bottom start"
    | "bottom end"
    | "top"
    | "top start"
    | "top end"
    | "start"
    | "start top"
    | "start bottom"
    | "end"
    | "end top"
    | "end bottom"
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

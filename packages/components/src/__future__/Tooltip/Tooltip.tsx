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

export type { TooltipProps }
export { TooltipContext }

const arrowSize = 8
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
          className={mergeClassNames(styles.tooltip, className)}
        >
          {renderProps => (
            <>
              <OverlayArrow
                className={styles.overlayArrow}
                style={{
                  "--size": `${arrowSize}px`,
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

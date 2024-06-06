import React, { forwardRef, useLayoutEffect, useState } from "react"
import { VisuallyHidden } from "react-aria"
import {
  OverlayArrow,
  Popover as RACPopover,
  PopoverContext,
  PopoverProps,
  useContextProps,
} from "react-aria-components"
import { mergeClassNames } from "~utils/mergeClassNames"
import styles from "./Tooltip.module.scss"

export type { PopoverProps }
export { PopoverContext }

const arrowSize = 8
const defaultOffset = arrowSize + 6

/**
 * A tooltip displays a description of an element on hover or focus.
 */
export const Popover = forwardRef<HTMLElement, PopoverProps>(
  // eslint-disable-next-line arrow-body-style
  ({ children, className, ...props }, ref): JSX.Element => {
    const [{ triggerRef }] = useContextProps(
      { children, className, ...props },
      ref,
      PopoverContext
    )
    const [isNonInteractive, setIsNonInteractive] = useState(false)
    const offset = props.offset ?? defaultOffset

    useLayoutEffect(() => {
      setIsNonInteractive(
        !!triggerRef?.current?.getAttribute("data-tooltip-sr-content")
      )
    }, [triggerRef])

    return (
      <>
        <RACPopover
          ref={ref}
          isNonModal
          placement="top"
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
        </RACPopover>
        {isNonInteractive ? (
          <VisuallyHidden>
            {typeof children === "function"
              ? children({
                  placement: "center",
                  isEntering: false,
                  isExiting: false,
                  trigger: "DialogTrigger",
                  defaultChildren: undefined,
                })
              : children}
          </VisuallyHidden>
        ) : null}
      </>
    )
  }
)

Popover.displayName = "Popover"

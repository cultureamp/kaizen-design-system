import React, {
  ReactNode,
  forwardRef,
  useContext,
  useLayoutEffect,
  useState,
} from "react"
import { VisuallyHidden } from "react-aria"
import {
  Tooltip as RACTooltip,
  TooltipContext,
  TooltipProps,
  TooltipTriggerStateContext,
  useContextProps,
} from "react-aria-components"
import { mergeClassNames } from "~utils/mergeClassNames"
import styles from "./Tooltip.module.scss"

export { TooltipContext, TooltipProps }

/**
 * A tooltip displays a description of an element on hover or focus.
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  // eslint-disable-next-line arrow-body-style
  ({ children, className, ...props }, ref): JSX.Element => {
    const [contextProps] = useContextProps(
      { children, className, ...props },
      ref,
      TooltipContext
    )
    const contextState = useContext(TooltipTriggerStateContext)
    const [isNonInteractive, setIsNonInteractive] = useState(false)

    useLayoutEffect(() => {
      setIsNonInteractive(
        !!contextProps.triggerRef?.current?.getAttribute("data-non-interactive")
      )
    }, [contextProps.triggerRef])

    return (
      <>
        <RACTooltip
          ref={ref}
          {...props}
          className={mergeClassNames(styles.tooltip, className)}
        >
          {children}
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

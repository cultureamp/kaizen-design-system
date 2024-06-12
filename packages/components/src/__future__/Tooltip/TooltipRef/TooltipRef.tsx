import React, {
  ReactElement,
  FocusEvent,
  KeyboardEvent,
  PointerEvent,
  useRef,
} from "react"
import { FocusableElement } from "@react-types/shared"
import classnames from "classnames"
import { FocusableOptions, useFocusable } from "react-aria"

export type TooltipRefProps = { children: ReactElement } & FocusableOptions

// @todo think of a better name
export const TooltipRef = ({
  children,
  ...props
}: TooltipRefProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null)
  const {
    focusableProps: {
      // Remove onPointerDown event as it breaks focus-visible styles
      onPointerDown: _,
      ...focusableProps
    },
  } = useFocusable(props, ref)

  return React.cloneElement(React.Children.only(children), {
    ref,
    ...focusableProps,
    onFocus: (e: FocusEvent<FocusableElement>) => {
      focusableProps.onFocus?.(e)
      children.props.onFocus?.(e)
    },
    onBlur: (e: FocusEvent<FocusableElement>) => {
      focusableProps.onBlur?.(e)
      children.props.onBlur?.(e)
    },
    onKeyDown: (e: KeyboardEvent<FocusableElement>) => {
      focusableProps.onKeyDown?.(e)
      children.props.onKeyDown?.(e)
    },
    onKeyUp: (e: KeyboardEvent<FocusableElement>) => {
      focusableProps.onKeyUp?.(e)
      children.props.onKeyUp?.(e)
    },
    onPointerEnter: (e: PointerEvent<FocusableElement>) => {
      focusableProps.onPointerEnter?.(e)
      children.props.onPointerEnter?.(e)
    },
    onPointerLeave: (e: PointerEvent<FocusableElement>) => {
      focusableProps.onPointerLeave?.(e)
      children.props.onPointerLeave?.(e)
    },
    "aria-describedby": classnames(
      children.props["aria-describedby"],
      focusableProps["aria-describedby"]
    ),
  })
}

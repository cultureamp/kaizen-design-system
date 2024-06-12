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

export type TooltipRefProps = {
  children: ReactElement,
  tabIndex?: number | undefined
  // @todo: Can we get away without this?
  childDoesNotHaveRef?: boolean
 } & FocusableOptions

// @todo think of a better name
export const TooltipRef = ({
  children,
  tabIndex,
  childDoesNotHaveRef,
  ...props
}: TooltipRefProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null)
  const {
    focusableProps: {
      // Remove onPointerDown event as it breaks focus-visible styles
      // onPointerDown: _,
      ...focusableProps
    },
  } = useFocusable(props, ref)

  const childProps = {
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
    tabIndex: tabIndex ?? focusableProps.tabIndex,
  }

  if (childDoesNotHaveRef) {
    return (
      // @ts-expect-error
      // Type for HTMLElement vs HTMLDivElement does not align,
      // but we are just creating a wrapper
      <div ref={ref} style={{ display: "inline-flex" }}>
        {React.cloneElement(React.Children.only(children), childProps)}
      </div>
    )
  }

  return React.cloneElement(React.Children.only(children), {
    ref,
    ...childProps
  })
}

const Interactive = (props: TooltipRefProps): JSX.Element => (
  <TooltipRef {...props} />
)

const NonInteractive = (props: TooltipRefProps): JSX.Element => (
  // <TooltipRef tabIndex={0} data-inline-hidden-content {...props} />
  <TooltipRef tabIndex={0} {...props} />
)

TooltipRef.Interactive = Interactive
TooltipRef.NonInteractive = NonInteractive

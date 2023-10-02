import React, { HTMLAttributes } from "react"
import { createPortal } from "react-dom"
import {
  autoUpdate,
  flip,
  offset,
  useFloating,
  UseFloatingReturn,
  UseFloatingOptions,
} from "@floating-ui/react-dom"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { ReactFocusOnProps } from "react-focus-on/dist/es5/types"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Popover.module.scss"

export type PopoverProps = {
  children: React.ReactNode
  refs: UseFloatingReturn["refs"]
  /**
   * passes in additional options / override for https://floating-ui.com/docs/tooltip#usefloating-hook
   */
  floatingOptions?: Omit<UseFloatingOptions, "elements">
  focusOnProps?: Omit<ReactFocusOnProps, "children">
  portalContainer?: Element | DocumentFragment
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Popover = ({
  children,
  refs,
  floatingOptions,
  focusOnProps,
  portalContainer,
  classNameOverride,
  ...restProps
}: PopoverProps): JSX.Element => {
  const { floatingStyles } = useFloating({
    elements: {
      reference: refs.reference.current,
      floating: refs.floating.current,
    },
    placement: "bottom-start",
    middleware: [offset(15), flip()],
    whileElementsMounted: autoUpdate,
    ...floatingOptions,
  })

  return createPortal(
    <FocusOn scrollLock={false} {...focusOnProps}>
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        className={classnames(styles.popover, classNameOverride)}
        role="dialog"
        aria-modal="true"
        {...restProps}
      >
        {children}
      </div>
    </FocusOn>,
    portalContainer ?? document.body
  )
}

Popover.displayName = "Popover"

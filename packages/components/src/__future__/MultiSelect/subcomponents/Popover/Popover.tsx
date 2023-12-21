import React, { HTMLAttributes } from "react"
import { createPortal } from "react-dom"
import {
  autoUpdate,
  flip,
  offset,
  ReferenceType,
  useFloating,
  UseFloatingReturn,
  UseFloatingOptions,
  size,
} from "@floating-ui/react-dom"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { ReactFocusOnProps } from "react-focus-on/dist/es5/types"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Popover.module.scss"

export type PopoverProps<RT extends ReferenceType = ReferenceType> = {
  children: React.ReactNode
  refs: UseFloatingReturn<RT>["refs"]
  /**
   * passes in additional options / override for https://floating-ui.com/docs/tooltip#usefloating-hook
   */
  floatingOptions?: Omit<UseFloatingOptions, "elements">
  focusOnProps?: Omit<ReactFocusOnProps, "children">
  portalContainer?: Element | DocumentFragment
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Popover = <RT extends ReferenceType>({
  children,
  refs,
  floatingOptions,
  focusOnProps,
  portalContainer,
  classNameOverride,
  ...restProps
}: PopoverProps<RT>): JSX.Element => {
  const { floatingStyles } = useFloating({
    elements: {
      reference: refs.reference.current,
      floating: refs.floating.current,
    },
    placement: "bottom-start",
    middleware: [
      offset(6),
      flip(),
      size({
        apply({ availableWidth, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${Math.min(availableWidth, 400)}px`,
            minWidth: `${Math.min(availableWidth, 196)}px`,
            maxHeight: `${Math.min(availableHeight, 352)}px`,
          })
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
    ...floatingOptions,
  })

  return createPortal(
    <FocusOn enabled={false} scrollLock={false} {...focusOnProps}>
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        className={classnames(styles.popover, classNameOverride)}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        {...restProps}
      >
        {children}
      </div>
    </FocusOn>,
    portalContainer ?? document.body
  )
}

Popover.displayName = "Popover"

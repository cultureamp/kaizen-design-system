import React from "react"
import {
  useOverlay,
  AriaOverlayProps,
  DismissButton,
} from "@react-aria/overlays"
import { FocusScope } from "@react-aria/focus"

export const Popover: React.FunctionComponent<
  AriaOverlayProps & { children: React.ReactNode }
> = props => {
  const ref = React.useRef(null)
  const { isOpen, onClose, children } = props

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true,
    },
    ref
  )

  // Add a hidden <DismissButton> component at the end of the popover
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope restoreFocus>
      <div
        {...overlayProps}
        ref={ref}
        style={{
          position: "absolute",

          marginTop: 4,
        }}
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  )
}

Popover.displayName = "Popover"

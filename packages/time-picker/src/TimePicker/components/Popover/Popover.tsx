import React from "react"
import {
  useOverlay,
  AriaOverlayProps,
  DismissButton,
} from "@react-aria/overlays"
import { FocusScope } from "@react-aria/focus"
import styles from "./Popover.module.scss"

export const Popover: React.FunctionComponent<
  AriaOverlayProps & { children: React.ReactNode }
> = ({ isOpen, onClose, children, shouldCloseOnInteractOutside }) => {
  const ref = React.useRef(null)
  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true,
      shouldCloseOnInteractOutside,
    },
    ref
  )
  // Add a hidden <DismissButton> component at the end of the popover
  // to allow screen reader users to dismiss the popup easily.
  if (!isOpen) {
    return null
  }
  return (
    <FocusScope>
      <div {...overlayProps} ref={ref} className={styles.popover}>
        {children}
        {/* FIXME: This causes a crash due to i18n within package getting imported wrong during compile */}
        {/* <DismissButton onDismiss={onClose} /> */}
      </div>
    </FocusScope>
  )
}

Popover.displayName = "Popover"

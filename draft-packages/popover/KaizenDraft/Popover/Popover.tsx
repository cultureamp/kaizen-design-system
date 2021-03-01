import * as React from "react"
import { default as PopoverLegacy, LegacyPopoverProps } from "./PopoverLegacy"

export type Props = LegacyPopoverProps

type PopoverType = React.FunctionComponent<Props>

const Popover: PopoverType = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      id,
      automationId,
      children,
      variant = "default",
      side = "bottom",
      size = "small",
      position = "center",
      heading,
      dismissible = false,
      onClose,
      singleLine = false,
      customIcon,
    },
    ref
  ) => {
    return (
      <PopoverLegacy
        // @ts-ignore: 🤷 this is fine
        ref={ref}
        id={id}
        automationId={automationId}
        children={children}
        variant={variant}
        side={side}
        size={size}
        position={position}
        heading={heading}
        dismissible={dismissible}
        onClose={onClose}
        singleLine={singleLine}
        customIcon={customIcon}
      />
    )
  }
)

export default Popover

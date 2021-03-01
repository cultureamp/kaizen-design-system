import React, { useEffect } from "react"
import { PopoverLegacy, LegacyPopoverProps } from "./PopoverLegacy"
import { PopoverModern, ModernPopoverProps } from "./PopoverModern"

export type Props = LegacyPopoverProps | ModernPopoverProps

type PopoverType = React.FunctionComponent<Props>

const Popover: PopoverType = React.forwardRef<HTMLDivElement, Props>(
  (props: Props, ref) => {
    const {
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
    } = props
    const { referenceElement, portalSelector } = props as ModernPopoverProps

    useEffect(() => {
      if (referenceElement && ref) {
        // eslint-disable-next-line no-console
        console.warn(
          "refs are no longer passed down to the Popover element. This " +
            "is because that prop is required by the positioning engine, popper."
        )
      }
    }, [ref, referenceElement])

    return referenceElement !== undefined ? (
      <PopoverModern
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
        referenceElement={referenceElement}
        portalSelector={portalSelector}
      />
    ) : (
      <PopoverLegacy
        // @ts-ignore: 🤷 this is fine
        ref={ref}
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

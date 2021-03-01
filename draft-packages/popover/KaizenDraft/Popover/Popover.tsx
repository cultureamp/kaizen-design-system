import React, { useEffect } from "react"
import { PopoverLegacy, LegacyPopoverProps } from "./PopoverLegacy"
import { PopoverModern, ModernPopoverProps } from "./PopoverModern"

export type Props = LegacyPopoverProps | ModernPopoverProps

type PopoverType = React.FunctionComponent<Props>

const Popover: PopoverType = React.forwardRef<HTMLDivElement, Props>(
  (props: Props, ref) => {
    const { referenceElement } = props as ModernPopoverProps

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
      <PopoverModern {...(props as ModernPopoverProps)} />
    ) : (
      <PopoverLegacy
        // @ts-ignore: 🤷 this is fine
        ref={ref}
        {...props}
      />
    )
  }
)

export default Popover

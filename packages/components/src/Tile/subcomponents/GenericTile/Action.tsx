import React from "react"
import { Button } from "~components/Button"
import { TileAction } from "./GenericTile"

type ActionProps = {
  action: TileAction
  secondary?: boolean
  disabled?: boolean
}

const Action = ({
  action,
  secondary = false,
  disabled = false,
}: ActionProps): JSX.Element => {
  const {
    label,
    href,
    onClick,
    icon,
    automationId,
    newTabAndIUnderstandTheAccessibilityImplications,
  } = action

  return (
    <Button
      label={label}
      href={href}
      onClick={onClick}
      secondary={secondary}
      icon={icon}
      data-automation-id={automationId}
      disabled={disabled}
      newTabAndIUnderstandTheAccessibilityImplications={
        newTabAndIUnderstandTheAccessibilityImplications
      }
    />
  )
}

export default Action

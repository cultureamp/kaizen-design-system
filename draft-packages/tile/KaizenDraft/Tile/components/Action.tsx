import React from "react"
import { Button } from "@kaizen/draft-button"
import { TileAction } from "./GenericTile"

interface ActionProps {
  readonly action: TileAction
  readonly secondary?: boolean
  readonly disabled?: boolean
}

const Action: React.FunctionComponent<ActionProps> = ({
  action,
  secondary = false,
  disabled = false,
}) => {
  const {
    label,
    href,
    onClick,
    icon,
    automationId,
    newTabAndIUnderstandTheAccessibilityImplications,
  } = action

  return href ? (
    <Button
      label={label}
      href={href}
      secondary={secondary}
      icon={icon}
      data-automation-id={automationId}
      disabled={disabled}
      newTabAndIUnderstandTheAccessibilityImplications={
        newTabAndIUnderstandTheAccessibilityImplications
      }
    />
  ) : (
    <Button
      label={label}
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

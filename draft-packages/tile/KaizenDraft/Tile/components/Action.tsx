import React from "react"
import { Button } from "@kaizen/button"
import { TileAction } from "./GenericTile"

interface Props {
  readonly action: TileAction
  readonly secondary?: boolean
  readonly disabled?: boolean
}

type Action = React.FunctionComponent<Props>

const Action: Action = ({ action, secondary = false, disabled = false }) => {
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

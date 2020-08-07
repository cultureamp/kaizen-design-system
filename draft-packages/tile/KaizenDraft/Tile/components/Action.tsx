import React from "react"
import { TileAction } from "./GenericTile"
import { Button } from "@kaizen/draft-button"

interface Props {
  readonly action: TileAction
  readonly secondary?: boolean
}

type Action = React.FunctionComponent<Props>

const Action: Action = ({ action, secondary = false }) => {
  const { label, href, onClick, icon, automationId } = action

  return href ? (
    <Button
      label={label}
      href={href}
      secondary={secondary}
      icon={icon}
      automationId={automationId}
    />
  ) : (
    <Button
      label={label}
      onClick={onClick}
      secondary={secondary}
      icon={icon}
      automationId={automationId}
    />
  )
}

export default Action

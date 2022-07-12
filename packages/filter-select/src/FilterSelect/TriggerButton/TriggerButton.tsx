import React from "react"
import { TriggerButtonBase } from "./TriggerButtonBase"

export interface TriggerButtonProps {
  label: string
  selectedLabels: string[]
  isRemovalbe?: boolean
  onRemove?: () => void
}

const LABLES_TRUCATED_LIMIT = 3

const getTrucatedLabels = (labels: string[], limit: number): string => {
  if (labels.length <= LABLES_TRUCATED_LIMIT) {
    return labels.join(",")
  }

  return `${[...labels].splice(0, LABLES_TRUCATED_LIMIT).join(",")} +${
    labels.length - LABLES_TRUCATED_LIMIT
  } more`
}
export const TriggerButton = ({
  label,
  selectedLabels,
  ...props
}: TriggerButtonProps) => (
  <TriggerButtonBase {...props} hasSelectedValues={selectedLabels.length > 0}>
    {`${label}: ${getTrucatedLabels(selectedLabels, LABLES_TRUCATED_LIMIT)}`}
  </TriggerButtonBase>
)

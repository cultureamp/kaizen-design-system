import React, { useState } from "react"
import { Icon } from "@kaizen/component-library"
import clipboardChecked from "@kaizen/component-library/icons/closed.icon.svg"
import clipboard from "@kaizen/component-library/icons/surveys.icon.svg"

type Props = {
  utilityClassName: string
}

export const UtilityClass = ({
  utilityClassName,
}: Props): React.ReactElement => {
  const [copyIconIsChecked, setCopyIconIsChecked] = useState(false)
  const handleCopy = (utilityClassNameName: string): void => {
    navigator.clipboard.writeText(utilityClassName)
    setCopyIconIsChecked(true)
  }

  return (
    <button
      className="flex bg-[#00182e] h-min rounded-default justify-between items-center px-12 border-none cursor-pointer"
      onClick={(): void => handleCopy(utilityClassName)}
      onBlur={(): void => setCopyIconIsChecked(false)}
    >
      <p className="font-family-paragraph text-white">{utilityClassName}</p>
      <Icon
        color="white"
        icon={copyIconIsChecked ? clipboardChecked : clipboard}
      />
    </button>
  )
}

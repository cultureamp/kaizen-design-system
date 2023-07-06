import React, { useState } from "react"
import { Icon } from "@kaizen/component-library"
import clipboardChecked from "@kaizen/component-library/icons/closed.icon.svg"
import clipboard from "@kaizen/component-library/icons/surveys.icon.svg"

type Props = {
  text: string
  onCopy?: (text: string) => void
}

export const CodeSnippet = ({ text, onCopy }: Props): React.ReactElement => {
  const [copyIconIsChecked, setCopyIconIsChecked] = useState(false)
  const handleCopy = (utilityClassNameName: string): void => {
    navigator.clipboard.writeText(text)
    setCopyIconIsChecked(true)
    onCopy && onCopy(utilityClassNameName)
  }

  return (
    <button
      type="button"
      className="flex bg-[#00182e] h-min rounded-default justify-between items-center px-12 border-none cursor-pointer w-full"
      onClick={(): void => handleCopy(text)}
      onBlur={(): void => setCopyIconIsChecked(false)}
    >
      <p className="font-family-paragraph text-white mr-16">{text}</p>
      <Icon
        title={`Copy text: ${text}`}
        color={copyIconIsChecked ? "#18d992" : "white"}
        icon={copyIconIsChecked ? clipboardChecked : clipboard}
      />
    </button>
  )
}

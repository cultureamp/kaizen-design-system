import React, { useState } from "react"

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
      {copyIconIsChecked && "copied"}
    </button>
  )
}

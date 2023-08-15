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
      className="bg-[#00182e] h-min rounded-default px-12 border-none cursor-pointer w-full"
      onClick={(): void => handleCopy(text)}
      onBlur={(): void => setCopyIconIsChecked(false)}
    >
      <p className="font-family-paragraph text-white flex justify-between items-center">
        <span>{text}</span>
        {/* Replace with Icons */}
        {/* <span className="text-underline">
          {copyIconIsChecked ? "copied" : "copy"}
        </span> */}
      </p>
    </button>
  )
}

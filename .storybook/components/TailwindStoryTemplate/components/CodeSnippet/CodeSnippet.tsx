import React, { useState } from "react"
import { ClosedIcon, SurveysIcon } from "~components/Icon"

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
      className="bg-[#00182e] h-min rounded px-12 border-none cursor-pointer w-full"
      onClick={(): void => handleCopy(text)}
      onBlur={(): void => setCopyIconIsChecked(false)}
    >
      <p className="font-family-paragraph text-white flex justify-between items-center">
        <span>{text}</span>
        <span className="text-underline text-white">
          {copyIconIsChecked ? (
            <ClosedIcon role="img" aria-label="copied" />
          ) : (
            <SurveysIcon role="img" aria-label="copy" />
          )}
        </span>
      </p>
    </button>
  )
}

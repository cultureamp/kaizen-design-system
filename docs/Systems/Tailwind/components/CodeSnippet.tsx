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
      className="kz-bg-[#00182e] kz-h-min kz-rounded kz-px-12 kz-border-none kz-cursor-pointer kz-w-full"
      onClick={(): void => handleCopy(text)}
      onBlur={(): void => setCopyIconIsChecked(false)}
    >
      <p className="kz-font-family-paragraph kz-text-white kz-flex kz-justify-between kz-items-center">
        <span>{text}</span>
        <span className="kz-text-underline kz-text-white">
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

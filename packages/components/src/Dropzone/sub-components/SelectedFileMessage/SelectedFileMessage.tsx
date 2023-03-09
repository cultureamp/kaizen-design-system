import React from "react"
import { Button } from "@kaizen/button"
import { Icon } from "@kaizen/component-library"
import selectedFileSvgIcon from "@kaizen/component-library/icons/file.icon.svg"
import acceptedFileSvgIcon from "@kaizen/component-library/icons/success.icon.svg"
import { Paragraph } from "@kaizen/typography"
import { trunicateFilename } from "../../utils"
import { Hyperlink } from "../Hyperlink/Hyperlink"

interface SelectedFileMessageProps {
  fileName: string
  handleOpenDialog: () => void
}

export const AcceptedFileIcon = (): JSX.Element => (
  <span className="inline-block mb-8 text-green-500">
    <Icon
      height={20}
      width={20}
      icon={acceptedFileSvgIcon}
      title="Selected File"
      role="presentation"
      inheritSize={true}
    />
  </span>
)

export const SelectedFileMessage = ({ fileName, handleOpenDialog }: SelectedFileMessageProps): JSX.Element => {
  const maxCharacterLimit = 50
  let selectedFileName = fileName

  if (fileName?.length > maxCharacterLimit) {
    selectedFileName = trunicateFilename(fileName, maxCharacterLimit)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="mb-8">
        <Paragraph variant="body">
          <span className="block mb-12 break-all"><strong>{selectedFileName}</strong></span>
        </Paragraph>
        <Paragraph variant="body">
          <span className="text-purple-800">Drag and drop to replace file or {" "}</span>
          <Hyperlink text="Select another File" handleOnClick={handleOpenDialog} />
        </Paragraph>
      </span>
      <Paragraph variant="extra-small"><span className="text-purple-800/70">.xlsx format only</span></Paragraph>
    </div>
  )
}

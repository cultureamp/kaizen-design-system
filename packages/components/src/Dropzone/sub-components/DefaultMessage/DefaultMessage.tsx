import React from "react"
import { Paragraph } from "@kaizen/typography"
import { Hyperlink } from "../Hyperlink/Hyperlink"

interface DefaultMessageProps {
  handleOpenDialog: () => void
}

const DefaultMessage = ({ handleOpenDialog }: DefaultMessageProps): JSX.Element => (
  <div className="flex flex-col items-center justify-center">
    <span className="inline-block mb-8">
      <Paragraph variant="body">
        <span className="text-purple-800">Drag and drop file or{" "}</span>
        <Hyperlink text="Select a file" handleOnClick={handleOpenDialog} />
      </Paragraph>
    </span>
    <Paragraph variant="extra-small"><span className="text-purple-800/70">.xlsx format only</span></Paragraph>
  </div>
)

export { DefaultMessage }

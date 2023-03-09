import React from "react"
import { Paragraph } from "@kaizen/typography"

export const OnDragMessage = (): JSX.Element => (
  <div className="flex flex-col items-center justify-center">
    <span className="mb-8">
      <Paragraph variant="body">Drop your file here</Paragraph>
    </span>
    <Paragraph variant="extra-small"><span className="text-purple-800/70">.xlsx format only</span></Paragraph>
  </div>
)

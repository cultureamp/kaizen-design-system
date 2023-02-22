import React, { useState } from "react"
import { Divider } from "@kaizen/draft-divider"
import { InlineNotification } from "@kaizen/notification"
import { StickerSheet } from "../../../../storybook/components/StickerSheet"
// import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"

import { CodeSnippet } from "./CodeSnippet"

type Props = {
  compiledCssPropertyName: string
  classKeyValues: Array<{ utilityClassName; cssProperty }>
  renderExampleComponent: (cssProperty: string) => React.ReactElement
  isReversed?: boolean
}

export const UtilityClassTemplate = ({
  compiledCssPropertyName,
  classKeyValues,
  renderExampleComponent,
  isReversed = false,
}: Props): React.ReactElement => {
  const [copiedText, setCopiedText] = useState<null | string>(null)

  return (
    <StickerSheet isReversed={isReversed} border={1} frame={false} rules="rows">
      <StickerSheet.Header
        headings={["Utility Class", "Compiled CSS", "Example"]}
      />
      {classKeyValues.map((presetData, index) => {
        const { utilityClassName, cssProperty } = presetData

        return (
          <StickerSheet.Row rowTitle="">
            <div className="mr-32">
              <CodeSnippet
                text={utilityClassName}
                onCopy={(text: string): void => setCopiedText(text)}
              />
            </div>
            <p className="font-family-paragraph mr-32 w-max">
              {compiledCssPropertyName}: {cssProperty}
            </p>
            <div className="font-family-paragraph">
              {renderExampleComponent(cssProperty)}
            </div>
          </StickerSheet.Row>
        )
      })}
      <div className="absolute top-0 right-0">
        {copiedText && (
          <InlineNotification
            type="positive"
            hideCloseIcon
            autohide
            onHide={(): void => setCopiedText(null)}
            title="Copied to clipboard: "
          >
            {copiedText}
          </InlineNotification>
        )}
      </div>
    </StickerSheet>
  )
}

import React, { useState } from "react"
import { InlineNotification } from "~components/Notification"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { CodeSnippet } from "./CodeSnippet"

type Props = {
  compiledCssPropertyName: string
  classKeyValues: Array<{ utilityClassName: string; cssProperty: string }>
  renderExampleComponent: (utilityClass: string) => React.ReactElement
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
    <div className="kz-w-full">
      <StickerSheet
        className="kz-border-none kz-w-full"
        isReversed={isReversed}
        border={1}
        rules="rows"
      >
        <StickerSheet.Header
          className="kz-text-left kz-border-b kz-border-gray-400"
          headings={["Utility Class", "Compiled CSS", "Example"]}
        />
        <StickerSheet.Body>
          {classKeyValues.map((presetData, _index) => {
            const { utilityClassName, cssProperty } = presetData
            return (
              <StickerSheet.Row
                key={_index}
                rowTitle=""
                className="kz-border-b-1 kz-border-gray-400"
              >
                <div className="kz-mr-32 kz-min-w-max kz-max-w-[300px]">
                  <CodeSnippet
                    text={utilityClassName.replace("-DEFAULT", "")}
                    onCopy={(text: string): void => setCopiedText(text)}
                  />
                </div>
                <p className="kz-mr-32 kz-w-max kz-font-family-paragraph">
                  {compiledCssPropertyName}: {cssProperty}
                </p>
                <div className="kz-font-family-paragraph">
                  {renderExampleComponent(utilityClassName)}
                </div>
              </StickerSheet.Row>
            )
          })}
        </StickerSheet.Body>
      </StickerSheet>
      <div className="kz-fixed kz-top-[10px] kz-left-[10px]">
        {copiedText && (
          <InlineNotification
            type="positive"
            hideCloseIcon
            onHide={(): void => setCopiedText(null)}
            headingProps={{
              children: "Copied to clipboard: ",
              variant: "heading-6",
            }}
          >
            {copiedText}
          </InlineNotification>
        )}
      </div>
    </div>
  )
}

import React, { useState } from "react"
import { InlineNotification } from "@kaizen/notification"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"

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
    <StoryWrapper hasRowDivider isReversed={isReversed}>
      <StoryWrapper.RowHeader
        headings={["Utility Class", "Compiled CSS", "Example"]}
      />
      {classKeyValues.map((presetData, index) => {
        const { utilityClassName, cssProperty } = presetData

        return (
          <StoryWrapper.Row rowTitle="">
            <CodeSnippet
              text={utilityClassName}
              onCopy={(text: string): void => setCopiedText(text)}
            />
            <p className="font-family-paragraph">
              {compiledCssPropertyName}: {cssProperty}
            </p>
            <div className="font-family-paragraph">
              {renderExampleComponent(cssProperty)}
            </div>
          </StoryWrapper.Row>
        )
      })}
      <div className="absolute">
        {copiedText && (
          <InlineNotification
            type="positive"
            hideCloseIcon
            autohide
            title="Copied to clipboard: "
          >
            {copiedText}
          </InlineNotification>
        )}
      </div>
    </StoryWrapper>
  )
}

import React, { useState } from 'react'
import { InlineNotification } from '~components/Notification'
import { StickerSheet } from '~storybook/components/StickerSheet'
import { CardContent } from './components/CardContent'
import { CodeSnippet } from './components/CodeSnippet'

type Props = {
  compiledCssPropertyName: string
  classKeyValues: { utilityClassName: string, cssProperty: string }[]
  renderExampleComponent: (utilityClass: string) => React.ReactElement
  isReversed?: boolean
}

export const TailwindStoryTemplate = ({
  compiledCssPropertyName,
  classKeyValues,
  renderExampleComponent,
  isReversed = false,
}: Props): React.ReactElement => {
  const [copiedText, setCopiedText] = useState<null | string>(null)

  return (
    <div className="w-full">
      <StickerSheet
        className="border-none w-full"
        isReversed={isReversed}
        border={1}
        rules="rows"
      >
        <StickerSheet.Header
          className="text-left border-b border-gray-400"
          headings={['Utility Class', 'Compiled CSS', 'Example']}
        />
        <StickerSheet.Body>
          {classKeyValues.map((presetData, _index) => {
            const { utilityClassName, cssProperty } = presetData
            return (
              <StickerSheet.Row
                key={_index}
                rowTitle=""
                className="border-b-1 border-gray-400"
              >
                <div className="mr-32 min-w-max max-w-[300px]">
                  <CodeSnippet
                    text={utilityClassName.replace('-DEFAULT', '')}
                    onCopy={(text: string): void => setCopiedText(text)}
                  />
                </div>
                <p className="mr-32 w-max font-family-paragraph">
                  {compiledCssPropertyName}: {cssProperty}
                </p>
                <div className="font-family-paragraph">
                  {renderExampleComponent(utilityClassName)}
                </div>
              </StickerSheet.Row>
            )
          })}
        </StickerSheet.Body>
      </StickerSheet>
      <div className="fixed top-[10px] left-[10px]">
        {copiedText && (
          <InlineNotification
            type="positive"
            hideCloseIcon
            onHide={(): void => setCopiedText(null)}
            headingProps={{
              children: 'Copied to clipboard: ',
              variant: 'heading-6',
            }}
          >
            {copiedText}
          </InlineNotification>
        )}
      </div>
    </div>
  )
}

TailwindStoryTemplate.CardContent = CardContent

TailwindStoryTemplate.displayName = 'TailwindStoryTemplate'

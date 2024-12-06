import React, { useState } from 'react'
import { Heading } from '~components/Heading'
import { InlineNotification } from '~components/Notification'
import { CardContent } from './components/CardContent'
import { CodeSnippet } from './components/CodeSnippet'

type Props = {
  compiledCssPropertyName: string
  classKeyValues: { utilityClassName: string; cssProperty: string }[]
  renderExampleComponent: (utilityClass: string) => React.ReactElement
  isReversed?: boolean
}

export const TailwindStoryTemplate = ({
  compiledCssPropertyName,
  classKeyValues,
  renderExampleComponent,
}: Props): React.ReactElement => {
  const [copiedText, setCopiedText] = useState<null | string>(null)

  return (
    <div className="w-full">
      <table className="border-collapse w-full font-family-paragraph">
        <thead className="text-left">
          <tr className="border-b border-gray-400">
            <th className="p-12">
              <Heading variant="heading-5" tag="span">
                Utility Class
              </Heading>
            </th>
            <th className="p-12">
              <Heading variant="heading-5" tag="span">
                Compiled CSS
              </Heading>
            </th>
            <th className="p-12">
              <Heading variant="heading-5" tag="span">
                Example
              </Heading>
            </th>
          </tr>
        </thead>
        <tbody>
          {classKeyValues.map((presetData, index) => {
            const { utilityClassName, cssProperty } = presetData
            return (
              <tr key={index} className="border-b-1 border-gray-400">
                <td className="p-12">
                  <div className="mr-32 min-w-max max-w-[300px]">
                    <CodeSnippet
                      text={utilityClassName.replace('-DEFAULT', '')}
                      onCopy={(text: string): void => setCopiedText(text)}
                    />
                  </div>
                </td>
                <td className="p-12">
                  <p className="mr-32 w-max">
                    {compiledCssPropertyName}: {cssProperty}
                  </p>
                </td>
                <td className="p-12">
                  <div>{renderExampleComponent(utilityClassName)}</div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

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

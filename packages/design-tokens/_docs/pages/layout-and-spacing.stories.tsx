import React from 'react'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { tokens } from '~design-tokens/js'

const meta = {
  title: 'Guides/Layout and spacing',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const SpacingTokens: StoryFn = () => {
  const keyValuePairs = Object.entries(tokens.spacing)

  return (
    <div className="flex justify-center">
      <table>
        <thead>
          <tr>
            <th className="font-family-heading text-left pr-16">Token name</th>
            <th className="font-family-heading text-left pr-16">Token value</th>
            <th className="font-family-heading text-left">Visual example</th>
          </tr>
        </thead>
        <tbody>
          {keyValuePairs.map(([tokenName, tokenValue]) => (
            <tr className="even:bg-gray-100" key={tokenName}>
              <td className="font-family-data">{tokenName}</td>
              <td className="font-family-data">{tokenValue}</td>
              <td className="font-family-data">
                <div className="h-[20px] bg-blue-400" style={{ width: tokenValue }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const marginExampleSource = `
<div className="flex">
  <div className="mr-12">   // This will become margin-right: 0.75rem
    <Button label="Button 1" />
  </div>
  <Button label="Button 2" />
</div>
`

export const MarginExample: Story = {
  render: () => (
    <div className="flex">
      <div className="mr-12">
        <Button label="Button 1" />
      </div>
      <Button label="Button 2" />
    </div>
  ),
  parameters: {
    docs: {
      source: { code: marginExampleSource },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

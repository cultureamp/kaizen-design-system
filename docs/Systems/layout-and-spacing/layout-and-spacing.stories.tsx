import React from "react"
import { StoryFn } from "@storybook/react"
import { Button } from "~components/Button"
import { tokens } from "~design-tokens/js"

export default {
  title: "Systems/Tailwind/Layout and spacing",
}

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
                <div
                  className="h-[20px] bg-blue-400"
                  style={{ width: tokenValue }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const MarginExample: StoryFn = (): JSX.Element => (
  <div className="flex">
    <div className="mr-12">
      <Button label="Button 1" />
    </div>
    <Button label="Button 2" />
  </div>
)

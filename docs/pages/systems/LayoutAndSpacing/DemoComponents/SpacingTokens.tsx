import React from "react"
import { kzSpacing } from "@kaizen/tailwind/src/kz-spacing"

export const SpacingTokens = (): JSX.Element => {
  const keyValuePairs = Object.entries(kzSpacing)

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

SpacingTokens.displayName = "SpacingTokens"

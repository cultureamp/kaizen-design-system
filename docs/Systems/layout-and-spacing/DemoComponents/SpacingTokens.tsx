import React from "react"
import { tokens } from "~design-tokens/js"

export const SpacingTokens = (): JSX.Element => {
  const keyValuePairs = Object.entries(tokens.spacing)

  return (
    <div className="kz-flex kz-justify-center">
      <table>
        <thead>
          <tr>
            <th className="kz-font-family-heading kz-text-left kz-pr-16">
              Token name
            </th>
            <th className="kz-font-family-heading kz-text-left kz-pr-16">
              Token value
            </th>
            <th className="kz-font-family-heading kz-text-left">
              Visual example
            </th>
          </tr>
        </thead>
        <tbody>
          {keyValuePairs.map(([tokenName, tokenValue]) => (
            <tr className="even:kz-bg-gray-100" key={tokenName}>
              <td className="kz-font-family-data">{tokenName}</td>
              <td className="kz-font-family-data">{tokenValue}</td>
              <td className="kz-font-family-data">
                <div
                  className="kz-h-[20px] kz-bg-blue-400"
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

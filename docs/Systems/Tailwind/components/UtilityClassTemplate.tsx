import React, { useState } from "react"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"

import { UtilityClass } from "./UtilityClass"

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
}: Props): React.ReactElement => (
  <StoryWrapper hasRowDivider isReversed={isReversed}>
    <StoryWrapper.RowHeader
      headings={["Utility Class", "Compiled CSS", "Example"]}
    />
    {classKeyValues.map((presetData, index) => {
      const { utilityClassName, cssProperty } = presetData

      return (
        <StoryWrapper.Row rowTitle="">
          <UtilityClass utilityClassName={utilityClassName} />
          <p className="font-family-paragraph">
            {compiledCssPropertyName}: {cssProperty}
          </p>
          <div className="font-family-paragraph">
            {renderExampleComponent(cssProperty)}
          </div>
        </StoryWrapper.Row>
      )
    })}
  </StoryWrapper>
)

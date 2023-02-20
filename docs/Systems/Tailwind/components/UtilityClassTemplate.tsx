import React from "react"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"

type Props = {
  classKeyValues: Array<{ utilityClassName; cssProperty }>
  renderExampleComponent: (cssProperty: string) => React.ReactElement
  isReversed?: boolean
}

export const UtilityClassTemplate = ({
  classKeyValues,
  renderExampleComponent,
  isReversed = false,
}: Props): React.ReactElement => (
  <StoryWrapper hasRowDivider isReversed={isReversed}>
    <StoryWrapper.RowHeader
      headings={["Utility Class", "CSS Property", "Example"]}
    />
    {classKeyValues.map((presetData, index) => {
      const { utilityClassName, cssProperty } = presetData

      return (
        <StoryWrapper.Row rowTitle="">
          <p className="font-family-paragraph">{utilityClassName}</p>
          <p className="font-family-paragraph">{cssProperty}</p>
          <div className="font-family-paragraph">
            {renderExampleComponent(cssProperty)}
          </div>
        </StoryWrapper.Row>
      )
    })}
  </StoryWrapper>
)

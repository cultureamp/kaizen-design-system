import * as React from "react"
import Code from "../Code"

class CAMarginExample extends React.PureComponent {
  render() {
    return (
      <Code language="scss">{`@import '~@kaizen/component-library/styles/layout';

.my-element {
  @include ca-margin($start: $ca-grid, $end: 0, $top: $ca-grid * 2, $bottom: $ca-grid);
}`}</Code>
    )
  }
}

export default CAMarginExample

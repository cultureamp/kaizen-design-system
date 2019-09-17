import * as React from "react"
import Code from "../Code"

class CATypeAlignExample extends React.PureComponent {
  render() {
    return (
      <Code>{`@import '~@cultureamp/kaizen-component-library/styles/type';

.my-text {
  @include ca-type-align-start;
}`}</Code>
    )
  }
}

export default CATypeAlignExample

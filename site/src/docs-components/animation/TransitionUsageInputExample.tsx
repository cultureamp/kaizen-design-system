import scssCode from "!raw-loader!./TransitionUsageInputExample.scss"
import * as React from "react"
import Code from "../Code"

class TransitionUsageInputExample extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>
  }
}

export default TransitionUsageInputExample

import scssCode from "!raw-loader!./TransitionUsageOutputExample.scss"
import React from "react"
import Code from "../Code"

class TransitionUsageOutputExample extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>
  }
}

export default TransitionUsageOutputExample

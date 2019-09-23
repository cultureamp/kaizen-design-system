import scssCode from "!raw-loader!./TransitionUsageOutputExample.scss"
import * as React from "react"
import Code from "../Code"

class TransitionUsageOutputExample extends React.PureComponent {
  render() {
    return <Code language="scss">{scssCode}</Code>
  }
}

export default TransitionUsageOutputExample

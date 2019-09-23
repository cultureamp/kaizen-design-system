import scssCode from "!raw-loader!./AnimationUsageOutputExample.scss"
import * as React from "react"
import Code from "../Code"

class AnimationUsageOutputExample extends React.PureComponent {
  render() {
    return <Code language="scss">{scssCode}</Code>
  }
}

export default AnimationUsageOutputExample

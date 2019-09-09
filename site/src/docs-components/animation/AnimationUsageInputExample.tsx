import scssCode from "!raw-loader!./AnimationUsageInputExample.scss"
import React from "react"
import Code from "../Code"

class AnimationUsageInputExample extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>
  }
}

export default AnimationUsageInputExample

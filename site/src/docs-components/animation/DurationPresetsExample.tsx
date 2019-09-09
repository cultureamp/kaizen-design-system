import scssCode from "!raw-loader!@cultureamp/kaizen-component-library/styles/animations/_durations.scss"
import React from "react"
import Code from "../Code"

class DurationPresets extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>
  }
}

export default DurationPresets

import scssCode from "!raw-loader!@kaizen/component-library/styles/animations/_durations.scss"
import * as React from "react"
import Code from "../Code"

class DurationPresets extends React.PureComponent {
  render() {
    return <Code language="scss">{scssCode}</Code>
  }
}

export default DurationPresets

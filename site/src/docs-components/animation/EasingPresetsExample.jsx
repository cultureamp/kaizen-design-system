import scssCode from "!raw-loader!@kaizen/component-library/styles/animations/_easings.scss"
import * as React from "react"
import Code from "../Code"

class EasingPresets extends React.PureComponent {
  render() {
    return <Code language="scss">{scssCode}</Code>
  }
}

export default EasingPresets

import scssCode from "!raw-loader!@cultureamp/kaizen-component-library/styles/animations/_easings.scss"
import React from "react"
import Code from "../Code"

class EasingPresets extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>
  }
}

export default EasingPresets

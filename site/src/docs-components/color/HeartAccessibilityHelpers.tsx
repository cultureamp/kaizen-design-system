import * as React from "react"
import Code from "../Code"
import accessibilityHelpers from "!raw-loader!@kaizen/design-tokens/sass/accessibility.scss"

class HeartAccessibilityHelpers extends React.PureComponent {
  render() {
    return <Code language="scss">{accessibilityHelpers}</Code>
  }
}

export default HeartAccessibilityHelpers

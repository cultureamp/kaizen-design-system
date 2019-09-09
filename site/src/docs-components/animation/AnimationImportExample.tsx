import scssCode from "!raw-loader!./AnimationImportExample.scss"
import React from "react"
import Code from "../Code"

class AnimationImportExample extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>
  }
}

export default AnimationImportExample

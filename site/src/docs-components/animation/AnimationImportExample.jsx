import scssCode from "!raw-loader!./AnimationImportExample.scss"
import * as React from "react"
import Code from "../Code"

class AnimationImportExample extends React.PureComponent {
  render() {
    return <Code language="scss">{scssCode}</Code>
  }
}

export default AnimationImportExample

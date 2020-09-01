import animationTokens from "!raw-loader!@kaizen/design-tokens/sass/animation.scss"
import * as React from "react"
import Code from "../Code"

class AnimationTokensList extends React.PureComponent {
  render() {
    return <Code language="scss">{animationTokens}</Code>
  }
}

export default AnimationTokensList

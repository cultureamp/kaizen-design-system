import * as React from "react"
import Code from "../Code"

class RTLLayoutExample extends React.PureComponent {
  render() {
    return (
      <Code>{`<div dir="rtl">
  <div><p>I should now be right aligned text</p><div>
</div>`}</Code>
    )
  }
}

export default RTLLayoutExample

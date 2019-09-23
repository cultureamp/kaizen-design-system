// @flow
import * as React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
// import jsx from "react-syntax-highlighter/languages/prism/jsx"
const styles = require("./Code.styles")

// registerLanguage("jsx", jsx)

class Code extends React.Component<{ children: React.ReactNode }> {
  render() {
    return (
      <SyntaxHighlighter language="jsx" style={styles}>
        {this.props.children}
      </SyntaxHighlighter>
    )
  }
}

export default Code

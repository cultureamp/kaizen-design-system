import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/oceanicNext"
import * as React from "react"

class Code extends React.Component<{
  children: any
  language: any
}> {
  render() {
    return (
      <Highlight
        {...defaultProps}
        code={this.props.children}
        language={this.props.language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              // Ensure blank lines/spaces drop onto a new line, except the last line
              if (line.length === 1 && line[0].content === "") {
                if (i !== tokens.length - 1) {
                  line[0].content = " "
                } else {
                  return
                }
              }
              return (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => {
                    return <span {...getTokenProps({ token, key })} />
                  })}
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default Code

import Highlight, { defaultProps } from "prism-react-renderer"
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
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default Code

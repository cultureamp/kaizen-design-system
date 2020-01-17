import { withPrefix } from "gatsby"
import * as React from "react"

const styles = require("./StorybookDemo.scss")

type StorybookDemoProps = {
  demoId: string
  demoHeight: string
}

declare global {
  interface Window {
    body: any
  }
}

export default class StorybookDemo extends React.Component<StorybookDemoProps> {
  private iFrameRef: React.RefObject<HTMLIFrameElement>

  constructor(props) {
    super(props)
    this.iFrameRef = React.createRef()
  }
  state = {
    iFrameHeight: "0px",
  }

  render() {
    return (
      <div className={styles.container}>
        <iframe
          src={withPrefix(
            `/storybook-static/iframe.html?id=${this.props.demoId}`
          )}
          onLoad={() => {
            setTimeout(() => {
              const obj = this.iFrameRef.current
              if (obj && obj.contentWindow) {
                this.setState({
                  iFrameHeight:
                    this.props.demoHeight ||
                    obj.contentWindow.document.body.scrollHeight + "px",
                })
              }
            }, 1000)
          }}
          height={this.state.iFrameHeight}
          ref={this.iFrameRef}
        ></iframe>
      </div>
    )
  }
}

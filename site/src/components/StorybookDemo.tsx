import { withPrefix } from "gatsby"
import * as React from "react"

import styles from "./StorybookDemo.scss"

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
  state = {
    iFrameHeight: "0px",
  }

  private iFrameRef: React.RefObject<HTMLIFrameElement>

  constructor(props) {
    super(props)
    this.iFrameRef = React.createRef()
  }

  render() {
    return (
      <div className={styles.container}>
        <iframe
          src={withPrefix(`/storybook/iframe.html?id=${this.props.demoId}`)}
          onLoad={() => {
            setTimeout(() => {
              const obj = this.iFrameRef.current
              if (obj && obj.contentWindow) {
                this.setState({
                  iFrameHeight:
                    // 48px is 2 grid units; just adds extra padding to avoid borders etc being cropped
                    this.props.demoHeight ||
                    obj.contentWindow.document.body.scrollHeight + 48 + "px",
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

import * as React from "react"
import ReactDOM from "react-dom"

const styles = require("./StorybookDemo.scss")

type StorybookDemoProps = {
  demoId: string
}

export default class StorybookDemo extends React.Component<StorybookDemoProps> {
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
          src={`https://cultureamp.design/storybook-static/iframe.html?id=${this.props.demoId}`}
          onLoad={() => {
            const obj = this.iFrameRef.current
            if (obj && obj.contentWindow) {
              this.setState({
                iFrameHeight: obj!.contentWindow.body.scrollHeight + "px",
              })
            }
          }}
          height={this.state.iFrameHeight}
          ref={this.iFrameRef}
        ></iframe>
      </div>
    )
  }
}

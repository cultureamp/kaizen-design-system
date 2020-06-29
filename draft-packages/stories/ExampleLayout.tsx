import classnames from "classnames"
import * as React from "react"
const styles = require("./ExampleLayout.module.scss")

interface ExampleLayoutProps {
  rtl?: boolean
}

export const Sidebar: React.FunctionComponent = ({ children }) => (
  <div className={styles.sidebar}>{children}</div>
)

export const Content: React.FunctionComponent = ({ children }) => (
  <div className={styles.content}>{children}</div>
)

export class ExampleLayout extends React.Component<ExampleLayoutProps> {
  static Content = Content
  static Sidebar = Sidebar

  render() {
    return (
      <div
        className={classnames(styles.container, {
          [styles.rtl]: this.props.rtl,
        })}
      >
        {this.props.children}
      </div>
    )
  }
}

import * as React from "react"
import styles from "./ExampleLayout.module.scss"

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
      <div dir={this.props.rtl ? "rtl" : "ltr"} className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

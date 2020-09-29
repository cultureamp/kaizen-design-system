import classnames from "classnames"
import * as React from "react"
import styles from "./Grid.scss"

class Grid extends React.PureComponent {
  render() {
    const { children, className } = this.props

    return (
      <React.Fragment>
        <div className={classnames(styles.grid, className)}>{children}</div>
      </React.Fragment>
    )
  }
}

export default Grid

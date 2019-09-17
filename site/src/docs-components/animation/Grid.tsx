import classnames from "classnames"
import React from "react"
const styles = require("./Grid.scss")

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

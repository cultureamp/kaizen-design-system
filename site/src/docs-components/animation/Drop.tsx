import classnames from "classnames"
import React from "react"
const styles = require("./Drop.scss")

type DropProps = {
  color: string
  classes: any
  onClick: any
  children: React.ReactNode
}

class Drop extends React.PureComponent<DropProps> {
  render() {
    const { color, classes, onClick, children } = this.props

    return (
      <div className={styles.droplet}>
        <div className={styles.container} onClick={onClick}>
          <div
            className={classnames(classes, styles.example)}
            style={{ background: color }}
          />
        </div>
        {children}
      </div>
    )
  }
}

export default Drop

import classnames from "classnames"
import * as React from "react"
import styles from "./Drop.scss"

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
        <button className={styles.container} onClick={onClick}>
          <span
            className={classnames(classes, styles.example)}
            style={{ background: color }}
          />
        </button>
        {children}
      </div>
    )
  }
}

export default Drop

import classNames from "classnames"
import React from "react"
import styles from "./Card.module.scss"

const Card = ({ children, dark }) => {
  const className = classNames({
    [styles.card]: true,
    [styles.dark]: dark,
  })
  return <div className={className}>{children}</div>
}

export default Card

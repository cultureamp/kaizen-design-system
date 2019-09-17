import classNames from "classnames"
import React from "react"
const styles = require("./Card.scss")

type CardProps = {
  children: React.ReactNode
  dark?: boolean
}

const Card = ({ children, dark = false }: CardProps) => {
  const className = classNames({
    [styles.card]: true,
    [styles.dark]: dark,
  })
  return <div className={className}>{children}</div>
}

export default Card

import * as React from "react"
import styles from "./Tag.scss"

type TagProps = {
  text: string
}

const Tag: React.FunctionComponent<TagProps> = ({ text }) => (
  <span className={styles.tag}>{text}</span>
)

export default Tag

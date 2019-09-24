import * as React from "react"
const styles = require("./Tag.scss")

type TagProps = {
  text: string
}

type Tag = React.FunctionComponent<TagProps>

const Tag: Tag = ({ text }) => <span className={styles.tag}>{text}</span>

export default Tag

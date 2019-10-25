import * as React from "react"
import ReactSelect from "react-select"
import { Props as ReactSelectProps } from "react-select/src/Select"

const styles = require("./styles.react.scss")

interface Props extends ReactSelectProps {}

const Select = (props: Props) => {
  return (
    <ReactSelect
      {...props}
      theme={theme => {
        return {
          ...theme,
          // turn off the built-in border radius
          // we'll control this with CSS using Kaizen variables
          borderRadius: 0,
        }
      }}
      className={styles.container}
      classNamePrefix="KaizenSelect"
    />
  )
}

export default Select

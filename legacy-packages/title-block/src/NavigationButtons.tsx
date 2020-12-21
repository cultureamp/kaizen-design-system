import * as React from "react"
import classNames from "classnames"
import styles from "../styles/NavigationButton.scss"
const titleblockStyles = require("./TitleBlock.scss")

export type NavigationButton = {
  buttonText: string
  path: string
  active: boolean
}

type Props = {
  navigationButtons: NavigationButton[]
  reversed: boolean
}

const NavigationButtons = (props: Props) => (
  <React.Fragment>
    {props.navigationButtons.map(b => (
      <a
        className={classNames({
          [styles.reversed]: props.reversed,
          [styles.button]: !b.active,
          [styles.activeButton]: b.active,
        })}
        href={b.path}
        key={b.buttonText}
      >
        {b.buttonText}
      </a>
    ))}
  </React.Fragment>
)

NavigationButtons.defaultProps = {
  reversed: false,
}

NavigationButtons.displayName = "NavigationButtons"

export default NavigationButtons

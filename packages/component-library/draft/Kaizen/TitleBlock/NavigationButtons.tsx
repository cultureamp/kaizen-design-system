import * as React from "react"
const styles = require("./NavigationButton.scss")
const titleblockStyles = require("./TitleBlock.scss")
import classNames from "classnames"

export type NavigationButton = {
  buttonText: string
  path: string
  active: boolean
}

type Props = {
  navigationButtons: NavigationButton[]
  reversed: boolean
}

const NavigationButtons = (props: Props) => {
  return (
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
}

NavigationButtons.defaultProps = {
  reversed: false,
}

NavigationButtons.displayName = "NavigationButtons"

export default NavigationButtons

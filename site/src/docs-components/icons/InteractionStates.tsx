import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import * as React from "react"
import Card from "../Card"

const iconStyles = require("@kaizen/component-library/components/Icon/Icon.module.scss")
const enso = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default

const styles = require("./IconsPage.scss")

type InteractionStatesProps = {
  dark: boolean
}

class InteractionStates extends React.Component<InteractionStatesProps> {
  render() {
    return (
      <Card dark={this.props.dark}>
        <div className={styles.interactionStatesInner}>
          {this.renderIcon(
            "Disabled",
            iconStyles.disabled,
            30,
            this.props.dark
          )}
          {this.renderIcon(
            "Inactive",
            null,
            this.props.dark ? 100 : 50,
            this.props.dark
          )}
          {this.renderIcon("Hover", iconStyles.hover, 70, this.props.dark)}
          {this.renderIcon(
            "Active",
            iconStyles.active,
            this.props.dark ? 50 : 100,
            this.props.dark
          )}
        </div>
      </Card>
    )
  }

  renderIcon(title, interactionStateClass, opacity, dark) {
    return (
      <div
        className={classnames(styles.iconExample, interactionStateClass, {
          [iconStyles.reversedInteractiveIconWrapper]: dark,
          [iconStyles.interactiveIconWrapper]: !dark,
        })}
      >
        <strong>{title}</strong>
        <span>
          <Icon icon={enso} role="presentation" />
        </span>
        <span>{opacity} %</span>
      </div>
    )
  }
}

export default InteractionStates

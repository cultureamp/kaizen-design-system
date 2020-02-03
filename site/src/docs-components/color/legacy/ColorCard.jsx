import { Icon } from "@kaizen/component-library"
import * as React from "react"
import ColorBlock from "./ColorBlock"
import { renderContrastHeaderIcons } from "./ContrastIcon"
import Palette from "./Palette"

const chevronDown = require("@kaizen/component-library/icons/chevron-down.icon.svg").default
const chevronUp = require("@kaizen/component-library/icons/chevron-up.icon.svg").default
const styles = require("./ColorCard.scss")

class ColorCard extends React.Component {
  state = {
    expanded: false,
  }

  render() {
    return (
      <div>
        <div className={styles.colorCard}>
          <h3 className={styles.colorHeading}>
            {this.renderColorTitleAndToggle()}
          </h3>
          {this.renderSubtitle()}
          {this.renderColorBlocks(this.state.expanded)}
        </div>
      </div>
    )
  }

  renderColorTitleAndToggle() {
    if (!this.isExpandable()) {
      return this.props.name
    }
    const toggleIcon = this.state.expanded ? chevronUp : chevronDown,
      toggleTitle = this.state.expanded ? "Collapse Color" : "Expand Color"
    return (
      <button
        className={styles.cardToggleButton}
        onClick={() => this.toggleOpen()}
        onMouseDown={e => e.preventDefault()}
      >
        <span className={styles.toggleButtonLabel}>{this.props.name}</span>
        <span className={styles.toggleIconWrapper}>
          <Icon icon={toggleIcon} role="img" title={toggleTitle} />
        </span>
      </button>
    )
  }

  isExpandable() {
    return !["Stone", "Ash"].includes(this.props.name)
  }

  toggleOpen() {
    this.setState({ expanded: !this.state.expanded })
  }

  renderSubtitle() {
    const showContrast = this.props.showAccessibility,
      title = showContrast ? "WCAG 2.0 AA" : "Tint & Shade",
      color = Palette[this.props.name.toLowerCase()]
    return (
      <div className={styles.subheader}>
        <label>{title}</label>
        {showContrast && renderContrastHeaderIcons(color)}
      </div>
    )
  }

  renderColorBlocks(showVariations) {
    const colorName = this.props.name
    const variations =
      showVariations && this.isExpandable()
        ? [90, 70, 50, 30, 10, 0, -10, -20, -30, -40, -50]
        : [0]
    return variations.map(amount => (
      <ColorBlock
        key={amount}
        colorName={colorName}
        amount={amount}
        showContrast={this.props.showAccessibility}
      />
    ))
  }
}

export default ColorCard

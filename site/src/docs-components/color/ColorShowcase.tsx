import React from "react"
import { ActionLink } from "../Link"
import ColorCard from "./ColorCard"
const styles = require("./ColorShowcase.scss")

class ColorShowcase extends React.Component {
  state = {
    showAccessibility: {},
  }

  render() {
    return (
      <div className={styles.cardContainer}>
        {this.renderColorSection("Palette", [
          "Coral",
          "Seedling",
          "Ocean",
          "Lapis",
          "Wisteria",
          "Peach",
          "Yuzu",
          "Ink",
          "Stone",
          "Ash",
        ])}
      </div>
    )
  }

  renderColorSection(title, colors) {
    const showAccessibility = this.state.showAccessibility[title]
    return [
      <div className={styles.gridHeader} key={title}>
        {/* <div className={styles.toggleAccessibilityButton}>
          <ActionLink action={() => this.toggleAccessibility(title)}>
            {showAccessibility
              ? "Hide Contrast Checker"
              : "Show Contrast Checker"}
          </ActionLink>
        </div> */}
      </div>,
      colors.map(color => (
        <ColorCard
          name={color}
          key={color}
          showAccessibility={showAccessibility}
        />
      )),
    ]
  }

  toggleAccessibility(section) {
    const currentValue = this.state.showAccessibility[section]
    this.setState({
      showAccessibility: {
        ...this.state.showAccessibility,
        [section]: !currentValue,
      },
    })
  }
}

export default ColorShowcase

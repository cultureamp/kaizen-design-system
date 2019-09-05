import React from "react"
import { ActionLink } from "../Link"
import ColorCard from "./ColorCard"
import styles from "./ColorShowcase.scss"

class ColorShowcase extends React.Component {
  state = {
    showAccessibility: {},
  }

  render() {
    return (
      <div className={styles.cardContainer}>
        {this.renderColorSection("Palette", [
          "Coral",
          "Ink",
          "Seedling",
          "Ocean",
          "Lapis",
          "Wisteria",
          "Peach",
          "Yuzu",
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
        <h2 className={styles.sectionHeader}>{title}</h2>
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

import {
  Dropdown,
  MenuHeader,
  MenuItem,
  MenuList,
} from "@cultureamp/kaizen-component-library"
import * as React from "react"

const duplicate = require("@cultureamp/kaizen-component-library/icons/duplicate.icon.svg")
  .default
const styles = require("./ColorCard.scss")

const ColorBlockKebab = ({ bgColor, sassVar }) => {
  const hex = bgColor.hex(),
    rgb = bgColor
      .rgb()
      .array()
      .map(Math.round)
      .join(", "),
    cmyk = bgColor
      .cmyk()
      .array()
      .map(Math.round)
      .join(", ")
  return (
    <span className={styles.kebabContainer}>
      <Dropdown>
        <MenuList>
          <MenuHeader title="Color Values" />
          <MenuItem {...getColorDropdownItem("SASS", sassVar)} />
          <MenuItem {...getColorDropdownItem("HEX", hex)} />
          <MenuItem {...getColorDropdownItem("RGB", rgb)} />
          <MenuItem {...getColorDropdownItem("CMYK", cmyk)} />
        </MenuList>
      </Dropdown>
    </span>
  )
}

const getColorDropdownItem = (type, value) => {
  let input
  return {
    children: (
      <div className={styles.dropdownItem} title="Copy to clipboard">
        <strong>{type}</strong>
        <input
          type="text"
          value={value}
          readOnly={true}
          ref={i => (input = i)}
        />
      </div>
    ),
    action: () => {
      if (input) {
        input.select()
        document.execCommand("copy")
      }
    },
    icon: duplicate,
    hoverIcon: true,
  }
}

export default ColorBlockKebab

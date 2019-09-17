// TODO: update references (still contains old ones from previous site)

import classNames from "classnames"
import Color from "color"
import * as React from "react"
import wcag from "wcag-contrast-verifier/lib/wcag"
import ColorBlockKebab from "./ColorBlockKebab"
import ContrastIcon from "./ContrastIcon"
import Palette from "./Palette"

const styles = require("./ColorCard.scss")

function addTint(color, percentage) {
  return color.mix(Color("#ffffff"), percentage / 100)
}

function addShade(color, percentage) {
  return color.mix(Color("#000000"), percentage / 100)
}

function shouldUseWhiteText(color) {
  const whiteContrast = wcag.getContrastRatio(color.hex(), "#ffffff"),
    blackContrast = wcag.getContrastRatio(color.hex(), Palette.ink.hex())
  return whiteContrast > blackContrast
}

const ColorBlock = ({ colorName, amount, showContrast }) => {
  let isHalfBlock = false,
    label = "100%",
    sassVar = `$ca-palette-${colorName.toLowerCase()}`,
    bgColor = Palette[colorName.toLowerCase()]

  if (amount != 0) {
    const absAmount = Math.abs(amount)
    if (amount > 0) {
      bgColor = addTint(bgColor, absAmount)
      sassVar = `add-tint(${sassVar}, ${absAmount}%)`
      label = `+${absAmount}% White`
    } else {
      bgColor = addShade(bgColor, absAmount)
      sassVar = `add-shade(${sassVar}, ${absAmount}%)`
      label = `+${absAmount}% Black`
    }
    isHalfBlock = true
  }

  const shouldUseWhite = shouldUseWhiteText(bgColor),
    classes = classNames({
      [styles.colorBlock]: true,
      [styles.colorBlockHalf]: isHalfBlock,
      [styles.whiteText]: shouldUseWhite,
    }),
    name = `${colorName} ${label}`,
    icons = showContrast ? (
      [
        <ContrastIcon
          color={bgColor}
          name={name}
          text="White"
          size={12}
          key="white small"
        />,
        <ContrastIcon
          color={bgColor}
          name={name}
          text="White"
          size={18}
          key="white large"
        />,
        <ContrastIcon
          color={bgColor}
          name={name}
          text="Ink"
          size={12}
          key="ink small"
        />,
        <ContrastIcon
          color={bgColor}
          name={name}
          text="Ink"
          size={18}
          key="ink large"
        />,
      ]
    ) : (
      <ColorBlockKebab bgColor={bgColor} sassVar={sassVar} />
    )

  return (
    <div
      key={bgColor.rgb().string()}
      className={classes}
      style={{ background: bgColor.rgb().string() }}
    >
      <span className={styles.colorBlockLabel}>{label}</span>
      {icons}
    </div>
  )
}

export default ColorBlock

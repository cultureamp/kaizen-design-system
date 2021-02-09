// TODO: Resolve design token properly rather than use default
import { defaultTheme } from "@kaizen/design-tokens"
import * as React from "react"
import wcag from "wcag-contrast-verifier/lib/wcag"

const DARK_TEXT_COLOR_FOR_CONTRAST_CHECKING = defaultTheme.color.wisteria[700]

const shouldUseWhiteText = (color: string) => {
  const whiteContrast = wcag.getContrastRatio(color, "#ffffff")
  const blackContrast = wcag.getContrastRatio(
    color,
    DARK_TEXT_COLOR_FOR_CONTRAST_CHECKING
  )
  return whiteContrast > blackContrast
}

const containerStyles: React.CSSProperties = {
  height: "4.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "7px",
  marginTop: "0.5rem",
}

const withBorder: React.CSSProperties = {
  border: `2px solid ${defaultTheme.color.ash}`,
  boxSizing: "border-box",
}

const defaultTextStyles: React.CSSProperties = {
  display: "block",
  color: defaultTheme.color.wisteria[800],
  fontWeight: 500,
}

const withWhiteText: React.CSSProperties = {
  color: defaultTheme.color.white,
}

const ZenColor = ({ name, value }) => {
  const borderStyles = value === defaultTheme.color.white ? withBorder : {}
  const textStyles = shouldUseWhiteText(value)
    ? { ...defaultTextStyles, ...withWhiteText }
    : defaultTextStyles
  return (
    <div
      style={{ ...containerStyles, ...borderStyles, backgroundColor: value }}
    >
      <span style={textStyles}>{name}</span>
      <span style={textStyles}>{value}</span>
    </div>
  )
}

export default ZenColor

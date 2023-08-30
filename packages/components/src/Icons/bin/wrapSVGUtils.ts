// @ts-ignore: Redeclared module error
const path = require("path")
// @ts-ignore: Redeclared module error
const svgToComponentTitle = (fileName: string): string => {
  const split = fileName.split("-")
  return split
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(".icon", "Icon")
}

const svgToAriaLabel = (fileName: string): string => {
  return fileName.split(/[-,/.]/).join(" ")
}

// eslint-disable-next-line no-template-curly-in-string
const hrefReplacement = "href={`#${uniqueId}`}"

// @ts-ignore: Redeclared module error
const insertSvgData = (
  reactTemplate: string,
  componentName: string,
  svgContent: string,
  ariaLabel: string
): string => {
  const completedTemplate = reactTemplate
    .replace("COMPONENT_TITLE", componentName)
    .replace("SVG_CONTENT", svgContent)
    .replace("ARIA_LABEL", ariaLabel)

  if (completedTemplate.includes("UNIQUE_ID")) {
    return completedTemplate
      .replace('"UNIQUE_ID"', "{uniqueId}")
      .replace('href="#UNIQUE_ID"', hrefReplacement)
  } else {
    // Some raw svgs do not use the use + href pattern.
    // This removes unused uuids from the template to prevent lint errors.
    return completedTemplate
      .replace("const uniqueId = uuidv4()", "")
      .replace('import { v4 as uuidv4 } from "uuid"', "")
  }
}

module.exports = {
  insertSvgData,
  svgToComponentTitle,
  svgToAriaLabel,
}

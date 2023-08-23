// @ts-ignore: Redeclared module error
const svgToComponentTitle = (fileName: string): string => {
  const split = fileName.split("-")
  return split
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(".icon", "Icon")
}

// @ts-ignore: Redeclared module error
const insertSvgData = (
  reactTemplate: string,
  componentName: string,
  svgContent: string
): string =>
  reactTemplate
    .replace("COMPONENT_TITLE", componentName)
    .replace("SVG_CONTENT", svgContent)
    .replace('"UNIQUE_ID"', "{uniqueId}")
    .replace('href="#UNIQUE_ID"', "href={`#${uniqueId}`}")

module.exports = {
  insertSvgData,
  svgToComponentTitle,
}

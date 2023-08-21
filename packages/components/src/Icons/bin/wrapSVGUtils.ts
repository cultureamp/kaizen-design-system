const svgToComponentTitle = (fileName: string) => {
  const split = fileName.split("-")
  return split
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(".icon", "Icon")
}

const insertSvgData = (
  reactTemplate: string,
  componentName: string,
  svgContent: string
) =>
  reactTemplate
    .replace("COMPONENT_TITLE", componentName)
    .replace("SVG_CONTENT", svgContent)

module.exports = {
  insertSvgData,
  svgToComponentTitle,
}

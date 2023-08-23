// @ts-ignore: Redeclared module error
const svgToComponentTitle = (fileName: string): string => {
  const split = fileName.split("-")
  return split
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(".icon", "Icon")
}

// This is an unfortunate workaround for a TS rule that prevents
// template-curlies in non-back-quote strings.
// However, we need it in this case in order to inject the ${} syntax
// into a react component.
const hrefReplacement = "href={`#${" + "uniqueId}`}"

// @ts-ignore: Redeclared module error
const insertSvgData = (
  reactTemplate: string,
  componentName: string,
  svgContent: string
): string => {
  const completedTemplate = reactTemplate
    .replace("COMPONENT_TITLE", componentName)
    .replace("SVG_CONTENT", svgContent)

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
}

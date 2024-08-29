// eslint-disable-next-line no-template-curly-in-string
const hrefReplacement = "href={`#${uniqueId}`}"

export const insertSvgData = (
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
  }
  // Some raw svgs do not use the use + href pattern.
  // This removes unused uuids from the template to prevent lint errors.
  return completedTemplate
    .replace("  const uniqueId = useId()", "")
    .replace(
      'import React, { useId } from "react"',
      'import React from "react"'
    )
}

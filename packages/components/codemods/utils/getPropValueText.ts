import ts from "typescript"

/** a helper function to get prop's value text from a JSX attribute */
export const getPropValueText = (
  propValue: ts.JsxAttributeValue
): string | undefined => {
  if (ts.isStringLiteral(propValue)) {
    return propValue.text
  }

  const expression = ts.isJsxExpression(propValue) && propValue.expression

  if (expression) {
    const expressionText = expression.getText()

    if (expressionText.match(/^['"`]/)) {
      return expressionText.replace(/^['"`]|['"`]$/g, "")
    }
  }
  return undefined
}

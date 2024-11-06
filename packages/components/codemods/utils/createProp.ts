import ts from 'typescript'

export const createProp = (
  name: string,
  value?: ts.JsxAttributeValue | undefined,
): ts.JsxAttribute =>
  ts.factory.createJsxAttribute(ts.factory.createIdentifier(name), value)

export const createStringProp = (
  name: string,
  value: string,
): ts.JsxAttribute => createProp(name, ts.factory.createStringLiteral(value))

// A util that creates a style prop with the given attributes
// ie. adding style={{ width: "100px" }}
export const createStyleProp = (
  attributes: Record<string, string | number | ts.JsxAttributeValue>,
): ts.JsxAttribute => {
  const styles = Object.keys(attributes).map(name => {
    const value = attributes[name]
    if (typeof value === 'string') {
      return ts.factory.createPropertyAssignment(
        name,
        ts.factory.createStringLiteral(value),
      )
    }

    if (typeof value === 'number') {
      return ts.factory.createPropertyAssignment(
        name,
        ts.factory.createNumericLiteral(value),
      )
    }

    if (ts.isJsxExpression(value)) {
      if (value.expression) {
        return ts.factory.createPropertyAssignment(name, value.expression)
      }
    }

    return ts.factory.createPropertyAssignment(name, value)
  })

  return createProp(
    'style',
    ts.factory.createJsxExpression(
      undefined,
      ts.factory.createObjectLiteralExpression(styles),
    ),
  )
}

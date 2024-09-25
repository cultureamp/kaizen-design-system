import ts from "typescript"

export const createProp = (
  name: string,
  value?: ts.JsxAttributeValue | undefined
): ts.JsxAttribute =>
  ts.factory.createJsxAttribute(ts.factory.createIdentifier(name), value)

export const createStringProp = (
  name: string,
  value: string
): ts.JsxAttribute => createProp(name, ts.factory.createStringLiteral(value))

import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst, TransformConfig } from "../utils"
import { transformFieldMessageStatusToVariant } from "./transformFieldMessageStatusToVariant"

const transformFieldMessage = (
  sourceFile: TransformConfig["sourceFile"]
): string =>
  transformSource({
    sourceFile,
    astTransformer: transformFieldMessageStatusToVariant,
    tagName: "FieldMessage",
  })

describe("transformFieldMessagestatusToVariant()", () => {
  it('replaces status="default" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <FieldMessage status="default" />'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <FieldMessage variant="default" />'
    )
    expect(transformFieldMessage(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces status="success" with variant="success"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <FieldMessage status="success" />'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <FieldMessage variant="success" />'
    )
    expect(transformFieldMessage(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces status="error" with variant="warning"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <FieldMessage status="error" />'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <FieldMessage variant="warning" />'
    )
    expect(transformFieldMessage(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces status="caution" with variant="cautionary"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <FieldMessage status="caution" />'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <FieldMessage variant="cautionary" />'
    )
    expect(transformFieldMessage(inputAst)).toEqual(printAst(outputAst))
  })
})

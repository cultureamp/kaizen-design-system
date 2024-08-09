import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst, TransformConfig } from "../utils"
import { transformEmptyStateIllustrationTypeToVariant } from "./transformEmptyStateIllustrationTypeToVariant"

const transformEmptyState = (
  sourceFile: TransformConfig["sourceFile"]
): string =>
  transformSource({
    sourceFile,
    astTransformer: transformEmptyStateIllustrationTypeToVariant,
    tagName: "EmptyState",
  })

describe("transformEmptyStateIllustrationTypeToVariant()", () => {
  it('replaces illustrationType="positive" with variant="success"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <EmptyState illustrationType="positive">Hello</EmptyState>'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <EmptyState variant="success">Hello</EmptyState>'
    )
    expect(transformEmptyState(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces illustrationType="informative" with variant="informative"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <EmptyState illustrationType="informative">Hello</EmptyState>'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <EmptyState variant="informative">Hello</EmptyState>'
    )
    expect(transformEmptyState(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces illustrationType="negative" with variant="warning"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <EmptyState illustrationType="negative">Hello</EmptyState>'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <EmptyState variant="warning">Hello</EmptyState>'
    )
    expect(transformEmptyState(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces illustrationType="action" with variant="warning"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <EmptyState illustrationType="action">Hello</EmptyState>'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <EmptyState variant="warning">Hello</EmptyState>'
    )
    expect(transformEmptyState(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces illustrationType="neutral" with variant="expert-advice"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <EmptyState illustrationType="neutral">Hello</EmptyState>'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <EmptyState variant="expert-advice">Hello</EmptyState>'
    )
    expect(transformEmptyState(inputAst)).toEqual(printAst(outputAst))
  })

  it("does not add variant if illustrationType was not defined", () => {
    const inputAst = parseJsx(
      "export const TestComponent = () => <EmptyState>Hello</EmptyState>"
    )
    const outputAst = parseJsx(
      "export const TestComponent = () => <EmptyState>Hello</EmptyState>"
    )
    expect(transformEmptyState(inputAst)).toEqual(printAst(outputAst))
  })
})

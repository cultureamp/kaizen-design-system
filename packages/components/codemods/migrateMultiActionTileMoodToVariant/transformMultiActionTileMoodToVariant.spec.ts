import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst, TransformConfig } from "../utils"
import { transformMultiActionTileMoodToVariant } from "./transformMultiActionTileMoodToVariant"

const transformMultiActionTile = (sourceFile: TransformConfig["sourceFile"]): string =>
  transformSource({
    sourceFile,
    astTransformer: transformMultiActionTileMoodToVariant,
    tagName: "MultiActionTile",
  })

describe("transformMultiActionTileMoodToVariant()", () => {
  it('replaces mood="positive" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile mood="positive">Hello</MultiActionTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile variant="default">Hello</MultiActionTile>',
    )
    expect(transformMultiActionTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="informative" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile mood="informative">Hello</MultiActionTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile variant="default">Hello</MultiActionTile>',
    )
    expect(transformMultiActionTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="cautionary" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile mood="cautionary">Hello</MultiActionTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile variant="default">Hello</MultiActionTile>',
    )
    expect(transformMultiActionTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="assertive" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile mood="assertive">Hello</MultiActionTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile variant="default">Hello</MultiActionTile>',
    )
    expect(transformMultiActionTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="negative" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile mood="negative">Hello</MultiActionTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile variant="default">Hello</MultiActionTile>',
    )
    expect(transformMultiActionTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="prominent" with variant="expert-advice"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile mood="prominent">Hello</MultiActionTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <MultiActionTile variant="expert-advice">Hello</MultiActionTile>',
    )
    expect(transformMultiActionTile(inputAst)).toEqual(printAst(outputAst))
  })

  it("does not add variant if mood was not defined", () => {
    const inputAst = parseJsx(
      "export const TestComponent = () => <MultiActionTile>Hello</MultiActionTile>",
    )
    const outputAst = parseJsx(
      "export const TestComponent = () => <MultiActionTile>Hello</MultiActionTile>",
    )
    expect(transformMultiActionTile(inputAst)).toEqual(printAst(outputAst))
  })
})

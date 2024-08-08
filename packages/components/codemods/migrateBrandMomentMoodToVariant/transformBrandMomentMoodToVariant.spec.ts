import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst, TransformConfig } from "../utils"
import { transformBrandMomentMoodToVariant } from "./transformBrandMomentMoodToVariant"

const transformBrandMoment = (
  sourceFile: TransformConfig["sourceFile"]
): string =>
  transformSource({
    sourceFile,
    astTransformer: transformBrandMomentMoodToVariant,
    importAlias: "BrandMoment",
  })

describe("transformBrandMomentMoodToVariant()", () => {
  it('replaces mood="informative" with variant="informative"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment mood="informative" />'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment variant="informative" />'
    )
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="positive" with variant="success"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment mood="positive" />'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment variant="success" />'
    )
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="negative" with variant="warning"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment mood="negative" />'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment variant="warning" />'
    )
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })

  it("handles multiple attributes and replace only variant", () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment mood="negative" id="123" />'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment variant="warning" id="123" />'
    )
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })

  it("transforms multiple components", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => (
        <div>
          <BrandMoment mood="positive" />
          <BrandMoment mood="negative" />
        </div>
      )
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => (
        <div>
          <BrandMoment variant="success" />
          <BrandMoment variant="warning" />
        </div>
      )
    `)
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })

  it("transforms arbitrary braces", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => (
        <div>
          <BrandMoment mood={"positive"} />
          <BrandMoment mood={'positive'} />
          <BrandMoment mood={\`positive\`} />
        </div>
      )
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => (
        <div>
          <BrandMoment variant="success" />
          <BrandMoment variant="success" />
          <BrandMoment variant="success" />
        </div>
      )
    `)
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })

  it("does not add new prop if new prop already exists", () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment variant="success" />'
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment variant="success" />'
    )
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })

  it("does not modify old prop using variables", () => {
    const inputAst = parseJsx(
      "export const TestComponent = () => <BrandMoment mood={var} />"
    )
    const outputAst = parseJsx(
      "export const TestComponent = () => <BrandMoment mood={var} />"
    )
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })
})

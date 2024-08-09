import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst } from "../utils"
import { transformGuidanceBlockVariantProp } from "./transformGuidanceBlockVariantProp"

describe("transformGuidanceBlockVariantProp", () => {
  it("removes all instances of `positive`, `negative`, `informative`, `cautionary`, `assertive`", () => {
    const inputAst = parseJsx(`
      const TestComponent = () => <GuidanceBlock variant="positive" />
      const TestComponent = () => <GuidanceBlock variant="negative" />
      const TestComponent = () => <GuidanceBlock variant="informative" />
      const TestComponent = () => <GuidanceBlock variant="cautionary" />
      const TestComponent = () => <GuidanceBlock variant="assertive" />
    `)
    const outputAst = parseJsx(`
      const TestComponent = () => <GuidanceBlock />
      const TestComponent = () => <GuidanceBlock />
      const TestComponent = () => <GuidanceBlock />
      const TestComponent = () => <GuidanceBlock />
      const TestComponent = () => <GuidanceBlock />
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformGuidanceBlockVariantProp,
      importAlias: "GuidanceBlock",
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('replaces variant="expert-advice" with variant="prominent"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <GuidanceBlock variant="expert-advice" />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <GuidanceBlock variant="prominent" />
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformGuidanceBlockVariantProp,
      importAlias: "GuidanceBlock",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("handles multiple attributes and replace only variant", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <GuidanceBlock variant="positive" id="123" />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <GuidanceBlock id="123" />
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformGuidanceBlockVariantProp,
      importAlias: "GuidanceBlock",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("handles nested GuidanceBlock components", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><GuidanceBlock variant="positive" id="123" /></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><GuidanceBlock id="123" /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformGuidanceBlockVariantProp,
      importAlias: "GuidanceBlock",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms multiple GuidanceBlock", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><GuidanceBlock variant="positive" /><GuidanceBlock variant="positive" /></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><GuidanceBlock /><GuidanceBlock /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformGuidanceBlockVariantProp,
      importAlias: "GuidanceBlock",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms GuidanceBlock with arbitrary braces", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><GuidanceBlock variant={"informative"} /><GuidanceBlock variant={'assertive'} /><GuidanceBlock variant={\`expert-advice\`} /></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><GuidanceBlock /><GuidanceBlock /><GuidanceBlock variant="prominent" /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformGuidanceBlockVariantProp,
      importAlias: "GuidanceBlock",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("won't modify variants usings variables", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><GuidanceBlock variant={wellVariable} /></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><GuidanceBlock variant={wellVariable} /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformGuidanceBlockVariantProp,
      importAlias: "GuidanceBlock",
    })
    expect(transformed).toBe(printAst(outputAst))
  })
})

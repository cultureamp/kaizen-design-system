import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst } from "../utils"
import { transformWellVariantToColor } from "./transformWellVariantToColor"

describe("transformWellVariantToColor", () => {
  it('replaces variant="default" with color="gray"', () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well variant="default">Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well color="gray">Test</Well>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('replaces variant="informative" with color="blue"', () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well variant="informative">Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well color="blue">Test</Well>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it('adds color="gray" if variant is not specified', () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well>Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well color="gray">Test</Well>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("handles multiple attributes and replace only variant", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well variant="informative" id="123">Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well color="blue" id="123">Test</Well>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("handles multiple attributes and add color if variant is not specified", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well id="123">Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well id="123" color="gray">Test</Well>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("handles nested Well components", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well id="123">Test</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well id="123" color="gray">Test</Well></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms multiple Wells", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well variant="informative">Test</Well><Well>Test 2</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well color="blue">Test</Well><Well color="gray">Test 2</Well></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms Well with arbitrary braces", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well variant={"informative"}>Test</Well><Well variant={'assertive'}>Test</Well><Well variant={\`positive\`}>Test</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well color="blue">Test</Well><Well color="orange">Test</Well><Well color="green">Test</Well></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("won't add color if color already exists", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well color="blue">Test</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well color="blue">Test</Well></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("won't modify variants usings variables", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well variant={wellVariable}>Test</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well variant={wellVariable}>Test</Well></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "Well",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms aliased Well components", () => {
    const inputAst = parseJsx(`
      import {Well as KaizenWell} from "@kaizen/components"
      export const TestComponent = () => <div><KaizenWell variant="informative">Test</KaizenWell></div>
    `)
    const outputAst = parseJsx(`
      import {Well as KaizenWell} from "@kaizen/components"
      export const TestComponent = () => <div><KaizenWell color="blue">Test</KaizenWell></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformWellVariantToColor,
      importAlias: "KaizenWell",
    })
    expect(transformed).toBe(printAst(outputAst))
  })
})

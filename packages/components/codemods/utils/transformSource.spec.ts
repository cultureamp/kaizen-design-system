import { parseJsx } from "../__tests__"
import { wellTransformer } from "../migrateWellVariantToColor/transformWell"
import { printAst } from "./printAst"
import { transformSource } from "./transformSource"

describe("transformSource", () => {
  it('should replace variant="default" with color="gray"', () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well variant="default">Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well color="gray">Test</Well>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('should replace variant="informative" with color="blue"', () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well variant="informative">Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well color="blue">Test</Well>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed).toBe(printAst(outputAst))
  })

  it('should add color="gray" if variant is not specified', () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well>Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well color="gray">Test</Well>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed).toBe(printAst(outputAst))
  })

  it("should handle multiple attributes and replace only variant", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well variant="informative" id="123">Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well color="blue" id="123">Test</Well>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed).toBe(printAst(outputAst))
  })

  it("should handle multiple attributes and add color if variant is not specified", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well id="123">Test</Well>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <Well id="123" color="gray">Test</Well>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed).toBe(printAst(outputAst))
  })

  it("should handle nested Well components", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well id="123">Test</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well id="123" color="gray">Test</Well></div>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed).toBe(printAst(outputAst))
  })

  it("should transform multiple Wells", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well variant="informative">Test</Well><Well>Test 2</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well color="blue">Test</Well><Well color="gray">Test 2</Well></div>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed).toBe(printAst(outputAst))
  })

  it("should transform Wells with arbitrary braces", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well variant={"informative"}>Test</Well><Well variant={'assertive'}>Test</Well><Well variant={\`positive\`}>Test</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well color="blue">Test</Well><Well color="orange">Test</Well><Well color="green">Test</Well></div>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed).toBe(printAst(outputAst))
  })

  it("should not add color if color already exists", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well color="blue">Test</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well color="blue">Test</Well></div>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed).toBe(printAst(outputAst))
  })

  it("should not modify variants usings variables", () => {
    const inputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well variant={wellVariable}>Test</Well></div>
    `)
    const outputAst = parseJsx(`
      import {Well} from "@kaizen/components"
      export const TestComponent = () => <div><Well variant={wellVariable}>Test</Well></div>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "Well")
    expect(transformed.trim()).toBe(printAst(outputAst).trim())
  })

  it("should transform aliased Well components", () => {
    const inputAst = parseJsx(`
      import {Well as KaizenWell} from "@kaizen/components"
      export const TestComponent = () => <div><KaizenWell variant="informative">Test</KaizenWell></div>
    `)
    const outputAst = parseJsx(`
      import {Well as KaizenWell} from "@kaizen/components"
      export const TestComponent = () => <div><KaizenWell color="blue">Test</KaizenWell></div>
    `)
    const transformed = transformSource(inputAst, wellTransformer, "KaizenWell")
    expect(transformed.trim()).toBe(printAst(outputAst).trim())
  })
})

import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst } from "../utils"
import { transformConfirmationModalMoodsToVariant } from "./transformConfirmationModalMoodsToVariant"

describe("transformConfirmationModalMoodsToVariant", () => {
  it('replaces mood="positive" with variant="success"', () => {
    const inputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <ConfirmationModal mood="positive"/>
    `)
    const outputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <ConfirmationModal variant="success"/>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformConfirmationModalMoodsToVariant,
      tagName: "ConfirmationModal",
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('replaces mood="negative" with variant="warning"', () => {
    const inputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <ConfirmationModal mood="negative"/>
    `)
    const outputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <ConfirmationModal variant="warning"/>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformConfirmationModalMoodsToVariant,
      tagName: "ConfirmationModal",
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it("handles multiple attributes and replace only variant", () => {
    const inputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <ConfirmationModal mood="negative" id="123"/>
    `)
    const outputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <ConfirmationModal variant="warning" id="123"/>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformConfirmationModalMoodsToVariant,
      tagName: "ConfirmationModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms multiple ConfirmationModals", () => {
    const inputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><ConfirmationModal mood="positive"/><ConfirmationModal  mood="negative"/></div>
    `)
    const outputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><ConfirmationModal variant="success"/><ConfirmationModal variant="warning"/></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformConfirmationModalMoodsToVariant,
      tagName: "ConfirmationModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms ConfirmationModal with arbitrary braces", () => {
    const inputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><ConfirmationModal mood={"positive"}/><ConfirmationModal mood={'assertive'}/><ConfirmationModal mood={\`positive\`}/></div>
    `)
    const outputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><ConfirmationModal variant="success"/><ConfirmationModal variant="cautionary"/><ConfirmationModal variant="success"/></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformConfirmationModalMoodsToVariant,
      tagName: "ConfirmationModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("won't add variant if variant already exists", () => {
    const inputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><ConfirmationModal variant="success"/></div>
    `)
    const outputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><ConfirmationModal variant="success"/></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformConfirmationModalMoodsToVariant,
      tagName: "ConfirmationModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("won't modify variants usings variables", () => {
    const inputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><ConfirmationModal variant={confirmationModalVariable}/></div>
    `)
    const outputAst = parseJsx(`
      import { ConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><ConfirmationModal variant={confirmationModalVariable}/></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformConfirmationModalMoodsToVariant,
      tagName: "ConfirmationModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms aliased ConfirmationModal components", () => {
    const inputAst = parseJsx(`
      import { ConfirmationModal as KaizenConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><KaizenConfirmationModal mood="positive" /></div>
    `)
    const outputAst = parseJsx(`
      import { ConfirmationModal as KaizenConfirmationModal } from "@kaizen/components"
      export const TestComponent = () => <div><KaizenConfirmationModal variant="success" /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformConfirmationModalMoodsToVariant,
      tagName: "KaizenConfirmationModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })
})

import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst } from "../utils"
import { removeInputEditModalMood } from "./removeInputEditModalMood"

describe("removeInputEditModalMood", () => {
  it("removed mood", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InputEditModal mood="positive"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InputEditModal />
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removeInputEditModalMood,
      tagName: "InputEditModal",
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it("handles multiple attributes and remove only mood", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InputEditModal mood="destructive" id="123"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InputEditModal id="123"/>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removeInputEditModalMood,
      tagName: "InputEditModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms multiple InputEditModals", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><InputEditModal mood="positive"/><InputEditModal mood="destructive"/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><InputEditModal /><InputEditModal /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removeInputEditModalMood,
      tagName: "InputEditModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms InputEditModal with arbitrary braces", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><InputEditModal mood={"positive"}/><InputEditModal mood={'assertive'}/><InputEditModal mood={\`positive\`}/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><InputEditModal /><InputEditModal /><InputEditModal /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removeInputEditModalMood,
      tagName: "InputEditModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("won't modify variants usings variables", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><InputEditModal mood={InputEditModalVariable}/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><InputEditModal /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removeInputEditModalMood,
      tagName: "InputEditModal",
    })
    expect(transformed).toBe(printAst(outputAst))
  })
})

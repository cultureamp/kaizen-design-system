import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst } from "../utils"
import { transformInlineNotificationTypeToVariant } from "./migrateInlineNotificationTypeToVariant"

describe("transformInlineNotificationTypeToVariant", () => {
  it('replaces type="positive" with variant="success"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="positive">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="success">Test</InlineNotification>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformInlineNotificationTypeToVariant,
      importAlias: "InlineNotification",
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('replaces type="informative" with variant="informative"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="informative">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="informative">Test</InlineNotification>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformInlineNotificationTypeToVariant,
      importAlias: "InlineNotification",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("handles multiple attributes and replace only type", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="informative" id="123">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="informative" id="123">Test</InlineNotification>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformInlineNotificationTypeToVariant,
      importAlias: "InlineNotification",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms multiple InlineNotifications", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><InlineNotification type="informative">Test</InlineNotification><InlineNotification type="positive">Test 2</InlineNotification></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><InlineNotification variant="informative">Test</InlineNotification><InlineNotification variant="success">Test 2</InlineNotification></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformInlineNotificationTypeToVariant,
      importAlias: "InlineNotification",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("transforms InlineNotification with arbitrary braces", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><InlineNotification type={"informative"}>Test</InlineNotification><InlineNotification type={'negative'}>Test</InlineNotification><InlineNotification type={\`positive\`}>Test</InlineNotification></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><InlineNotification variant="informative">Test</InlineNotification><InlineNotification variant="warning">Test</InlineNotification><InlineNotification variant="success">Test</InlineNotification></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformInlineNotificationTypeToVariant,
      importAlias: "InlineNotification",
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it("won't modify types usings variables", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><InlineNotification type={InlineNotificationVariable}>Test</InlineNotification></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><InlineNotification type={InlineNotificationVariable}>Test</InlineNotification></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformInlineNotificationTypeToVariant,
      importAlias: "InlineNotification",
    })
    expect(transformed).toBe(printAst(outputAst))
  })
})

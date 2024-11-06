import { parseJsx } from '../__tests__/utils'
import { transformSource, printAst } from '../utils'
import { transformNotificationTypeToVariant } from './migrateNotificationTypeToVariant'

describe('transformNotificationTypeToVariant', () => {
  it('replaces InlineNotifications type="positive" with variant="success"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="positive">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="success">Test</InlineNotification>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformNotificationTypeToVariant,
      tagName: 'InlineNotification',
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('replaces GlobalNotification type="positive" with variant="success"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <GlobalNotification type="positive">Test</GlobalNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <GlobalNotification variant="success">Test</GlobalNotification>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformNotificationTypeToVariant,
      tagName: 'GlobalNotification',
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('replaces ToastNotification type="positive" with variant="success"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <ToastNotification type="positive">Test</ToastNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <ToastNotification variant="success">Test</ToastNotification>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformNotificationTypeToVariant,
      tagName: 'ToastNotification',
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
      astTransformer: transformNotificationTypeToVariant,
      tagName: 'InlineNotification',
    })
    expect(transformed).toBe(printAst(outputAst))
  })
  it('replaces type="cautionary" with variant="cautionary"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="cautionary">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="cautionary">Test</InlineNotification>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformNotificationTypeToVariant,
      tagName: 'InlineNotification',
    })
    expect(transformed).toBe(printAst(outputAst))
  })
  it('replaces type="security" with variant="security"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="security">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="security">Test</InlineNotification>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformNotificationTypeToVariant,
      tagName: 'InlineNotification',
    })
    expect(transformed).toBe(printAst(outputAst))
  })
  it('replaces type="negative" with variant="warning"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="negative">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="warning">Test</InlineNotification>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: transformNotificationTypeToVariant,
      tagName: 'InlineNotification',
    })
    expect(transformed).toBe(printAst(outputAst))
  })
})

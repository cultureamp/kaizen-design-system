import { parseJsx } from '../__tests__/utils'
import { printAst, transformSource, type TransformSourceArgs } from '../utils'
import { transformNotificationTypeToVariant } from './migrateNotificationTypeToVariant'

const transformNotifications = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const tagsMap = new Map([
    [
      'GlobalNotification',
      {
        importModuleName: '@kaizen/components',
        tagName: 'GlobalNotification',
        originalName: 'GlobalNotification',
      },
    ],
    [
      'InlineNotification',
      {
        importModuleName: '@kaizen/components',
        tagName: 'InlineNotification',
        originalName: 'InlineNotification',
      },
    ],
    [
      'ToastNotification',
      {
        importModuleName: '@kaizen/components',
        tagName: 'ToastNotification',
        originalName: 'ToastNotification',
      },
    ],
  ])

  return transformSource({
    sourceFile,
    transformers: [transformNotificationTypeToVariant(tagsMap)],
  })
}

describe('transformNotificationTypeToVariant', () => {
  it('replaces InlineNotifications type="positive" with variant="success"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="positive">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="success">Test</InlineNotification>
    `)
    expect(transformNotifications(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces GlobalNotification type="positive" with variant="success"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <GlobalNotification type="positive">Test</GlobalNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <GlobalNotification variant="success">Test</GlobalNotification>
    `)
    expect(transformNotifications(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces ToastNotification type="positive" with variant="success"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <ToastNotification type="positive">Test</ToastNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <ToastNotification variant="success">Test</ToastNotification>
    `)
    expect(transformNotifications(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces type="informative" with variant="informative"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="informative">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="informative">Test</InlineNotification>
    `)
    expect(transformNotifications(inputAst)).toBe(printAst(outputAst))
  })
  it('replaces type="cautionary" with variant="cautionary"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="cautionary">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="cautionary">Test</InlineNotification>
    `)
    expect(transformNotifications(inputAst)).toBe(printAst(outputAst))
  })
  it('replaces type="security" with variant="security"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="security">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="security">Test</InlineNotification>
    `)
    expect(transformNotifications(inputAst)).toBe(printAst(outputAst))
  })
  it('replaces type="negative" with variant="warning"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification type="negative">Test</InlineNotification>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InlineNotification variant="warning">Test</InlineNotification>
    `)
    expect(transformNotifications(inputAst)).toBe(printAst(outputAst))
  })
})

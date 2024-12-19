import { parseJsx } from '../__tests__/utils'
import { printAst, transformSource, type TransformSourceArgs } from '../utils'
import { transformConfirmationModalMoodsToVariant } from './transformConfirmationModalMoodsToVariant'

const transformConfirmationModal = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const tagsMap = new Map([
    [
      'ConfirmationModal',
      {
        importModuleName: '@kaizen/components',
        tagName: 'ConfirmationModal',
        originalName: 'ConfirmationModal',
      },
    ],
  ])

  return transformSource({
    sourceFile,
    transformers: [transformConfirmationModalMoodsToVariant(tagsMap)],
  })
}

describe('transformConfirmationModalMoodsToVariant()', () => {
  it('replaces mood="positive" with variant="success"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <ConfirmationModal mood="positive"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <ConfirmationModal variant="success"/>
    `)
    expect(transformConfirmationModal(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="negative" with variant="warning"', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <ConfirmationModal mood="negative"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <ConfirmationModal variant="warning"/>
    `)
    expect(transformConfirmationModal(inputAst)).toEqual(printAst(outputAst))
  })

  it('handles multiple attributes and replace only variant', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <ConfirmationModal mood="negative" id="123"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <ConfirmationModal variant="warning" id="123"/>
    `)
    expect(transformConfirmationModal(inputAst)).toBe(printAst(outputAst))
  })

  it('transforms multiple ConfirmationModals', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><ConfirmationModal mood="positive"/><ConfirmationModal  mood="negative"/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><ConfirmationModal variant="success"/><ConfirmationModal variant="warning"/></div>
    `)
    expect(transformConfirmationModal(inputAst)).toBe(printAst(outputAst))
  })

  it('transforms ConfirmationModal with arbitrary braces', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><ConfirmationModal mood={"positive"}/><ConfirmationModal mood={'assertive'}/><ConfirmationModal mood={\`positive\`}/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><ConfirmationModal variant="success"/><ConfirmationModal variant="cautionary"/><ConfirmationModal variant="success"/></div>
    `)
    expect(transformConfirmationModal(inputAst)).toBe(printAst(outputAst))
  })

  it("won't add variant if variant already exists", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><ConfirmationModal variant="success"/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><ConfirmationModal variant="success"/></div>
    `)
    expect(transformConfirmationModal(inputAst)).toBe(printAst(outputAst))
  })

  it("won't modify variants usings variables", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><ConfirmationModal variant={confirmationModalVariable}/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><ConfirmationModal variant={confirmationModalVariable}/></div>
    `)
    expect(transformConfirmationModal(inputAst)).toBe(printAst(outputAst))
  })
})

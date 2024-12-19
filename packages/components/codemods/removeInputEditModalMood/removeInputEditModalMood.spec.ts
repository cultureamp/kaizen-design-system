import { parseJsx } from '../__tests__/utils'
import { printAst, transformSource, type TransformSourceArgs } from '../utils'
import { removeInputEditModalMood } from './removeInputEditModalMood'

const transformInputEditModal = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const tagsMap = new Map([
    [
      'InputEditModal',
      {
        importModuleName: '@kaizen/components',
        tagName: 'InputEditModal',
        originalName: 'InputEditModal',
      },
    ],
  ])

  return transformSource({
    sourceFile,
    transformers: [removeInputEditModalMood(tagsMap)],
  })
}

describe('removeInputEditModalMood()', () => {
  it('removes mood', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InputEditModal mood="positive"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InputEditModal />
    `)
    expect(transformInputEditModal(inputAst)).toEqual(printAst(outputAst))
  })

  it('handles multiple attributes and remove only mood', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <InputEditModal mood="destructive" id="123"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <InputEditModal id="123"/>
    `)
    expect(transformInputEditModal(inputAst)).toBe(printAst(outputAst))
  })

  it('transforms multiple InputEditModals', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><InputEditModal mood="positive"/><InputEditModal mood="destructive"/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><InputEditModal /><InputEditModal /></div>
    `)
    expect(transformInputEditModal(inputAst)).toBe(printAst(outputAst))
  })
})

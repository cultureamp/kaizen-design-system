import { parseJsx } from '../__tests__/utils'
import { printAst, transformSource, type TransformSourceArgs } from '../utils'
import { removeProps } from './removeProps'

const testRemoveProps = (
  sourceFile: TransformSourceArgs['sourceFile'],
  propsToRemove: string[] = ['topping'],
): string => {
  const tagsMap = new Map([
    [
      'Pancakes',
      {
        importModuleName: '@kaizen/components',
        tagName: 'Pancakes',
        originalName: 'Pancakes',
      },
    ],
  ])

  return transformSource({
    sourceFile,
    transformers: [removeProps(propsToRemove)(tagsMap)],
  })
}

describe('removeProps()', () => {
  it('removes single specified prop', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Pancakes topping="butter" />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Pancakes />
    `)
    expect(testRemoveProps(inputAst)).toEqual(printAst(outputAst))
  })

  it('removes multiple specified props', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Pancakes topping="butter" fruit="blueberries" />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Pancakes />
    `)
    expect(testRemoveProps(inputAst, ['topping', 'fruit'])).toEqual(printAst(outputAst))
  })

  it('handles multiple attributes and removes only specified props', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Pancakes topping="jam" id="123"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Pancakes id="123"/>
    `)
    expect(testRemoveProps(inputAst)).toEqual(printAst(outputAst))
  })

  it('transforms multiple Pancakess', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><Pancakes topping="butter"/><Pancakes topping="jam"/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><Pancakes /><Pancakes /></div>
    `)
    expect(testRemoveProps(inputAst)).toEqual(printAst(outputAst))
  })
})

import { parseJsx } from '../__tests__/utils'
import { transformSource, printAst } from '../utils'
import { removeProps } from './removeProps'

describe('removeProps()', () => {
  it('removes single specified prop', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Pancakes topping="butter" />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Pancakes />
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removeProps(['topping']),
      tagName: 'Pancakes',
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('removes multiple specified props', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Pancakes topping="butter" fruit="blueberries" />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Pancakes />
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removeProps(['topping', 'fruit']),
      tagName: 'Pancakes',
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('handles multiple attributes and removes only specified props', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Pancakes topping="jam" id="123"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Pancakes id="123"/>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removeProps(['topping']),
      tagName: 'Pancakes',
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it('transforms multiple Pancakess', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><Pancakes topping="butter"/><Pancakes topping="jam"/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><Pancakes /><Pancakes /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removeProps(['topping']),
      tagName: 'Pancakes',
    })
    expect(transformed).toBe(printAst(outputAst))
  })
})

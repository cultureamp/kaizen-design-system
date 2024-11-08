import { parseJsx } from '../__tests__/utils'
import { transformSource, printAst } from '../utils'
import { removePopoverVariant } from './removePopoverVariant'

describe('removePopoverVariant()', () => {
  it('removes variant', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Popover variant="positive" />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Popover />
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removePopoverVariant,
      tagName: 'Popover',
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('removes customIcon', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Popover variant="positive" customIcon={<Icon />} />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Popover />
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removePopoverVariant,
      tagName: 'Popover',
    })
    expect(transformed).toEqual(printAst(outputAst))
  })

  it('handles multiple attributes and remove only variant', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Popover variant="negative" id="123"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Popover id="123"/>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removePopoverVariant,
      tagName: 'Popover',
    })
    expect(transformed).toBe(printAst(outputAst))
  })

  it('transforms multiple Popovers', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><Popover variant="positive"/><Popover variant="negative" customIcon={<Icon />}/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><Popover /><Popover /></div>
    `)
    const transformed = transformSource({
      sourceFile: inputAst,
      astTransformer: removePopoverVariant,
      tagName: 'Popover',
    })
    expect(transformed).toBe(printAst(outputAst))
  })
})

import { parseJsx } from '../__tests__/utils'
import { printAst, transformSource, type TransformSourceArgs } from '../utils'
import { removePopoverVariant } from './removePopoverVariant'

const transformPopover = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const tagsMap = new Map([
    [
      'Popover',
      {
        importModuleName: '@kaizen/components',
        tagName: 'Popover',
        originalName: 'Popover',
      },
    ],
  ])

  return transformSource({
    sourceFile,
    transformers: [removePopoverVariant(tagsMap)],
  })
}

describe('removePopoverVariant()', () => {
  it('removes variant', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Popover variant="positive" />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Popover />
    `)
    expect(transformPopover(inputAst)).toEqual(printAst(outputAst))
  })

  it('removes customIcon', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Popover variant="positive" customIcon={<Icon />} />
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Popover />
    `)
    expect(transformPopover(inputAst)).toEqual(printAst(outputAst))
  })

  it('handles multiple attributes and remove only variant', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <Popover variant="negative" id="123"/>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <Popover id="123"/>
    `)
    expect(transformPopover(inputAst)).toBe(printAst(outputAst))
  })

  it('transforms multiple Popovers', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => <div><Popover variant="positive"/><Popover variant="negative" customIcon={<Icon />}/></div>
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => <div><Popover /><Popover /></div>
    `)
    expect(transformPopover(inputAst)).toBe(printAst(outputAst))
  })
})

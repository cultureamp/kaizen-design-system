import { parseJsx } from '../__tests__/utils'
import { transformSource, printAst, TransformConfig } from '../utils'
import { migrateStringProp } from './migrateStringProp'

const transformTopping = (oldValue: string): string => {
  switch (oldValue) {
    case 'butter':
      return 'jam'
    default:
      return 'blueberries'
  }
}

const testMigrateStringProp = (sourceFile: TransformConfig['sourceFile']): string =>
  transformSource({
    sourceFile,
    astTransformer: migrateStringProp('toppingOld', 'toppingNew', transformTopping),
    tagName: 'Pancakes',
  })

describe('migrateStringProp()', () => {
  describe('replaces old prop name and value with new prop name and value', () => {
    it('applies to self closing elements', () => {
      const inputAst = parseJsx(
        'export const TestComponent = () => <Pancakes toppingOld="butter" />',
      )
      const outputAst = parseJsx('export const TestComponent = () => <Pancakes toppingNew="jam" />')
      expect(testMigrateStringProp(inputAst)).toEqual(printAst(outputAst))
    })

    it('applies to JSX opening elements', () => {
      const inputAst = parseJsx(
        'export const TestComponent = () => <Pancakes toppingOld="butter">Hello</Pancakes>',
      )
      const outputAst = parseJsx(
        'export const TestComponent = () => <Pancakes toppingNew="jam">Hello</Pancakes>',
      )
      expect(testMigrateStringProp(inputAst)).toEqual(printAst(outputAst))
    })
  })

  it('handles multiple attributes and replaces only the provided prop', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <Pancakes toppingOld="butter" id="123" />',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <Pancakes toppingNew="jam" id="123" />',
    )
    expect(testMigrateStringProp(inputAst)).toEqual(printAst(outputAst))
  })

  it('transforms multiple components', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => (
        <div>
          <Pancakes toppingOld="butter" />
          <Pancakes toppingOld="honey" />
        </div>
      )
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => (
        <div>
          <Pancakes toppingNew="jam" />
          <Pancakes toppingNew="blueberries" />
        </div>
      )
    `)
    expect(testMigrateStringProp(inputAst)).toEqual(printAst(outputAst))
  })

  it('transforms arbitrary braces', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => (
        <div>
          <Pancakes toppingOld={"butter"} />
          <Pancakes toppingOld={'butter'} />
          <Pancakes toppingOld={\`butter\`} />
        </div>
      )
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => (
        <div>
          <Pancakes toppingNew="jam" />
          <Pancakes toppingNew="jam" />
          <Pancakes toppingNew="jam" />
        </div>
      )
    `)
    expect(testMigrateStringProp(inputAst)).toEqual(printAst(outputAst))
  })

  it('does not add new prop if old prop is not defined', () => {
    const inputAst = parseJsx('export const TestComponent = () => <Pancakes />')
    const outputAst = parseJsx('export const TestComponent = () => <Pancakes />')
    expect(testMigrateStringProp(inputAst)).toEqual(printAst(outputAst))
  })

  it('does not add new prop if new prop already exists', () => {
    const inputAst = parseJsx('export const TestComponent = () => <Pancakes toppingNew="jam" />')
    const outputAst = parseJsx('export const TestComponent = () => <Pancakes toppingNew="jam" />')
    expect(testMigrateStringProp(inputAst)).toEqual(printAst(outputAst))
  })

  it('does not modify old prop using variables', () => {
    const inputAst = parseJsx('export const TestComponent = () => <Pancakes toppingOld={var} />')
    const outputAst = parseJsx('export const TestComponent = () => <Pancakes toppingOld={var} />')
    expect(testMigrateStringProp(inputAst)).toEqual(printAst(outputAst))
  })
})

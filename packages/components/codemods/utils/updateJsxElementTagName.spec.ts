import ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { updateJsxElementTagName, type ComponentRenameConfig } from './updateJsxElementTagName'

const componentRenameMap = new Map<string, ComponentRenameConfig>([
  [
    'Pancakes',
    {
      newName: 'Beer',
      fromModule: '@kaizen/components/next',
      toModule: '@kaizen/components',
    },
  ],
  ['Bart', { newName: 'Bender', fromModule: '@kaizen/components', toModule: '@kaizen/components' }],
  [
    'EatMyShorts',
    { newName: 'MeatBags', fromModule: '@kaizen/components', toModule: '@kaizen/components' },
  ],
])

describe('updateJsxElementTagName()', () => {
  const factory = ts.factory

  it('should ignore nodes not in componentMap', () => {
    const elem = factory.createJsxSelfClosingElement(
      factory.createIdentifier('Cowabunga'),
      undefined,
      factory.createJsxAttributes([]),
    )

    const result = updateJsxElementTagName(factory, elem, 'Cowabunga', componentRenameMap)

    expect(ts.isJsxSelfClosingElement(result)).toBe(true)
    expect((result.tagName as ts.Identifier).text).toBe('Cowabunga')
  })

  it('should update self closing tag', () => {
    const elem = factory.createJsxSelfClosingElement(
      factory.createIdentifier('Pancakes'),
      undefined,
      factory.createJsxAttributes([]),
    )

    const result = updateJsxElementTagName(factory, elem, 'Beer', componentRenameMap)

    expect(ts.isJsxSelfClosingElement(result)).toBe(true)
    expect((result.tagName as ts.Identifier).text).toBe('Beer')
  })

  it('should handle Component.SubComponent when in Component is found in componentMap', () => {
    const source = `<Bart.Shorts />`
    const sourceFile = parseJsx(source)
    const statement = sourceFile.statements[0] as ts.ExpressionStatement
    const elem = statement.expression as ts.JsxSelfClosingElement

    const result = updateJsxElementTagName(factory, elem, 'ignored', componentRenameMap)

    expect(ts.isJsxSelfClosingElement(result)).toBe(true)
    expect(ts.isPropertyAccessExpression(result.tagName)).toBe(true)

    const tagName = result.tagName as ts.PropertyAccessExpression
    expect((tagName.expression as ts.Identifier).text).toBe('Bender')
    expect(tagName.name.text).toBe('Shorts')
  })

  it('should ignore Component.SubComponent when in Component is not in componentMap', () => {
    const source = `<Not.Here />`
    const sourceFile = parseJsx(source)
    const statement = sourceFile.statements[0] as ts.ExpressionStatement
    const elem = statement.expression as ts.JsxSelfClosingElement

    const result = updateJsxElementTagName(factory, elem, 'ignored', componentRenameMap)

    expect(ts.isJsxSelfClosingElement(result)).toBe(true)
    expect(ts.isPropertyAccessExpression(result.tagName)).toBe(true)

    const tagName = result.tagName as ts.PropertyAccessExpression
    expect((tagName.expression as ts.Identifier).text).toBe('Not')
    expect(tagName.name.text).toBe('Here')
  })

  it('should update JSX opening element tag name', () => {
    const openingElement = factory.createJsxOpeningElement(
      factory.createIdentifier('Pancakes'),
      undefined,
      factory.createJsxAttributes([]),
    )

    const result = updateJsxElementTagName(factory, openingElement, 'Pizza', componentRenameMap)

    expect(ts.isJsxOpeningElement(result)).toBe(true)
    expect((result.tagName as ts.Identifier).text).toBe('Pizza')
  })

  it('should update JSX closing element tag name', () => {
    const closingElement = factory.createJsxClosingElement(factory.createIdentifier('EatMyShorts'))

    const result = updateJsxElementTagName(factory, closingElement, 'MeatBags', componentRenameMap)

    expect(ts.isJsxClosingElement(result)).toBe(true)
    expect((result.tagName as ts.Identifier).text).toBe('MeatBags')
  })

  it('should preserve attributes when updating JSX elements', () => {
    const attributes = factory.createJsxAttributes([
      factory.createJsxAttribute(
        factory.createIdentifier('className'),
        factory.createStringLiteral('test-class'),
      ),
    ])

    const element = factory.createJsxSelfClosingElement(
      factory.createIdentifier('Pancakes'),
      undefined,
      attributes,
    )

    const result = updateJsxElementTagName(factory, element, 'Pizza', componentRenameMap)

    expect(ts.isJsxSelfClosingElement(result)).toBe(true)
    expect((result.tagName as ts.Identifier).text).toBe('Pizza')
    expect((result as ts.JsxSelfClosingElement).attributes.properties.length).toBe(1)

    const attribute = (result as ts.JsxSelfClosingElement).attributes
      .properties[0] as ts.JsxAttribute
    expect((attribute.name as ts.Identifier).text).toBe('className')
    expect((attribute.initializer as ts.StringLiteral).text).toBe('test-class')
  })
})

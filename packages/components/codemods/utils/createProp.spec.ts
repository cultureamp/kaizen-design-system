import ts from 'typescript'
import { parseJsx } from '../__tests__/utils/parseJsx'
import { createStyleProp } from './createProp'
import { printAst } from './printAst'
import { transformSource, type TransformSourceArgs } from './transformSource'
import { updateJsxElementWithNewProps } from './updateJsxElementWithNewProps'

export const mockedTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => (rootNode) => {
  const visit = (node: ts.Node): ts.Node => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      if (node.tagName.getText() === 'Pancakes') {
        const newAttributes = node.attributes.properties.map((attr) => {
          if (ts.isJsxAttribute(attr)) {
            if (attr.name.getText() === 'replaceWithExistingValue') {
              return createStyleProp({ width: attr.initializer! })
            }

            if (attr.name.getText() === 'replaceWithStringValue') {
              return createStyleProp({ width: '100px' })
            }

            if (attr.name.getText() === 'replaceWithNumberValue') {
              return createStyleProp({ width: 100 })
            }
          }
          return attr
        })
        return updateJsxElementWithNewProps(node, newAttributes)
      }
    }
    return ts.visitEachChild(node, visit, context)
  }
  return ts.visitNode(rootNode, visit) as ts.SourceFile
}

const testCreateStyleProp = (sourceFile: TransformSourceArgs['sourceFile']): string =>
  transformSource({
    sourceFile,
    transformers: [mockedTransformer],
  })

describe('createStyleProp()', () => {
  it('creates a style prop with a string value', () => {
    const inputAst = parseJsx('<Pancakes replaceWithStringValue />')
    const outputAst = parseJsx('<Pancakes style={{ width: "100px" }} />')
    expect(testCreateStyleProp(inputAst)).toEqual(printAst(outputAst))
  })

  it('creates a style prop with a number value', () => {
    const inputAst = parseJsx('<Pancakes replaceWithNumberValue />')
    const outputAst = parseJsx('<Pancakes style={{ width: 100 }} />')
    expect(testCreateStyleProp(inputAst)).toEqual(printAst(outputAst))
  })

  it('creates a style prop with a pre-existing value', () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => (
        <>
          <Pancakes replaceWithExistingValue="20px" />
          <Pancakes replaceWithExistingValue={100} />
          <Pancakes replaceWithExistingValue={variable} />
          <Pancakes replaceWithExistingValue={variable.nested} />
        </>
      )
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => (
        <>
          <Pancakes style={{ width: "20px" }} />
          <Pancakes style={{ width: 100 }} />
          <Pancakes style={{ width: variable }} />
          <Pancakes style={{ width: variable.nested }} />
        </>
      )
    `)
    expect(testCreateStyleProp(inputAst)).toEqual(printAst(outputAst))
  })
})

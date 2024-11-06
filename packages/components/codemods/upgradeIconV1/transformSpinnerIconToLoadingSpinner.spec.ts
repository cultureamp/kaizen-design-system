import ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { printAst } from '../utils'
import { transformSpinnerIconToLoadingSpinner } from './transformSpinnerIconToLoadingSpinner'

export const mockedTransformer =
  (alias?: string) =>
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        return transformSpinnerIconToLoadingSpinner(node, alias)
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

const transformInput = (sourceFile: ts.SourceFile, alias?: string): string => {
  const result = ts.transform(sourceFile, [mockedTransformer(alias)])
  const transformedSource = result.transformed[0] as ts.SourceFile
  return printAst(transformedSource)
}

describe('transformSpinnerIconToLoadingSpinner()', () => {
  it('replaces SpinnerIcon with LoadingSpinner and adds size and accessibilityLabel', () => {
    const inputAst = parseJsx('<SpinnerIcon />')
    const outputAst = parseJsx(
      '<LoadingSpinner size="xs" accessibilityLabel="Loading" />',
    )
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  it('uses alias if it is defined', () => {
    const inputAst = parseJsx('<SpinnerIcon />')
    const outputAst = parseJsx(
      '<KzLoadingSpinner size="xs" accessibilityLabel="Loading" />',
    )
    expect(transformInput(inputAst, 'KzLoadingSpinner')).toEqual(
      printAst(outputAst),
    )
  })

  describe('transform existing props', () => {
    it('removes role and changes aria-label to accessibilityLabel or fallback', () => {
      const inputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <SpinnerIcon role="presentation" />
              <SpinnerIcon role="img" aria-label="I am loading" />
            </>
          )
        `)
      const outputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <LoadingSpinner size="xs" accessibilityLabel="Loading" />
              <LoadingSpinner size="xs" accessibilityLabel="I am loading" />
            </>
          )
        `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('leaves classNameOverride as is', () => {
      const inputAst = parseJsx('<SpinnerIcon classNameOverride="mt-16" />')
      const outputAst = parseJsx(
        '<LoadingSpinner size="xs" accessibilityLabel="Loading" classNameOverride="mt-16" />',
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('removes viewBox', () => {
      const inputAst = parseJsx('<SpinnerIcon viewBox="0 0 100 100" />')
      const outputAst = parseJsx(
        '<LoadingSpinner size="xs" accessibilityLabel="Loading" />',
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })
  })
})

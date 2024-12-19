import ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { printAst } from '../utils'
import { transformV1Buttons } from './transformV1Buttons'

export const mockedTransformer =
  (kaioComponentName: string, alias?: string) =>
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxSelfClosingElement(node)) {
        return transformV1Buttons(node, kaioComponentName, alias)
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

const transformInput = (
  sourceFile: ts.SourceFile,
  kaioComponentName: string = 'Button',
  alias?: string,
): string => {
  const result = ts.transform(sourceFile, [mockedTransformer(kaioComponentName, alias)])
  const transformedSource = result.transformed[0] as ts.SourceFile
  return printAst(transformedSource)
}

describe('transformV1Buttons()', () => {
  it('changes label to children', () => {
    const inputAst = parseJsx('<KzButton label="Pancakes" />')
    const outputAst = parseJsx('<Button>Pancakes</Button>')
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces IconButton with Button and changes label to children and adds hasHiddenLabel', () => {
    const inputAst = parseJsx('<KzIconButton icon={icon} label="Pancakes" />')
    const outputAst = parseJsx('<Button icon={icon} hasHiddenLabel>Pancakes</Button>')
    expect(transformInput(inputAst, 'IconButton')).toEqual(printAst(outputAst))
  })

  it('uses alias if it is defined', () => {
    const inputAst = parseJsx('<KzButton label="Pancakes" />')
    const outputAst = parseJsx('<ButtonAlias>Pancakes</ButtonAlias>')
    expect(transformInput(inputAst, 'Button', 'ButtonAlias')).toEqual(printAst(outputAst))
  })

  describe('transform existing props', () => {
    it('changes onClick to onPress', () => {
      const inputAst = parseJsx('<KzButton label="Pancakes" onClick={handleClick} />')
      const outputAst = parseJsx('<Button onPress={handleClick}>Pancakes</Button>')
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes reversed to isReversed', () => {
      const inputAst = parseJsx(`
        <>
          <KzButton label="Pancakes" reversed />
          <KzButton label="Pancakes" reversed={false} />
        </>
      `)
      const outputAst = parseJsx(`
        <>
          <Button isReversed>Pancakes</Button>
          <Button isReversed={false}>Pancakes</Button>
        </>
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes classNameOverride to className', () => {
      const inputAst = parseJsx('<KzButton label="Pancakes" classNameOverride="hello" />')
      const outputAst = parseJsx('<Button className="hello">Pancakes</Button>')
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes data-automation-id to data-testid', () => {
      const inputAst = parseJsx('<KzButton label="Pancakes" data-automation-id="pancakes" />')
      const outputAst = parseJsx('<Button data-testid="pancakes">Pancakes</Button>')
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes disabled to isDisabled', () => {
      const inputAst = parseJsx(`
        <>
          <KzButton label="Pancakes" disabled />
          <KzButton label="Pancakes" disabled={false} />
        </>
      `)
      const outputAst = parseJsx(`
        <>
          <Button isDisabled>Pancakes</Button>
          <Button isDisabled={false}>Pancakes</Button>
        </>
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes newTabAndIUnderstandTheAccessibilityImplications to target="_blank" and rel="noopener noreferrer"', () => {
      const inputAst = parseJsx(
        '<KzButton label="Pancakes" newTabAndIUnderstandTheAccessibilityImplications />',
      )
      const outputAst = parseJsx(
        '<Button target="_blank" rel="noopener noreferrer">Pancakes</Button>',
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    // @todo: Update when we know what to change variants to
    // describe('transform variant', () => {
    //   it('changes default (undefined) to TBC', () => {
    //     const inputAst = parseJsx('<KzButton label="Pancakes" />')
    //     const outputAst = parseJsx('<Button variant="TBC">Pancakes</Button>')
    //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    //   })

    //   it('changes primary to TBC', () => {
    //     const inputAst = parseJsx('<KzButton label="Pancakes" primary />')
    //     const outputAst = parseJsx('<Button variant="TBC">Pancakes</Button>')
    //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    //   })

    //   it('changes secondary to TBC', () => {
    //     const inputAst = parseJsx('<KzButton label="Pancakes" secondary />')
    //     const outputAst = parseJsx('<Button variant="TBC">Pancakes</Button>')
    //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    //   })

    //   it('changes destructive to TBC', () => {
    //     const inputAst = parseJsx('<KzButton label="Pancakes" destructive />')
    //     const outputAst = parseJsx('<Button variant="TBC">Pancakes</Button>')
    //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    //   })

    //   it('changes secondary destructive to TBC', () => {
    //     const inputAst = parseJsx('<KzButton label="Pancakes" secondary destructive />')
    //     const outputAst = parseJsx('<Button variant="TBC">Pancakes</Button>')
    //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    //   })
    // })

    // @todo: Update when we know what to change sizes to
    // describe('transform size', () => {
    //   it('changes default (undefined) to TBC', () => {
    //     const inputAst = parseJsx('<KzButton label="Pancakes" />')
    //     const outputAst = parseJsx('<Button size="TBC">Pancakes</Button>')
    //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    //   })

    //   it('changes small to TBC', () => {
    //     const inputAst = parseJsx('<KzButton label="Pancakes" size="small" />')
    //     const outputAst = parseJsx('<Button size="TBC">Pancakes</Button>')
    //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    //   })

    //   it('changes regular to TBC', () => {
    //     const inputAst = parseJsx('<KzButton label="Pancakes" size="regular" />')
    //     const outputAst = parseJsx('<Button size="TBC">Pancakes</Button>')
    //     expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    //   })
    // })
  })
})

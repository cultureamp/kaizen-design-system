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
    const inputAst = parseJsx('<Button label="Pancakes" />')
    const outputAst = parseJsx('<Button size="large">Pancakes</Button>')
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces IconButton with Button and changes label to children and adds hasHiddenLabel', () => {
    const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" />')
    const outputAst = parseJsx('<Button icon={icon} size="large" hasHiddenLabel>Pancakes</Button>')
    expect(transformInput(inputAst, 'IconButton')).toEqual(printAst(outputAst))
  })

  it('uses alias if it is defined', () => {
    const inputAst = parseJsx('<Button label="Pancakes" />')
    const outputAst = parseJsx('<ButtonAlias size="large">Pancakes</ButtonAlias>')
    expect(transformInput(inputAst, 'Button', 'ButtonAlias')).toEqual(printAst(outputAst))
  })

  describe('transform existing props', () => {
    it('changes onClick to onPress', () => {
      const inputAst = parseJsx('<Button label="Pancakes" onClick={handleClick} />')
      const outputAst = parseJsx('<Button onPress={handleClick} size="large">Pancakes</Button>')
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes reversed to isReversed', () => {
      const inputAst = parseJsx(`
        <>
          <Button label="Pancakes" reversed />
          <Button label="Pancakes" reversed={false} />
        </>
      `)
      const outputAst = parseJsx(`
        <>
          <Button isReversed size="large">Pancakes</Button>
          <Button isReversed={false} size="large">Pancakes</Button>
        </>
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes classNameOverride to className', () => {
      const inputAst = parseJsx('<Button label="Pancakes" classNameOverride="hello" />')
      const outputAst = parseJsx('<Button className="hello" size="large">Pancakes</Button>')
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes data-automation-id to data-testid', () => {
      const inputAst = parseJsx('<Button label="Pancakes" data-automation-id="pancakes" />')
      const outputAst = parseJsx('<Button data-testid="pancakes" size="large">Pancakes</Button>')
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes disabled to isDisabled', () => {
      const inputAst = parseJsx(`
        <>
          <Button label="Pancakes" disabled />
          <Button label="Pancakes" disabled={false} />
        </>
      `)
      const outputAst = parseJsx(`
        <>
          <Button isDisabled size="large">Pancakes</Button>
          <Button isDisabled={false} size="large">Pancakes</Button>
        </>
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes newTabAndIUnderstandTheAccessibilityImplications to target="_blank" and rel="noopener noreferrer"', () => {
      const inputAst = parseJsx(
        '<Button label="Pancakes" newTabAndIUnderstandTheAccessibilityImplications />',
      )
      const outputAst = parseJsx(
        '<Button target="_blank" rel="noopener noreferrer" size="large">Pancakes</Button>',
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    describe('transform variant', () => {
      it('changes default (undefined) for Button to variant secondary', () => {
        const inputAst = parseJsx('<Button label="Pancakes" />')
        const outputAst = parseJsx('<Button variant="secondary" size="large">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes default (undefined) for IconButton to variant tertiary', () => {
        const inputAst = parseJsx('<Button label="Pancakes" />')
        const outputAst = parseJsx('<Button variant="tertiary" size="large">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes primary to variant primary', () => {
        const inputAst = parseJsx('<Button label="Pancakes" primary />')
        const outputAst = parseJsx('<Button variant="primary" size="large">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes secondary to variant tertiary', () => {
        const inputAst = parseJsx('<Button label="Pancakes" secondary />')
        const outputAst = parseJsx('<Button variant="tertiary" size="large">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('removes destructive', () => {
        const inputAst = parseJsx(`
          <>
            <Button label="Pancakes" destructive />
            <Button label="Pancakes" primary destructive />
            <Button label="Pancakes" secondary destructive />
          </>
        `)
        const outputAst = parseJsx(`
          <>
            <Button variant="secondary" size="large">Pancakes</Button>
            <Button variant="primary" size="large">Pancakes</Button>
            <Button variant="secondary" size="large">Pancakes</Button>
          </>
        `)
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })
    })

    describe('transform size', () => {
      it('changes default (undefined) to large', () => {
        const inputAst = parseJsx('<Button label="Pancakes" />')
        const outputAst = parseJsx('<Button size="large">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes small to medium', () => {
        const inputAst = parseJsx('<Button label="Pancakes" size="small" />')
        const outputAst = parseJsx('<Button size="medium">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes regular to large', () => {
        const inputAst = parseJsx('<Button label="Pancakes" size="regular" />')
        const outputAst = parseJsx('<Button size="large">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('does not change a non-string value', () => {
        const inputAst = parseJsx('<Button label="Pancakes" size={size} />')
        const outputAst = parseJsx('<Button size={size}>Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })
    })
  })
})

import ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { createJsxElementWithChildren, printAst } from '../utils'
import { transformV1ButtonAttributes } from './transformV1ButtonAttributes'

export const mockedTransformer =
  (kaioComponentName: string) =>
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxSelfClosingElement(node)) {
        const { targetComponentName, newAttributes, childrenValue } = transformV1ButtonAttributes(
          node,
          kaioComponentName,
        )
        return createJsxElementWithChildren(targetComponentName, newAttributes, childrenValue)
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

const transformInput = (
  sourceFile: ts.SourceFile,
  kaioComponentName: string = 'Button',
): string => {
  const result = ts.transform(sourceFile, [mockedTransformer(kaioComponentName)])
  const transformedSource = result.transformed[0] as ts.SourceFile
  return printAst(transformedSource)
}

describe('transformV1ButtonAttributes()', () => {
  it('changes label to children', () => {
    const inputAst = parseJsx('<Button label="Pancakes" />')
    const outputAst = parseJsx('<Button variant="secondary" size="large">Pancakes</Button>')
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces IconButton with Button and changes label to children and adds hasHiddenLabel', () => {
    const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" />')
    const outputAst = parseJsx(
      '<Button icon={icon} variant="tertiary" size="large" hasHiddenLabel>Pancakes</Button>',
    )
    expect(transformInput(inputAst, 'IconButton')).toEqual(printAst(outputAst))
  })

  it('replaces V1 Buttons with LinkButton if href exists', () => {
    const inputAst = parseJsx('<Button label="Pancakes" href="#" />')
    const outputAst = parseJsx(
      '<LinkButton href="#" variant="secondary" size="large">Pancakes</LinkButton>',
    )
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces V1 Buttons with LinkButton if component prop exists', () => {
    const inputAst = parseJsx('<Button label="Pancakes" component={Component} />')
    const outputAst = parseJsx(
      '<LinkButton component={Component} variant="secondary" size="large">Pancakes</LinkButton>',
    )
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  describe('transform existing props', () => {
    it('changes onClick to onPress', () => {
      const inputAst = parseJsx('<Button label="Pancakes" onClick={handleClick} />')
      const outputAst = parseJsx(
        '<Button onPress={handleClick} variant="secondary" size="large">Pancakes</Button>',
      )
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
          <Button isReversed variant="secondary" size="large">Pancakes</Button>
          <Button isReversed={false} variant="secondary" size="large">Pancakes</Button>
        </>
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes classNameOverride to className', () => {
      const inputAst = parseJsx('<Button label="Pancakes" classNameOverride="hello" />')
      const outputAst = parseJsx(
        '<Button className="hello" variant="secondary" size="large">Pancakes</Button>',
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes data-automation-id to data-testid', () => {
      const inputAst = parseJsx('<Button label="Pancakes" data-automation-id="pancakes" />')
      const outputAst = parseJsx(
        '<Button data-testid="pancakes" variant="secondary" size="large">Pancakes</Button>',
      )
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
          <Button isDisabled variant="secondary" size="large">Pancakes</Button>
          <Button isDisabled={false} variant="secondary" size="large">Pancakes</Button>
        </>
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes newTabAndIUnderstandTheAccessibilityImplications to target="_blank" and rel="noopener noreferrer"', () => {
      const inputAst = parseJsx(
        '<Button label="Pancakes" newTabAndIUnderstandTheAccessibilityImplications />',
      )
      const outputAst = parseJsx(
        '<Button target="_blank" rel="noopener noreferrer" variant="secondary" size="large">Pancakes</Button>',
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
        const inputAst = parseJsx('<IconButton label="Pancakes" />')
        const outputAst = parseJsx(
          '<Button variant="tertiary" size="large" hasHiddenLabel>Pancakes</Button>',
        )
        expect(transformInput(inputAst, 'IconButton')).toEqual(printAst(outputAst))
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
            <Button variant="tertiary" size="large">Pancakes</Button>
          </>
        `)
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })
    })

    describe('transform size', () => {
      it('changes default (undefined) to large', () => {
        const inputAst = parseJsx('<Button label="Pancakes" />')
        const outputAst = parseJsx('<Button variant="secondary" size="large">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes small to medium', () => {
        const inputAst = parseJsx('<Button label="Pancakes" size="small" />')
        const outputAst = parseJsx('<Button size="medium" variant="secondary">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes regular to large', () => {
        const inputAst = parseJsx('<Button label="Pancakes" size="regular" />')
        const outputAst = parseJsx('<Button size="large" variant="secondary">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('does not change a non-string value', () => {
        const inputAst = parseJsx('<Button label="Pancakes" size={size} />')
        const outputAst = parseJsx('<Button size={size} variant="secondary">Pancakes</Button>')
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })
    })
  })
})

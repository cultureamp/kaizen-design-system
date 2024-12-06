import ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { printAst } from '../utils'
import { transformIconButtonToButton } from './transformIconButtonToButton'

export const mockedTransformer =
  (alias?: string) =>
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxSelfClosingElement(node)) {
        return transformIconButtonToButton(node, alias)
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

describe('transformIconButtonToButton()', () => {
  it('replaces IconButton with Button and changes label to children and adds hasHiddenLabel', () => {
    const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" />')
    const outputAst = parseJsx('<Button icon={icon} hasHiddenLabel>Pancakes</Button>')
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
  })

  it('uses alias if it is defined', () => {
    const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" />')
    const outputAst = parseJsx('<KzButton icon={icon} hasHiddenLabel>Pancakes</KzButton>')
    expect(transformInput(inputAst, 'KzButton')).toEqual(printAst(outputAst))
  })

  describe('transform existing props', () => {
    it('changes onClick to onPress', () => {
      const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" onClick={handleClick} />')
      const outputAst = parseJsx(
        '<Button icon={icon} onPress={handleClick} hasHiddenLabel>Pancakes</Button>',
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes reversed to isReversed', () => {
      const inputAst = parseJsx(`
        <>
          <IconButton icon={icon} label="Pancakes" reversed />
          <IconButton icon={icon} label="Pancakes" reversed={false} />
        </>
      `)
      const outputAst = parseJsx(`
        <>
          <Button icon={icon} isReversed hasHiddenLabel>Pancakes</Button>
          <Button icon={icon} isReversed={false} hasHiddenLabel>Pancakes</Button>
        </>
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes classNameOverride to className', () => {
      const inputAst = parseJsx(
        '<IconButton icon={icon} label="Pancakes" classNameOverride="hello" />',
      )
      const outputAst = parseJsx(
        '<Button icon={icon} className="hello" hasHiddenLabel>Pancakes</Button>',
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes data-automation-id to data-testid', () => {
      const inputAst = parseJsx(
        '<IconButton icon={icon} label="Pancakes" data-automation-id="pancakes" />',
      )
      const outputAst = parseJsx(
        '<Button icon={icon} data-testid="pancakes" hasHiddenLabel>Pancakes</Button>',
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes disabled to isDisabled', () => {
      const inputAst = parseJsx(`
        <>
          <IconButton icon={icon} label="Pancakes" disabled />
          <IconButton icon={icon} label="Pancakes" disabled={false} />
        </>
      `)
      const outputAst = parseJsx(`
        <>
          <Button icon={icon} isDisabled hasHiddenLabel>Pancakes</Button>
          <Button icon={icon} isDisabled={false} hasHiddenLabel>Pancakes</Button>
        </>
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it('changes newTabAndIUnderstandTheAccessibilityImplications to target="_blank" and rel="noopener noreferrer"', () => {
      const inputAst = parseJsx(
        '<IconButton icon={icon} label="Pancakes" newTabAndIUnderstandTheAccessibilityImplications />',
      )
      const outputAst = parseJsx(
        '<Button icon={icon} target="_blank" rel="noopener noreferrer" hasHiddenLabel>Pancakes</Button>',
      )
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    // @todo: Update when we know what to change variants to
    describe('transform variant', () => {
      it('changes default (undefined) to TBC', () => {
        const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" />')
        const outputAst = parseJsx(
          '<Button icon={icon} variant="TBC" hasHiddenLabel>Pancakes</Button>',
        )
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes primary to TBC', () => {
        const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" primary />')
        const outputAst = parseJsx(
          '<Button icon={icon} variant="TBC" hasHiddenLabel>Pancakes</Button>',
        )
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes secondary to TBC', () => {
        const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" secondary />')
        const outputAst = parseJsx(
          '<Button icon={icon} variant="TBC" hasHiddenLabel>Pancakes</Button>',
        )
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes destructive to TBC', () => {
        const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" destructive />')
        const outputAst = parseJsx(
          '<Button icon={icon} variant="TBC" hasHiddenLabel>Pancakes</Button>',
        )
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes secondary destructive to TBC', () => {
        const inputAst = parseJsx(
          '<IconButton icon={icon} label="Pancakes" secondary destructive />',
        )
        const outputAst = parseJsx(
          '<Button icon={icon} variant="TBC" hasHiddenLabel>Pancakes</Button>',
        )
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })
    })

    // @todo: Update when we know what to change sizes to
    describe('transform size', () => {
      it('changes default (undefined) to TBC', () => {
        const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" />')
        const outputAst = parseJsx(
          '<Button icon={icon} size="TBC" hasHiddenLabel>Pancakes</Button>',
        )
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes small to TBC', () => {
        const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" size="small" />')
        const outputAst = parseJsx(
          '<Button icon={icon} size="TBC" hasHiddenLabel>Pancakes</Button>',
        )
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })

      it('changes regular to TBC', () => {
        const inputAst = parseJsx('<IconButton icon={icon} label="Pancakes" size="regular" />')
        const outputAst = parseJsx(
          '<Button icon={icon} size="TBC" hasHiddenLabel>Pancakes</Button>',
        )
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })
    })
  })
})

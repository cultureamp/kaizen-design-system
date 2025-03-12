import ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { printAst } from '../utils'
import { transformActionsToButtonNext } from './transformActionsToButtonNext'

export const mockedTransformer =
  (kaioComponentName: string) =>
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxSelfClosingElement(node)) {
        const componentProps: ts.JsxAttributeLike[] = node.attributes.properties.reduce<
          ts.JsxAttributeLike[]
        >((guidanceBlockProps, prop) => {
          if (ts.isJsxAttribute(prop)) {
            const propName = prop.name.getText()
            const propValue = prop.initializer as ts.JsxExpression

            if (propName === 'actions') {
              // console.log('actions---found---')
              const transformedActions = transformActionsToButtonNext(
                propValue.getChildren()[1] as ts.ObjectLiteralExpression,
              )
              return [...guidanceBlockProps, ...transformedActions]
            }

            if (propName === 'secondaryDismiss') {
              return guidanceBlockProps
            }

            return [...guidanceBlockProps, prop]
            // any other conditional we might want
          }
          return [...guidanceBlockProps, prop]
        }, [])

        return ts.factory.createJsxSelfClosingElement(
          ts.factory.createIdentifier(kaioComponentName),
          undefined,
          ts.factory.createJsxAttributes(componentProps),
        )
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

const transformInput = (
  sourceFile: ts.SourceFile,
  kaioComponentName: string = 'GuidanceBlock',
): string => {
  const result = ts.transform(sourceFile, [mockedTransformer(kaioComponentName)])
  const transformedSource = result.transformed[0] as ts.SourceFile
  return printAst(transformedSource)
}

describe('transformActionsToButtonNext()', () => {
  it("transforms a primary and secondary actions into Button's", () => {
    const inputAst = parseJsx(`
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actions={{
          primary: {
            label: 'Primary action',
            onClick: () => alert('click 1'),
          },
          secondary: {
            label: 'Secondary action',
            onClick: () => alert('click 2'),
          },
        }}
        secondaryDismiss
      />`)
    const outputAst = parseJsx(`
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large">Primary action</Button><Button onPress={() => alert('click 2')}variant="tertiary" size="large">Secondary action</Button></>}
        />
      `)

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
  it("transforms a primary and secondary link actions into LinkButton's", () => {
    const inputAst = parseJsx(`
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actions={{
          primary: {
            label: 'Primary action',
            href: "#primary"
          },
          secondary: {
            label: 'Secondary action',
            href: "#secondary"
          },
        }}
        secondaryDismiss
      />`)
    const outputAst = parseJsx(`
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actionsSlot={<><LinkButton href="#primary" variant="secondary" size="large">Primary action</LinkButton><LinkButton href="#secondary" variant="tertiary" size="large">Secondary action</LinkButton></>}
        />
      `)

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
  it('transforms a primary and secondary link and onClick actions into expected components', () => {
    const inputAst = parseJsx(`
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actions={{
          primary: {
            label: 'Primary action',
            onClick: () => alert('click 1'),
          },
          secondary: {
            label: 'Secondary action',
            href: "#secondary"
          },
        }}
        secondaryDismiss
      />`)
    const outputAst = parseJsx(`
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large">Primary action</Button><LinkButton href="#secondary" variant="tertiary" size="large">Secondary action</LinkButton></>}
        />
      `)

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
  it('transforms a primary actions with all v1 Button props to expected output', () => {
    const inputAst = parseJsx(`
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actions={{
          primary: {
            label: 'Learn more',
            onClick: () => alert('tada: 🎉'),
            tooltip: {
              text: 'Opens in a new tab',
              mood: 'cautionary',
            },
            badge: {
              text: 'New',
            },
            destructive: true,
            disabled: true,
            reversed: true,
            icon: <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />,
            iconPosition: 'end',
            newTabAndIUnderstandTheAccessibilityImplications: true,
            size: 'small',
            working: true,
            workingLabel: 'Loading...',
            workingLabelHidden: true,
            disableTabFocusAndIUnderstandTheAccessibilityImplications: true,
          },
        }}
        secondaryDismiss
      />`)
    const outputAst = parseJsx(`
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt=""/>}
          content={<div>Test</div>}
          actionsSlot={<><Button onPress={() => alert('tada: 🎉')} isDisabled={true} isReversed={true} target="_blank" rel="noopener noreferrer" size="medium" isPending={true} pendingLabel='Loading...' hasHiddenPendingLabel={true} variant="secondary">Learn more</Button></>}/>
        />
      `)

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
})

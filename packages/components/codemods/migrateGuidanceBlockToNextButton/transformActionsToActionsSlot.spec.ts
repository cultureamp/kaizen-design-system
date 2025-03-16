import ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { printAst } from '../utils'
import { transformActionsToButtonNext } from './transformActionsToActionsSlot'

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
              const transformedActions = transformActionsToButtonNext(
                propValue.getChildren()[1] as ts.ObjectLiteralExpression,
              )

              return transformedActions?.actionsSlotAttr
                ? [...guidanceBlockProps, transformedActions.actionsSlotAttr]
                : guidanceBlockProps
            }

            return [...guidanceBlockProps, prop]
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
  it('transforms button-like and link-like actions prop into a Button and LinkButton', () => {
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
  it('transforms a primary action with all v1 Button props to expected Button outputs', () => {
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
            disabled: hasCondition ? true : false,
            reversed: true,
            icon: <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />,
            iconPosition: 'end',
            size: 'small',
            working: true,
            workingLabel: 'Loading...',
            workingLabelHidden: true,
            disableTabFocusAndIUnderstandTheAccessibilityImplications: true,
            'data-custom-attr': 'custom-attr',
          },
        }}
      />`)
    const outputAst = parseJsx(`
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt=""/>}
          content={<div>Test</div>}
          actionsSlot={<><Button
              onPress={() => alert('tada: 🎉')}
              tooltip={{text: 'Opens in a new tab',mood: 'cautionary',}}
              badge={{ text: 'New', }}
              isDisabled={hasCondition ? true : false}
              isReversed
              icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational/>}
              iconPosition='end'
              size="medium"
              isPending pendingLabel='Loading...'
              hasHiddenPendingLabel
              data-custom-attr='custom-attr'
              variant="secondary"
            >Learn more</Button></>}/>
      `)

    expect(transformInput(inputAst).replace(/\n+/g, ' ').replace(/\s+/g, ' ')).toBe(
      printAst(outputAst).replace(/\n+/g, ' ').replace(/\s+/g, ' '),
    )
  })

  it('Passes custom data attributes and old props to be caught by type errors', () => {
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
            disabled: hasCondition ? true : false,
            reversed: true,
            icon: <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />,
            iconPosition: 'end',
            size: 'small',
            working: true,
            workingLabel: 'Loading...',
            workingLabelHidden: true,
            disableTabFocusAndIUnderstandTheAccessibilityImplications: true,
            'data-custom-attr': 'custom-attr',
          },
        }}
      />`)
    const outputAst = parseJsx(`
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt=""/>}
          content={<div>Test</div>}
          actionsSlot={<><Button
              onPress={() => alert('tada: 🎉')}
              tooltip={{text: 'Opens in a new tab',mood: 'cautionary',}}
              badge={{ text: 'New', }}
              isDisabled={hasCondition ? true : false}
              isReversed
              icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational/>}
              iconPosition='end'
              size="medium"
              isPending pendingLabel='Loading...'
              hasHiddenPendingLabel
              data-custom-attr='custom-attr'
              variant="secondary"
            >Learn more</Button></>}/>
      `)

    expect(transformInput(inputAst).replace(/\n+/g, ' ').replace(/\s+/g, ' ')).toBe(
      printAst(outputAst).replace(/\n+/g, ' ').replace(/\s+/g, ' '),
    )
  })
})

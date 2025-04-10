import ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { transformV1ButtonPropsToButtonOrLinkButton } from './transformV1ButtonPropsToButtonOrLinkButton'
import { printAst } from './'

const mockedTransformer =
  () =>
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxSelfClosingElement(node)) {
        const primaryAction = node.attributes.properties.find((prop) => {
          return prop?.name?.getText() === 'primaryAction'
        }) as ts.JsxAttribute

        if (primaryAction) {
          const primaryActionInitializer =
            primaryAction?.initializer?.getChildren()[1] as ts.ObjectLiteralExpression
          const ButtonOrLinkComponent =
            transformV1ButtonPropsToButtonOrLinkButton(primaryActionInitializer)
          const newAttr = ts.factory.createJsxAttribute(
            ts.factory.createIdentifier('primaryAction'),
            ts.factory.createJsxExpression(undefined, ButtonOrLinkComponent.component),
          )

          return ts.factory.createJsxSelfClosingElement(
            ts.factory.createIdentifier('DummyComponent'),
            undefined,
            ts.factory.createJsxAttributes([newAttr]),
          )
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

const transformInput = (sourceFile: ts.SourceFile): string => {
  const result = ts.transform(sourceFile, [mockedTransformer()])
  const transformedSource = result.transformed[0] as ts.SourceFile
  return printAst(transformedSource)
}

describe('transformV1ButtonPropsToButtonOrLinkButton()', () => {
  it('transforms V1 button-like props into a Button/next component', () => {
    const inputAst = parseJsx(`<DummyComponent primaryAction={{
      label: 'Learn more',
      onClick: () => console.log("hello world")
      destructive: true,
      disabled: false,
      reversed: true,
      size: 'small',
      working: true,
      workingLabel: 'Loading...',
      workingLabelHidden: true,
      disableTabFocusAndIUnderstandTheAccessibilityImplications: true,
      'data-automation-id': 'some-id',
      classNameOverride: styles.buttonClass,
    }} />`)

    const outputAst = parseJsx(
      `<DummyComponent primaryAction={<Button  onPress={() => console.log("hello world")} isDisabled={false} isReversed size="medium" isPending pendingLabel='Loading...' hasHiddenPendingLabel data-testid='some-id' className={styles.buttonClass} variant="secondary">Learn more</Button>} />`,
    )

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
  it('transforms V1 link-like props into a LinkButton component', () => {
    const inputAst = parseJsx(`<DummyComponent primaryAction={{
      label: 'Learn more',
      href: 'https://www.example.com',
      destructive: true,
      disabled: false,
      reversed: true,
      newTabAndIUnderstandTheAccessibilityImplications: true,
      size: 'small',
      working: true,
      workingLabel: 'Loading...',
      workingLabelHidden: true,
      disableTabFocusAndIUnderstandTheAccessibilityImplications: true,
    }} />`)

    const outputAst = parseJsx(
      `<DummyComponent primaryAction={<LinkButton href='https://www.example.com' isDisabled={false} isReversed target="_blank" rel="noopener noreferrer" size="medium" isPending pendingLabel='Loading...' hasHiddenPendingLabel variant="secondary">Learn more</LinkButton>} />`,
    )

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
  it('transforms component render props into a LinkButton component and keeps the component render props', () => {
    const inputAst = parseJsx(`<DummyComponent primaryAction={{
      label: 'Learn more',
      href: 'https://www.example.com',
      destructive: true,
      disabled: false,
      reversed: true,
      newTabAndIUnderstandTheAccessibilityImplications: true,
      size: 'small',
      working: true,
      workingLabel: 'Loading...',
      workingLabelHidden: true,
      disableTabFocusAndIUnderstandTheAccessibilityImplications: true,
      component: ({ children }) => <span>{children}</span>,
    }} />`)

    const outputAst = parseJsx(
      `<DummyComponent primaryAction={<LinkButton href='https://www.example.com' isDisabled={false} isReversed target="_blank" rel="noopener noreferrer" size="medium" isPending pendingLabel='Loading...' hasHiddenPendingLabel component={({ children }) => <span>{children}</span>} variant="secondary">Learn more</LinkButton>}/>`,
    )

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
  it('will create a large button if the size is undefined', () => {
    const inputAst = parseJsx(`<DummyComponent primaryAction={{
      label: 'Learn more',
      onClick: () => console.log("hello world")
    }}/>`)

    const outputAst = parseJsx(
      `<DummyComponent primaryAction={<Button onPress={() => console.log("hello world")} variant="secondary" size="large">Learn more</Button>}}
    />`,
    )

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })

  // This will allow for type feedback to the consumer
  it('passes tooltip and badge props into the created element', () => {
    const inputAst = parseJsx(`<DummyComponent primaryAction={{
      label: 'Learn more',
      onClick: () => console.log("hello world")
      size: 'small',
      classNameOverride: styles.buttonClass,
      tooltip: { text: 'Opens in a new tab', mood: 'cautionary' },
      badge: { text: 'New' },
    }}/>`)

    const outputAst = parseJsx(
      `<DummyComponent primaryAction={<Button onPress={() => console.log("hello world")} size="medium" className={styles.buttonClass} tooltip={{ text: 'Opens in a new tab', mood: 'cautionary' }} badge={{ text: 'New' }} variant="secondary">Learn more</Button>}}
    />`,
    )

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
  it('passes all data and native attributes into the created element', () => {
    const inputAst = parseJsx(`<DummyComponent primaryAction={{
        label: 'Learn more',
        onClick: () => console.log("hello world")
        size: 'small',
        classNameOverride: styles.buttonClass,
        'data-random-attribute': 'some-id',
        "aria-label": "some label",
        form: 'form-id',
      }}/>`)

    const outputAst = parseJsx(
      `<DummyComponent primaryAction={<Button onPress={() => console.log("hello world")} size="medium" className={styles.buttonClass}  data-random-attribute='some-id' aria-label="some label" form='form-id' variant="secondary">Learn more</Button>}}
      />`,
    )

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })

  it('transforms shorthand properties as expressions', () => {
    const inputAst = parseJsx(`<DummyComponent primaryAction={{
        label,
        onClick: () => console.log("hello world")
        size: 'small',
        classNameOverride: styles.buttonClass,
        badge: { text: 'New' },
        'data-random-attribute': 'some-id',
        "aria-label": "some label",
        form: 'form-id',
      }}/>`)

    const outputAst = parseJsx(
      `<DummyComponent primaryAction={<Button onPress={() => console.log("hello world")} size="medium" className={styles.buttonClass} badge={{ text: 'New' }} data-random-attribute='some-id' aria-label="some label" form='form-id' variant="secondary">{label}</Button>}}
      />`,
    )

    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
  it('transforms expressions correctly as children', () => {
    const inputAst = parseJsx(`
      <DummyComponent primaryAction={{
        label: intl.formatMessage({ id: "label.id", defaultMessage: "Label", { variableVal }),
        onClick: () => console.log("hello world")
        href: url,
        size: buttonSize,
        classNameOverride: styles.buttonClass,
        badge: { text: 'New' },
        'data-random-attribute': 'some-id',
        form: 'form-id',
      }}/>`)

    const outputAst = parseJsx(
      `<DummyComponent primaryAction={<LinkButton onPress={() => console.log("hello world")} href={url} size={buttonSize} className={styles.buttonClass} badge={{ text: 'New' }} data-random-attribute='some-id' form='form-id' variant="secondary">{intl.formatMessage({ id: "label.id", defaultMessage: "Label", { variableVal })}</LinkButton>}}
      />`,
    )
    expect(transformInput(inputAst)).toBe(printAst(outputAst))
  })
})

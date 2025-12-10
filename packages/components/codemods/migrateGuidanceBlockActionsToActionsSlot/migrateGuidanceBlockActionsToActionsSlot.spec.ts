import { parseJsx } from '../__tests__/utils'
import {
  getKaioTagNamesMapByComponentName,
  printAst,
  transformSource,
  type TransformSourceArgs,
} from '../utils'
import { migrateGuidanceBlockActionsToActionsSlot } from './migrateGuidanceBlockActionsToActionsSlot'

const transformGuidanceBlock = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const kaioTagNamesMap = getKaioTagNamesMapByComponentName(sourceFile, ['GuidanceBlock'])
  return transformSource({
    sourceFile,
    transformers: [migrateGuidanceBlockActionsToActionsSlot(kaioTagNamesMap!)],
  })
}

describe('migrateGuidanceBlockActionsToActionsSlot()', () => {
  describe('basic transformation', () => {
    it('imports Button and transforms all button-like actions prop into a Button component', () => {
      const inputAst = parseJsx(`
      import { GuidanceBlock } from "@kaizen/components"
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
      />`)
      const outputAst = parseJsx(`
      import { GuidanceBlock, Button, Icon } from "@kaizen/components"
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large" icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />} iconPosition="end">Primary action</Button><Button onPress={() => alert('click 2')} variant="tertiary" size="large">Secondary action</Button></>}
        />
      `)

      expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
    })

    it('imports and transforms all button-like and link-like actions prop into a Button and LinkButton', () => {
      const inputAst = parseJsx(`
      import { GuidanceBlock } from "@kaizen/components"
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
      import {GuidanceBlock, Button, LinkButton, Icon } from "@kaizen/components"
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large" icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />} iconPosition="end">Primary action</Button><LinkButton href="#secondary" variant="tertiary" size="large">Secondary action</LinkButton></>}
        />
      `)

      expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
    })

    it('does not redeclare imports if found', () => {
      const inputAst = parseJsx(`
      import { Button, GuidanceBlock } from "@kaizen/components"
      const MockLayout = () => (
      <>
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
        />
        <Button onPress={() => alert('page click 1')} variant="primary" size="large">Page button</Button>
      </>
      )`)
      const outputAst = parseJsx(`
      import { Button, GuidanceBlock, LinkButton, Icon } from "@kaizen/components"
      const MockLayout = () => (
      <>
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt="" />}
          content={<div>Test</div>}
          actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large" icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />} iconPosition="end">Primary action</Button><LinkButton href="#secondary" variant="tertiary" size="large">Secondary action</LinkButton></>}
        />
        <Button onPress={() => alert('page click 1')} variant="primary" size="large">Page button</Button>
      </>
      )`)

      expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
    })

    it('preserves custom icon components without adding Icon import', () => {
      const inputAst = parseJsx(`
          import { GuidanceBlock } from "@kaizen/components"
          <GuidanceBlock
            actions={{
              primary: {
                label: 'Action',
                onClick: () => {},
                icon: <MyCustomIcon />,
                iconPosition: 'end',
              },
            }}
          />`)
      const outputAst = parseJsx(`
          import { GuidanceBlock, Button } from "@kaizen/components"
          <GuidanceBlock
            actionsSlot={<><Button onPress={() => {}} icon={<MyCustomIcon />} iconPosition='end' variant="secondary" size="large">Action</Button></>}
          />
          `)

      expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
    })

    describe('arrow icon handling', () => {
      // When withActionButtonArrow not specified, add arrow icon actionsSlot secondary Button
      it('adds arrow icon to actionsSlot secondary Button when withActionButtonArrow is not explicitly set', () => {
        const inputAst = parseJsx(`
        import { GuidanceBlock, LinkButton } from "@kaizen/components"
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
        import { GuidanceBlock, LinkButton, Button, Icon } from "@kaizen/components"        
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt="" />}
          content={<div>Test</div>}
          actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large" icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />} iconPosition="end">Primary action</Button><LinkButton href="#secondary" variant="tertiary" size="large">Secondary action</LinkButton></>}
          />
        `)

        expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
      })

      // When withActionButtonArrow is set to true, add arrow icon to actionsSlot secondary Button
      it('adds arrow icon to actionsSlot secondary Button when withActionButtonArrow is true', () => {
        const inputAst = parseJsx(`
        import { GuidanceBlock } from "@kaizen/components"
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt="" />}
          content={<div>Test</div>}
          withActionButtonArrow={true}
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
        import { GuidanceBlock, Button, LinkButton, Icon } from "@kaizen/components"
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt="" />}
          content={<div>Test</div>}
          actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large" icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />} iconPosition="end">Primary action</Button><LinkButton href="#secondary" variant="tertiary" size="large">Secondary action</LinkButton></>}
          />
        `)

        expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
      })

      // When withActionButtonArrow is explicitly false, do not add arrow icon to actionsSlot secondary Button
      it('does not add arrow icon to actionsSlot secondary Button when withActionButtonArrow is false', () => {
        const inputAst = parseJsx(`
      import { GuidanceBlock } from "@kaizen/components"
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        withActionButtonArrow={false}
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
      import { GuidanceBlock, Button, LinkButton } from "@kaizen/components"
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large">Primary action</Button><LinkButton href="#secondary" variant="tertiary" size="large">Secondary action</LinkButton></>}
        />
      `)

        expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
      })
    })

    describe('removes deprecated props', () => {
      it('removes withActionButtonArrow prop', () => {
        const inputAst = parseJsx(`
            import { GuidanceBlock } from "@kaizen/components"
            <GuidanceBlock
              layout="default"
              illustration={<Informative alt="" />}
              content={<div>Test</div>}
              withActionButtonArrow={true}
              actions={{
                primary: {
                  label: 'Primary action',
                  onClick: () => alert('click 1'),
                },
              }}
            />
          `)
        const outputAst = parseJsx(`
            import { GuidanceBlock, Button, Icon } from "@kaizen/components"
            <GuidanceBlock
              layout="default"
              illustration={<Informative alt="" />}
              content={<div>Test</div>}
              actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large" icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />} iconPosition="end">Primary action</Button></>}
            />
          `)

        expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
      })

      it('removes secondaryDismiss prop', () => {
        const inputAst = parseJsx(`
            import { GuidanceBlock } from "@kaizen/components"
            <GuidanceBlock
              layout="default"
              illustration={<Informative alt="" />}
              content={<div>Test</div>}
              secondaryDismiss={true}
              actions={{
                primary: {
                  label: 'Primary action',
                  onClick: () => alert('click 1'),
                },
              }}
            />
          `)
        const outputAst = parseJsx(`
            import {GuidanceBlock, Button, Icon } from "@kaizen/components"
            <GuidanceBlock
              layout="default"
              illustration={<Informative alt="" />}
              content={<div>Test</div>}
              actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large" icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />} iconPosition="end">Primary action</Button></>}
            />
          `)

        expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
      })
    })
  })
})

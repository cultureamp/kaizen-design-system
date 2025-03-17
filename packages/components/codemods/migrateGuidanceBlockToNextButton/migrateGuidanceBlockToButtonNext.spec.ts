import ts from 'typescript'
import { GuidanceBlock } from '~components/GuidanceBlock'
import { parseJsx } from '../__tests__/utils'
import {
  getKaioTagNamesMapByComponentName,
  printAst,
  transformSource,
  type TransformSourceArgs,
} from '../utils'
import { migrateGuidanceBlockToButtonNext } from './migrateGuidanceBlockToButtonNext'

const transformGuidanceBlock = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const kaioTagNamesMap = getKaioTagNamesMapByComponentName(sourceFile, ['GuidanceBlock'])
  return transformSource({
    sourceFile,
    transformers: [migrateGuidanceBlockToButtonNext(kaioTagNamesMap!)],
  })
}

describe('transformActionsToButtonNext()', () => {
  it('imports Button from the /next path and transforms all button-like actions prop into a Button component', () => {
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
      import { GuidanceBlock } from "@kaizen/components"
      import { Button } from "@kaizen/components/next"
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large">Primary action</Button><Button onPress={() => alert('click 2')} variant="tertiary" size="large">Secondary action</Button></>}
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
      import { GuidanceBlock, LinkButton } from "@kaizen/components"
      import { Button } from "@kaizen/components/next"
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<div>Test</div>}
        actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large">Primary action</Button><LinkButton href="#secondary" variant="tertiary" size="large">Secondary action</LinkButton></>}
        />
      `)

    expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
  })
  it('does not redeclare imports if found', () => {
    const inputAst = parseJsx(`
      import { GuidanceBlock } from "@kaizen/components"
      import { Button } from "@kaizen/components/next"
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
      import { GuidanceBlock, LinkButton } from "@kaizen/components"
      import { Button } from "@kaizen/components/next"
      const MockLayout = () => (
      <>
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt="" />}
          content={<div>Test</div>}
          actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large">Primary action</Button><LinkButton href="#secondary" variant="tertiary" size="large">Secondary action</LinkButton></>}
        />
        <Button onPress={() => alert('page click 1')} variant="primary" size="large">Page button</Button>
      </>
      )`)

    expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
  })
})

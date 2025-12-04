import { parseJsx } from '../__tests__/utils'
import {
  getKaioTagNamesMapByComponentName,
  printAst,
  transformSource,
  type TransformSourceArgs,
} from '../utils'
import { upgradeV2GuidanceBlock } from './upgradeV2GuidanceBlock'

const transformGuidanceBlock = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const kaioTagNamesMap = getKaioTagNamesMapByComponentName(sourceFile, ['GuidanceBlock'])
  return transformSource({
    sourceFile,
    transformers: [upgradeV2GuidanceBlock(kaioTagNamesMap!)],
  })
}

describe('upgradeV2GuidanceBlock()', () => {
  describe('removes deprecated props', () => {
    it('removes withActionButtonArrow prop', () => {
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
          }}
        />
      `)
      const outputAst = parseJsx(`
        import { GuidanceBlock, Icon } from "@kaizen/components"
        import { Button } from "@kaizen/components/next"
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
        import { GuidanceBlock, Icon } from "@kaizen/components"
        import { Button } from "@kaizen/components/next"
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt="" />}
          content={<div>Test</div>}
          actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large" icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />} iconPosition="end">Primary action</Button></>}
        />
      `)

      expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
    })

    it('removes both withActionButtonArrow and secondaryDismiss props', () => {
      const inputAst = parseJsx(`
        import { GuidanceBlock } from "@kaizen/components"
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt="" />}
          content={<div>Test</div>}
          withActionButtonArrow={false}
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
        import { GuidanceBlock } from "@kaizen/components"
        import { Button } from "@kaizen/components/next"
        <GuidanceBlock
          layout="default"
          illustration={<Informative alt="" />}
          content={<div>Test</div>}
          actionsSlot={<><Button onPress={() => alert('click 1')} variant="secondary" size="large">Primary action</Button></>}
        />
      `)

      expect(transformGuidanceBlock(inputAst)).toBe(printAst(outputAst))
    })
  })
})

import { parseJsx } from '../__tests__/utils'
import { printAst, transformSource, type TransformSourceArgs } from '../utils'
import { transformInformationTileMoodToVariant } from './transformInformationTileMoodToVariant'

const transformInformationTile = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const tagsMap = new Map([
    [
      'InformationTile',
      {
        importModuleName: '@kaizen/components',
        tagName: 'InformationTile',
        originalName: 'InformationTile',
      },
    ],
  ])

  return transformSource({
    sourceFile,
    transformers: [transformInformationTileMoodToVariant(tagsMap)],
  })
}

describe('transformInformationTileMoodToVariant()', () => {
  it('replaces mood="positive" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <InformationTile mood="positive">Hello</InformationTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <InformationTile variant="default">Hello</InformationTile>',
    )
    expect(transformInformationTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="informative" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <InformationTile mood="informative">Hello</InformationTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <InformationTile variant="default">Hello</InformationTile>',
    )
    expect(transformInformationTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="cautionary" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <InformationTile mood="cautionary">Hello</InformationTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <InformationTile variant="default">Hello</InformationTile>',
    )
    expect(transformInformationTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="assertive" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <InformationTile mood="assertive">Hello</InformationTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <InformationTile variant="default">Hello</InformationTile>',
    )
    expect(transformInformationTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="negative" with variant="default"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <InformationTile mood="negative">Hello</InformationTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <InformationTile variant="default">Hello</InformationTile>',
    )
    expect(transformInformationTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="prominent" with variant="expert-advice"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <InformationTile mood="prominent">Hello</InformationTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <InformationTile variant="expert-advice">Hello</InformationTile>',
    )
    expect(transformInformationTile(inputAst)).toEqual(printAst(outputAst))
  })

  it('does not add variant if mood was not defined', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <InformationTile>Hello</InformationTile>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <InformationTile>Hello</InformationTile>',
    )
    expect(transformInformationTile(inputAst)).toEqual(printAst(outputAst))
  })
})

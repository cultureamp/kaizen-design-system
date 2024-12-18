import { parseJsx } from '../__tests__/utils'
import { printAst, transformSource, type TransformSourceArgs } from '../utils'
import { transformBrandMomentMoodToVariant } from './transformBrandMomentMoodToVariant'

const transformBrandMoment = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const tagsMap = new Map([
    [
      'BrandMoment',
      {
        importModuleName: '@kaizen/components',
        tagName: 'BrandMoment',
        originalName: 'BrandMoment',
      },
    ],
  ])

  return transformSource({
    sourceFile,
    transformers: [transformBrandMomentMoodToVariant(tagsMap)],
  })
}

describe('transformBrandMomentMoodToVariant()', () => {
  it('replaces mood="informative" with variant="informative"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment mood="informative" />',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment variant="informative" />',
    )
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="positive" with variant="success"', () => {
    const inputAst = parseJsx('export const TestComponent = () => <BrandMoment mood="positive" />')
    const outputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment variant="success" />',
    )
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="negative" with variant="warning"', () => {
    const inputAst = parseJsx('export const TestComponent = () => <BrandMoment mood="negative" />')
    const outputAst = parseJsx(
      'export const TestComponent = () => <BrandMoment variant="warning" />',
    )
    expect(transformBrandMoment(inputAst)).toEqual(printAst(outputAst))
  })
})

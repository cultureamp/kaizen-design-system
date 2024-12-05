import { parseJsx } from '../__tests__/utils'
import { printAst, transformSourceForTagName, type TransformSourceForTagNameArgs } from '../utils'
import { transformProgressBarMoodToColor } from './transformProgressBarMoodToColor'

const transformProgressBar = (sourceFile: TransformSourceForTagNameArgs['sourceFile']): string =>
  transformSourceForTagName({
    sourceFile,
    astTransformer: transformProgressBarMoodToColor,
    tagName: 'ProgressBar',
  })

describe('transformProgressBarMoodToColor()', () => {
  it('replaces mood="cautionary" with color="yellow"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <ProgressBar mood="cautionary" />',
    )
    const outputAst = parseJsx('export const TestComponent = () => <ProgressBar color="yellow" />')
    expect(transformProgressBar(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="informative" with color="blue', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <ProgressBar mood="informative" />',
    )
    const outputAst = parseJsx('export const TestComponent = () => <ProgressBar color="blue" />')
    expect(transformProgressBar(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="negative" with color="red"', () => {
    const inputAst = parseJsx('export const TestComponent = () => <ProgressBar mood="negative" />')
    const outputAst = parseJsx('export const TestComponent = () => <ProgressBar color="red" />')
    expect(transformProgressBar(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces mood="positive" with color="green"', () => {
    const inputAst = parseJsx('export const TestComponent = () => <ProgressBar mood="positive" />')
    const outputAst = parseJsx('export const TestComponent = () => <ProgressBar color="green" />')
    expect(transformProgressBar(inputAst)).toEqual(printAst(outputAst))
  })
})

import { parseJsx } from '../__tests__/utils'
import { transformSource, printAst, TransformConfig } from '../utils'
import { transformCardVariantToColor } from './transformCardVariantToColor'

const transformCard = (sourceFile: TransformConfig['sourceFile']): string =>
  transformSource({
    sourceFile,
    astTransformer: transformCardVariantToColor,
    tagName: 'Card',
  })

describe('transformCardVariantToColor()', () => {
  it('replaces variant="assertive" with color="orange"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <Card variant="assertive">Hello</Card>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <Card color="orange">Hello</Card>',
    )
    expect(transformCard(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces variant="cautionary" with color="yellow"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <Card variant="cautionary">Hello</Card>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <Card color="yellow">Hello</Card>',
    )
    expect(transformCard(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces variant="default" with color="white"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <Card variant="default">Hello</Card>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <Card color="white">Hello</Card>',
    )
    expect(transformCard(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces variant="destructive" with color="red"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <Card variant="destructive">Hello</Card>',
    )
    const outputAst = parseJsx('export const TestComponent = () => <Card color="red">Hello</Card>')
    expect(transformCard(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces variant="highlight" with color="purple"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <Card variant="highlight">Hello</Card>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <Card color="purple">Hello</Card>',
    )
    expect(transformCard(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces variant="informative" with color="blue"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <Card variant="informative">Hello</Card>',
    )
    const outputAst = parseJsx('export const TestComponent = () => <Card color="blue">Hello</Card>')
    expect(transformCard(inputAst)).toEqual(printAst(outputAst))
  })

  it('replaces variant="positive" with color="green"', () => {
    const inputAst = parseJsx(
      'export const TestComponent = () => <Card variant="positive">Hello</Card>',
    )
    const outputAst = parseJsx(
      'export const TestComponent = () => <Card color="green">Hello</Card>',
    )
    expect(transformCard(inputAst)).toEqual(printAst(outputAst))
  })
  it('If no variant exists, it does not add one', () => {
    const inputAst = parseJsx('export const TestComponent = () => <Card>Hello</Card>')
    const outputAst = parseJsx('export const TestComponent = () => <Card>Hello</Card>')
    expect(transformCard(inputAst)).toEqual(printAst(outputAst))
  })
})

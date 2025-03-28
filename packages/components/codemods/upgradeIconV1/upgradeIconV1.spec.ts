import { parseJsx } from '../__tests__/utils'
import {
  getKaioTagNamesMapByPattern,
  printAst,
  transformSource,
  type TransformSourceArgs,
} from '../utils'
import { upgradeIconV1 } from './upgradeIconV1'

const transformIcons = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const kaioTagNamesMap = getKaioTagNamesMapByPattern(sourceFile, 'Icon$')
  return transformSource({
    sourceFile,
    transformers: [upgradeIconV1(kaioTagNamesMap!)],
  })
}

describe('upgradeIconV1()', () => {
  describe('CaMonogramIcon to Brand', () => {
    const transformedBrandProps = 'variant="enso" style={{ width: "20px" }}'

    it('updates import from CaMonogramIcon to Brand', () => {
      const inputAst = parseJsx(`
        import { CaMonogramIcon } from "@kaizen/components"
        export const TestComponent = () => <CaMonogramIcon />
      `)
      const outputAst = parseJsx(`
        import { Brand } from "@kaizen/components"
        export const TestComponent = () => <Brand ${transformedBrandProps} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('updates import from CaMonogramIcon using alias to Brand', () => {
      const inputAst = parseJsx(`
        import { CaMonogramIcon as LogoAlias } from "@kaizen/components"
        export const TestComponent = () => <LogoAlias />
      `)
      const outputAst = parseJsx(`
        import { Brand } from "@kaizen/components"
        export const TestComponent = () => <Brand ${transformedBrandProps} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('does not add another Brand import if it is already imported', () => {
      const inputAst = parseJsx(`
        import { Brand, CaMonogramIcon } from "@kaizen/components"
        export const TestComponent = () => <CaMonogramIcon />
      `)
      const outputAst = parseJsx(`
        import { Brand } from "@kaizen/components"
        export const TestComponent = () => <Brand ${transformedBrandProps} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('uses Brand alias for an existing import', () => {
      const inputAst = parseJsx(`
        import { Brand as KzBrand, CaMonogramIcon } from "@kaizen/components"
        export const TestComponent = () => <CaMonogramIcon />
      `)
      const outputAst = parseJsx(`
        import { Brand as KzBrand } from "@kaizen/components"
        export const TestComponent = () => <KzBrand ${transformedBrandProps} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })
  })

  describe('SpinnerIcon to LoadingSpinner', () => {
    const transformedLoadingSpinnerProps = 'size="xs" accessibilityLabel="Loading"'

    it('updates import from SpinnerIcon to LoadingSpinner', () => {
      const inputAst = parseJsx(`
        import { SpinnerIcon } from "@kaizen/components"
        export const TestComponent = () => <SpinnerIcon />
      `)
      const outputAst = parseJsx(`
        import { LoadingSpinner } from "@kaizen/components"
        export const TestComponent = () => <LoadingSpinner ${transformedLoadingSpinnerProps} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('updates import from SpinnerIcon using alias to LoadingSpinner', () => {
      const inputAst = parseJsx(`
        import { SpinnerIcon as LogoAlias } from "@kaizen/components"
        export const TestComponent = () => <LogoAlias />
      `)
      const outputAst = parseJsx(`
        import { LoadingSpinner } from "@kaizen/components"
        export const TestComponent = () => <LoadingSpinner ${transformedLoadingSpinnerProps} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('does not add another LoadingSpinner import if it is already imported', () => {
      const inputAst = parseJsx(`
        import { LoadingSpinner, SpinnerIcon } from "@kaizen/components"
        export const TestComponent = () => <SpinnerIcon />
      `)
      const outputAst = parseJsx(`
        import { LoadingSpinner } from "@kaizen/components"
        export const TestComponent = () => <LoadingSpinner ${transformedLoadingSpinnerProps} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('uses LoadingSpinner alias for an existing import', () => {
      const inputAst = parseJsx(`
        import { LoadingSpinner as KzLoadingSpinner, SpinnerIcon } from "@kaizen/components"
        export const TestComponent = () => <SpinnerIcon />
      `)
      const outputAst = parseJsx(`
        import { LoadingSpinner as KzLoadingSpinner } from "@kaizen/components"
        export const TestComponent = () => <KzLoadingSpinner ${transformedLoadingSpinnerProps} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })
  })

  it('transforms old Icon', () => {
    const inputAst = parseJsx(`
      import { FlagOnIcon } from "@kaizen/components"
      export const TestComponent = () => <FlagOnIcon />
    `)
    const outputAst = parseJsx(`
      import { Icon } from "@kaizen/components/next"
      export const TestComponent = () => <Icon name="flag" isFilled />
    `)
    expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
  })

  it('transforms aliased old Icon', () => {
    const inputAst = parseJsx(`
      import { HamburgerIcon as IconAlias } from "@kaizen/components"
      export const TestComponent = () => <IconAlias />
    `)
    const outputAst = parseJsx(`
      import { Icon } from "@kaizen/components/next"
      export const TestComponent = () => <Icon name="menu" />
    `)
    expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
  })

  describe('import statements', () => {
    it('does not update import of components which are not Icons', () => {
      const inputAst = parseJsx(`
        import { AddIcon, Card } from "@kaizen/components"
        export const TestComponent = () => <Card><AddIcon /></Card>
      `)
      const outputAst = parseJsx(`
        import { Card } from "@kaizen/components"
        import { Icon } from "@kaizen/components/next"
        export const TestComponent = () => <Card><Icon name="add" /></Card>
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('does not update import of components which are not from KAIO', () => {
      const inputAst = parseJsx(`
        import { AddIcon, HamburgerIcon as IconAlias } from "@kaizen/components"
        import { HamburgerIcon as HamHam } from "somewhere-else"
        export const TestComponent = () => (
          <>
            <AddIcon />
            <IconAlias />
            <HamHam />
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { Icon } from "@kaizen/components/next"
        import { HamburgerIcon as HamHam } from "somewhere-else"
        export const TestComponent = () => (
          <>
            <Icon name="add" />
            <Icon name="menu" />
            <HamHam />
          </>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })
  })
})

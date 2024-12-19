import { parseJsx } from '../__tests__/utils'
import {
  getKaioTagNamesMapByComponentName,
  printAst,
  transformSource,
  type TransformSourceArgs,
} from '../utils'
import { upgradeV1Buttons } from './upgradeV1Buttons'

const transformIcons = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const kaioTagNamesMap = getKaioTagNamesMapByComponentName(sourceFile, ['IconButton', 'Button'])
  return transformSource({
    sourceFile,
    transformers: [upgradeV1Buttons(kaioTagNamesMap!)],
  })
}

describe('upgradeV1Buttons()', () => {
  describe('to Button', () => {
    it('transforms Button v1 to Button v3 when href and component prop are not set', () => {
      const inputAst = parseJsx(`
        import { Button } from "@kaizen/components"
        export const TestComponent = () => <Button label="Hello" onClick={handleClick} />
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => <Button onPress={handleClick} variant="secondary" size="large">Hello</Button>
      `)

      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms IconButton to Button v3 when href and component prop are not set', () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components"
        export const TestComponent = () => <IconButton icon={<Icon isPresentational name="more_horiz"/>} label="More pls" onClick={handleClick} />
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => <Button icon={<Icon isPresentational name="more_horiz"/>} onPress={handleClick} variant="tertiary" size="large" hasHiddenLabel>More pls</Button>
      `)

      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms both IconButton and Button v1 to Button v3 in the same iteration', () => {
      const inputAst = parseJsx(`
        import { Button, IconButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <Button label="Hello" />
            <IconButton icon={<Icon isPresentational name="more_horiz"/>} label="More pls" />
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <Button variant="secondary" size="large">Hello</Button>
            <Button icon={<Icon isPresentational name="more_horiz"/>} variant="tertiary" size="large" hasHiddenLabel>More pls</Button>
          </>
        )
      `)

      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms aliased V1 Buttons to Button when href and component prop are not set', () => {
      const inputAst = parseJsx(`
        import { IconButton as KzIconButton, Button as KzButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <KzButton label="Waffle" />
            <KzIconButton label="Pancake" />
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <Button variant="secondary" size="large">Waffle</Button>
            <Button variant="tertiary" size="large" hasHiddenLabel>Pancake</Button>
          </>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms V1 Buttons to aliased Button', () => {
      const inputAst = parseJsx(`
        import { IconButton, Button } from "@kaizen/components"
        import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <Button label="Waffle" />
            <IconButton label="Pancake" />
            <ButtonAlias>Toast</ButtonAlias>
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <ButtonAlias variant="secondary" size="large">Waffle</ButtonAlias>
            <ButtonAlias variant="tertiary" size="large" hasHiddenLabel>Pancake</ButtonAlias>
            <ButtonAlias>Toast</ButtonAlias>
          </>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    describe('import statements', () => {
      it('updates V1 Buttons from @kaizen/components', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <Button label="Pancakes" />
              <IconButton label="Waffles" />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <Button variant="secondary" size="large">Pancakes</Button>
              <Button variant="tertiary" size="large" hasHiddenLabel>Waffles</Button>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates V1 Buttons from @kaizen/components/v1/actions', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components/v1/actions"
          export const TestComponent = () => (
            <>
              <Button label="Pancakes" />
              <IconButton label="Waffles" />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <Button variant="secondary" size="large">Pancakes</Button>
              <Button variant="tertiary" size="large" hasHiddenLabel>Waffles</Button>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates V1 Buttons from @kaizen/components/v2/actions', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components/v2/actions"
          export const TestComponent = () => (
            <>
              <Button label="Pancakes" />
              <IconButton label="Waffles" />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <Button variant="secondary" size="large">Pancakes</Button>
              <Button variant="tertiary" size="large" hasHiddenLabel>Waffles</Button>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates aliased V1 Buttons to Button', () => {
        const inputAst = parseJsx(`
          import { Button as KzButton, IconButton as KzIconButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <KzButton label="Pancakes" />
              <KzIconButton label="Waffles" />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <Button variant="secondary" size="large">Pancakes</Button>
              <Button variant="tertiary" size="large" hasHiddenLabel>Waffles</Button>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates imports of multiple V1 Buttons from different KAIO imports', () => {
        const inputAst = parseJsx(`
          import { Button as KzButton, IconButton as KzIconButton } from "@kaizen/components"
          import { Button as ButtonV1, IconButton as IconButtonV1 } from "@kaizen/components/v1/actions"
          export const TestComponent = () => (
            <>
              <KzButton label="Pancakes" />
              <ButtonV1 label="Waffles" />
              <KzIconButton label="Toasties" />
              <IconButtonV1 label="Scones" />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <Button variant="secondary" size="large">Pancakes</Button>
              <Button variant="secondary" size="large">Waffles</Button>
              <Button variant="tertiary" size="large" hasHiddenLabel>Toasties</Button>
              <Button variant="tertiary" size="large" hasHiddenLabel>Scones</Button>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('does not duplicate Button import if it already exists', () => {
        const inputAst = parseJsx(`
          import { IconButton, Button as KzButton } from "@kaizen/components"
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <IconButton label="Pancakes" />
              <KzButton label="Scones" />
              <Button>Waffles</Button>
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <Button variant="tertiary" size="large" hasHiddenLabel>Pancakes</Button>
              <Button variant="secondary" size="large">Scones</Button>
              <Button>Waffles</Button>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('does not add Button if aliased Button exists', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components"
          import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <Button label="Pancakes" />
              <IconButton label="Scones" />
              <ButtonAlias>Waffles</ButtonAlias>
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <ButtonAlias variant="secondary" size="large">Pancakes</ButtonAlias>
              <ButtonAlias variant="tertiary" size="large" hasHiddenLabel>Scones</ButtonAlias>
              <ButtonAlias>Waffles</ButtonAlias>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('does not update import of irrelevant KAIO components', () => {
        const inputAst = parseJsx(`
          import { IconButton, FilterButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <IconButton label="Pancakes" />
              <FilterButton />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { FilterButton } from "@kaizen/components"
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <>
              <Button variant="tertiary" size="large" hasHiddenLabel>Pancakes</Button>
              <FilterButton />
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })
    })
  })

  describe('to LinkButton', () => {
    it('transforms V1 Buttons to LinkButton when href prop is set', () => {
      const inputAst = parseJsx(`
        import { Button, IconButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <Button label="Pancakes" href="#" />
            <IconButton label="Waffles" href="#" />
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { LinkButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <LinkButton href="#" variant="secondary" size="large">Pancakes</LinkButton>
            <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Waffles</LinkButton>
          </>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms V1 Buttons to LinkButton when component prop is set', () => {
      const inputAst = parseJsx(`
        import { Button, IconButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <Button label="Pancakes" component={Component} />
            <IconButton label="Waffles" component={Component} />
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { LinkButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <LinkButton component={Component} variant="secondary" size="large">Pancakes</LinkButton>
            <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Waffles</LinkButton>
          </>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms both IconButton and Button to LinkButton in the same iteration', () => {
      const inputAst = parseJsx(`
        import { Button, IconButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <Button label="Summer" href="#" />
            <Button label="Autumn" component={Component} />
            <IconButton label="Winter" href="#" />
            <IconButton label="Spring" component={Component} />
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { LinkButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
            <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
            <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
            <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>
          </>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms aliased V1 Buttons to LinkButton when href or component prop are set', () => {
      const inputAst = parseJsx(`
        import { IconButton as KzIconButton, Button as KzButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <KzButton label="Summer" href="#" />
            <KzButton label="Autumn" component={Component} />
            <KzIconButton label="Winter" href="#" />
            <KzIconButton label="Spring" component={Component} />
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { LinkButton } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
            <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
            <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
            <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>
          </>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms V1 Buttons to aliased LinkButton', () => {
      const inputAst = parseJsx(`
        import { IconButton, Button } from "@kaizen/components"
        import { LinkButton as LinkButtonAlias } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <Button label="Summer" href="#" />
            <Button label="Autumn" component={Component} />
            <IconButton label="Winter" href="#" />
            <IconButton label="Spring" component={Component} />
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { LinkButton as LinkButtonAlias } from "@kaizen/components"
        export const TestComponent = () => (
          <>
            <LinkButtonAlias href="#" variant="secondary" size="large">Summer</LinkButtonAlias>
            <LinkButtonAlias component={Component} variant="secondary" size="large">Autumn</LinkButtonAlias>
            <LinkButtonAlias href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButtonAlias>
            <LinkButtonAlias component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButtonAlias>
          </>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    describe('import statements', () => {
      it('updates V1 Buttons from @kaizen/components', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <Button label="Summer" href="#" />
              <Button label="Autumn" component={Component} />
              <IconButton label="Winter" href="#" />
              <IconButton label="Spring" component={Component} />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { LinkButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
              <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
              <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates V1 Buttons from @kaizen/components/v1/actions', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components/v1/actions"
          export const TestComponent = () => (
            <>
              <Button label="Summer" href="#" />
              <Button label="Autumn" component={Component} />
              <IconButton label="Winter" href="#" />
              <IconButton label="Spring" component={Component} />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { LinkButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
              <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
              <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates V1 Buttons from @kaizen/components/v2/actions', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components/v2/actions"
          export const TestComponent = () => (
            <>
              <Button label="Summer" href="#" />
              <Button label="Autumn" component={Component} />
              <IconButton label="Winter" href="#" />
              <IconButton label="Spring" component={Component} />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { LinkButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
              <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
              <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates aliased V1 Buttons to LinkButton', () => {
        const inputAst = parseJsx(`
          import { Button as KzButton, IconButton as KzIconButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <KzButton label="Summer" href="#" />
              <KzButton label="Autumn" component={Component} />
              <KzIconButton label="Winter" href="#" />
              <KzIconButton label="Spring" component={Component} />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { LinkButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
              <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
              <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates imports of multiple V1 Buttons from different KAIO imports', () => {
        const inputAst = parseJsx(`
          import { Button as KzButton, IconButton as KzIconButton } from "@kaizen/components"
          import { Button as ButtonV1, IconButton as IconButtonV1 } from "@kaizen/components/v1/actions"
          export const TestComponent = () => (
            <>
              <KzButton label="Summer" href="#" />
              <KzButton label="Autumn" component={Component} />
              <KzIconButton label="Winter" href="#" />
              <KzIconButton label="Spring" component={Component} />

              <ButtonV1 label="Summer" href="#" />
              <ButtonV1 label="Autumn" component={Component} />
              <IconButtonV1 label="Winter" href="#" />
              <IconButtonV1 label="Spring" component={Component} />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { LinkButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
              <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
              <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>

              <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
              <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
              <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('does not duplicate LinkButton import if it already exists', () => {
        const inputAst = parseJsx(`
          import { IconButton, Button, LinkButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <Button label="Summer" href="#" />
              <Button label="Autumn" component={Component} />
              <IconButton label="Winter" href="#" />
              <IconButton label="Spring" component={Component} />
              <LinkButton>Waffles</LinkButton>
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { LinkButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
              <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
              <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>
              <LinkButton>Waffles</LinkButton>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('does not add LinkButton if aliased LinkButton exists', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton, LinkButton as LinkButtonAlias } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <Button label="Summer" href="#" />
              <Button label="Autumn" component={Component} />
              <IconButton label="Winter" href="#" />
              <IconButton label="Spring" component={Component} />
              <LinkButtonAlias>Waffles</LinkButtonAlias>
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { LinkButton as LinkButtonAlias } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <LinkButtonAlias href="#" variant="secondary" size="large">Summer</LinkButtonAlias>
              <LinkButtonAlias component={Component} variant="secondary" size="large">Autumn</LinkButtonAlias>
              <LinkButtonAlias href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButtonAlias>
              <LinkButtonAlias component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButtonAlias>
              <LinkButtonAlias>Waffles</LinkButtonAlias>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('does not update import of irrelevant KAIO components', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton, FilterButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <Button label="Summer" href="#" />
              <Button label="Autumn" component={Component} />
              <IconButton label="Winter" href="#" />
              <IconButton label="Spring" component={Component} />
              <FilterButton />
            </>
          )
        `)
        const outputAst = parseJsx(`
          import { FilterButton, LinkButton } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <LinkButton href="#" variant="secondary" size="large">Summer</LinkButton>
              <LinkButton component={Component} variant="secondary" size="large">Autumn</LinkButton>
              <LinkButton href="#" variant="tertiary" size="large" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} variant="tertiary" size="large" hasHiddenLabel>Spring</LinkButton>
              <FilterButton />
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })
    })
  })
})

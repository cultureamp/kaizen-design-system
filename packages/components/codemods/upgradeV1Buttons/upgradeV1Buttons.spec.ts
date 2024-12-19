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
        export const TestComponent = () => <Button onPress={handleClick}>Hello</Button>
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
        export const TestComponent = () => <Button icon={<Icon isPresentational name="more_horiz"/>} onPress={handleClick} hasHiddenLabel>More pls</Button>
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
            <Button>Hello</Button>
            <Button icon={<Icon isPresentational name="more_horiz"/>} hasHiddenLabel>More pls</Button>
          </>
        )
      `)

      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms aliased V1 Buttons to Button when href and component prop are not set', () => {
      const inputAst = parseJsx(`
        import { IconButton as KzIconButton, Button as KzButton } from "@kaizen/components"
        export const TestComponent = () => (
          <><KzButton label="Waffle" /><KzIconButton label="Pancake" /></>
        )
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <><Button>Waffle</Button><Button hasHiddenLabel>Pancake</Button></>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms V1 Buttons to aliased Button', () => {
      const inputAst = parseJsx(`
        import { IconButton, Button } from "@kaizen/components"
        import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <><Button label="Waffle" /><IconButton label="Pancake" /></>
        )
      `)
      const outputAst = parseJsx(`
        import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <><ButtonAlias>Waffle</ButtonAlias><ButtonAlias hasHiddenLabel>Pancake</ButtonAlias></>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    describe('import statements', () => {
      it('updates V1 Buttons from @kaizen/components', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components"
          export const TestComponent = () => (
            <><Button label="Pancakes" /><IconButton label="Waffles" /></>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <><Button>Pancakes</Button><Button hasHiddenLabel>Waffles</Button></>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates V1 Buttons from @kaizen/components/v1/actions', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components/v1/actions"
          export const TestComponent = () => (
            <><Button label="Pancakes" /><IconButton label="Waffles" /></>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <><Button>Pancakes</Button><Button hasHiddenLabel>Waffles</Button></>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates V1 Buttons from @kaizen/components/v2/actions', () => {
        const inputAst = parseJsx(`
          import { Button, IconButton } from "@kaizen/components/v2/actions"
          export const TestComponent = () => (
            <><Button label="Pancakes" /><IconButton label="Waffles" /></>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <><Button>Pancakes</Button><Button hasHiddenLabel>Waffles</Button></>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('updates aliased V1 Buttons to Button', () => {
        const inputAst = parseJsx(`
          import { Button as KzButton, IconButton as KzIconButton } from "@kaizen/components"
          export const TestComponent = () => (
            <><KzButton label="Pancakes" /><KzIconButton label="Waffles" /></>
          )
        `)
        const outputAst = parseJsx(`
          import { Button } from "@kaizen/components/v3/actions"
          export const TestComponent = () => (
            <><Button>Pancakes</Button><Button hasHiddenLabel>Waffles</Button></>
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
              <Button>Pancakes</Button>
              <Button>Waffles</Button>
              <Button hasHiddenLabel>Toasties</Button>
              <Button hasHiddenLabel>Scones</Button>
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
              <Button hasHiddenLabel>Pancakes</Button>
              <Button>Scones</Button>
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
              <ButtonAlias>Pancakes</ButtonAlias>
              <ButtonAlias hasHiddenLabel>Scones</ButtonAlias>
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
              <Button hasHiddenLabel>Pancakes</Button>
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
            <LinkButton href="#">Pancakes</LinkButton>
            <LinkButton href="#">Waffles</LinkButton>
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
            <LinkButton component={Component}>Pancakes</LinkButton>
            <LinkButton component={Component}>Waffles</LinkButton>
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
            <LinkButton href="#">Summer</LinkButton>
            <LinkButton component={Component}>Autumn</LinkButton>
            <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
            <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>
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
            <LinkButton href="#">Summer</LinkButton>
            <LinkButton component={Component}>Autumn</LinkButton>
            <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
            <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>
          </>
        )
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it('transforms V1 Buttons to aliased LinkButton', () => {
      const inputAst = parseJsx(`
        import { IconButton, Button } from "@kaizen/components"
        import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
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
        import { LinkButton as LinkButtonAlias } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <LinkButtonAlias href="#">Summer</LinkButtonAlias>
            <LinkButtonAlias component={Component}>Autumn</LinkButtonAlias>
            <LinkButtonAlias href="#" hasHiddenLabel>Winter</LinkButtonAlias>
            <LinkButtonAlias component={Component} hasHiddenLabel>Spring</LinkButtonAlias>
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
              <LinkButton href="#">Summer</LinkButton>
              <LinkButton component={Component}>Autumn</LinkButton>
              <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>
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
              <LinkButton href="#">Summer</LinkButton>
              <LinkButton component={Component}>Autumn</LinkButton>
              <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>
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
              <LinkButton href="#">Summer</LinkButton>
              <LinkButton component={Component}>Autumn</LinkButton>
              <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>
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
              <LinkButton href="#">Summer</LinkButton>
              <LinkButton component={Component}>Autumn</LinkButton>
              <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>
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
              <LinkButton href="#">Summer</LinkButton>
              <LinkButton component={Component}>Autumn</LinkButton>
              <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>

              <LinkButton href="#">Summer</LinkButton>
              <LinkButton component={Component}>Autumn</LinkButton>
              <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it('does not duplicate LinkButton import if it already exists', () => {
        const inputAst = parseJsx(`
          import { IconButton, Button as KzButton, LinkButton } from "@kaizen/components"
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
              <LinkButton href="#">Summer</LinkButton>
              <LinkButton component={Component}>Autumn</LinkButton>
              <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>
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
          import { LinkButtonAlias } from "@kaizen/components"
          export const TestComponent = () => (
            <>
              <LinkButtonAlias href="#">Summer</LinkButtonAlias>
              <LinkButtonAlias component={Component}>Autumn</LinkButtonAlias>
              <LinkButtonAlias href="#" hasHiddenLabel>Winter</LinkButtonAlias>
              <LinkButtonAlias component={Component} hasHiddenLabel>Spring</LinkButtonAlias>
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
              <LinkButton href="#">Summer</LinkButton>
              <LinkButton component={Component}>Autumn</LinkButton>
              <LinkButton href="#" hasHiddenLabel>Winter</LinkButton>
              <LinkButton component={Component} hasHiddenLabel>Spring</LinkButton>
              <FilterButton />
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })
    })
  })
})

import { parseJsx } from '../__tests__/utils'
import {
  printAst,
  transformSource,
  type TransformSourceArgs,
  getKaioTagNamesMapByString,
} from '../utils'
import { upgradeIconButton } from './upgradeIconButton'

const transformIcons = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const kaioTagNamesMap = getKaioTagNamesMapByString(sourceFile, ['IconButton', 'Button'])
  return transformSource({
    sourceFile,
    transformers: [upgradeIconButton(kaioTagNamesMap!)],
  })
}

describe('upgradeIconButton()', () => {
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

  // @todo
  // it('does not transform IconButton when href prop is set', () => {
  //   const inputAst = parseJsx(`
  //     import { IconButton } from "@kaizen/components"
  //     export const TestComponent = () => <IconButton href="#" />
  //   `)
  //   const outputAst = parseJsx(`
  //     import { IconButton } from "@kaizen/components"
  //     export const TestComponent = () => <IconButton href="#" />
  //   `)
  //   expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
  // })

  // @todo
  // it('does not transform IconButton when component prop is set', () => {
  //   const inputAst = parseJsx(`
  //     import { IconButton } from "@kaizen/components"
  //     export const TestComponent = () => <IconButton component={Component} />
  //   `)
  //   const outputAst = parseJsx(`
  //     import { IconButton } from "@kaizen/components"
  //     export const TestComponent = () => <IconButton component={Component} />
  //   `)
  //   expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
  // })

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

    it('updates IconButton from @kaizen/components/v2/actions', () => {
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

import { parseJsx } from '../__tests__/utils'
import {
  type TagImportAttributesMap,
  printAst,
  transformSource,
  type TransformSourceArgs,
} from '../utils'
import { upgradeIconButton } from './upgradeIconButton'

const transformIcons = (
  sourceFile: TransformSourceArgs['sourceFile'],
  tagNames: TagImportAttributesMap,
): string =>
  transformSource({
    sourceFile,
    transformers: [upgradeIconButton(tagNames)],
  })

describe('upgradeIconButton()', () => {
  it('transforms IconButton to Button when href and component prop are not set', () => {
    const inputAst = parseJsx(`
      import { IconButton } from "@kaizen/components"
      export const TestComponent = () => <IconButton icon={<Icon isPresentational name="more_horiz"/>} label="More pls" onClick={handleClick} />
    `)
    const outputAst = parseJsx(`
      import { Button } from "@kaizen/components/v3/actions"
      export const TestComponent = () => <Button icon={<Icon isPresentational name="more_horiz"/>} onPress={handleClick} hasHiddenLabel>More pls</Button>
    `)

    expect(
      transformIcons(
        inputAst,
        new Map([
          [
            'IconButton',
            {
              importModuleName: '@kaizen/components',
              tagName: 'IconButton',
              originalName: 'IconButton',
            },
          ],
        ]),
      ),
    ).toEqual(printAst(outputAst))
  })

  it('transforms aliased IconButton to Button when href and component prop are not set', () => {
    const inputAst = parseJsx(`
      import { IconButton as Aliased } from "@kaizen/components"
      export const TestComponent = () => <Aliased icon={<Icon isPresentational name="more_horiz"/>} label="More pls" onClick={handleClick} />
    `)
    const outputAst = parseJsx(`
      import { Button } from "@kaizen/components/v3/actions"
      export const TestComponent = () => <Button icon={<Icon isPresentational name="more_horiz"/>} onPress={handleClick} hasHiddenLabel>More pls</Button>
    `)
    expect(
      transformIcons(
        inputAst,
        new Map([
          [
            'Aliased',
            {
              importModuleName: '@kaizen/components',
              tagName: 'Aliased',
              originalName: 'IconButton',
            },
          ],
        ]),
      ),
    ).toEqual(printAst(outputAst))
  })

  it('transforms IconButton to aliased Button', () => {
    const inputAst = parseJsx(`
      import { IconButton } from "@kaizen/components"
      import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
      export const TestComponent = () => <IconButton icon={<Icon isPresentational name="more_horiz"/>} label="More pls" onClick={handleClick} />
    `)
    const outputAst = parseJsx(`
      import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
      export const TestComponent = () => <ButtonAlias icon={<Icon isPresentational name="more_horiz"/>} onPress={handleClick} hasHiddenLabel>More pls</Button>
    `)
    expect(
      transformIcons(
        inputAst,
        new Map([
          [
            'IconButton',
            {
              importModuleName: '@kaizen/components',
              tagName: 'IconButton',
              originalName: 'IconButton',
            },
          ],
        ]),
      ),
    ).toEqual(printAst(outputAst))
  })

  it('does not transform IconButton when href prop is set', () => {
    const inputAst = parseJsx(`
      import { IconButton } from "@kaizen/components"
      export const TestComponent = () => <IconButton href="#" />
    `)
    const outputAst = parseJsx(`
      import { IconButton } from "@kaizen/components"
      export const TestComponent = () => <IconButton href="#" />
    `)
    expect(
      transformIcons(
        inputAst,
        new Map([
          [
            'IconButton',
            {
              importModuleName: '@kaizen/components',
              tagName: 'IconButton',
              originalName: 'IconButton',
            },
          ],
        ]),
      ),
    ).toEqual(printAst(outputAst))
  })

  it('does not transform IconButton when component prop is set', () => {
    const inputAst = parseJsx(`
      import { IconButton } from "@kaizen/components"
      export const TestComponent = () => <IconButton component={Component} />
    `)
    const outputAst = parseJsx(`
      import { IconButton } from "@kaizen/components"
      export const TestComponent = () => <IconButton component={Component} />
    `)
    expect(
      transformIcons(
        inputAst,
        new Map([
          [
            'IconButton',
            {
              importModuleName: '@kaizen/components',
              tagName: 'IconButton',
              originalName: 'IconButton',
            },
          ],
        ]),
      ),
    ).toEqual(printAst(outputAst))
  })

  describe('import statements', () => {
    it('updates IconButton from @kaizen/components', () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components"
        export const TestComponent = () => <IconButton label="Pancakes" />
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => <Button hasHiddenLabel>Pancakes</Button>
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              'IconButton',
              {
                importModuleName: '@kaizen/components',
                tagName: 'IconButton',
                originalName: 'IconButton',
              },
            ],
          ]),
        ),
      ).toEqual(printAst(outputAst))
    })

    it('updates IconButton from @kaizen/components/v1/actions', () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components/v1/actions"
        export const TestComponent = () => <IconButton label="Pancakes" />
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => <Button hasHiddenLabel>Pancakes</Button>
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              'IconButton',
              {
                importModuleName: '@kaizen/components/v1/actions',
                tagName: 'IconButton',
                originalName: 'IconButton',
              },
            ],
          ]),
        ),
      ).toEqual(printAst(outputAst))
    })

    it('updates IconButton from @kaizen/components/v2/actions', () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components/v2/actions"
        export const TestComponent = () => <IconButton label="Pancakes" />
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => <Button hasHiddenLabel>Pancakes</Button>
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              'IconButton',
              {
                importModuleName: '@kaizen/components/v2/actions',
                tagName: 'IconButton',
                originalName: 'IconButton',
              },
            ],
          ]),
        ),
      ).toEqual(printAst(outputAst))
    })

    it('updates aliased IconButton to Button', () => {
      const inputAst = parseJsx(`
        import { IconButton as Aliased } from "@kaizen/components"
        export const TestComponent = () => <Aliased label="Pancakes" />
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => <Button hasHiddenLabel>Pancakes</Button>
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              'Aliased',
              {
                importModuleName: '@kaizen/components',
                tagName: 'Aliased',
                originalName: 'IconButton',
              },
            ],
          ]),
        ),
      ).toEqual(printAst(outputAst))
    })

    it('updates imports of multiple IconButtons from different KAIO imports', () => {
      const inputAst = parseJsx(`
        import { IconButton as KzIconButton } from "@kaizen/components"
        import { IconButton as IconButtonV1 } from "@kaizen/components/v1/actions"
        export const TestComponent = () => (
          <>
            <KzIconButton label="Pancakes" />
            <IconButtonV1 label="Waffles" />
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <Button hasHiddenLabel>Pancakes</Button>
            <Button hasHiddenLabel>Waffles</Button>
          </>
        )
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              'KzIconButton',
              {
                importModuleName: '@kaizen/components',
                tagName: 'KzIconButton',
                originalName: 'IconButton',
              },
            ],
            [
              'IconButtonV1',
              {
                importModuleName: '@kaizen/components/v1/actions',
                tagName: 'IconButtonV1',
                originalName: 'IconButton',
              },
            ],
          ]),
        ),
      ).toEqual(printAst(outputAst))
    })

    it('does not duplicate Button import if it already exists', () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components"
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <IconButton label="Pancakes" />
            <Button>Waffles</Button>
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <Button hasHiddenLabel>Pancakes</Button>
            <Button>Waffles</Button>
          </>
        )
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              'IconButton',
              {
                importModuleName: '@kaizen/components',
                tagName: 'IconButton',
                originalName: 'IconButton',
              },
            ],
          ]),
        ),
      ).toEqual(printAst(outputAst))
    })

    it('does not add Button if aliased Button exists', () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components"
        import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <IconButton label="Pancakes" />
            <ButtonAlias>Waffles</ButtonAlias>
          </>
        )
      `)
      const outputAst = parseJsx(`
        import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <>
            <ButtonAlias hasHiddenLabel>Pancakes</ButtonAlias>
            <ButtonAlias>Waffles</ButtonAlias>
          </>
        )
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              'IconButton',
              {
                importModuleName: '@kaizen/components',
                tagName: 'IconButton',
                originalName: 'IconButton',
              },
            ],
          ]),
        ),
      ).toEqual(printAst(outputAst))
    })

    it('does not update import of irrelevant KAIO components', () => {
      const inputAst = parseJsx(`
        import { IconButton, Card } from "@kaizen/components"
        export const TestComponent = () => (
          <Card>
            <IconButton label="Pancakes" />
          </Card>
        )
      `)
      const outputAst = parseJsx(`
        import { Card } from "@kaizen/components"
        import { Button } from "@kaizen/components/v3/actions"
        export const TestComponent = () => (
          <Card>
            <Button hasHiddenLabel>Pancakes</Button>
          </Card>
        )
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              'IconButton',
              {
                importModuleName: '@kaizen/components',
                tagName: 'IconButton',
                originalName: 'IconButton',
              },
            ],
          ]),
        ),
      ).toEqual(printAst(outputAst))
    })
  })
})

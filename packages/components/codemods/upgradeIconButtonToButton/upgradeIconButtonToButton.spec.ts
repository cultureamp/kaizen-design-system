import { parseJsx } from "../__tests__/utils"
import { printAst, transformSource, type TransformSourceArgs } from "../utils"
import { upgradeIconButtonToButton } from "./upgradeIconButtonToButton"

const transformIcons = (
  sourceFile: TransformSourceArgs["sourceFile"]
  // tagNames: ImportModuleNameTagsMap
): string =>
  transformSource({
    sourceFile,
    transformers: [upgradeIconButtonToButton("IconButton")],
  })

describe("upgradeIconButtonToButton()", () => {
  it("transforms IconButton to Button when href and component prop are not set", () => {
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
        inputAst
        // new Map([
        //   ["@kaizen/components", new Map([["FlagOnIcon", "FlagOnIcon"]])],
        // ])
      )
    ).toEqual(printAst(outputAst))
  })

  it("transforms aliased IconButton to Button when href and component prop are not set", () => {
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
        inputAst
        // new Map([
        //   ["@kaizen/components", new Map([["IconAlias", "HamburgerIcon"]])],
        // ])
      )
    ).toEqual(printAst(outputAst))
  })

  it("transforms IconButton to aliased Button", () => {
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
        inputAst
        // new Map([
        //   ["@kaizen/components", new Map([["FlagOnIcon", "FlagOnIcon"]])],
        // ])
      )
    ).toEqual(printAst(outputAst))
  })

  it("does not transform IconButton when href prop is set", () => {
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
        inputAst
        // new Map([
        //   ["@kaizen/components", new Map([["IconAlias", "HamburgerIcon"]])],
        // ])
      )
    ).toEqual(printAst(outputAst))
  })

  it("does not transform IconButton when component prop is set", () => {
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
        inputAst
        // new Map([
        //   ["@kaizen/components", new Map([["IconAlias", "HamburgerIcon"]])],
        // ])
      )
    ).toEqual(printAst(outputAst))
  })

  describe("import statements", () => {
    it("updates IconButton from @kaizen/components", () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
      `)
      expect(
        transformIcons(
          inputAst
          // new Map([["@kaizen/components", {}]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("updates IconButton from @kaizen/components/v1/actions", () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components/v1/actions"
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
      `)
      expect(
        transformIcons(
          inputAst
          // new Map([["@kaizen/components", {}]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("updates IconButton from @kaizen/components/v2/actions", () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components/v2/actions"
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
      `)
      expect(
        transformIcons(
          inputAst
          // new Map([["@kaizen/components", {}]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("updates aliased IconButton to Button", () => {
      const inputAst = parseJsx(`
        import { IconButton as Aliased } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
      `)
      expect(
        transformIcons(
          inputAst
          // new Map([["@kaizen/components", {}]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("does not duplicate Button import if it already exists", () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components"
        import { Button } from "@kaizen/components/v3/actions"
      `)
      const outputAst = parseJsx(`
        import { Button } from "@kaizen/components/v3/actions"
      `)
      expect(
        transformIcons(
          inputAst
          // new Map([["@kaizen/components", {}]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("does not add Button if aliased Button exists", () => {
      const inputAst = parseJsx(`
        import { IconButton } from "@kaizen/components"
        import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
      `)
      const outputAst = parseJsx(`
        import { Button as ButtonAlias } from "@kaizen/components/v3/actions"
      `)
      expect(
        transformIcons(
          inputAst
          // new Map([["@kaizen/components", {}]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("does not update import of irrelevant KAIO components", () => {
      const inputAst = parseJsx(`
        import { IconButton, Card } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Card } from "@kaizen/components"
        import { Button } from "@kaizen/components/v3/actions"
      `)
      expect(
        transformIcons(
          inputAst
          // new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("does not update import of IconButton not from KAIO", () => {
      const inputAst = parseJsx(`
        import { IconButton } from "somewhere-else"
      `)
      const outputAst = parseJsx(`
        import { IconButton } from "somewhere-else"
      `)
      expect(
        transformIcons(
          inputAst
          // new Map([
          //   [
          //     "@kaizen/components",
          //     new Map([
          //       ["AddIcon", "AddIcon"],
          //       ["IconAlias", "HamburgerIcon"],
          //     ]),
          //   ],
          //   ["somewhere-else", new Map([["HamHam", "HamburgerIcon"]])],
          // ])
        )
      ).toEqual(printAst(outputAst))
    })
  })
})

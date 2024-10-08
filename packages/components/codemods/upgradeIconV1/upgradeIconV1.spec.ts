import { parseJsx } from "../__tests__/utils"
import {
  transformSource,
  printAst,
  TransformConfig,
  ImportModuleNameTagsMap,
} from "../utils"
import { upgradeIconV1 } from "./upgradeIconV1"

const transformIcons = (
  sourceFile: TransformConfig["sourceFile"],
  tagNames: ImportModuleNameTagsMap
): string =>
  transformSource({
    sourceFile,
    astTransformer: upgradeIconV1,
    tagName: tagNames,
  })

describe("upgradeIconV1()", () => {
  describe("CaMonogramIcon to Brand", () => {
    const transformedBrandProps = 'variant="enso" style={{ width: "20px" }}'

    it("updates import from CaMonogramIcon to Brand", () => {
      const inputAst = parseJsx(`
        import { CaMonogramIcon as LogoAlias } from "@kaizen/components"
        export const TestComponent = () => <LogoAlias />
      `)
      const outputAst = parseJsx(`
        import { Brand } from "@kaizen/components"
        export const TestComponent = () => <Brand ${transformedBrandProps} />
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            ["@kaizen/components", new Map([["LogoAlias", "CaMonogramIcon"]])],
          ])
        )
      ).toEqual(printAst(outputAst))
    })

    it("does not add another Brand import if it is already imported", () => {
      const inputAst = parseJsx(`
        import { Brand, CaMonogramIcon } from "@kaizen/components"
        export const TestComponent = () => <CaMonogramIcon />
      `)
      const outputAst = parseJsx(`
        import { Brand } from "@kaizen/components"
        export const TestComponent = () => <Brand ${transformedBrandProps} />
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              "@kaizen/components",
              new Map([
                ["Brand", "Brand"],
                ["CaMonogramIcon", "CaMonogramIcon"],
              ]),
            ],
          ])
        )
      ).toEqual(printAst(outputAst))
    })

    it("uses alias for an existing import", () => {
      const inputAst = parseJsx(`
        import { Brand as KzBrand, CaMonogramIcon } from "@kaizen/components"
        export const TestComponent = () => <CaMonogramIcon />
      `)
      const outputAst = parseJsx(`
        import { Brand as KzBrand } from "@kaizen/components"
        export const TestComponent = () => <KzBrand ${transformedBrandProps} />
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              "@kaizen/components",
              new Map([
                ["KzBrand", "Brand"],
                ["CaMonogramIcon", "CaMonogramIcon"],
              ]),
            ],
          ])
        )
      ).toEqual(printAst(outputAst))
    })
  })

  describe("import statements", () => {
    it("does not update import of components which are not Icons", () => {
      const inputAst = parseJsx(`
        import { AddIcon, Card } from "@kaizen/components"
        export const TestComponent = () => <Card><AddIcon /></Card>
      `)
      const outputAst = parseJsx(`
        import { Card } from "@kaizen/components"
        import { Icon } from "@kaizen/components/future"
        export const TestComponent = () => <Card><Icon name="add" /></Card>
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              "@kaizen/components",
              new Map([
                ["AddIcon", "AddIcon"],
                ["Card", "Card"],
              ]),
            ],
          ])
        )
      ).toEqual(printAst(outputAst))
    })

    it("does not update import of components which are not from KAIO", () => {
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
        import { Icon } from "@kaizen/components/future"
        import { HamburgerIcon as HamHam } from "somewhere-else"
        export const TestComponent = () => (
          <>
            <Icon name="add" />
            <Icon name="menu" />
            <HamHam />
          </>
        )
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([
            [
              "@kaizen/components",
              new Map([
                ["AddIcon", "AddIcon"],
                ["IconAlias", "HamburgerIcon"],
              ]),
            ],
            ["somewhere-else", new Map([["HamHam", "HamburgerIcon"]])],
          ])
        )
      ).toEqual(printAst(outputAst))
    })
  })

  it("renames component and adds equivalent props", () => {
    const inputAst = parseJsx(`
      import { AddIcon, FlagOffIcon, FlagOffWhiteIcon, FlagOnIcon, HamburgerIcon as IconAlias, MeatballsIcon } from "@kaizen/components"
      export const TestComponent = () => (
        <>
          <AddIcon />
          <FlagOffIcon />
          <FlagOffWhiteIcon />
          <FlagOnIcon />
          <IconAlias />
          <MeatballsIcon />
        </>
      )
    `)
    const outputAst = parseJsx(`
      import { Icon } from "@kaizen/components/future"
      export const TestComponent = () => (
        <>
          <Icon name="add" />
          <Icon name="flag" />
          <Icon name="flag" />
          <Icon name="flag" isFilled />
          <Icon name="menu" />
          <Icon name="more_horiz" />
        </>
      )
    `)
    expect(
      transformIcons(
        inputAst,
        new Map([
          [
            "@kaizen/components",
            new Map([
              ["AddIcon", "AddIcon"],
              ["FlagOffIcon", "FlagOffIcon"],
              ["FlagOffWhiteIcon", "FlagOffWhiteIcon"],
              ["FlagOnIcon", "FlagOnIcon"],
              ["IconAlias", "HamburgerIcon"],
              ["MeatballsIcon", "MeatballsIcon"],
            ]),
          ],
        ])
      )
    ).toEqual(printAst(outputAst))
  })

  it("leaves icons which do not have a new equivalent", () => {
    const inputAst = parseJsx(`
      import { SomeInvalidIcon } from "@kaizen/components"
      export const TestComponent = () => (
        <SomeInvalidIcon />
      )
    `)
    const outputAst = parseJsx(`
      import { SomeInvalidIcon } from "@kaizen/components"
      export const TestComponent = () => (
        <SomeInvalidIcon />
      )
    `)
    expect(
      transformIcons(
        inputAst,
        new Map([
          [
            "@kaizen/components",
            new Map([["SomeInvalidationIcon", "SomeInvalidationIcon"]]),
          ],
        ])
      )
    ).toEqual(printAst(outputAst))
  })

  describe("transform existing props", () => {
    it("replaces role and aria-label with equivalent prop", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => (
          <>
            <AddIcon role="presentation" />
            <AddIcon role="img" aria-label="Add something" />
            <AddIcon role="img" aria-label={alt} />
          </>
        )
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => (
          <>
            <Icon name="add" isPresentational />
            <Icon name="add" alt="Add something" />
            <Icon name="add" alt={alt} />
          </>
        )
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("replaces classNameOverride with className prop", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" classNameOverride="mt-16" />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational className="mt-16" />
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("leaves inheritSize - this should throw a TS error for the consumer", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" inheritSize />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational
        // @todo: Apply the correct --icon-size (eg. in Tailwind: className="[--icon-size:48]")
        inheritSize />
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("removes aria-hidden", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" aria-hidden={true} />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational />
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("removes fontSize", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" fontSize={20} />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational />
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
        )
      ).toEqual(printAst(outputAst))
    })

    it("removes viewBox", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" viewBox="0 0 24 24" />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational />
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
        )
      ).toEqual(printAst(outputAst))
    })

    describe("color prop to style", () => {
      it("transforms a string value", () => {
        const inputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <AddIcon color="grey" />
              <AddIcon color="#0168b3" />
            </>
          )
        `)
        const outputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <Icon name="add" style={{ color: "grey" }} />
              <Icon name="add" style={{ color: "#0168b3" }} />
            </>
          )
        `)
        expect(
          transformIcons(
            inputAst,
            new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
          )
        ).toEqual(printAst(outputAst))
      })

      it("transforms a variable", () => {
        const inputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <AddIcon color={c.gray500} />
              <AddIcon color={variableGrey} />
            </>
          )
        `)
        const outputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <Icon name="add" style={{ color: c.gray500 }} />
              <Icon name="add" style={{ color: variableGrey }} />
            </>
          )
        `)
        expect(
          transformIcons(
            inputAst,
            new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
          )
        ).toEqual(printAst(outputAst))
      })
    })

    it("transforms height and width to style", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon height={24} width={24} />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" style={{ height: 24, width: 24 }} />
      `)
      expect(
        transformIcons(
          inputAst,
          new Map([["@kaizen/components", new Map([["AddIcon", "AddIcon"]])]])
        )
      ).toEqual(printAst(outputAst))
    })
  })
})

import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst, TransformConfig } from "../utils"
import { upgradeIconV1 } from "./upgradeIconV1"

const transformIcons = (sourceFile: TransformConfig["sourceFile"]): string =>
  transformSource({
    sourceFile,
    astTransformer: upgradeIconV1,
    tagName: new Map([
      ["AddIcon", "AddIcon"],
      ["CaMonogramIcon", "CaMonogramIcon"],
      ["FlagOffIcon", "FlagOffIcon"],
      ["FlagOffWhiteIcon", "FlagOffWhiteIcon"],
      ["FlagOnIcon", "FlagOnIcon"],
      ["IconAlias", "HamburgerIcon"],
      ["MeatballsIcon", "MeatballsIcon"],
    ]),
  })

describe("upgradeIconV1()", () => {
  it("updates imports and components", () => {
    const inputAst = parseJsx(`
      import { AddIcon, Card, CaMonogramIcon, HamburgerIcon as IconAlias } from "@kaizen/components"
      export const TestComponent = () => (
        <Card>
          <AddIcon />
          <CaMonogramIcon />
          <IconAlias />
        </Card>
      )
    `)
    const outputAst = parseJsx(`
      import { Brand, Card } from "@kaizen/components"
      import { Icon } from "@kaizen/components/future"
      export const TestComponent = () => (
        <Card>
          <Icon name="add" />
          <Brand variant="enso />
          <Icon name="menu" />
        </Card>
      )
    `)
    expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
  })

  describe("import statements", () => {
    it("updates imports of Icons", () => {
      const inputAst = parseJsx(`
        import { AddIcon, MeatballsIcon } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Icon } from "@kaizen/components/future"
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it("updates imports of aliased Icons", () => {
      const inputAst = parseJsx(`
        import { AddIcon, HamburgerIcon as IconAlias } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Icon } from "@kaizen/components/future"
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it("does not update import of components which are not Icons", () => {
      const inputAst = parseJsx(`
        import { AddIcon, Card } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Card } from "@kaizen/components"
        import { Icon } from "@kaizen/components/future"
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it("does not update import of components which are not from KAIO", () => {
      const inputAst = parseJsx(`
        import { AddIcon, HamburgerIcon as IconAlias } from "@kaizen/components"
        import { HamburgerIcon as HamHam } from "@somewhere-else"
      `)
      const outputAst = parseJsx(`
        import { Icon } from "@kaizen/components/future"
        import { HamburgerIcon as HamHam } from "@somewhere-else"
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })
  })

  it("renames component and adds equivalent props", () => {
    const inputAst = parseJsx(`
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
    expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
  })

  it("leaves icons which do not have a new equivalent", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => (
        <SomeInvalidIcon />
      )
    `)
    const outputAst = parseJsx(`
      export const TestComponent = () => (
        <SomeInvalidIcon />
      )
    `)
    expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
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
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it("replaces classNameOverride with className prop", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" classNameOverride="mt-16" />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational className="mt-16" />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
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
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it("removes aria-hidden", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" aria-hidden={true} />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it("removes fontSize", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" fontSize={20} />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    it("removes viewBox", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" viewBox="0 0 24 24" />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
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
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
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
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })
    })

    it("transforms height and width to style", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon height={24} width={24} />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" style={{ height: 24, width: 24 }} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })
  })

  describe("CaMonogramIcon to Brand", () => {
    it("replaces CaMonogramIcon with Brand variant enso and adds size", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <CaMonogramIcon />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Brand variant="enso" style={{ width: "20px" }} />
      `)
      expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
    })

    describe("transform existing props", () => {
      it("leaves role and aria-label as is", () => {
        const inputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <CaMonogramIcon role="presentation" />
              <CaMonogramIcon role="img" aria-label="Add something" />
            </>
          )
        `)
        const outputAst = parseJsx(`
          export const TestComponent = () => (
            <>
              <Brand variant="enso" style={{ width: "20px" }} role="presentation" />
              <Brand variant="enso" style={{ width: "20px" }} role="img" aria-label="Add something" />
            </>
          )
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it("leaves classNameOverride as is", () => {
        const inputAst = parseJsx(`
          export const TestComponent = () => <CaMonogramIcon classNameOverride="mt-16" />
        `)
        const outputAst = parseJsx(`
          export const TestComponent = () => <Brand variant="enso" style={{ width: "20px" }} classNameOverride="mt-16" />
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })

      it("removes inheritSize and does not add size", () => {
        const inputAst = parseJsx(`
          export const TestComponent = () => <CaMonogramIcon inheritSize />
        `)
        const outputAst = parseJsx(`
          export const TestComponent = () => <Brand variant="enso" />
        `)
        expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
      })
    })
  })
})

import { parseJsx } from "../__tests__/utils"
import { transformSource, printAst, TransformConfig } from "../utils"
import { upgradeIconV1 } from "./upgradeIconV1"

const transformIcons = (sourceFile: TransformConfig["sourceFile"]): string =>
  transformSource({
    sourceFile,
    astTransformer: upgradeIconV1,
    tagName: new Map([
      ["AddIcon", "AddIcon"],
      ["FlagOffIcon", "FlagOffIcon"],
      ["FlagOffWhiteIcon", "FlagOffWhiteIcon"],
      ["FlagOnIcon", "FlagOnIcon"],
      ["IconAlias", "HamburgerIcon"],
      ["MeatballsIcon", "MeatballsIcon"],
    ]),
  })

describe("upgradeIconV1()", () => {
  it("updates imports of updated Icons", () => {
    const inputAst = parseJsx(`
      import { AddIcon, HamburgerIcon as IconAlias, MeatballsIcon } from "@kaizen/components"
      export const TestComponent = () => (
        <>
          <AddIcon />
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
          <Icon name="menu" />
          <Icon name="more_horiz" />
        </>
      )
    `)
    expect(transformIcons(inputAst)).toEqual(printAst(outputAst))
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
          </>
        )
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => (
          <>
            <Icon name="add" isPresentational />
            <Icon name="add" alt="Add something" />
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

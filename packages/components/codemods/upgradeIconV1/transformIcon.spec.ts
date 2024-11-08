import ts from "typescript"
import { parseJsx } from "../__tests__/utils"
import { printAst } from "../utils"
import { getNewIconPropsFromOldIconName } from "./getNewIconPropsFromOldIconName"
import { transformIcon } from "./transformIcon"

export const mockedTransformer =
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const oldIconName = node.tagName.getText()
        const newIconProps = getNewIconPropsFromOldIconName(oldIconName)
        return transformIcon(node, newIconProps!.name, newIconProps!.isFilled)
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

const transformInput = (sourceFile: ts.SourceFile): string => {
  const result = ts.transform(sourceFile, [mockedTransformer])
  const transformedSource = result.transformed[0] as ts.SourceFile
  return printAst(transformedSource)
}

describe("transformIcon()", () => {
  it("renames component and adds equivalent props", () => {
    const inputAst = parseJsx(`
      export const TestComponent = () => (
        <>
          <AddIcon />
          <FlagOffIcon />
          <FlagOffWhiteIcon />
          <FlagOnIcon />
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
          <Icon name="more_horiz" />
        </>
      )
    `)
    expect(transformInput(inputAst)).toEqual(printAst(outputAst))
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
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it("replaces classNameOverride with className prop", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" classNameOverride="mt-16" />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational className="mt-16" />
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
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
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it("removes aria-hidden", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" aria-hidden={true} />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational />
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it("removes fontSize", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" fontSize={20} />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational />
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })

    it("removes viewBox", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon role="presentation" viewBox="0 0 24 24" />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" isPresentational />
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
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
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
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
        expect(transformInput(inputAst)).toEqual(printAst(outputAst))
      })
    })

    it("transforms height and width to style", () => {
      const inputAst = parseJsx(`
        export const TestComponent = () => <AddIcon height={24} width={24} />
      `)
      const outputAst = parseJsx(`
        export const TestComponent = () => <Icon name="add" style={{ height: 24, width: 24 }} />
      `)
      expect(transformInput(inputAst)).toEqual(printAst(outputAst))
    })
  })
})

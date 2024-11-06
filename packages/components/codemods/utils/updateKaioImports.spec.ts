import ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { updateKaioImports, UpdateKaioImportsArgs } from './updateKaioImports'
import { printAst } from '.'

const transformInput =
  (sourceFile: ts.SourceFile) =>
    (imports: UpdateKaioImportsArgs): string => {
      const result = ts.transform(sourceFile, [updateKaioImports(imports)])
      const transformedSource = result.transformed[0] as ts.SourceFile
      return printAst(transformedSource)
    }

describe('updateKaioImports()', () => {
  describe('remove imports', () => {
    it('removes listed named imports', () => {
      const inputAst = parseJsx(`
        import { Card, Well } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Well } from "@kaizen/components"
      `)
      expect(
        transformInput(inputAst)({
          importsToRemove: new Map([['@kaizen/components', new Set(['Card'])]]),
        }),
      ).toEqual(printAst(outputAst))
    })

    it('removes listed named aliased imports', () => {
      const inputAst = parseJsx(`
        import { Card as KzCard, Well } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Well } from "@kaizen/components"
      `)
      expect(
        transformInput(inputAst)({
          importsToRemove: new Map([['@kaizen/components', new Set(['Card'])]]),
        }),
      ).toEqual(printAst(outputAst))
    })

    it('removes import statement when all named imports are removed', () => {
      const inputAst = parseJsx(`
        import { Card } from "@kaizen/components"
        import { Select } from "@kaizen/components/future"
      `)
      const outputAst = parseJsx(`
        import { Select } from "@kaizen/components/future"
      `)
      expect(
        transformInput(inputAst)({
          importsToRemove: new Map([['@kaizen/components', new Set(['Card'])]]),
        }),
      ).toEqual(printAst(outputAst))
    })

    it('does nothing if the import does not exist', () => {
      const inputAst = parseJsx(`
        import { Select } from "@kaizen/components/future"
      `)
      const outputAst = parseJsx(`
        import { Select } from "@kaizen/components/future"
      `)
      expect(
        transformInput(inputAst)({
          importsToRemove: new Map([['@kaizen/components', new Set(['Card'])]]),
        }),
      ).toEqual(printAst(outputAst))
    })
  })

  describe('add imports', () => {
    it('creates a new import declaration for new imports', () => {
      const inputAst = parseJsx(`
        import { Well } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Well } from "@kaizen/components"
        import { Card } from "@kaizen/components/future"
      `)
      expect(
        transformInput(inputAst)({
          importsToAdd: new Map([
            [
              '@kaizen/components/future',
              new Map([['Card', { componentName: 'Card' }]]),
            ],
          ]),
        }),
      ).toEqual(printAst(outputAst))
    })

    it('creates a new import declaration for new aliased imports', () => {
      const inputAst = parseJsx(`
        import { Well } from "@kaizen/components"
      `)
      const outputAst = parseJsx(`
        import { Well } from "@kaizen/components"
        import { Card as KzCard } from "@kaizen/components/future"
      `)
      expect(
        transformInput(inputAst)({
          importsToAdd: new Map([
            [
              '@kaizen/components/future',
              new Map([['Card', { componentName: 'Card', alias: 'KzCard' }]]),
            ],
          ]),
        }),
      ).toEqual(printAst(outputAst))
    })

    it('does not add a new named import if it already exists', () => {
      const inputAst = parseJsx(`
        import { Icon } from "@kaizen/components/future"
      `)
      const outputAst = parseJsx(`
        import { Icon } from "@kaizen/components/future"
      `)
      expect(
        transformInput(inputAst)({
          importsToAdd: new Map([
            [
              '@kaizen/components/future',
              new Map([['Icon', { componentName: 'Icon' }]]),
            ],
          ]),
        }),
      ).toEqual(printAst(outputAst))
    })

    it('updates existing import declaration with new imports', () => {
      const inputAst = parseJsx(`
        import { Select } from "@kaizen/components/future"
      `)
      const outputAst = parseJsx(`
        import { Select, Card } from "@kaizen/components/future"
      `)
      expect(
        transformInput(inputAst)({
          importsToAdd: new Map([
            [
              '@kaizen/components/future',
              new Map([['Card', { componentName: 'Card' }]]),
            ],
          ]),
        }),
      ).toEqual(printAst(outputAst))
    })

    describe('insert position', () => {
      it('inserts the new import below @kaizen/components', () => {
        const inputAst = parseJsx(`
          import React from "react"
          import { Well } from "@kaizen/components"
          import styles from "@kaizen/components/dist/styles.css"
        `)
        const outputAst = parseJsx(`
          import React from "react"
          import { Well } from "@kaizen/components"
          import { Card } from "@kaizen/components/future"
          import styles from "@kaizen/components/dist/styles.css"
        `)
        expect(
          transformInput(inputAst)({
            importsToAdd: new Map([
              [
                '@kaizen/components/future',
                new Map([['Card', { componentName: 'Card' }]]),
              ],
            ]),
          }),
        ).toEqual(printAst(outputAst))
      })

      it('inserts the new import below the first subpath of @kaizen/components', () => {
        const inputAst = parseJsx(`
          import React from "react"
          import { Well } from "@kaizen/components/v1"
          import styles from "@kaizen/components/dist/styles.css"
        `)
        const outputAst = parseJsx(`
          import React from "react"
          import { Well } from "@kaizen/components/v1"
          import { Card } from "@kaizen/components/future"
          import styles from "@kaizen/components/dist/styles.css"
        `)
        expect(
          transformInput(inputAst)({
            importsToAdd: new Map([
              [
                '@kaizen/components/future',
                new Map([['Card', { componentName: 'Card' }]]),
              ],
            ]),
          }),
        ).toEqual(printAst(outputAst))
      })

      it('inserts at the top of the file if no pre-existing import of @kaizen/components', () => {
        const inputAst = parseJsx(`
          import React from "react"
        `)
        const outputAst = parseJsx(`
          import { Card } from "@kaizen/components/future"
          import React from "react"
        `)
        expect(
          transformInput(inputAst)({
            importsToAdd: new Map([
              [
                '@kaizen/components/future',
                new Map([['Card', { componentName: 'Card' }]]),
              ],
            ]),
          }),
        ).toEqual(printAst(outputAst))
      })
    })
  })
})

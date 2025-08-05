import type ts from 'typescript'
import { parseJsx } from '../__tests__/utils'
import { processImportDeclaration, type ProcessImportOptions } from './createModulePathTransformer'

const createTestOptions = (): ProcessImportOptions => ({
  importsToRemove: new Map(),
  importsToAdd: new Map(),
  renameMap: new Map([
    [
      'OldComponent',
      {
        newName: 'NewComponent',
        fromModules: ['@kaizen/components/v3/actions'],
        toModule: '@kaizen/components',
      },
    ],
    [
      'Select',
      {
        newName: 'SingleSelect',
        fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
        toModule: '@kaizen/components',
      },
    ],
  ]),
  validRenames: new Set(),
})

const getImportDeclaration = (code: string): ts.ImportDeclaration => {
  const sourceFile = parseJsx(code)
  return sourceFile.statements[0] as ts.ImportDeclaration
}

describe('processImportDeclaration', () => {
  it('should transform basic import', () => {
    const options = createTestOptions()
    const importDeclaration = getImportDeclaration(
      `import { OldComponent } from "@kaizen/components/v3/actions"`,
    )

    processImportDeclaration(importDeclaration, options)

    expect(options.importsToRemove.get('@kaizen/components/v3/actions')).toContain('OldComponent')
    expect(options.importsToAdd.get('@kaizen/components')?.get('NewComponent')).toEqual({
      componentName: 'NewComponent',
      alias: undefined,
      isTypeOnly: false,
    })
    expect(options.validRenames?.has('OldComponent')).toBe(true)
  })

  it('should transform aliased import', () => {
    const options = createTestOptions()
    const importDeclaration = getImportDeclaration(
      `import { OldComponent as MyComponent } from "@kaizen/components/v3/actions"`,
    )

    processImportDeclaration(importDeclaration, options)

    expect(options.importsToRemove.get('@kaizen/components/v3/actions')).toContain('OldComponent')
    expect(options.importsToAdd.get('@kaizen/components')?.get('NewComponent')).toEqual({
      componentName: 'NewComponent',
      alias: 'MyComponent',
      isTypeOnly: false,
    })
    expect(options.validRenames?.has('OldComponent')).toBe(true)
  })

  it('should transform type-only import at import clause level', () => {
    const options = createTestOptions()
    const importDeclaration = getImportDeclaration(
      `import type { OldComponent } from "@kaizen/components/v3/actions"`,
    )

    processImportDeclaration(importDeclaration, options)

    expect(options.importsToRemove.get('@kaizen/components/v3/actions')).toContain('OldComponent')
    expect(options.importsToAdd.get('@kaizen/components')?.get('NewComponent')).toEqual({
      componentName: 'NewComponent',
      alias: undefined,
      isTypeOnly: true,
    })
    expect(options.validRenames?.has('OldComponent')).toBe(true)
  })

  it('should transform inline type-only import', () => {
    const options = createTestOptions()
    const importDeclaration = getImportDeclaration(
      `import { type OldComponent } from "@kaizen/components/v3/actions"`,
    )

    processImportDeclaration(importDeclaration, options)

    expect(options.importsToRemove.get('@kaizen/components/v3/actions')).toContain('OldComponent')
    expect(options.importsToAdd.get('@kaizen/components')?.get('NewComponent')).toEqual({
      componentName: 'NewComponent',
      alias: undefined,
      isTypeOnly: true,
    })
    expect(options.validRenames?.has('OldComponent')).toBe(true)
  })

  it('should handle mixed imports in single declaration', () => {
    const options = createTestOptions()
    const importDeclaration = getImportDeclaration(
      `import { OldComponent, AnotherComponent } from "@kaizen/components/v3/actions"`,
    )

    processImportDeclaration(importDeclaration, options)

    expect(options.importsToRemove.get('@kaizen/components/v3/actions')).toContain('OldComponent')
    expect(options.importsToRemove.get('@kaizen/components/v3/actions')).not.toContain(
      'AnotherComponent',
    )
    expect(options.importsToAdd.get('@kaizen/components')?.get('NewComponent')).toEqual({
      componentName: 'NewComponent',
      alias: undefined,
      isTypeOnly: false,
    })
    expect(options.validRenames?.has('OldComponent')).toBe(true)
  })

  it('should ignore imports from non-targeted modules', () => {
    const options = createTestOptions()
    const importDeclaration = getImportDeclaration(
      `import { OldComponent } from "some-other-library"`,
    )

    processImportDeclaration(importDeclaration, options)

    expect(options.importsToRemove.size).toBe(0)
    expect(options.importsToAdd.size).toBe(0)
    expect(options.validRenames?.size).toBe(0)
  })

  it('should ignore imports not in rename map', () => {
    const options = createTestOptions()
    const importDeclaration = getImportDeclaration(
      `import { SomeOtherComponent } from "@kaizen/components/v3/actions"`,
    )

    processImportDeclaration(importDeclaration, options)

    expect(options.importsToRemove.size).toBe(0)
    expect(options.importsToAdd.size).toBe(0)
    expect(options.validRenames?.size).toBe(0)
  })

  it('should handle multiple fromModules for same component', () => {
    const options = createTestOptions()
    const importDeclaration1 = getImportDeclaration(
      `import { Select } from "@kaizen/components/next"`,
    )
    const importDeclaration2 = getImportDeclaration(
      `import { Select } from "@kaizen/components/future"`,
    )

    processImportDeclaration(importDeclaration1, options)

    expect(options.importsToRemove.get('@kaizen/components/next')).toContain('Select')
    expect(options.importsToAdd.get('@kaizen/components')?.get('SingleSelect')).toEqual({
      componentName: 'SingleSelect',
      alias: undefined,
      isTypeOnly: false,
    })
    expect(options.validRenames?.has('Select')).toBe(true)

    // Reset for second test
    options.importsToRemove.clear()
    options.importsToAdd.clear()
    options.validRenames?.clear()

    processImportDeclaration(importDeclaration2, options)

    expect(options.importsToRemove.get('@kaizen/components/future')).toContain('Select')
    expect(options.importsToAdd.get('@kaizen/components')?.get('SingleSelect')).toEqual({
      componentName: 'SingleSelect',
      alias: undefined,
      isTypeOnly: false,
    })
    expect(options.validRenames?.has('Select')).toBe(true)
  })

  it('should handle default imports gracefully', () => {
    const options = createTestOptions()
    const importDeclaration = getImportDeclaration(
      `import OldComponent from "@kaizen/components/v3/actions"`,
    )

    processImportDeclaration(importDeclaration, options)

    expect(options.importsToRemove.size).toBe(0)
    expect(options.importsToAdd.size).toBe(0)
    expect(options.validRenames?.size).toBe(0)
  })

  it('should handle namespace imports gracefully', () => {
    const options = createTestOptions()
    const importDeclaration = getImportDeclaration(
      `import * as Components from "@kaizen/components/v3/actions"`,
    )

    processImportDeclaration(importDeclaration, options)

    expect(options.importsToRemove.size).toBe(0)
    expect(options.importsToAdd.size).toBe(0)
    expect(options.validRenames?.size).toBe(0)
  })
})

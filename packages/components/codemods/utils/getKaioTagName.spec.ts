import { parseJsx } from '../__tests__/utils'
import {
  getKaioTagName,
  getKaioTagNamesMapByComponentName,
  getKaioTagNamesMapByPattern,
} from './getKaioTagName'

describe('getKaioTagName()', () => {
  it('returns the import name if it matches the target specifier', () => {
    const input = parseJsx('import { Well } from "@kaizen/components"')
    const tagName = getKaioTagName(input, 'Well')
    expect(tagName).toBe('Well')
  })

  it('returns the import alias if it matches the target specifier', () => {
    const input = parseJsx('import { Well as KaizenWell } from "@kaizen/components"')
    const tagName = getKaioTagName(input, 'Well')
    expect(tagName).toBe('KaizenWell')
  })

  it('returns undefined if there is no match to the target specifier', () => {
    const input = parseJsx('import { Well } from "@kaizen/well"')
    const tagName = getKaioTagName(input, 'Well')
    expect(tagName).toBe(undefined)
  })
})

describe('getKaioTagNamesMapByComponentName()', () => {
  it('returns the import names if it matches the string target specifier', () => {
    const input = parseJsx('import { Button } from "@kaizen/components"')
    const tagNames = getKaioTagNamesMapByComponentName(input, ['Button'])
    expect(tagNames).toEqual(
      new Map([
        [
          'Button',
          {
            importModuleName: '@kaizen/components',
            tagName: 'Button',
            originalName: 'Button',
          },
        ],
      ]),
    )
  })

  it('returns the import alias if it matches the target specifier', () => {
    const input = parseJsx('import { Button as KzButton } from "@kaizen/components"')
    const tagNames = getKaioTagNamesMapByComponentName(input, ['Button'])
    expect(tagNames).toEqual(
      new Map([
        [
          'KzButton',
          {
            importModuleName: '@kaizen/components',
            tagName: 'KzButton',
            originalName: 'Button',
          },
        ],
      ]),
    )
  })

  it('returns matching import names from different KAIO imports', () => {
    const input = parseJsx(`
      import { Button as KzButton } from "@kaizen/components"
      import { Button as FutureButton } from "@kaizen/components/future"
    `)
    const tagNames = getKaioTagNamesMapByComponentName(input, ['Button'])
    expect(tagNames).toEqual(
      new Map([
        [
          'KzButton',
          {
            importModuleName: '@kaizen/components',
            tagName: 'KzButton',
            originalName: 'Button',
          },
        ],
        [
          'FutureButton',
          {
            importModuleName: '@kaizen/components/future',
            tagName: 'FutureButton',
            originalName: 'Button',
          },
        ],
      ]),
    )
  })

  it('returns matching import names for multiple components', () => {
    const input = parseJsx(`
      import { Button, IconButton } from "@kaizen/components"
    `)
    const tagNames = getKaioTagNamesMapByComponentName(input, ['Button', 'IconButton'])
    expect(tagNames).toEqual(
      new Map([
        [
          'Button',
          {
            importModuleName: '@kaizen/components',
            tagName: 'Button',
            originalName: 'Button',
          },
        ],
        [
          'IconButton',
          {
            importModuleName: '@kaizen/components',
            tagName: 'IconButton',
            originalName: 'IconButton',
          },
        ],
      ]),
    )
  })

  it('returns undefined if there is no exact match to the target specifier', () => {
    const input = parseJsx(`
      import { IconButton } from "@kaizen/components"
    `)
    const tagNames = getKaioTagNamesMapByComponentName(input, ['Button'])
    expect(tagNames).toBe(undefined)
  })

  it('returns undefined if there is no match in KAIO', () => {
    const input = parseJsx(`
      import { Well } from "@kaizen/components"
      import { Button } from "@kaizen/button"
    `)
    const tagNames = getKaioTagNamesMapByComponentName(input, ['Button'])
    expect(tagNames).toBe(undefined)
  })
})

describe('getKaioTagNamesMapByPattern()', () => {
  it('returns the import names if it matches the regex target specifier', () => {
    const input = parseJsx('import { AddIcon, ArrowDownIcon, Well } from "@kaizen/components"')
    const tagNames = getKaioTagNamesMapByPattern(input, 'Icon')
    expect(tagNames).toEqual(
      new Map([
        [
          'AddIcon',
          {
            importModuleName: '@kaizen/components',
            tagName: 'AddIcon',
            originalName: 'AddIcon',
          },
        ],
        [
          'ArrowDownIcon',
          {
            importModuleName: '@kaizen/components',
            tagName: 'ArrowDownIcon',
            originalName: 'ArrowDownIcon',
          },
        ],
      ]),
    )
  })

  it('returns the import alias if it matches the target specifier', () => {
    const input = parseJsx(
      'import { AddIcon as KzAddIcon, ArrowDownIcon, Well } from "@kaizen/components"',
    )
    const tagNames = getKaioTagNamesMapByPattern(input, 'Icon')
    expect(tagNames).toEqual(
      new Map([
        [
          'KzAddIcon',
          {
            importModuleName: '@kaizen/components',
            tagName: 'KzAddIcon',
            originalName: 'AddIcon',
          },
        ],
        [
          'ArrowDownIcon',
          {
            importModuleName: '@kaizen/components',
            tagName: 'ArrowDownIcon',
            originalName: 'ArrowDownIcon',
          },
        ],
      ]),
    )
  })

  it('returns matching import names from different KAIO imports', () => {
    const input = parseJsx(`
      import { AddIcon, Well } from "@kaizen/components"
      import { Icon } from "@kaizen/components/future"
    `)
    const tagNames = getKaioTagNamesMapByPattern(input, 'Icon$')
    expect(tagNames).toEqual(
      new Map([
        [
          'AddIcon',
          {
            importModuleName: '@kaizen/components',
            tagName: 'AddIcon',
            originalName: 'AddIcon',
          },
        ],
        [
          'Icon',
          {
            importModuleName: '@kaizen/components/future',
            tagName: 'Icon',
            originalName: 'Icon',
          },
        ],
      ]),
    )
  })

  it('returns undefined if there is no match to the target specifier', () => {
    const input = parseJsx(`
      import { Well } from "@kaizen/components"
      import { AddIcon } from "@kaizen/icons"
    `)
    const tagNames = getKaioTagNamesMapByPattern(input, 'Icon')
    expect(tagNames).toBe(undefined)
  })
})

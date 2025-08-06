import { parseJsx } from '../__tests__/utils'
import {
  getKaioTagNamesMapByComponentName,
  printAst,
  transformSource,
  type TransformSourceArgs,
} from '../utils'
import { migrateV2NextToCurrent } from './migrateV2NextToCurrent'

const transformComponents = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const kaioTagNamesMap = getKaioTagNamesMapByComponentName(sourceFile, [
    'Menu',
    'MenuHeader',
    'MenuItem',
    'MenuPopover',
    'MenuSection',
    'MenuTrigger',
    'Tabs',
    'Tab',
    'TabList',
    'TabPanel',
    'Tooltip',
    'TooltipTrigger',
  ])
  return transformSource({
    sourceFile,
    transformers: [migrateV2NextToCurrent(kaioTagNamesMap!)],
  })
}

describe('migrateV2NextToCurrent', () => {
  describe('Menu import statements', () => {
    it('should update Menu next import', () => {
      const inputAst = parseJsx(`import { Menu } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { Menu } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update Menu v3/actions import', () => {
      const inputAst = parseJsx(`import { Menu } from "@kaizen/components/v3/actions"`)
      const expectedAst = parseJsx(`import { Menu } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('MenuHeader import statements', () => {
    it('should update MenuHeader next import', () => {
      const inputAst = parseJsx(`import { MenuHeader } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { MenuHeader } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update MenuHeader v3/actions import', () => {
      const inputAst = parseJsx(`import { MenuHeader } from "@kaizen/components/v3/actions"`)
      const expectedAst = parseJsx(`import { MenuHeader } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('MenuItem import statements', () => {
    it('should update MenuItem next import', () => {
      const inputAst = parseJsx(`import { MenuItem } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { MenuItem } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update MenuItem v3/actions import', () => {
      const inputAst = parseJsx(`import { MenuItem } from "@kaizen/components/v3/actions"`)
      const expectedAst = parseJsx(`import { MenuItem } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('MenuPopover import statements', () => {
    it('should update MenuPopover next import', () => {
      const inputAst = parseJsx(`import { MenuPopover } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { MenuPopover } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update MenuPopover v3/actions import', () => {
      const inputAst = parseJsx(`import { MenuPopover } from "@kaizen/components/v3/actions"`)
      const expectedAst = parseJsx(`import { MenuPopover } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('MenuSection import statements', () => {
    it('should update MenuSection next import', () => {
      const inputAst = parseJsx(`import { MenuSection } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { MenuSection } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update MenuSection v3/actions import', () => {
      const inputAst = parseJsx(`import { MenuSection } from "@kaizen/components/v3/actions"`)
      const expectedAst = parseJsx(`import { MenuSection } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('MenuTrigger import statements', () => {
    it('should update MenuTrigger next import', () => {
      const inputAst = parseJsx(`import { MenuTrigger } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { MenuTrigger } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update MenuTrigger v3/actions import', () => {
      const inputAst = parseJsx(`import { MenuTrigger } from "@kaizen/components/v3/actions"`)
      const expectedAst = parseJsx(`import { MenuTrigger } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('Tabs import statements', () => {
    it('should update Tabs next import', () => {
      const inputAst = parseJsx(`import { Tabs } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { Tabs } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update Tabs future import', () => {
      const inputAst = parseJsx(`import { Tabs } from "@kaizen/components/future"`)
      const expectedAst = parseJsx(`import { Tabs } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('Tab import statements', () => {
    it('should update Tab next import', () => {
      const inputAst = parseJsx(`import { Tab } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { Tab } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update Tab future import', () => {
      const inputAst = parseJsx(`import { Tab } from "@kaizen/components/future"`)
      const expectedAst = parseJsx(`import { Tab } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('TabList import statements', () => {
    it('should update TabList next import', () => {
      const inputAst = parseJsx(`import { TabList } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { TabList } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update TabList future import', () => {
      const inputAst = parseJsx(`import { TabList } from "@kaizen/components/future"`)
      const expectedAst = parseJsx(`import { TabList } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('TabPanel import statements', () => {
    it('should update TabPanel next import', () => {
      const inputAst = parseJsx(`import { TabPanel } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { TabPanel } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update TabPanel future import', () => {
      const inputAst = parseJsx(`import { TabPanel } from "@kaizen/components/future"`)
      const expectedAst = parseJsx(`import { TabPanel } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('Tooltip import statements', () => {
    it('should update Tooltip next import', () => {
      const inputAst = parseJsx(`import { Tooltip } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { Tooltip } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update Tooltip future import', () => {
      const inputAst = parseJsx(`import { Tooltip } from "@kaizen/components/future"`)
      const expectedAst = parseJsx(`import { Tooltip } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update Tooltip v3/overlays import', () => {
      const inputAst = parseJsx(`import { Tooltip } from "@kaizen/components/v3/overlays"`)
      const expectedAst = parseJsx(`import { Tooltip } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('TooltipTrigger import statements', () => {
    it('should update TooltipTrigger next import', () => {
      const inputAst = parseJsx(`import { TooltipTrigger } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { TooltipTrigger } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update TooltipTrigger future import', () => {
      const inputAst = parseJsx(`import { TooltipTrigger } from "@kaizen/components/future"`)
      const expectedAst = parseJsx(`import { TooltipTrigger } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should update TooltipTrigger v3/overlays import', () => {
      const inputAst = parseJsx(`import { TooltipTrigger } from "@kaizen/components/v3/overlays"`)
      const expectedAst = parseJsx(`import { TooltipTrigger } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('Mixed scenarios', () => {
    it('should merge imports', () => {
      const inputAst = parseJsx(
        `
import { Foobar, Menu, MenuItem, MenuPopover, MenuSection, MenuTrigger, } from "@kaizen/components/v3/actions"
import { Card } from "@kaizen/components"
`,
      )
      const expectedAst = parseJsx(`
import { Foobar } from "@kaizen/components/v3/actions"
import { Card, Menu, MenuItem, MenuPopover, MenuSection, MenuTrigger } from "@kaizen/components"
`)
      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should handle handle merging type imports', () => {
      const inputAst = parseJsx(
        `
import { Foobar, Menu, MenuItem, MenuPopover, MenuSection, MenuTrigger, } from "@kaizen/components/next"
import { type CardProps, FooBar } from "@kaizen/components"
`,
      )
      const expectedAst = parseJsx(`
import { Foobar } from "@kaizen/components/next"
import { type CardProps, FooBar, Menu, MenuItem, MenuPopover, MenuSection, MenuTrigger } from "@kaizen/components"
`)
      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should preserve alaised imports', () => {
      const inputAst = parseJsx(
        `
import { Foobar, Menu as KZMenu, MenuItem, MenuPopover, MenuSection, MenuTrigger, } from "@kaizen/components/next"
`,
      )
      const expectedAst = parseJsx(`
import { Foobar } from "@kaizen/components/next"
import { Menu as KZMenu, MenuItem, MenuPopover, MenuSection, MenuTrigger } from "@kaizen/components"
`)
      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should preserve aliased type imports', () => {
      const inputAst = parseJsx(
        `
import { Foobar, type Menu as KZMenu, type MenuItem as KZMenuItem } from "@kaizen/components/next"
`,
      )
      const expectedAst = parseJsx(`
import { Foobar } from "@kaizen/components/next"
import type { Menu as KZMenu, MenuItem as KZMenuItem } from "@kaizen/components"
`)
      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('Module path transformations', () => {
    it('should transform react-aria module path', () => {
      const inputAst = parseJsx(`import { Button } from "@kaizen/components/v3/react-aria"`)
      const expectedAst = parseJsx(`import { Button } from "@kaizen/components/react-aria"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should transform react-aria-components module path', () => {
      const inputAst = parseJsx(
        `import { TextField } from "@kaizen/components/v3/react-aria-components"`,
      )
      const expectedAst = parseJsx(
        `import { TextField } from "@kaizen/components/react-aria-components"`,
      )

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should handle multiple imports from react-aria modules', () => {
      const inputAst = parseJsx(`import { Button, Link } from "@kaizen/components/v3/react-aria"`)
      const expectedAst = parseJsx(`import { Button, Link } from "@kaizen/components/react-aria"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should handle aliased imports from react-aria modules', () => {
      const inputAst = parseJsx(
        `import { Button as AriaButton } from "@kaizen/components/v3/react-aria"`,
      )
      const expectedAst = parseJsx(
        `import { Button as AriaButton } from "@kaizen/components/react-aria"`,
      )

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should not interfere with regular component renaming', () => {
      const inputAst = parseJsx(`
import { Menu } from "@kaizen/components/next"
import { Button } from "@kaizen/components/v3/react-aria"
`)
      const expectedAst = parseJsx(`
import { Menu } from "@kaizen/components"
import { Button } from "@kaizen/components/react-aria"
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })
})

import { parseJsx } from '../__tests__/utils'
import {
  getKaioTagNamesMapByComponentName,
  printAst,
  transformSource,
  type TransformSourceArgs,
} from '../utils'
import { renameV2ComponentImportsAndUsages } from './renameV2ComponentImportsAndUsages'

const transformComponents = (sourceFile: TransformSourceArgs['sourceFile']): string => {
  const kaioTagNamesMap = getKaioTagNamesMapByComponentName(sourceFile, [
    'Select',
    'LikertScaleLegacy',
    'TitleBlockZen',
  ])
  return transformSource({
    sourceFile,
    transformers: [renameV2ComponentImportsAndUsages(kaioTagNamesMap!)],
  })
}

describe('renameV2ComponentImportsAndUsages', () => {
  describe('Select -> SigleSelect', () => {
    it('should rename Select import from next to SingleSelect', () => {
      const inputAst = parseJsx(`import { Select } from "@kaizen/components/next"`)
      const expectedAst = parseJsx(`import { SingleSelect } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should rename Select import from future to SingleSelect', () => {
      const inputAst = parseJsx(`import { Select } from "@kaizen/components/future"`)
      const expectedAst = parseJsx(`import { SingleSelect } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should rename Select JSX element to SingleSelect', () => {
      const inputAst = parseJsx(`
import { Select } from "@kaizen/components/next"

const MyComponent = () => <Select />
`)
      const expectedAst = parseJsx(`
import { SingleSelect } from "@kaizen/components"

const MyComponent = () => <SingleSelect />
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should rename Select[Type] to SingleSelect[Type] from future module', () => {
      const inputAst = parseJsx(`
import type { SelectProps, SelectOption, SelectOptionGroup, SelectItem, SelectOptionNode, SelectOptionGroupNode, SelectItemNode } from "@kaizen/components/future"
`)
      const expectedAst = parseJsx(`
import type { SingleSelectProps, SingleSelectOption, SingleSelectOptionGroup, SingleSelectItem, SingleSelectOptionNode, SingleSelectOptionGroupNode, SingleSelectItemNode } from "@kaizen/components"
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should rename Select[Type] to SingleSelect[Type] from next module', () => {
      const inputAst = parseJsx(`
import type { SelectProps, SelectOption, SelectOptionGroup, SelectItem, SelectOptionNode, SelectOptionGroupNode, SelectItemNode } from "@kaizen/components/next"
`)
      const expectedAst = parseJsx(`
import type { SingleSelectProps, SingleSelectOption, SingleSelectOptionGroup, SingleSelectItem, SingleSelectOptionNode, SingleSelectOptionGroupNode, SingleSelectItemNode } from "@kaizen/components"
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should preserve type-only import declaration style', () => {
      const inputAst = parseJsx(`
import type { SelectOption } from "@kaizen/components/next"

const option: SelectOption = { label: 'Test', value: 'test' }
`)
      const expectedAst = parseJsx(`
import type { SingleSelectOption } from "@kaizen/components"

const option: SingleSelectOption = { label: 'Test', value: 'test' }
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should preserve inline type import style', () => {
      const inputAst = parseJsx(`
import { type SelectItem, Button } from "@kaizen/components/next"

const item: SelectItem = { label: 'Test', value: 'test' }
`)
      const expectedAst = parseJsx(`
import { Button } from "@kaizen/components/next"
import type { SingleSelectItem } from "@kaizen/components"

const item: SingleSelectItem = { label: 'Test', value: 'test' }
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should handle mixed imports with Select types and other components', () => {
      const inputAst = parseJsx(`
import { Select, Button } from "@kaizen/components/next"
import type { SelectProps, SelectOption } from "@kaizen/components/future"

const MyComponent = (props: SelectProps) => (
  <>
    <Select />
    <Button>Click me</Button>
  </>
)

const option: SelectOption = { label: 'Test', value: 'test' }
`)
      const expectedAst = parseJsx(`
import { Button } from "@kaizen/components/next"
import { SingleSelect, type SingleSelectProps, type SingleSelectOption } from "@kaizen/components"

const MyComponent = (props: SingleSelectProps) => (
  <>
    <SingleSelect />
    <Button>Click me</Button>
  </>
)

const option: SingleSelectOption = { label: 'Test', value: 'test' }
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should handle Select with opening and closing tags', () => {
      const inputAst = parseJsx(`
import { Select } from "@kaizen/components/next"

const MyComponent = () => (
  <Select>
    <option value="1">Option 1</option>
  </Select>
)
`)
      const expectedAst = parseJsx(`
import { SingleSelect } from "@kaizen/components"

const MyComponent = () => (
  <SingleSelect>
    <option value="1">Option 1</option>
  </SingleSelect>
)
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should handle aliased imports', () => {
      const inputAst = parseJsx(`
import { Select as MySelect } from "@kaizen/components/next"

const MyComponent = () => <MySelect />
`)
      const expectedAst = parseJsx(`
import { SingleSelect as MySelect } from "@kaizen/components"

const MyComponent = () => <MySelect />
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should handle Component.SubComponent', () => {
      const inputAst = parseJsx(`
import { Select } from "@kaizen/components/next"

const MyComponent = () => (
  <Select>
    {({ items }) =>
      items.map((item) => {
        return <Select.Option />;
      })
    }
  </Select>
);
`)
      const expectedAst = parseJsx(`
import { SingleSelect } from "@kaizen/components"

const MyComponent = () => (
  <SingleSelect>
    {({ items }) =>
      items.map((item) => {
        return <SingleSelect.Option />;
      })
    }
  </SingleSelect>
);
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should not override local types of same name', () => {
      const inputAst = parseJsx(`
type SelectProps = {
  thing: string
}

const MyComponent = (props: SelectProps) => {  
  return <div>{props.customField}</div>
}
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(inputAst))
    })
  })

  describe('LikertScaleLegacy -> LikertScale', () => {
    it('should rename LikertScaleLegacy import to LikertScale', () => {
      const inputAst = parseJsx(`import { LikertScaleLegacy } from "@kaizen/components"`)
      const expectedAst = parseJsx(`import { LikertScale } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should rename LikertScaleLegacy JSX element to LikertScale', () => {
      const inputAst = parseJsx(`
import { LikertScaleLegacy } from "@kaizen/components"

const MyComponent = () => <LikertScaleLegacy />
`)
      const expectedAst = parseJsx(`
import { LikertScale } from "@kaizen/components"

const MyComponent = () => <LikertScale />
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should leave LikertScaleProps type as is', () => {
      const inputAst = parseJsx(`
import type { LikertScaleProps } from "@kaizen/components"

const MyComponent = (props: LikertScaleProps) => null
`)
      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(inputAst))
    })
  })

  describe('TitleBlockZen -> TitleBlock', () => {
    it('should rename TitleBlockZen import to TitleBlock', () => {
      const inputAst = parseJsx(`import { TitleBlockZen } from "@kaizen/components"`)
      const expectedAst = parseJsx(`import { TitleBlock } from "@kaizen/components"`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should rename TitleBlockZen JSX element to TitleBlock', () => {
      const inputAst = parseJsx(`
import { TitleBlockZen } from "@kaizen/components"

const MyComponent = () => <TitleBlockZen />
`)
      const expectedAst = parseJsx(`
import { TitleBlock } from "@kaizen/components"

const MyComponent = () => <TitleBlock />
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should leave TitleBlockProps type as is', () => {
      const inputAst = parseJsx(`
import type { TitleBlockProps } from "@kaizen/components/next"

const MyComponent = (props: TitleBlockProps) => null
`)
      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(inputAst))
    })

    it('should rename TitleBlockZen when it appears within a component prop', () => {
      const inputAst = parseJsx(`
import { TitleBlockZen } from "@kaizen/components"

const MyComponent = () => {
  return (
    <Card
      CardContent={
        <Header>
          <TitleBlockZen
            navigationTabs={props.map(prop => <NavigationTab {...prop} />)}
          />
        </Header>
      }
    />
  )
}
`)
      const expectedAst = parseJsx(`
import { TitleBlock } from "@kaizen/components"

const MyComponent = () => {
  return (
    <Card
      CardContent={
        <Header>
          <TitleBlock
            navigationTabs={props.map(prop => <NavigationTab {...prop} />)}
          />
        </Header>
      }
    />
  )
}
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })
  })

  describe('Mixed scenarios', () => {
    it('should handle multiple component imports in same file', () => {
      const inputAst = parseJsx(`
import { Select } from "@kaizen/components/next"
import { LikertScaleLegacy, TitleBlockZen } from "@kaizen/components"

const MyComponent = () => (
  <div>
    <Select />
    <LikertScaleLegacy />
    <TitleBlockZen />
  </div>
)
`)
      const expectedAst = parseJsx(`
import { SingleSelect, LikertScale, TitleBlock } from "@kaizen/components"

const MyComponent = () => (
  <div>
    <SingleSelect />
    <LikertScale />
    <TitleBlock />
  </div>
)
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(expectedAst))
    })

    it('should not transform components not in the rename map', () => {
      const inputAst = parseJsx(`
import { Button, Card } from "@kaizen/components"

const MyComponent = () => (
  <Card>
    <Button>Click me</Button>
  </Card>
)
`)

      const result = transformComponents(inputAst)
      expect(result).toBe(printAst(inputAst))
    })
  })
})

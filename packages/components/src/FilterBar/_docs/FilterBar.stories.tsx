import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { FilterBar, Filters } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Filter Bar",
  component: FilterBar,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/components",
      "import { FilterBar } from `@kaizen/components`",
    ],
    resourceLinks: {
      /** @todo: Add Github link (adjust as needed) */
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/master/packages/components/src/FilterBar",
      /** @todo (optional): Add Figma link */
      figma: "Add Figma link here",
      /** @todo (optional): Add Confluence link */
      designGuidelines: "Add Confluence link here",
    },
  },
} satisfies Meta<typeof FilterBar>

export default meta

/**
 * The Filter Bar is a collection of Filter components, used to filter data.
 */
export const Playground: StoryFn<typeof FilterBar> = () => {
  type Values = {
    flavour: string
    topping: string
    sugarLevel: number
    iceLevel: number
  }

  const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
    flavour: "jasmine-milk-tea",
  })

  const filters = [
    {
      id: "flavour",
      name: "Flavour",
      Component: (
        <FilterBar.Select
          items={[
            { value: "jasmine-milk-tea", label: "Jasmine Milk Tea" },
            { value: "honey-milk-tea", label: "Honey Milk Tea" },
            { value: "lychee-green-tea", label: "Lychee Green Tea" },
          ]}
          data-testid="testid__filter"
        />
      ),
    },
    {
      id: "topping",
      name: "Topping",
      Component: (
        <FilterBar.Select
          items={[
            { value: "none", label: "None" },
            { value: "pearls", label: "Pearls" },
            { value: "fruit-jelly", label: "Fruit Jelly" },
          ]}
          data-testid="testid__filter"
        />
      ),
    },
    {
      id: "sugarLevel",
      name: "Sugar Level",
      Component: (
        <FilterBar.Select
          items={[
            { value: 0, label: "0%" },
            { value: 50, label: "50%" },
            { value: 100, label: "100%" },
          ]}
          data-testid="testid__filter"
        />
      ),
    },
    {
      id: "iceLevel",
      name: "Ice Level",
      Component: (
        <FilterBar.Select
          items={[
            { value: 0, label: "0%" },
            { value: 50, label: "50%" },
            { value: 100, label: "100%" },
          ]}
          data-testid="testid__filter"
        />
      ),
    },
  ] satisfies Filters<Values>

  return (
    <FilterBar<Values>
      filters={filters}
      values={activeValues}
      onValuesChange={onActiveValuesChange}
    />
  )
}
Playground.parameters = {
  docs: {
    canvas: {
      sourceState: "shown",
    },
  },
}

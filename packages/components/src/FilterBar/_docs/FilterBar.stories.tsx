import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import { FilterMultiSelect } from "@kaizen/select"
import { FilterBar, Filters } from "../index"
const meta = {
  title: "Components/Filter Bar",
  component: FilterBar,
  argTypes: {
    classNameOverride: {
      type: "string",
      description: "Add extra classnames to the component.",
    },
  },
} satisfies Meta<typeof FilterBar>

export default meta

const sampleCode = `
import { FilterMultiSelect } from "@kaizen/select"

type Values = {
  flavour: string
  topping: string
  sugarLevel: number
  drank: Date
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
      />
    ),
  },
  {
    id: "topping",
    name: "Topping",
    Component: (
      <FilterBar.MultiSelect
        items={[
          { value: "none", label: "None" },
          { value: "pearls", label: "Pearls" },
          { value: "fruit-jelly", label: "Fruit Jelly" },
        ]}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.ListBox>
              {({ allItems }): JSX.Element | JSX.Element[] => {
                return allItems.map(item => (
                  <FilterMultiSelect.Option key={item.key} item={item} />
                ))
              }}
            </FilterMultiSelect.ListBox>
            <FilterMultiSelect.MenuFooter>
              <FilterMultiSelect.SelectAllButton />
              <FilterMultiSelect.ClearButton />
            </FilterMultiSelect.MenuFooter>
          </>
        )}
      </FilterBar.MultiSelect>
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
      />
    ),
  },
  {
    id: "drank",
    name: "Drank",
    Component: <FilterBar.DatePicker />,
  },
] satisfies Filters<Values>

return (
  <FilterBar<Values>
    filters={filters}
    values={activeValues}
    onValuesChange={onActiveValuesChange}
  />
)`

type Values = {
  flavour: string
  toppings: string[]
  sugarLevel: number
  drank: Date
}

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
      />
    ),
  },
  {
    id: "toppings",
    name: "Toppings",
    Component: (
      <FilterBar.MultiSelect
        items={[
          { value: "none", label: "None" },
          { value: "pearls", label: "Pearls" },
          { value: "fruit-jelly", label: "Fruit Jelly" },
        ]}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.ListBox>
              {({ allItems }): JSX.Element | JSX.Element[] =>
                allItems.map(item => (
                  <FilterMultiSelect.Option key={item.key} item={item} />
                ))
              }
            </FilterMultiSelect.ListBox>
            <FilterMultiSelect.MenuFooter>
              <FilterMultiSelect.SelectAllButton />
              <FilterMultiSelect.ClearButton />
            </FilterMultiSelect.MenuFooter>
          </>
        )}
      </FilterBar.MultiSelect>
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
      />
    ),
  },
  {
    id: "drank",
    name: "Drank",
    Component: <FilterBar.DatePicker />,
  },
] satisfies Filters<Values>

export const BasicImplementation: StoryFn<typeof FilterBar> = () => {
  const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
    flavour: "jasmine-milk-tea",
    toppings: ["pearls"],
  })

  return (
    <FilterBar<Values>
      filters={filters}
      values={activeValues}
      onValuesChange={onActiveValuesChange}
    />
  )
}
BasicImplementation.parameters = {
  docs: {
    source: {
      code: sampleCode,
    },
  },
}

export const OnValuesChange: StoryFn<typeof FilterBar> = () => {
  const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
    flavour: "jasmine-milk-tea",
    toppings: ["pearls"],
  })

  return (
    <>
      <FilterBar<Values>
        filters={filters}
        values={activeValues}
        onValuesChange={onActiveValuesChange}
      />
      <Highlight className="json">
        {JSON.stringify(activeValues, null, 4)}
      </Highlight>
    </>
  )
}

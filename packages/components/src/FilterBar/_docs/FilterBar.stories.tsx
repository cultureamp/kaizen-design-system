import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { FilterBar, Filters } from "../index"

const meta = {
  title: "Components/Filter Bar",
  component: FilterBar,
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

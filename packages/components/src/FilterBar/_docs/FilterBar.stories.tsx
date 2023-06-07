import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import { DateRange } from "~components/index"
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
type Values = {
  flavour: string
  sugarLevel: number
  iceLevel: number
  deliveryDates: DateRange
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
  {
    id: "deliveryDates",
    name: "Delivery Dates",
    Component: <FilterBar.DateRangePicker locale="en-AU" />,
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
  sugarLevel: number
  iceLevel: number
  deliveryDates: DateRange
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
  {
    id: "deliveryDates",
    name: "Delivery Dates",
    Component: <FilterBar.DateRangePicker locale="en-AU" />,
  },
] satisfies Filters<Values>

export const BasicImplementation: StoryFn<typeof FilterBar> = () => {
  const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
    flavour: "jasmine-milk-tea",
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

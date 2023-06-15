import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import queryString from "query-string"
import Highlight from "react-highlight"
import {
  encodeQueryParams,
  StringParam,
  ArrayParam,
  DateParam,
  encodeDate,
  encodeObject,
  decodeDate,
  decodeObject,
  QueryParamConfig,
  decodeQueryParams,
} from "serialize-query-params"
import { DateRange } from "~components/index"
import { FilterMultiSelect } from "../../index"
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
  topping: string[]
  deliveryDates: DateRange
  drank: Date
}

const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
  flavour: "jasmine-milk-tea",
  toppings: ["pearls", "fruit-jelly"]
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
    id: "deliveryDates",
    name: "Delivery Dates",
    Component: <FilterBar.DateRangePicker />,
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
  deliveryDates: DateRange
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
    id: "deliveryDates",
    name: "Delivery Dates",
    Component: <FilterBar.DateRangePicker />,
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
    toppings: ["pearls", "fruit-jelly"],
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
    toppings: ["pearls", "fruit-jelly"],
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

export const ExternalEventValuesUpdate: StoryFn<typeof FilterBar> = () => {
  const [values, setValues] = useState<Partial<Values>>({
    flavour: "jasmine-milk-tea",
    toppings: ["pearls", "fruit-jelly"],
  })

  const DateRangeParam = {
    encode: dateRange => {
      if (!dateRange) return undefined
      return (
        encodeObject({
          from: encodeDate(dateRange?.from),
          to: encodeDate(dateRange?.to),
        }) ?? undefined
      )
    },

    decode: (dateRangeStr): DateRange | undefined => {
      const obj = decodeObject(dateRangeStr)
      return obj
        ? {
            from: decodeDate(obj.from) ?? undefined,
            to: decodeDate(obj.to) ?? undefined,
          }
        : undefined
    },
  } satisfies QueryParamConfig<DateRange | undefined>

  const paramConfigMap = {
    flavour: StringParam,
    toppings: ArrayParam,
    deliveryDates: DateRangeParam,
    drank: DateParam,
  }

  const encodedQueryParams = encodeQueryParams(paramConfigMap, values)
  const decodedQueryParams = decodeQueryParams(
    paramConfigMap,
    encodedQueryParams
  )

  return (
    <>
      <FilterBar<Values>
        filters={filters}
        values={values}
        onValuesChange={setValues}
      />

      <div className="flex gap-8 my-16">
        <button
          type="button"
          onClick={() => setValues({ ...values, flavour: "honey-milk-tea" })}
        >
          Update Flavour to honey-milk-tea
        </button>
        <button
          type="button"
          onClick={() => setValues({ ...values, toppings: ["fruit-jelly"] })}
        >
          Update Toppings to fruit-jelly
        </button>
        <button type="button" onClick={() => setValues({})}>
          Clear all values
        </button>
      </div>

      <code className="mt-16">Values:</code>
      <Highlight className="json">{JSON.stringify(values, null, 4)}</Highlight>

      <code>
        queryString.stringify(encodeQueryParams(paramConfigMap, values))
      </code>
      <Highlight className="json">
        {queryString.stringify(encodedQueryParams)}
      </Highlight>

      <code>decodeQueryParams(paramConfigMap, encodedQueryParams)</code>
      <Highlight className="json">
        {JSON.stringify(decodedQueryParams, null, 4)}
      </Highlight>
    </>
  )
}

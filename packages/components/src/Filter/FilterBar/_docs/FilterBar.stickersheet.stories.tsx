import React, { useState } from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { FilterBar, Filters } from "../index"

export default {
  title: "Components/Filter Bar",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

type Values = {
  flavour: string
  topping: string
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
    id: "drank",
    name: "Drank",
    Component: <FilterBar.DatePicker />,
  },
] satisfies Filters<Values>

type ValuesRemovable = {
  flavour: string
  topping: string
}

const removableFilters = [
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
    isRemovable: true,
  },
] satisfies Filters<ValuesRemovable>

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const [activeValues, setActiveValues] = useState<Partial<Values>>({
      flavour: "jasmine-milk-tea",
    })
    const [activeValuesOverflow, setActiveValuesOverflow] = useState<
      Partial<Values>
    >({
      flavour: "jasmine-milk-tea",
      sugarLevel: 50,
    })
    const [valuesRemovableAllActive, setValuesRemovableAllActive] = useState<
      Partial<ValuesRemovable>
    >({ topping: "pearls" })
    const [valuesRemovablePartialActive, setValuesRemovablePartialActive] =
      useState<Partial<ValuesRemovable>>({})

    return (
      <>
        <StickerSheet title="Filter Bar" layout="stretch">
          <StickerSheet.Row>
            <FilterBar<Values>
              filters={filters}
              values={activeValues}
              onValuesChange={setActiveValues}
            />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet title="Overflow (container 500px)" layout="stretch">
          <StickerSheet.Row>
            <div style={{ maxWidth: "500px" }}>
              <FilterBar<Values>
                filters={filters}
                values={activeValuesOverflow}
                onValuesChange={setActiveValuesOverflow}
              />
            </div>
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet title="Removable; All active" layout="stretch">
          <StickerSheet.Row>
            <FilterBar<ValuesRemovable>
              filters={removableFilters}
              values={valuesRemovableAllActive}
              onValuesChange={setValuesRemovableAllActive}
            />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet title="Removable; Partial active" layout="stretch">
          <StickerSheet.Row>
            <FilterBar<ValuesRemovable>
              filters={removableFilters}
              values={valuesRemovablePartialActive}
              onValuesChange={setValuesRemovablePartialActive}
            />
          </StickerSheet.Row>
        </StickerSheet>
      </>
    )
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}

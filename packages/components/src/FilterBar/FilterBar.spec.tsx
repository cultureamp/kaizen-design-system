import React, { useState } from "react"
import { render, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterBar, FilterBarProps } from "./FilterBar"
import { FiltersValues } from "./context/types"
import { Filters } from "./types"

const user = userEvent.setup()

const TEST_ID__FILTER = "testid__filter"

type ValuesSimple = {
  flavour: string
  topping: string
  sugarLevel: number
  iceLevel: number
}

const simpleFilters = [
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
        data-testid={TEST_ID__FILTER}
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
        data-testid={TEST_ID__FILTER}
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
        data-testid={TEST_ID__FILTER}
      />
    ),
  },
] satisfies Filters<ValuesSimple>

type ValuesRemovable = {
  flavour: string
  topping: string
}

const filtersRemovable = [
  {
    id: "flavour",
    name: "Flavour",
    Component: (
      <FilterBar.Select
        items={[{ value: "jasmine-milk-tea", label: "Jasmine Milk Tea" }]}
      />
    ),
    isRemovable: true,
  },
  {
    id: "topping",
    name: "Topping",
    Component: (
      <FilterBar.Select items={[{ value: "pearls", label: "Pearls" }]} />
    ),
    isRemovable: true,
  },
] satisfies Filters<ValuesRemovable>

const FilterBarWrapper = <T extends FiltersValues>({
  filters,
  defaultValues,
  ...customProps
}: Partial<FilterBarProps<T>> & {
  filters: FilterBarProps<T>["filters"]
  defaultValues?: FilterBarProps<T>["values"]
}): JSX.Element => {
  const [activeValues, setActiveValues] = useState<Partial<T>>(
    defaultValues ?? {}
  )

  return (
    <FilterBar<T>
      filters={filters}
      values={activeValues}
      onValuesChange={setActiveValues}
      {...customProps}
    />
  )
}

describe("<FilterBar />", () => {
  it("renders filters in the provided order", () => {
    const { getAllByTestId } = render(
      <FilterBarWrapper<ValuesSimple> filters={simpleFilters} />
    )
    const filters = getAllByTestId(TEST_ID__FILTER)
    expect(filters.length).toBe(3)
    expect(filters[0]).toHaveTextContent("Flavour")
    expect(filters[1]).toHaveTextContent("Sugar Level")
    expect(filters[2]).toHaveTextContent("Ice Level")
  })

  describe("Removable filters", () => {
    it("shows inactive filters in the Add Filters menu only", async () => {
      const { getByRole, queryByText } = render(
        <FilterBarWrapper<ValuesRemovable> filters={filtersRemovable} />
      )
      expect(queryByText("Topping")).not.toBeInTheDocument()

      const addFiltersButton = getByRole("button", { name: "Add Filters" })
      await user.click(addFiltersButton)

      const list = getByRole("list")
      const menuOption = within(list).getByRole("button", { name: "Topping" })

      await waitFor(() => {
        expect(menuOption).toBeVisible()
      })
    })

    it("shows removable filter as active if there is a default value", () => {
      const { getByRole } = render(
        <FilterBarWrapper<ValuesRemovable>
          filters={filtersRemovable}
          defaultValues={{ topping: "pearls" }}
        />
      )
      expect(getByRole("button", { name: "Topping : Pearls" })).toBeVisible()
      expect(
        getByRole("button", { name: "Remove filter - Topping" })
      ).toBeVisible()
    })

    it("does not show active removable filters in the Add Filters menu", async () => {
      const { getByRole } = render(
        <FilterBarWrapper<ValuesRemovable>
          filters={filtersRemovable}
          defaultValues={{ topping: "pearls" }}
        />
      )

      const addFiltersButton = getByRole("button", { name: "Add Filters" })
      await user.click(addFiltersButton)

      const list = getByRole("list")
      const menuOption = within(list).queryByRole("button", { name: "Topping" })
      await waitFor(() => {
        expect(menuOption).not.toBeInTheDocument()
      })
    })
  })

  describe("External events", () => {
    it("allows updating the values via an external event", async () => {
      const Wrapper = (): JSX.Element => {
        type ExternalEventValues = {
          flavour: string
        }

        const [values, setValues] = useState<Partial<ExternalEventValues>>({})

        const filters = [
          {
            id: "flavour",
            name: "Flavour",
            Component: (
              <FilterBar.Select
                items={[
                  { value: "honey-milk-tea", label: "Honey Milk Tea" },
                  { value: "lychee-green-tea", label: "Lychee Green Tea" },
                ]}
              />
            ),
          },
        ] satisfies Filters<ExternalEventValues>

        return (
          <div>
            <FilterBar
              filters={filters}
              values={values}
              onValuesChange={setValues}
            />
            <button
              type="button"
              onClick={() => setValues({ flavour: "honey-milk-tea" })}
            >
              Update Flavour to honey-milk-tea
            </button>
          </div>
        )
      }

      const { getByRole } = render(<Wrapper />)

      const flavourButton = getByRole("button", { name: "Flavour" })
      expect(flavourButton.textContent).toEqual("Flavour")

      await user.click(
        getByRole("button", { name: "Update Flavour to honey-milk-tea" })
      )

      await waitFor(() => {
        expect(flavourButton.textContent).toEqual("Flavour:Honey Milk Tea")
      })
    })
  })
})

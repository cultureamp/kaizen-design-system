import React, { useState } from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterBar, FilterBarProps } from "./FilterBar"
import { Filters } from "./types"

const user = userEvent.setup()

const TEST_ID__FILTER = "testid__filter"

type Values = {
  flavour: string
  topping: string
  sugarLevel: number
  iceLevel: number
}

const FilterBarWrapper = (
  customProps?: Partial<FilterBarProps<Values>>
): JSX.Element => {
  const [activeValues, setActiveValues] = useState<Partial<Values>>({})

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
          data-testid={TEST_ID__FILTER}
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
      isRemovable: true,
    },
  ] satisfies Filters<Values>

  return (
    <FilterBar<Values>
      filters={filters}
      values={activeValues}
      onValuesChange={setActiveValues}
      {...customProps}
    />
  )
}

describe("<FilterBar />", () => {
  it("renders filters in the provided order", () => {
    const { getAllByTestId } = render(<FilterBarWrapper />)
    const filters = getAllByTestId(TEST_ID__FILTER)
    expect(filters.length).toBe(4)
    expect(filters[0]).toHaveTextContent("Flavour")
    expect(filters[1]).toHaveTextContent("Topping")
    expect(filters[2]).toHaveTextContent("Sugar Level")
    expect(filters[3]).toHaveTextContent("Ice Level")
  })

  describe("Removable filters", () => {
    it("shows a remove button for removable filters", () => {
      const { getByRole, queryByRole } = render(<FilterBarWrapper />)
      expect(
        queryByRole("button", { name: "Remove filter - Sugar Level" })
      ).not.toBeInTheDocument()
      expect(
        getByRole("button", { name: "Remove filter - Ice Level" })
      ).toBeVisible()
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

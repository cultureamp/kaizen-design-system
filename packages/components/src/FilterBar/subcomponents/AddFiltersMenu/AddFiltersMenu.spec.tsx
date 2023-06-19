import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  FilterBarProvider,
  FilterBarProviderProps,
} from "../../context/FilterBarContext"
import { Filters } from "../../types"
import { AddFiltersMenu } from "./AddFiltersMenu"

const user = userEvent.setup()

type Values = {
  coffee: string
  tea: string
  milk: string
}

const AddFiltersMenuWrapper = ({
  filters,
}: {
  filters: FilterBarProviderProps<Values>["filters"]
}): JSX.Element => (
  <FilterBarProvider<Values>
    filters={filters}
    values={{}}
    onValuesChange={() => undefined}
  >
    {() => <AddFiltersMenu />}
  </FilterBarProvider>
)

describe("<AddFiltersMenu />", () => {
  it("shows inactive filters", async () => {
    const filters = [
      {
        id: "coffee",
        name: "Coffee",
        Component: <div />,
        isRemovable: true,
      },
      {
        id: "tea",
        name: "Tea",
        Component: <div />,
      },
      {
        id: "milk",
        name: "Milk",
        Component: <div />,
        isRemovable: true,
      },
    ] satisfies Filters<Values>

    const { getByRole, queryByRole } = render(
      <AddFiltersMenuWrapper filters={filters} />
    )

    const addFiltersButton = getByRole("button", { name: "Add Filters" })
    await user.click(addFiltersButton)

    await waitFor(() => {
      expect(getByRole("list")).toBeVisible()
    })
    expect(getByRole("button", { name: "Coffee" })).toBeVisible()
    expect(queryByRole("button", { name: "Tea" })).not.toBeInTheDocument()
    expect(getByRole("button", { name: "Milk" })).toBeVisible()
  })

  it("disables the Add Filters button when there are no inactive filters", () => {
    const filters = [
      {
        id: "coffee",
        name: "Coffee",
        Component: <div />,
      },
    ] satisfies Filters<Values>

    const { getByRole } = render(<AddFiltersMenuWrapper filters={filters} />)

    const addFiltersButton = getByRole("button", { name: "Add Filters" })
    expect(addFiltersButton).toBeDisabled()
  })
})

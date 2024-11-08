import React from "react"
import { screen, waitFor, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterBarProvider } from "../../context/FilterBarContext"
import { FilterBarButton, FilterBarButtonProps } from "./FilterBarButton"

const user = userEvent.setup()

type Values = {
  coffee: string
}

const FilterBarButtonWrapper = (props: Partial<FilterBarButtonProps>): JSX.Element => (
  <FilterBarProvider<Values>
    filters={[
      {
        id: "coffee",
        name: "Coffee",
        Component: <div />,
      },
    ]}
    values={{}}
    onValuesChange={() => undefined}
  >
    {(filters) => (
      <>
        {Object.values(filters).map(({ id, name }) => (
          <FilterBarButton key={id} filterId={id} label={name} isRemovable={false} {...props} />
        ))}
      </>
    )}
  </FilterBarProvider>
)

describe("<FilterBarButton />", () => {
  it("does not show a remove button when it is not removable", async () => {
    const { getByRole, queryByRole } = render(<FilterBarButtonWrapper />)
    await waitFor(() => {
      expect(getByRole("button", { name: "Coffee" })).toBeVisible()
    })
    expect(queryByRole("button", { name: "Remove filter - Coffee" })).not.toBeInTheDocument()
  })

  it("shows a remove button when it is removable", async () => {
    render(<FilterBarButtonWrapper isRemovable />)
    const filterButton = await screen.findByRole("button", { name: "Coffee" })
    await waitFor(() => {
      expect(filterButton).toBeVisible()
    })

    const removeButton = screen.getByRole("button", {
      name: "Remove filter - Coffee",
    })
    expect(removeButton).toBeVisible()

    await user.click(removeButton)
    await waitFor(() => {
      expect(filterButton).not.toBeInTheDocument()
    })
  })
})

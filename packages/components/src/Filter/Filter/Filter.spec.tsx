import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterButton } from "../../FilterButton"
import { Filter, FilterProps } from "./Filter"

const FilterWrapper = (customProps?: Partial<FilterProps>): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      filterButton={(filterButtonProps): JSX.Element => (
        <FilterButton label="Label" {...filterButtonProps} />
      )}
      {...customProps}
    >
      <div>Filter Contents</div>
    </Filter>
  )
}

describe("<Filter />", () => {
  it("does not show content initially", () => {
    render(<FilterWrapper />)
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("shows content when isOpen is true", async () => {
    render(<FilterWrapper isOpen />)
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeVisible()
      expect(screen.getByText("Filter Contents")).toBeVisible()
    })
  })

  it("shows content when trigger button is clicked", async () => {
    render(<FilterWrapper />)
    const filterButton = screen.getByRole("button", { name: "Label" })
    await userEvent.click(filterButton)
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeVisible()
      expect(screen.getByText("Filter Contents")).toBeVisible()
    })
  })

  it("shows content when trigger button on keydown enter", async () => {
    render(<FilterWrapper />)
    const filterButton = screen.getByRole("button", { name: "Label" })
    await userEvent.tab()
    expect(filterButton).toHaveFocus()
    userEvent.keyboard("{Enter}")

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeVisible()
      expect(screen.getByText("Filter Contents")).toBeVisible()
    })
  })
})

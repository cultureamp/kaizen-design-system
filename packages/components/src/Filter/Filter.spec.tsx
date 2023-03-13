import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Filter, FilterProps } from "./Filter"

const FilterWrapper = (customProps?: Partial<FilterProps>): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      filterButton={(triggerButtonProps): JSX.Element => (
        <button label="Label" {...triggerButtonProps} />
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

  it("shows content when isOpen is true", () => {
    render(<FilterWrapper isOpen />)
    expect(screen.queryByRole("dialog")).toBeInTheDocument()
    expect(screen.queryByText("Filter Contents")).toBeInTheDocument()
  })

  it("shows content when trigger button is clicked", async () => {
    render(<FilterWrapper />)
    const filterButton = screen.getByRole("button")
    await userEvent.click(filterButton)
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
      expect(screen.queryByText("Filter Contents")).toBeInTheDocument()
    })
  })

  it("shows content when trigger button on keydown enter", async () => {
    render(<FilterWrapper />)
    const filterButton = screen.getByRole("button")
    await userEvent.tab()
    expect(filterButton).toHaveFocus()
    userEvent.keyboard("{Enter}")

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
      expect(screen.queryByText("Filter Contents")).toBeInTheDocument()
    })
  })
})

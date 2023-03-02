import React from "react"
import { render, screen } from "@testing-library/react"
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

  it("show content when isOpen is true", () => {
    render(<FilterWrapper isOpen />)
    expect(screen.queryByRole("dialog")).toBeInTheDocument()
    expect(screen.queryByText("Filter Contents")).toBeInTheDocument()
  })
})

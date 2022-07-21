import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useSelectionContext } from "../../provider"
import { SearchInput } from "./"

// TODO: could be a good place to add tests for debounce if needed

jest.mock("../../provider", () => ({
  useSelectionContext: jest.fn(),
}))

const SearchInputWrapper = () => <SearchInput label="label-mock" />

describe("<SearchInput /> - interaction", () => {
  describe("Given searchQuery is provided", () => {
    it("shows searchQuery as value", () => {
      ;(useSelectionContext as jest.Mock).mockReturnValue({
        searchQuery: "search-query-mock",
      })
      render(<SearchInputWrapper />)
      expect(screen.getByRole("searchbox")).toHaveValue("search-query-mock")
    })
  })

  it("triggers setSearchQuery with input value when user types the input", () => {
    const spy = jest.fn()
    ;(useSelectionContext as jest.Mock).mockReturnValue({
      setSearchQuery: spy,
    })

    render(<SearchInputWrapper />)
    const search = screen.getByRole("searchbox")
    userEvent.type(search, "want to search this text")

    expect(spy).toHaveBeenLastCalledWith("want to search this text")
  })

  it("triggers setSearchQuery with input value when clear the input", () => {
    const spy = jest.fn()
    ;(useSelectionContext as jest.Mock).mockReturnValue({
      searchQuery: "search-query-mock",
      setSearchQuery: spy,
    })

    render(<SearchInputWrapper />)
    const clearButton = screen.getByRole("button")
    userEvent.click(clearButton)

    expect(spy).toHaveBeenLastCalledWith("")
  })
})

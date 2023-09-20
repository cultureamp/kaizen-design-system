import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  MultiSelectOptions,
  MultiSelectOptionsProps,
} from "./MultiSelectOptions"

const user = userEvent.setup()

const onChange = jest.fn()
const testOptions = [
  {
    label: "Pancakes",
    value: "pancakes",
  },
  {
    label: "Waffle",
    value: "waffle",
  },
  {
    label: "Toastie",
    value: "toastie",
  },
]

const MultiSelectOptionsWrapper = (
  customProps?: Partial<MultiSelectOptionsProps>
): JSX.Element => (
  <MultiSelectOptions
    id="id--options"
    options={testOptions}
    selectedValues={[]}
    onChange={onChange}
    {...customProps}
  />
)

describe("<MultiSelectOptions />", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("contains the number of options available in the accessible description", () => {
    const { getByRole } = render(<MultiSelectOptionsWrapper />)
    const expectedDescription = `Options available: ${testOptions.length}`
    expect(getByRole("group")).toHaveAccessibleDescription(expectedDescription)
  })

  describe("No options", () => {
    it("renders empty state message when no options are available", () => {
      const { getByText } = render(<MultiSelectOptionsWrapper options={[]} />)
      expect(getByText("No options available")).toBeVisible()
    })
  })

  describe("Has options", () => {
    it("renders available options", () => {
      const { getAllByRole } = render(<MultiSelectOptionsWrapper />)
      const options = getAllByRole("checkbox")
      expect(options.length).toBe(3)
      expect(options[0]).toHaveAccessibleName("Pancakes")
      expect(options[1]).toHaveAccessibleName("Waffle")
      expect(options[2]).toHaveAccessibleName("Toastie")
    })

    it("renders the correct checked status for each option", () => {
      const { getAllByRole } = render(
        <MultiSelectOptionsWrapper selectedValues={["waffle"]} />
      )
      const options = getAllByRole("checkbox")
      expect(options[0]).not.toBeChecked()
      expect(options[1]).toBeChecked()
      expect(options[2]).not.toBeChecked()
    })

    it("returns updated selected values when selecting an option", async () => {
      const { getByRole } = render(
        <MultiSelectOptionsWrapper selectedValues={["pancakes"]} />
      )
      const waffleOption = getByRole("checkbox", { name: "Waffle" })
      await user.click(waffleOption)
      await waitFor(() => {
        expect(onChange).toBeCalledWith(["pancakes", "waffle"])
      })
    })

    it("returns updated selected values when unselecting an option", async () => {
      const { getByRole } = render(
        <MultiSelectOptionsWrapper selectedValues={["pancakes", "waffle"]} />
      )
      const waffleOption = getByRole("checkbox", { name: "Waffle" })
      await user.click(waffleOption)
      await waitFor(() => {
        expect(onChange).toBeCalledWith(["pancakes"])
      })
    })
  })
})

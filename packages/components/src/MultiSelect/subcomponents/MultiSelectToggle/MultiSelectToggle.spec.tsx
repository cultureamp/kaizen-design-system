import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MultiSelectToggle, MultiSelectToggleProps } from "./MultiSelectToggle"

const user = userEvent.setup()

const onClick = jest.fn()

const MultiSelectToggleWrapper = (
  customProps?: Partial<MultiSelectToggleProps>
): JSX.Element => (
  <>
    <span id="id--label">Waffle</span>
    <MultiSelectToggle
      selectedOptions={[]}
      onClick={onClick}
      isOpen={false}
      aria-labelledby="id--label"
      aria-controls="id--dialog"
      {...customProps}
      onRemoveOption={() => undefined}
      onRemoveAllOptions={() => undefined}
    />
    <div id="id--dialog">Dialog</div>
  </>
)

describe("<MultiSelectToggle />", () => {
  afterEach(() => {
    onClick.mockClear()
  })

  it("has default accessible attributes on toggle button", () => {
    const { getByRole } = render(<MultiSelectToggleWrapper />)
    const toggleButton = getByRole("button", { name: "Waffle" })

    expect(toggleButton).toHaveAttribute("aria-haspopup", "dialog")
    expect(toggleButton).toHaveAttribute("aria-controls", "id--dialog")
    expect(toggleButton).toHaveAttribute("aria-expanded", "false")
  })

  it("updates accessible attribute to reflect open state", () => {
    const { getByRole } = render(<MultiSelectToggleWrapper isOpen />)
    const toggleButton = getByRole("button", { name: "Waffle" })

    expect(toggleButton).toHaveAttribute("aria-expanded", "true")
  })

  it("calls onClick when clicking on the toggle container", async () => {
    render(<MultiSelectToggleWrapper id="toggle-container" />)

    const toggle = document.getElementById("toggle-container")
    if (toggle) await user.click(toggle)

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  it("calls onClick when clicking on the chevron button", async () => {
    const { getByRole } = render(<MultiSelectToggleWrapper />)
    const toggleButton = getByRole("button", { name: "Waffle" })

    if (toggleButton) await user.click(toggleButton)

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe("Has no selected options", () => {
    it("does not show the clear all button", () => {
      const { queryByRole } = render(<MultiSelectToggleWrapper />)
      expect(
        queryByRole("button", { name: "Remove all options from Waffle" })
      ).not.toBeInTheDocument()
    })
  })

  describe("Has selected options", () => {
    it("does not call onClick when clearing a single selected item", async () => {
      const { getByRole } = render(
        <MultiSelectToggleWrapper
          selectedOptions={[{ value: "waffle", label: "Waffle" }]}
        />
      )
      await user.click(getByRole("button", { name: "Remove option: Waffle" }))
      await waitFor(() => {
        expect(onClick).not.toHaveBeenCalled()
      })
    })

    it("does not call onClick when clearing all selected items", async () => {
      const { getByRole } = render(
        <MultiSelectToggleWrapper
          selectedOptions={[{ value: "waffle", label: "Waffle" }]}
        />
      )
      await user.click(
        getByRole("button", { name: "Remove all options from Waffle" })
      )
      await waitFor(() => {
        expect(onClick).not.toHaveBeenCalled()
      })
    })
  })
})

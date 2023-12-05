import React, { useState } from "react"
import { render, waitFor, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MultiSelect, MultiSelectProps } from "./MultiSelect"

const defaultOptions = [
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

const MultiSelectWrapper = ({
  isOpen: propsIsOpen = false,
  selectedValues: propsSelectedValues = new Set(),
  ...otherProps
}: Partial<MultiSelectProps>): JSX.Element => {
  const [selectedValues, setSelectedValues] =
    useState<MultiSelectProps["selectedValues"]>(propsSelectedValues)
  const [isOpen, setIsOpen] = useState<boolean>(propsIsOpen)
  return (
    <MultiSelect
      items={defaultOptions}
      label="Jalapeno"
      {...otherProps}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      selectedValues={selectedValues}
      onSelectedValuesChange={setSelectedValues}
    />
  )
}

const user = userEvent.setup()

describe("<MultiSelect />", () => {
  describe("accessible name and description", () => {
    it("has an accessible name and description when provided a description", () => {
      const { getByRole } = render(
        <MultiSelectWrapper description="A short description" />
      )
      const toggleButton = getByRole("button", {
        name: "Jalapeno",
        description: "A short description",
      })

      expect(toggleButton).toBeInTheDocument()
    })
  })

  describe("id", () => {
    it("uses the consumer-provided id", async () => {
      const { getByTestId, getByRole } = render(
        <MultiSelectWrapper
          id="waffle"
          label="Jalapeno"
          items={defaultOptions}
          selectedValues={new Set()}
          data-testid="test-id--waffle"
          isOpen
        />
      )

      await waitFor(() => {
        expect(getByTestId("test-id--waffle")).toHaveAttribute("id", "waffle")
        expect(getByRole("button", { name: "Jalapeno" })).toHaveAttribute(
          "aria-labelledby",
          "waffle--label"
        )
        expect(getByRole("dialog")).toHaveAttribute("id", "waffle--popover")
      })
    })

    it("creates a fallback id when one is not provided", () => {
      const { getByTestId } = render(
        <MultiSelectWrapper data-testid="test-id--waffle" />
      )
      expect(getByTestId("test-id--waffle")).toHaveAttribute("id")
    })
  })

  describe("Open popover", () => {
    it("updates accessible attribute to reflect open state", async () => {
      const { getByRole } = render(<MultiSelectWrapper id="jalapeno" />)
      const toggleButton = getByRole("button", { name: "Jalapeno" })

      expect(toggleButton).toHaveAttribute("aria-haspopup", "dialog")
      expect(toggleButton).toHaveAttribute("aria-controls", "jalapeno--popover")
      expect(toggleButton).toHaveAttribute("aria-expanded", "false")

      await user.click(toggleButton)

      await waitFor(() => {
        expect(getByRole("dialog")).toBeVisible()
        expect(toggleButton).toHaveAttribute("aria-expanded", "true")
      })
    })

    it("opens the popover on toggle click", async () => {
      const { getByRole } = render(<MultiSelectWrapper id="jalapeno" />)

      const toggle = document.getElementById("jalapeno--toggle")
      if (toggle) await user.click(toggle)

      await waitFor(() => {
        expect(getByRole("dialog")).toBeVisible()
      })
    })

    it("opens the popover on pressing Spacebar key", async () => {
      const { getByRole } = render(<MultiSelectWrapper />)

      await user.tab()
      await waitFor(() => {
        expect(getByRole("button", { name: "Jalapeno" })).toHaveFocus()
      })

      await user.keyboard(" ")
      await waitFor(() => {
        expect(getByRole("dialog")).toBeVisible()
      })
    })

    it("opens the popover on pressing Enter key", async () => {
      const { getByRole } = render(<MultiSelectWrapper />)

      await user.tab()
      await waitFor(() => {
        expect(getByRole("button", { name: "Jalapeno" })).toHaveFocus()
      })

      await user.keyboard("{Enter}")
      await waitFor(() => {
        expect(getByRole("dialog")).toBeVisible()
      })
    })
  })

  describe("Close popover", () => {
    it("closes the popover on ESC", async () => {
      const { getByRole } = render(<MultiSelectWrapper />)

      const toggleButton = getByRole("button", { name: "Jalapeno" })
      await user.click(toggleButton)

      const popover = getByRole("dialog")
      await waitFor(() => {
        expect(popover).toBeVisible()
      })

      await user.keyboard("{Escape}")
      await waitFor(() => {
        expect(popover).not.toBeInTheDocument()
        expect(toggleButton).toHaveFocus()
      })
    })

    it("closes the popover on click outside", async () => {
      const { getByRole } = render(<MultiSelectWrapper />)

      const toggleButton = getByRole("button", { name: "Jalapeno" })
      await user.click(toggleButton)

      const popover = getByRole("dialog")
      await waitFor(() => {
        expect(popover).toBeVisible()
      })

      await user.click(document.body)
      await waitFor(() => {
        expect(popover).not.toBeInTheDocument()
        expect(toggleButton).toHaveFocus()
      })
    })

    it("does not close the popover when clearing a selected option", async () => {
      const { getByRole, getByLabelText } = render(
        <MultiSelectWrapper selectedValues={new Set(["pancakes"])} />
      )

      const toggleButton = getByRole("button", { name: "Jalapeno" })
      await user.click(toggleButton)

      const popover = getByRole("dialog")
      await waitFor(() => {
        expect(popover).toBeVisible()
      })

      await user.click(getByLabelText("Remove option: Pancakes"))
      await waitFor(() => {
        expect(popover).toBeVisible()
      })
    })
    it("does not close the popover when clearing all selected options", async () => {
      const { getByRole } = render(
        <MultiSelectWrapper selectedValues={new Set(["pancakes"])} />
      )

      const toggleButton = getByRole("button", { name: "Jalapeno" })
      await user.click(toggleButton)

      const popover = getByRole("dialog")
      await waitFor(() => {
        expect(popover).toBeVisible()
      })

      await user.click(
        getByRole("button", { name: "Remove all options from Jalapeno" })
      )

      await waitFor(() => {
        expect(popover).toBeVisible()
      })
    })
  })

  describe("Focus lock", () => {
    describe("When open", () => {
      it("restricts focusable elements to toggle button and popover contents", async () => {
        const { getByRole } = render(
          <MultiSelectWrapper
            items={[{ label: "Pancakes", value: "pancakes" }]}
            isOpen
          />
        )
        const toggleButton = getByRole("button", { name: "Jalapeno" })
        const dialog = getByRole("dialog")
        expect(dialog).toHaveFocus()

        await user.tab()
        await waitFor(() => {
          expect(getByRole("checkbox", { name: "Pancakes" })).toHaveFocus()
        })

        await user.tab()
        await waitFor(() => {
          expect(toggleButton).toHaveFocus()
        })
      })

      describe("When closed", () => {
        it("has expected focus order", async () => {
          const { getByRole, getByLabelText } = render(
            <MultiSelectWrapper selectedValues={new Set(["waffle"])} />
          )
          const toggleButton = getByRole("button", { name: "Jalapeno" })

          await user.tab()
          await waitFor(() => {
            expect(toggleButton).toHaveFocus()
          })

          await user.tab()
          await waitFor(() => {
            expect(getByLabelText("Remove option: Waffle")).toHaveFocus()
          })

          await user.tab()
          await waitFor(() => {
            expect(
              getByRole("button", { name: "Remove all options from Jalapeno" })
            ).toHaveFocus()
          })
        })
      })
    })
  })

  it("shows selected items in the selected order", async () => {
    const { getByRole, getAllByRole } = render(
      <MultiSelectWrapper
        id="jalapeno"
        selectedValues={new Set(["toastie"])}
        isOpen
      />
    )
    const waffleOption = getByRole("checkbox", { name: "Waffle" })
    await user.click(waffleOption)

    await waitFor(() => {
      const selectedItemsTags = getAllByRole("listitem")
      expect(selectedItemsTags.length).toBe(2)
      expect(selectedItemsTags[0]).toHaveTextContent("Toastie")
      expect(selectedItemsTags[1]).toHaveTextContent("Waffle")
    })
  })
})

describe("Removing an option", () => {
  it("removes the option when the clear button is clicked", async () => {
    const { getByRole, getByText, getByLabelText } = render(
      <MultiSelectWrapper selectedValues={new Set(["waffle"])} />
    )

    const waffleOption = getByText("Waffle")
    const toggleButton = getByRole("button", { name: "Jalapeno" })
    await user.click(toggleButton)

    const popover = getByRole("dialog")
    await waitFor(() => {
      expect(popover).toBeVisible()
    })

    const removeButton = getByLabelText("Remove option: Waffle")
    await user.click(removeButton)
    await waitFor(() => {
      expect(waffleOption).not.toBeInTheDocument()
    })
  })
})

describe("Removing all options", () => {
  it("removes all selected options when the 'clear all' button is clicked", async () => {
    const { getByRole, getByText } = render(
      <MultiSelectWrapper selectedValues={new Set(["pancakes", "waffle"])} />
    )

    const pancakesOption = getByText("Pancakes")
    const waffleOption = getByText("Waffle")

    const clearAllButton = getByRole("button", {
      name: "Remove all options from Jalapeno",
    })
    await user.click(clearAllButton)
    await waitFor(() => {
      expect(pancakesOption).not.toBeInTheDocument()
      expect(waffleOption).not.toBeInTheDocument()
    })
  })
})

describe("Has validation status", () => {
  it("renders a validation message", () => {
    render(
      <MultiSelectWrapper
        selectedValues={new Set(["waffle"])}
        validationMessage={{
          status: "error",
          message: "No waffles are available",
        }}
      />
    )
    expect(screen.getByText("No waffles are available")).toBeInTheDocument()
  })
  it("describes the Toggle", () => {
    render(
      <MultiSelectWrapper
        selectedValues={new Set(["waffle"])}
        label="Breakfast menu"
        validationMessage={{
          status: "caution",
          message: "Only four waffles remain",
        }}
      />
    )
    expect(
      screen.getByRole("button", {
        name: "Breakfast menu",
        description: "Only four waffles remain",
      })
    ).toBeInTheDocument()
  })
  it("announces the validation message before the Toggle's description", () => {
    const description = "Choose you breakfast."
    const validationMessage = "Only four waffles remain."

    render(
      <MultiSelectWrapper
        selectedValues={new Set(["waffle"])}
        label="Breakfast menu"
        description={description}
        validationMessage={{
          status: "caution",
          message: "Only four waffles remain.",
        }}
      />
    )
    expect(
      screen.getByRole("button", {
        name: "Breakfast menu",
        description: `${validationMessage} ${description}`,
      })
    ).toBeInTheDocument()
  })
})

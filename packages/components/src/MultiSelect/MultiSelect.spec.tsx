import React, { useState } from "react"
import { render, waitFor } from "@testing-library/react"
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
    useState<Set<React.Key>>(propsSelectedValues)
  const [isOpen, setIsOpen] = useState<boolean>(propsIsOpen)
  return (
    <MultiSelect
      options={defaultOptions}
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
  describe("id", () => {
    it("uses the consumer-provided id", async () => {
      const { getByTestId, getByRole } = render(
        <MultiSelectWrapper
          id="waffle"
          label="Jalapeno"
          options={defaultOptions}
          isOpen={false}
          selectedValues={new Set()}
          data-testid="test-id--waffle"
        />
      )
      const toggleButton = getByRole("button", { name: "Jalapeno" })
      await user.click(toggleButton)

      await waitFor(() => {
        expect(getByTestId("test-id--waffle")).toHaveAttribute("id", "waffle")
        expect(toggleButton).toHaveAttribute("aria-labelledby", "waffle--label")
        expect(getByRole("dialog")).toHaveAttribute("id", "waffle--popover")
      })
    })

    it("creates a fallback id when one is not provided", async () => {
      const { getByTestId } = render(
        <MultiSelectWrapper data-testid="test-id--waffle" />
      )

      await waitFor(() => {
        expect(getByTestId("test-id--waffle")).toHaveAttribute("id")
      })
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

    it("does not close the popover when clearing selected options", async () => {
      const { getByRole } = render(
        <MultiSelectWrapper selectedValues={new Set(["pancakes"])} />
      )

      const toggleButton = getByRole("button", { name: "Jalapeno" })
      await user.click(toggleButton)

      const popover = getByRole("dialog")
      await waitFor(() => {
        expect(popover).toBeVisible()
      })

      await user.click(getByRole("button", { name: "Clear waffle" }))
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
            options={[{ label: "Pancakes", value: "pancakes" }]}
          />
        )
        const toggleButton = getByRole("button", { name: "Jalapeno" })

        await user.click(toggleButton)
        await waitFor(() => {
          expect(toggleButton).toHaveFocus()
        })

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
          const { getByRole } = render(
            <MultiSelectWrapper selectedValues={new Set(["waffle"])} />
          )
          const toggleButton = getByRole("button", { name: "Jalapeno" })

          await user.tab()
          await waitFor(() => {
            expect(toggleButton).toHaveFocus()
          })

          await user.tab()
          await waitFor(() => {
            expect(getByRole("button", { name: "Clear waffle" })).toHaveFocus()
          })

          await user.tab()
          await waitFor(() => {
            expect(
              getByRole("button", { name: "Clear all waffles" })
            ).toHaveFocus()
          })
        })
      })
    })
  })
})

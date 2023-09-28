import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Select, SelectProps } from "./Select"
import { singleMockItems } from "./_docs/mockData"

const user = userEvent.setup()

const SelectWrapper = ({
  items = singleMockItems,
  selectedKey,
  onSelectionChange,
  ...props
}: Partial<SelectProps>): JSX.Element => {
  const [selected, setSelected] = React.useState<SelectProps["selectedKey"]>(
    selectedKey ?? null
  )
  return (
    <Select
      id="id--select"
      label="Mock Label"
      items={items}
      description="This is a description"
      selectedKey={selected}
      onSelectionChange={(selection): void => {
        setSelected(selection)
        onSelectionChange?.(selection)
      }}
      {...props}
    />
  )
}

describe("<Select />", () => {
  describe("Trigger", () => {
    it("makes sure the menu to be labelled by trigger", () => {
      const { getByRole } = render(<SelectWrapper selectedKey="batch-brew" />)
      const menu = getByRole("combobox", {
        name: "Batch brew Mock Label",
      })
      expect(menu).toHaveTextContent("Batch brew")
    })

    describe("when uncontrolled", () => {
      it("does not show the menu initially", () => {
        const { queryByRole } = render(<SelectWrapper />)
        const menu = queryByRole("listbox")
        expect(menu).not.toBeInTheDocument()
      })

      it("shows the menu when defaultOpen is set to true", async () => {
        const { getByRole } = render(<SelectWrapper defaultOpen />)
        const menu = getByRole("listbox")
        await waitFor(() => {
          expect(menu).toBeVisible()
        })
      })
    })

    describe("when controlled", () => {
      it("shows the menu based on the isOpen prop", async () => {
        const { getByRole } = render(<SelectWrapper isOpen />)
        const menu = getByRole("listbox")
        await waitFor(() => {
          expect(menu).toBeVisible()
        })
      })

      it("fires the onOpenChange callback when the trigger is interacted", async () => {
        const onOpenChange = jest.fn()
        const { getByRole } = render(
          <SelectWrapper
            selectedKey="batch-brew"
            defaultOpen
            onOpenChange={onOpenChange}
          />
        )
        const trigger = getByRole("combobox", {
          name: "Batch brew Mock Label",
        })
        await user.click(trigger)
        await waitFor(() => {
          expect(onOpenChange).toBeCalledTimes(1)
          expect(onOpenChange).toBeCalledWith(false)
        })
      })
    })

    describe("Trigger - Mouse interaction", () => {
      describe("Given the menu is closed", () => {
        it("is opened when user clicks on the trigger", async () => {
          const { getByRole } = render(
            <SelectWrapper selectedKey="batch-brew" />
          )
          const trigger = getByRole("combobox", {
            name: "Batch brew Mock Label",
          })
          await user.click(trigger)
          await waitFor(() => {
            expect(getByRole("listbox")).toBeVisible()
          })
        })
      })

      describe("Given the menu is opened", () => {
        it("is closed when user clicks on the trigger", async () => {
          const { getByRole, queryByRole } = render(
            <SelectWrapper selectedKey="batch-brew" defaultOpen />
          )
          const trigger = getByRole("combobox", {
            name: "Batch brew Mock Label",
          })

          await user.click(trigger)
          await waitFor(() => {
            expect(queryByRole("listbox")).not.toBeInTheDocument()
          })
        })

        it("is closed when user clicks outside of the menu", async () => {
          const { queryByRole } = render(<SelectWrapper defaultOpen />)
          await user.click(document.body)
          await waitFor(() => {
            expect(queryByRole("listbox")).not.toBeInTheDocument()
          })
        })

        it("is closed when user clicks on an option", async () => {
          const { getByRole, queryByRole } = render(
            <SelectWrapper defaultOpen />
          )
          const buttonInsideMenu = getByRole("option", {
            name: "Mocha",
          })
          await user.click(buttonInsideMenu)
          await waitFor(() => {
            expect(queryByRole("listbox")).not.toBeInTheDocument()
          })
        })
      })
    })

    describe("Trigger- Keyboard interaction", () => {
      describe("Given the menu is closed", () => {
        it("allows the user to tab to the trigger", async () => {
          const { getByRole } = render(
            <SelectWrapper selectedKey="batch-brew" />
          )
          const trigger = getByRole("combobox", {
            name: "Batch brew Mock Label",
          })
          await user.tab()
          await waitFor(() => {
            expect(trigger).toHaveFocus()
          })
        })

        it("opens the menu when hits enter key", async () => {
          const { getByRole } = render(
            <SelectWrapper selectedKey="batch-brew" />
          )
          const trigger = getByRole("combobox", {
            name: "Batch brew Mock Label",
          })
          await user.tab()
          await waitFor(() => {
            expect(trigger).toHaveFocus()
          })
          await user.keyboard("{Enter}")
          await waitFor(() => {
            expect(getByRole("listbox")).toBeVisible()
          })
        })
      })

      describe("Given the menu is opened", () => {
        it("moves the focus to the first focusable element inside the menu initially", async () => {
          const { getByRole } = render(<SelectWrapper defaultOpen />)
          expect(getByRole("listbox")).toBeVisible()
          await waitFor(() => {
            expect(getByRole("option", { name: "Short black" })).toHaveFocus()
          })
        })
        it("is closed when hits the escape key", async () => {
          const { getByRole } = render(<SelectWrapper defaultOpen />)
          const menu = getByRole("listbox")
          await waitFor(() => {
            expect(menu).toBeVisible()
          })
          await user.keyboard("{Escape}")
          await waitFor(() => {
            expect(menu).not.toBeInTheDocument()
          })
        })
      })
    })
  })

  describe("Selection", () => {
    describe("Selection - Visual content", () => {
      describe("Given no selectedKey", () => {
        it("shows all the options unselected", async () => {
          const { getByRole } = render(<SelectWrapper defaultOpen />)
          await waitFor(() => {
            expect(
              getByRole("option", { name: "Short black", selected: false })
            ).toBeVisible()
            expect(
              getByRole("option", { name: "Long black", selected: false })
            ).toBeVisible()
            expect(
              getByRole("option", { name: "Batch brew", selected: false })
            ).toBeVisible()
          })
        })

        it("shows the listbox labelled by the provided label", async () => {
          const { getByLabelText } = render(<SelectWrapper defaultOpen />)
          const listBox = getByLabelText("Mock Label", {
            selector: "ul",
          })
          await waitFor(() => {
            expect(listBox).toBeInTheDocument()
          })
        })
      })

      describe("Given selectedKey is [batch-brew]", () => {
        it("shows only option is selected", async () => {
          const { getByRole } = render(
            <SelectWrapper selectedKey="batch-brew" defaultOpen />
          )
          await waitFor(() => {
            expect(
              getByRole("option", { name: "Short black", selected: false })
            ).toBeVisible()
            expect(
              getByRole("option", { name: "Long black", selected: false })
            ).toBeVisible()
            expect(
              getByRole("option", { name: "Batch brew", selected: true })
            ).toBeVisible()
          })
        })
      })
    })

    describe("Selection - Mouse interaction", () => {
      it("fires onSelectionChange when clicks on a option", async () => {
        const spy = jest.fn()
        const { getByRole } = render(
          <SelectWrapper defaultOpen onSelectionChange={spy} />
        )
        const option1 = getByRole("option", { name: "Batch brew" })

        await user.click(option1)
        await waitFor(() => {
          expect(spy).toHaveBeenCalledTimes(1)
        })
      })
    })

    describe("Selection - Keyboard interaction", () => {
      describe("Given no selectedKeys", () => {
        it("focuses on the first option when tabs onto the list", async () => {
          const { getByRole } = render(<SelectWrapper />)
          await user.tab()
          await user.keyboard("{Enter}")
          await waitFor(() => {
            expect(getByRole("option", { name: "Short black" })).toHaveFocus()
          })
        })
      })

      describe("Given selectedKey is batch-brew", () => {
        it("focuses the first selected option when tabs onto the list", async () => {
          const { getByRole } = render(
            <SelectWrapper selectedKey="batch-brew" />
          )
          await user.tab()
          await user.keyboard("{Enter}")
          await waitFor(() => {
            expect(getByRole("option", { name: "Batch brew" })).toHaveFocus()
          })
        })
      })

      it("keeps the focus ring at the first element when hits arrow up key on it", async () => {
        const { getByRole } = render(<SelectWrapper />)
        await user.tab()
        await user.keyboard("{ArrowUp}")
        await waitFor(() => {
          expect(getByRole("option", { name: "Short black" })).toHaveFocus()
        })
      })

      it("selects the option when hits enter on a non-selected option", async () => {
        const { getByRole } = render(<SelectWrapper defaultOpen />)

        await user.tab()
        await waitFor(() => {
          expect(
            getByRole("option", { name: "Short black", selected: false })
          ).toHaveFocus()
        })
        await user.keyboard("{Enter}")

        await user.click(
          getByRole("combobox", { name: "Short black Mock Label" })
        )
        await waitFor(() => {
          expect(
            getByRole("option", { name: "Short black", selected: true })
          ).toBeVisible()
        })
      })

      it("fires onSelectionChange when hits enter on a option", async () => {
        const spy = jest.fn()
        const { getByRole } = render(
          <SelectWrapper onSelectionChange={spy} defaultOpen />
        )
        const trigger = getByRole("combobox", { name: "Select Mock Label" })

        await user.tab()
        await waitFor(() => {
          expect(
            getByRole("option", { name: "Short black", selected: false })
          ).toHaveFocus()
        })

        await user.keyboard("{Enter}")
        await waitFor(() => {
          expect(spy).toHaveBeenCalledTimes(1)
          expect(trigger).toHaveAccessibleName("Short black Mock Label")
        })
      })
    })
  })
})

import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { singleMockItems } from "../../docs/MockData"
import { Select, SelectProps } from "./Select"

const SelectWrapper = ({
  items = singleMockItems,
  selectedKey,
  onSelectionChange,
  ...props
}: Partial<SelectProps>) => {
  const [selected, setSelected] = React.useState<SelectProps["selectedKey"]>(
    selectedKey ?? null
  )
  return (
    <Select
      id="select"
      label="Mock Label"
      items={singleMockItems}
      description="This is a description"
      selectedKey={selected}
      onSelectionChange={selection => {
        setSelected(selection)
        onSelectionChange?.(selection)
      }}
      {...props}
    />
  )
}

describe("<Select>", () => {
  describe("Trigger", () => {
    describe("Trigger - Visual content", () => {
      it("shows the trigger with placeholder when no option is selected", () => {
        render(<SelectWrapper />)
        const trigger = screen.getByRole("button", {
          name: "Mock Label Select",
        })
        expect(trigger).toBeVisible()
      })
    })

    it("makes sure the menu to be labelled by trigger", () => {
      render(<SelectWrapper selectedKey="id-sre" />)
      const menu = screen.getByRole("button", {
        name: "Mock Label SRE",
      })
      expect(menu).toHaveTextContent("SRE")
    })

    describe("when uncontrolled", () => {
      it("does not show the menu initially", () => {
        render(<SelectWrapper />)
        const menu = screen.queryByRole("listbox")
        expect(menu).not.toBeInTheDocument()
      })

      it("shows the menu when defaultOpen is set to true", () => {
        render(<SelectWrapper defaultOpen />)
        const menu = screen.queryByRole("listbox")
        expect(menu).toBeVisible()
      })
    })
    describe("when controlled", () => {
      it("shows the menu based on the isOpen prop", () => {
        render(<SelectWrapper isOpen />)
        const menu = screen.queryByRole("listbox")

        expect(menu).toBeVisible()
      })

      it("fires the onOpenChange callback when the trigger is interacted", async () => {
        const onOpenChange = jest.fn<void, [boolean]>()
        render(
          <SelectWrapper
            selectedKey="id-sre"
            isOpen
            onOpenChange={onOpenChange}
          />
        )
        const trigger = screen.getByRole("button", {
          name: "Mock Label SRE",
        })
        userEvent.click(trigger)
        await waitFor(() => {
          expect(onOpenChange).toBeCalledTimes(1)
          expect(onOpenChange).toBeCalledWith(false)
        })
      })
    })

    describe("Trigger - Mouse interaction", () => {
      describe("Given the menu is closed", () => {
        it("is opened when user clicks on the trigger", async () => {
          render(<SelectWrapper selectedKey="id-sre" />)
          const trigger = screen.getByRole("button", {
            name: "Mock Label SRE",
          })
          userEvent.click(trigger)
          await waitFor(() => {
            expect(screen.queryByRole("listbox")).toBeVisible()
          })
        })
      })

      describe("Given the menu is opened", () => {
        it("is closed when user clicks on the trigger", async () => {
          render(<SelectWrapper selectedKey="id-sre" defaultOpen />)
          const trigger = screen.getByRole("button", {
            name: "Mock Label SRE",
          })

          userEvent.click(trigger)
          await waitFor(() => {
            expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
          })
        })

        it("is closed when user clicks outside of the menu", async () => {
          render(<SelectWrapper defaultOpen />)
          userEvent.click(document.body)
          await waitFor(() => {
            expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
          })
        })

        it("is closed when user clicks on an option", async () => {
          render(<SelectWrapper defaultOpen />)
          const buttonInsideMenu = screen.getByRole("option", {
            name: "Others",
          })
          userEvent.click(buttonInsideMenu)
          await waitFor(() => {
            expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
          })
        })
      })
    })

    describe("Trigger- Keyboard interaction", () => {
      describe("Given the menu is closed", () => {
        it("allows the user to tab to the trigger", async () => {
          render(<SelectWrapper selectedKey="id-sre" />)
          const trigger = screen.getByRole("button", {
            name: "Mock Label SRE",
          })
          userEvent.tab()
          userEvent.tab()
          await waitFor(() => {
            expect(trigger).toHaveFocus()
          })
        })
        it("opens the menu when hits enter key", async () => {
          render(<SelectWrapper selectedKey="id-sre" />)
          const trigger = screen.getByRole("button", {
            name: "Mock Label SRE",
          })
          trigger.focus()
          userEvent.keyboard("{Enter}")
          await waitFor(() => {
            expect(screen.queryByRole("listbox")).toBeVisible()
          })
        })
      })
      describe("Given the menu is opened", () => {
        it("moves the focus to the first focusable element inside the menu initially", async () => {
          render(<SelectWrapper defaultOpen />)
          expect(screen.queryByRole("listbox")).toBeVisible()
          await waitFor(() => {
            expect(
              screen.queryByRole("option", { name: "Front-End" })
            ).toHaveFocus()
          })
        })
        it("is closed when hits the escape key", async () => {
          render(<SelectWrapper defaultOpen />)
          await waitFor(() => {
            expect(screen.queryByRole("listbox")).toBeVisible()
          })
          userEvent.keyboard("{Escape}")
          await waitFor(() => {
            expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
          })
        })
      })
    })
  })

  describe("Selection", () => {
    describe("Selection - Visual content", () => {
      describe("Given no selectedKey", () => {
        it("shows all the options unselected", () => {
          render(<SelectWrapper defaultOpen />)
          expect(
            screen.getByRole("option", {
              name: "Front-End",
              selected: false,
            })
          ).toBeVisible()
          expect(
            screen.getByRole("option", {
              name: "Back-End",
              selected: false,
            })
          ).toBeVisible()
          expect(
            screen.getByRole("option", {
              name: "SRE",
              selected: false,
            })
          ).toBeVisible()
        })

        it("shows the listbox labelled by the provided label", () => {
          render(<SelectWrapper defaultOpen />)
          const listBox = screen.getByLabelText("Mock Label", {
            selector: "ul",
          })
          expect(listBox).toBeInTheDocument()
        })
      })

      describe("Given selectedKey is [id-sre]", () => {
        it("shows only option is selected", () => {
          render(<SelectWrapper selectedKey="id-sre" defaultOpen />)
          expect(
            screen.getByRole("option", {
              name: "Front-End",
              selected: false,
            })
          ).toBeVisible()
          expect(
            screen.getByRole("option", {
              name: "Back-End",
              selected: false,
            })
          ).toBeVisible()
          expect(
            screen.getByRole("option", {
              name: "SRE",
              selected: true,
            })
          ).toBeVisible()
        })
      })
    })

    describe("Selection - Mouse interaction", () => {
      it("fires onSelectionChange when clicks on a option", async () => {
        const spy = jest.fn()
        render(<SelectWrapper defaultOpen onSelectionChange={spy} />)
        const option1 = screen.getByRole("option", {
          name: "SRE",
        })

        await userEvent.click(option1)
        await waitFor(() => {
          expect(spy).toHaveBeenCalledTimes(1)
        })
      })
    })

    describe("Selection - Keyboard interaction", () => {
      describe("Given no selectedKeys", () => {
        it("focuses on the first option when tabs onto the list", async () => {
          render(<SelectWrapper />)
          await userEvent.tab()
          await userEvent.tab()
          await userEvent.keyboard("{Enter}")
          await waitFor(() => {
            expect(
              screen.getByRole("option", { name: "Front-End" })
            ).toHaveFocus()
          })
        })
      })

      describe("Given selectedKey is id-sre", () => {
        it("focuses the first selected option when tabs onto the list", async () => {
          render(<SelectWrapper selectedKey="id-sre" />)
          await userEvent.tab()
          await userEvent.tab()
          await userEvent.keyboard("{Enter}")
          await waitFor(() => {
            expect(screen.getByRole("option", { name: "SRE" })).toHaveFocus()
          })
        })
      })

      it("keeps the focus ring at the first element when hits arrow up key on it", async () => {
        render(<SelectWrapper />)
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard("{ArrowUp}")
        await waitFor(() => {
          expect(
            screen.getByRole("option", { name: "Front-End" })
          ).toHaveFocus()
        })
      })

      it("selects the option when hits enter on a non-selected option", async () => {
        render(<SelectWrapper defaultOpen />)

        await userEvent.tab()
        await waitFor(() => {
          expect(
            screen.getByRole("option", {
              name: "Front-End",
              selected: false,
            })
          ).toBeVisible()
        })
        await userEvent.keyboard("{Enter}")
        await userEvent.keyboard("{Enter}")
        await waitFor(() => {
          expect(
            screen.getByRole("option", {
              name: "Front-End",
              selected: true,
            })
          ).toBeVisible()
        })
      })

      it("fires onSelectionChange when hits enter on a option", async () => {
        const spy = jest.fn()
        render(<SelectWrapper onSelectionChange={spy} defaultOpen />)
        const trigger = screen.getByRole("button", {
          name: "Mock Label Select",
        })
        await userEvent.tab()
        await waitFor(() => {
          expect(
            screen.getByRole("option", {
              name: "Front-End",
              selected: false,
            })
          ).toBeVisible()
        })
        await userEvent.keyboard("{Enter}")

        await waitFor(() => {
          expect(spy).toHaveBeenCalledTimes(1)
          expect(trigger).toHaveAccessibleName("Mock Label Front-End")
        })
      })
    })
  })
})

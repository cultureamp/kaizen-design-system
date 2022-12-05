import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { singleItems } from "../../docs/MockData"
import { Select, SelectProps } from "./Select"

const SelectWrapper = (props: Partial<SelectProps>) => (
  <Select
    {...props}
    id="select"
    label="label"
    onSelectionChange={() => undefined}
    items={singleItems}
    description="This is a description"
    selectedKey={"id-sre"}
    trigger={triggerProps => (
      <Select.TriggerButton {...triggerProps} placeholder="Placeholder" />
    )}
  >
    {({ items, state }) =>
      items.map(item => (
        <Select.Option key={item.key} item={item} state={state} />
      ))
    }
  </Select>
)

describe("<Select /> - Visual content", () => {
  it("shows the trigger with placeholder when no option is selected", () => {})
  render(
    <Select
      id="select"
      label="label"
      items={singleItems}
      selectedKey={null}
      trigger={triggerProps => (
        <Select.TriggerButton {...triggerProps} placeholder="Placeholder" />
      )}
    >
      {({ items, state }) =>
        items.map(item => (
          <Select.Option key={item.key} item={item} state={state} />
        ))
      }
    </Select>
  )
  const trigger = screen.getByRole("button", {
    name: "label Placeholder",
  })
  expect(trigger).toBeVisible()
})

it("makes sure the menu to be labelled by trigger", () => {
  render(<SelectWrapper />)
  const menu = screen.getByRole("button", {
    name: "label SRE",
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
    render(<SelectWrapper isOpen />)
    const menu = screen.queryByRole("listbox")
    expect(menu).toBeVisible()
  })
})
describe("when controlled", () => {
  it("shows the menu based on the isOpen prop", () => {
    const { rerender } = render(<SelectWrapper isOpen />)
    const menu = screen.queryByRole("listbox")
    expect(menu).toBeVisible()
    rerender(<SelectWrapper isOpen={false} />)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })

  it("fires the onOpenChange callback when the trigger is interacted", async () => {
    const onOpenChange = jest.fn<void, [boolean]>()
    render(<SelectWrapper isOpen onOpenChange={onOpenChange} />)
    const trigger = screen.getByRole("button", {
      name: "label Placeholder",
    })
    userEvent.click(trigger)
    await waitFor(() => {
      expect(onOpenChange).toBeCalledTimes(1)
      expect(onOpenChange).toBeCalledWith(false)
    })
  })
})

describe("<Trigger /> - Mouse interaction", () => {
  describe("Given the menu is closed", () => {
    it("is opened when user clicks on the trigger", async () => {
      render(<SelectWrapper />)
      const trigger = screen.getByRole("button", {
        name: "label Placeholder",
      })
      userEvent.click(trigger)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).toBeVisible()
      })
    })
  })

  describe("Given the menu is opened", () => {
    it("is closed when user clicks on the trigger", async () => {
      render(<SelectWrapper defaultOpen />)
      const trigger = screen.getByRole("button", {
        name: "label Placeholder",
      })
      userEvent.click(trigger)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })

    it("is closed when user clicks outside of the menu", async () => {
      render(<SelectWrapper defaultOpen />)
      userEvent.click(document.body)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })

    it("remains open when user clicks inside of the menu", async () => {
      render(<SelectWrapper defaultOpen />)
      const buttonInsideMenu = screen.getByRole("button", {
        name: "menu-content-button-mock",
      })
      userEvent.click(buttonInsideMenu)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).toBeVisible()
      })
    })
  })
})

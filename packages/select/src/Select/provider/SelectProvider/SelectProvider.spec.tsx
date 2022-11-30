import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Select } from "../../Select"
import { ItemType } from "../../types"
import { SelectProvider, SelectProviderProps } from "./SelectProvider"

const itemsMock: ItemType[] = [
  {
    label: "option-1-label-mock",
    value: "option-1-value-mock",
  },
  {
    label: "option-2-label-mock",
    value: "option-2-value-mock",
  },
  {
    label: "option-3-label-mock",
    value: "option-3-value-mock",
  },
]

const SelectProviderWrapper = ({
  items = itemsMock,
  selectedKey,
  onSelectionChange,
  ...props
}: Partial<SelectProviderProps>) => {
  const [selected, setSelected] = useState<SelectProviderProps["selectedKey"]>(
    selectedKey ?? null
  )
  const [isOpen, setIsOpen] = useState<boolean>()
  const handleOpenChange = () => setIsOpen(!isOpen)

  return (
    <SelectProvider
      items={items}
      id="single-select"
      label="selection-label-mock"
      selectedKey={selected}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      onSelectionChange={selection => {
        setSelected(selection)
        onSelectionChange && onSelectionChange(selection)
      }}
      trigger={<Select.TriggerButton placeholder="Placeholder" />}
      {...props}
    >
      <Select.ListBox>
        {allItems =>
          allItems.map(item => <Select.Option key={item.key} item={item} />)
        }
      </Select.ListBox>
    </SelectProvider>
  )
}

describe("<SelectProviderWrapper /> - Visual content", () => {
  describe("Given no selectedKeys", () => {
    it("shows all the options unselected", async () => {
      render(<SelectProviderWrapper />)
      const button = screen.getByRole("button")
      userEvent.click(button)
      await waitFor(() => {
        expect(
          screen.getByRole("option", {
            name: "option-1-label-mock",
            selected: false,
          })
        ).toBeVisible()
      })
      await waitFor(() => {
        expect(
          screen.getByRole("option", {
            name: "option-2-label-mock",
            selected: false,
          })
        ).toBeVisible()
      })
      await waitFor(() => {
        expect(
          screen.getByRole("option", {
            name: "option-3-label-mock",
            selected: false,
          })
        ).toBeVisible()
      })
    })

    it("The listbox is labelled by the provided label", async () => {
      render(<SelectProviderWrapper />)
      const button = screen.getByRole("button")
      userEvent.click(button)
      const listBox = screen.getByLabelText("selection-label-mock", {
        selector: "ul",
      })
      await waitFor(() => {
        expect(listBox).toBeInTheDocument()
      })
    })
  })

  describe("Given selectedKeys is [option-2-value-mock]", () => {
    it("shows only option 2 is selected", async () => {
      render(<SelectProviderWrapper selectedKey="option-2-value-mock" />)
      const button = screen.getByRole("button")
      userEvent.click(button)
      await waitFor(() => {
        expect(
          screen.getByRole("option", {
            name: "option-1-label-mock",
            selected: false,
          })
        ).toBeVisible()
      })
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: true,
        })
      ).toBeVisible()
      expect(
        screen.getByRole("option", {
          name: "option-3-label-mock",
          selected: false,
        })
      ).toBeVisible()
    })
  })
})

describe("<SelectProviderWrapper /> - Mouse interaction", () => {
  fit("selects the option when clicks on a non-selected option", async () => {
    render(<SelectProviderWrapper />)
    const button = screen.getByRole("button")
    userEvent.click(button)
    await waitFor(() => {
      const option1 = screen.getByRole("option", {
        name: "option-1-label-mock",
      })
      userEvent.click(option1)
    })

    await waitFor(() => {
      expect(
        screen.getByRole("option", {
          name: "option-1-label-mock",
          selected: true,
        })
      ).toBeVisible()
    })
  })

  it("fires onSelectionChange when clicks on a option", async () => {
    const spy = jest.fn()
    render(<SelectProviderWrapper onSelectionChange={spy} />)
    const option1 = screen.getByRole("option", {
      name: "option-1-label-mock",
    })

    await userEvent.click(option1)
    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})

describe("<SelectProviderWrapper /> - Keyboard interaction", () => {
  describe("Given no selectedKeys", () => {
    it("focuses on the frist option when tabs onto the list", async () => {
      render(<SelectProviderWrapper />)
      await userEvent.tab()
      await waitFor(() => {
        expect(
          screen.getByRole("option", { name: "option-1-label-mock" })
        ).toHaveFocus()
      })
    })
  })

  describe("Given selectedKey is option-2-value-mock", () => {
    it("focuses the first selected option when tabs onto the list", async () => {
      render(<SelectProviderWrapper selectedKey="option-2-value-mock" />)
      await userEvent.tab()
      await waitFor(() => {
        expect(
          screen.getByRole("option", { name: "option-2-label-mock" })
        ).toHaveFocus()
      })
    })
  })

  it("moves the focus down when hits arrow down key", async () => {
    render(<SelectProviderWrapper />)
    await userEvent.tab()
    await userEvent.keyboard("{ArrowDown}")
    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-2-label-mock" })
      ).toHaveFocus()
    })
  })

  it("keeps the focus at the last element when hits arrow down key on it", async () => {
    render(<SelectProviderWrapper selectedKey="option-3-value-mock" />)
    await userEvent.tab()
    await userEvent.keyboard("{ArrowDown}")
    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-3-label-mock" })
      ).toHaveFocus()
    })
  })

  it("moves the focus up when hits arrow up key", async () => {
    render(<SelectProviderWrapper selectedKey="option-3-value-mock" />)
    await userEvent.tab()
    await userEvent.keyboard("{ArrowUp}")
    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-2-label-mock" })
      ).toHaveFocus()
    })
  })

  it("keeps the focus ring at the first element when hits arrow up key on it", async () => {
    render(<SelectProviderWrapper />)
    await userEvent.tab()
    await userEvent.keyboard("{ArrowUp}")
    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-1-label-mock" })
      ).toHaveFocus()
    })
  })

  it("selects the option when hits enter on a non-selected option", async () => {
    render(<SelectProviderWrapper />)

    await userEvent.tab()
    await userEvent.keyboard("{Enter}")
    await userEvent.keyboard("{Enter}")
    await waitFor(() => {
      expect(
        screen.getByRole("option", {
          name: "option-1-label-mock",
          selected: true,
        })
      ).toBeVisible()
    })
  })

  it("fires onSelectionChange when hits enter on a option", async () => {
    const spy = jest.fn()
    render(<SelectProviderWrapper onSelectionChange={spy} />)

    await userEvent.tab()
    await userEvent.keyboard("{Enter}")
    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})

describe("<SelectProviderWrapper /> - controlling items from the consumer", () => {
  it("renders only items passed", () => {
    const { rerender } = render(<SelectProviderWrapper />)
    expect(
      screen.getByRole("option", {
        name: "option-1-label-mock",
      })
    ).toBeVisible()
    expect(
      screen.getByRole("option", {
        name: "option-2-label-mock",
      })
    ).toBeVisible()
    expect(
      screen.getByRole("option", {
        name: "option-3-label-mock",
      })
    ).toBeVisible()

    rerender(<SelectProviderWrapper items={itemsMock.slice(2)} />)
    expect(
      screen.queryByRole("option", {
        name: "option-1-label-mock",
      })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("option", {
        name: "option-2-label-mock",
      })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole("option", {
        name: "option-3-label-mock",
      })
    ).toBeVisible()
  })
})

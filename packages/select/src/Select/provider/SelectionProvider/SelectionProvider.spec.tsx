import React, { Key, useState } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ItemType } from "../../types"
import { Select } from "../../Select"
import { SelectionProvider, SelectionProviderProps } from "./SelectionProvider"

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

const SelectionProviderWrapper = ({
  items = itemsMock,
  selectedKey,
  onSelectionChange,
  ...props
}: Partial<SelectionProviderProps>) => {
  const [selected, setSelected] = useState<Key | null>(selectedKey ?? null)

  return (
    <SelectionProvider
      items={items}
      label="selection-label-mock"
      selectedKey={selected}
      onSelectionChange={selection => {
        setSelected(selection)
        onSelectionChange && onSelectionChange(selection)
      }}
      {...props}
    >
      <Select.ListBox>
        {({ allItems }) =>
          allItems.map(item => <Select.Option key={item.key} item={item} />)
        }
      </Select.ListBox>
    </SelectionProvider>
  )
}

describe("<SelectionProviderWrapper /> - Visual content", () => {
  describe("Given no selectedKeys", () => {
    it("shows all the options unselected", () => {
      render(<SelectionProviderWrapper />)
      expect(
        screen.getByRole("option", {
          name: "option-1-label-mock",
          selected: false,
        })
      ).toBeVisible()
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: false,
        })
      ).toBeVisible()
      expect(
        screen.getByRole("option", {
          name: "option-3-label-mock",
          selected: false,
        })
      ).toBeVisible()
    })

    test("The listbox is labelled by the provided label", () => {
      render(<SelectionProviderWrapper />)
      const listBox = screen.getByLabelText("selection-label-mock", {
        selector: "ul",
      })
      expect(listBox).toBeInTheDocument()
    })
  })

  describe("Given selectedKeys is [option-2-value-mock]", () => {
    it("shows only option 2 is selected", () => {
      render(<SelectionProviderWrapper selectedKey="option-2-value-mock" />)
      expect(
        screen.getByRole("option", {
          name: "option-1-label-mock",
          selected: false,
        })
      ).toBeVisible()
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

describe("<SelectionProviderWrapper /> - Mouse interaction", () => {
  it("selects the option when clicks on a non-selected option", () => {
    render(<SelectionProviderWrapper />)
    const option1 = screen.getByRole("option", {
      name: "option-1-label-mock",
    })

    userEvent.click(option1)

    expect(
      screen.getByRole("option", {
        name: "option-1-label-mock",
        selected: true,
      })
    ).toBeVisible()
  })

  it("fires onSelectionChange when clicks on a option", () => {
    const spy = jest.fn()
    render(<SelectionProviderWrapper onSelectionChange={spy} />)
    const option1 = screen.getByRole("option", {
      name: "option-1-label-mock",
    })

    userEvent.click(option1)
    expect(spy).toHaveBeenCalledTimes(1)
  })
})

describe("<SelectionProviderWrapper /> - Keyboard interaction", () => {
  describe("Given no selectedKeys", () => {
    it("focuses on the frist option when tabs onto the list", () => {
      render(<SelectionProviderWrapper />)
      userEvent.tab()

      expect(
        screen.getByRole("option", { name: "option-1-label-mock" })
      ).toHaveFocus()
    })
  })

  describe("Given selectedKey is option-2-value-mock", () => {
    it("focuses the frist selected option when tabs onto the list", () => {
      render(<SelectionProviderWrapper selectedKey="option-2-value-mock" />)
      userEvent.tab()

      expect(
        screen.getByRole("option", { name: "option-2-label-mock" })
      ).toHaveFocus()
    })
  })

  it("moves the focus down when hits arrow down key", () => {
    render(<SelectionProviderWrapper />)
    userEvent.tab()
    userEvent.keyboard("{ArrowDown}")

    expect(
      screen.getByRole("option", { name: "option-2-label-mock" })
    ).toHaveFocus()
  })

  it("keeps the focus at the last element when hits arrow down key on it", () => {
    render(<SelectionProviderWrapper selectedKey="option-3-value-mock" />)
    userEvent.tab()
    userEvent.keyboard("{ArrowDown}")

    expect(
      screen.getByRole("option", { name: "option-3-label-mock" })
    ).toHaveFocus()
  })

  it("moves the focus up when hits arrow up key", () => {
    render(<SelectionProviderWrapper selectedKey="option-3-value-mock" />)
    userEvent.tab()
    userEvent.keyboard("{ArrowUp}")

    expect(
      screen.getByRole("option", { name: "option-2-label-mock" })
    ).toHaveFocus()
  })

  it("keeps the focus ring at the first element when hits arrow up key on it", () => {
    render(<SelectionProviderWrapper />)
    userEvent.tab()
    userEvent.keyboard("{ArrowUp}")

    expect(
      screen.getByRole("option", { name: "option-1-label-mock" })
    ).toHaveFocus()
  })

  it("selects the option when hits enter on a non-selected option", () => {
    render(<SelectionProviderWrapper />)

    userEvent.tab()
    userEvent.keyboard("{Enter}")

    expect(
      screen.getByRole("option", {
        name: "option-1-label-mock",
        selected: true,
      })
    ).toBeVisible()
  })

  it("fires onSelectionChange when hits enter on a option", () => {
    const spy = jest.fn()
    render(<SelectionProviderWrapper onSelectionChange={spy} />)

    userEvent.tab()
    userEvent.keyboard("{Enter}")

    expect(spy).toHaveBeenCalledTimes(1)
  })
})

describe("<SelectionProviderWrapper /> - controlling items from the consumer", () => {
  it("renders only items passed", () => {
    const { rerender } = render(<SelectionProviderWrapper />)
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

    rerender(<SelectionProviderWrapper items={itemsMock.slice(2)} />)
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

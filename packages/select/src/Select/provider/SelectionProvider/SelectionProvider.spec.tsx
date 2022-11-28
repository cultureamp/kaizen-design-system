import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Select } from "../../Select"
import { ItemType } from "../../types"
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
  const [selected, setSelected] = useState<
    SelectionProviderProps["selectedKey"]
  >(selectedKey ?? null)

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
        {allItems =>
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
  it("selects the option when clicks on a non-selected option", async () => {
    render(<SelectionProviderWrapper />)
    const option1 = screen.getByRole("option", {
      name: "option-1-label-mock",
    })

    userEvent.click(option1)

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
    render(<SelectionProviderWrapper onSelectionChange={spy} />)
    const option1 = screen.getByRole("option", {
      name: "option-1-label-mock",
    })

    await userEvent.click(option1)
    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})

describe("<SelectionProviderWrapper /> - Keyboard interaction", () => {
  describe("Given no selectedKeys", () => {
    it("focuses on the frist option when tabs onto the list", async () => {
      render(<SelectionProviderWrapper />)
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
      render(<SelectionProviderWrapper selectedKey="option-2-value-mock" />)
      await userEvent.tab()
      await waitFor(() => {
        expect(
          screen.getByRole("option", { name: "option-2-label-mock" })
        ).toHaveFocus()
      })
    })
  })

  it("moves the focus down when hits arrow down key", async () => {
    render(<SelectionProviderWrapper />)
    await userEvent.tab()
    await userEvent.keyboard("{ArrowDown}")
    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-2-label-mock" })
      ).toHaveFocus()
    })
  })

  it("keeps the focus at the last element when hits arrow down key on it", async () => {
    render(<SelectionProviderWrapper selectedKey="option-3-value-mock" />)
    await userEvent.tab()
    await userEvent.keyboard("{ArrowDown}")
    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-3-label-mock" })
      ).toHaveFocus()
    })
  })

  it("moves the focus up when hits arrow up key", async () => {
    render(<SelectionProviderWrapper selectedKey="option-3-value-mock" />)
    await userEvent.tab()
    await userEvent.keyboard("{ArrowUp}")
    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-2-label-mock" })
      ).toHaveFocus()
    })
  })

  it("keeps the focus ring at the first element when hits arrow up key on it", async () => {
    render(<SelectionProviderWrapper />)
    await userEvent.tab()
    await userEvent.keyboard("{ArrowUp}")
    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-1-label-mock" })
      ).toHaveFocus()
    })
  })

  it("selects the option when hits enter on a non-selected option", async () => {
    render(<SelectionProviderWrapper />)

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
    render(<SelectionProviderWrapper onSelectionChange={spy} />)

    await userEvent.tab()
    await userEvent.keyboard("{Enter}")
    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1)
    })
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

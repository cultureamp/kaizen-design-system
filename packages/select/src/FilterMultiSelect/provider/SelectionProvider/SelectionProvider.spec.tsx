import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SearchInput } from "../../components/SearchInput"
import { ListBox } from "../../components/ListBox"
import { MultiSelectOption } from "../../components/MultiSelectOption"
import {
  ClearButton,
  SelectAllButton,
} from "../../components/SelectionControlButton"
import { ItemType } from "../../FilterMultiSelect"
import { SelectionProvider, SelectionProviderProps } from "./SelectionProvider"

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useId: () => "id-mock", // To cover testing in React 16 and 17
}))

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
  ...props
}: Partial<SelectionProviderProps>) => (
  <SelectionProvider
    selectionMode="multiple"
    items={items}
    label="selection-label-mock"
    {...props}
  >
    <ListBox>
      {item => <MultiSelectOption key={item.key} item={item} />}
    </ListBox>

    <SearchInput label="search-input-label-mock" />
    <SelectAllButton />
    <ClearButton />
  </SelectionProvider>
)

describe("<SelectionProviderWrapper /> - Visual content", () => {
  describe("Given no selectedKeys", () => {
    it("shows all the options unselected", () => {
      render(<SelectionProviderWrapper />)
      expect(
        screen.getByRole("option", {
          name: "option-1-label-mock",
          selected: false,
        })
      )
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: false,
        })
      )
      expect(
        screen.getByRole("option", {
          name: "option-3-label-mock",
          selected: false,
        })
      )
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
      render(
        <SelectionProviderWrapper
          selectedKeys={new Set(["option-2-value-mock"])}
        />
      )
      expect(
        screen.getByRole("option", {
          name: "option-1-label-mock",
          selected: false,
        })
      )
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: true,
        })
      )
      expect(
        screen.getByRole("option", {
          name: "option-3-label-mock",
          selected: false,
        })
      )
    })
  })

  describe("Given selectedKeys is 'all' ", () => {
    it("shows all options are selected", () => {
      render(<SelectionProviderWrapper selectedKeys="all" />)
      expect(
        screen.getByRole("option", {
          name: "option-1-label-mock",
          selected: true,
        })
      )
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: true,
        })
      )
      expect(
        screen.getByRole("option", {
          name: "option-3-label-mock",
          selected: true,
        })
      )
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

  it("de-selects the option when clicks on a selected option", () => {
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-2-value-mock"])}
      />
    )
    const option2 = screen.getByRole("option", {
      name: "option-2-label-mock",
      selected: true,
    })

    userEvent.click(option2)

    waitFor(() =>
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: false,
        })
      )
    )
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

  it("selects all options when clicks on Select all button", () => {
    render(<SelectionProviderWrapper />)
    const selectAll = screen.getByRole("button", {
      name: "Select all",
    })

    userEvent.click(selectAll)

    expect(
      screen.getByRole("option", {
        name: "option-1-label-mock",
        selected: true,
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
        selected: true,
      })
    ).toBeVisible()
  })

  it("fires onSelectionChange when clicks on Select all button", () => {
    const spy = jest.fn()
    render(<SelectionProviderWrapper onSelectionChange={spy} />)
    const selectAll = screen.getByRole("button", {
      name: "Select all",
    })

    userEvent.click(selectAll)
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it("clears all the selection when clicks on Clear button", () => {
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-2-value-mock"])}
      />
    )
    const clear = screen.getByRole("button", {
      name: "Clear",
    })

    userEvent.click(clear)

    waitFor(() => {
      expect(
        screen.getByRole("option", {
          name: "option-1-label-mock",
          selected: false,
        })
      )
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: false,
        })
      )
      expect(
        screen.getByRole("option", {
          name: "option-3-label-mock",
          selected: false,
        })
      )
    })
  })

  it("fires onSelectionChange when clicks on Clear all button", async () => {
    const spy = jest.fn()
    render(<SelectionProviderWrapper onSelectionChange={spy} />)
    const clear = screen.getByRole("button", {
      name: "Clear",
    })

    userEvent.click(clear)

    waitFor(() => expect(spy).toHaveBeenCalledTimes(1))
  })
})

describe("<SelectionProviderWrapper /> - Keyboard interaction", () => {
  describe("Given no selectedKeys", () => {
    it("focuses on the frist option when tabs onto the list", () => {
      render(<SelectionProviderWrapper />)
      const listBox = screen.getByRole("listbox")
      userEvent.tab()

      expect(
        screen.getByRole("option", { name: "option-1-label-mock" })
      ).toHaveFocus()
    })
  })

  describe("Given selectedKeys is [option-2-value-mock, option-3-value-mock]", () => {
    it("focuses the frist selected option when tabs onto the list", () => {
      render(
        <SelectionProviderWrapper
          selectedKeys={new Set(["option-2-value-mock"])}
        />
      )
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
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-3-value-mock"])}
      />
    )
    userEvent.tab()
    userEvent.keyboard("{ArrowDown}")

    expect(
      screen.getByRole("option", { name: "option-3-label-mock" })
    ).toHaveFocus()
  })

  it("moves the focus up when hits arrow up key", () => {
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-3-value-mock"])}
      />
    )
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
    const option1 = screen.getByRole("option", {
      name: "option-1-label-mock",
    })

    userEvent.tab()
    userEvent.keyboard("{Enter}")

    expect(
      screen.getByRole("option", {
        name: "option-1-label-mock",
        selected: true,
      })
    ).toBeVisible()
  })

  it("de-selects the option when hits enter on a selected option", () => {
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-2-value-mock"])}
      />
    )

    userEvent.tab()
    userEvent.keyboard("{Enter}")

    waitFor(() =>
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: false,
        })
      )
    )
  })

  it("fires onSelectionChange when hits enter on a option", () => {
    const spy = jest.fn()
    render(<SelectionProviderWrapper onSelectionChange={spy} />)

    userEvent.tab()
    userEvent.keyboard("{Enter}")

    expect(spy).toHaveBeenCalledTimes(1)
  })
})

describe("<SelectionProviderWrapper /> - Search Filtering", () => {
  it("shows only the matched options", () => {
    render(<SelectionProviderWrapper />)
    const searchInput = screen.getByRole("searchbox")
    userEvent.type(searchInput, "1")
    expect(
      screen.getByRole("option", {
        name: "option-1-label-mock",
      })
    ).toBeVisible()
    expect(
      screen.queryByRole("option", {
        name: "option-2-label-mock",
      })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("option", {
        name: "option-3-label-mock",
      })
    ).not.toBeInTheDocument()
  })
})

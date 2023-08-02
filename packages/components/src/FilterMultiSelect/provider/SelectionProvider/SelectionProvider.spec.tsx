import React, { useState } from "react"
import { Selection } from "@react-types/shared"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterMultiSelect } from "../../FilterMultiSelect"
import { ListBox } from "../../subcomponents/ListBox"
import { SearchInput } from "../../subcomponents/SearchInput"
import {
  ClearButton,
  SelectAllButton,
} from "../../subcomponents/SelectionControlButton"
import { ItemType } from "../../types"
import { SelectionProvider, SelectionProviderProps } from "./SelectionProvider"

const user = userEvent.setup()

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
  selectedKeys,
  onSelectionChange,
  ...props
}: Partial<SelectionProviderProps>): JSX.Element => {
  const [selected, setSelected] = useState<Selection>(selectedKeys ?? new Set())

  return (
    <SelectionProvider
      selectionMode="multiple"
      items={items}
      label="selection-label-mock"
      selectedKeys={selected}
      onSelectionChange={(selection): void => {
        setSelected(selection)
        onSelectionChange && onSelectionChange(selection)
      }}
      {...props}
    >
      <ListBox>
        {({ selectedItems, unselectedItems, disabledItems }): JSX.Element => (
          <>
            <FilterMultiSelect.ListBoxSection
              items={selectedItems}
              sectionName="selectedItems"
            >
              {(selectedItem): JSX.Element => (
                <FilterMultiSelect.Option
                  key={selectedItem.key}
                  item={selectedItem}
                />
              )}
            </FilterMultiSelect.ListBoxSection>

            <FilterMultiSelect.ListBoxSection
              items={unselectedItems}
              sectionName="selectedItems"
            >
              {(unselectedItem): JSX.Element => (
                <FilterMultiSelect.Option
                  key={unselectedItem.key}
                  item={unselectedItem}
                />
              )}
            </FilterMultiSelect.ListBoxSection>

            <FilterMultiSelect.ListBoxSection
              items={disabledItems}
              sectionName="disabledItems"
            >
              {(disabledItem): JSX.Element => (
                <FilterMultiSelect.Option
                  key={disabledItem.key}
                  item={disabledItem}
                />
              )}
            </FilterMultiSelect.ListBoxSection>
          </>
        )}
      </ListBox>

      <SearchInput label="search-input-label-mock" />
      <SelectAllButton />
      <ClearButton />
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

    it("labels the listbox with the provided label", () => {
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

  describe("Given selectedKeys is 'all'", () => {
    it("shows all options are selected", () => {
      render(<SelectionProviderWrapper selectedKeys="all" />)
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
  })
})

describe("<SelectionProviderWrapper /> - Mouse interaction", () => {
  it("selects the option when clicks on a non-selected option", async () => {
    render(<SelectionProviderWrapper />)
    const option1 = screen.getByRole("option", {
      name: "option-1-label-mock",
    })

    await user.click(option1)

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

    await user.click(option1)

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  it("selects all options when clicks on Select all button", async () => {
    render(<SelectionProviderWrapper />)
    const selectAll = screen.getByRole("button", {
      name: "Select all",
    })

    await user.click(selectAll)

    await waitFor(() => {
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
  })

  it("fires onSelectionChange when clicks on Select all button", async () => {
    const spy = jest.fn()
    render(<SelectionProviderWrapper onSelectionChange={spy} />)
    const selectAll = screen.getByRole("button", {
      name: "Select all",
    })

    await user.click(selectAll)

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  it("clears all the selection when clicks on Clear button", async () => {
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-2-value-mock"])}
      />
    )
    const clear = screen.getByRole("button", {
      name: "Clear selections",
    })

    await user.click(clear)

    await waitFor(() => {
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
  })

  it("fires onSelectionChange when clicks on Clear all button", async () => {
    const spy = jest.fn()
    render(
      <SelectionProviderWrapper
        onSelectionChange={spy}
        selectedKeys={new Set(["option-2-value-mock"])}
      />
    )
    const clear = screen.getByRole("button", {
      name: "Clear selections",
    })

    await user.click(clear)

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  it("de-selects the option when clicks on a selected option", async () => {
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-2-value-mock"])}
      />
    )
    const option2 = screen.getByRole("option", {
      name: "option-2-label-mock",
      selected: true,
    })

    await user.click(option2)

    await waitFor(() => {
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: false,
        })
      ).toBeVisible()
    })
  })
})

describe("<SelectionProviderWrapper /> - Keyboard interaction", () => {
  describe("Given no selectedKeys", () => {
    it("focuses on the frist option when tabs onto the list", async () => {
      render(<SelectionProviderWrapper />)
      await user.tab()

      await waitFor(() => {
        expect(
          screen.getByRole("option", { name: "option-1-label-mock" })
        ).toHaveFocus()
      })
    })
  })

  describe("Given selectedKeys is [option-2-value-mock, option-3-value-mock]", () => {
    it("focuses the frist selected option when tabs onto the list", async () => {
      render(
        <SelectionProviderWrapper
          selectedKeys={new Set(["option-2-value-mock"])}
        />
      )
      await user.tab()

      await waitFor(() => {
        expect(
          screen.getByRole("option", { name: "option-2-label-mock" })
        ).toHaveFocus()
      })
    })
  })

  it("moves the focus down when hits arrow down key", async () => {
    render(<SelectionProviderWrapper />)
    await user.tab()
    await user.keyboard("{ArrowDown}")

    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-2-label-mock" })
      ).toHaveFocus()
    })
  })

  it("keeps the focus at the last element when hits arrow down key on it", async () => {
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-3-value-mock"])}
      />
    )
    await user.tab()
    await user.keyboard("{ArrowDown}")

    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-3-label-mock" })
      ).toHaveFocus()
    })
  })

  it("moves the focus up when hits arrow up key", async () => {
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-3-value-mock"])}
      />
    )
    await user.tab()
    await user.keyboard("{ArrowUp}")

    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-2-label-mock" })
      ).toHaveFocus()
    })
  })

  it("keeps the focus ring at the first element when hits arrow up key on it", async () => {
    render(<SelectionProviderWrapper />)
    await user.tab()
    await user.keyboard("{ArrowUp}")

    await waitFor(() => {
      expect(
        screen.getByRole("option", { name: "option-1-label-mock" })
      ).toHaveFocus()
    })
  })

  it("selects the option when hits enter on a non-selected option", async () => {
    render(<SelectionProviderWrapper />)

    await user.tab()
    await user.keyboard("{Enter}")

    await waitFor(() => {
      expect(
        screen.getByRole("option", {
          name: "option-1-label-mock",
          selected: true,
        })
      ).toBeVisible()
    })
  })

  it("de-selects the option when hits enter on a selected option", async () => {
    render(
      <SelectionProviderWrapper
        selectedKeys={new Set(["option-2-value-mock"])}
      />
    )

    await user.tab()
    await user.keyboard("{Enter}")

    await waitFor(() => {
      expect(
        screen.getByRole("option", {
          name: "option-2-label-mock",
          selected: false,
        })
      ).toBeVisible()
    })
  })

  it("fires onSelectionChange when hits enter on a option", async () => {
    const spy = jest.fn()
    render(<SelectionProviderWrapper onSelectionChange={spy} />)

    await user.tab()
    await user.keyboard("{Enter}")

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})

describe("<SelectionProviderWrapper /> - Search Filtering", () => {
  describe("With no onSearchInputChange callback", () => {
    it("shows only the matched options", async () => {
      render(<SelectionProviderWrapper />)
      const searchInput = screen.getByRole("searchbox")
      await user.type(searchInput, "1")

      await waitFor(() => {
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
  })
  describe("With a onSearchInputChange callback", () => {
    it("Does not filter the matched options", async () => {
      const onSearchInputChange = jest.fn()

      render(
        <SelectionProviderWrapper onSearchInputChange={onSearchInputChange} />
      )
      const searchInput = screen.getByRole("searchbox")
      const searchString = "1"
      await user.type(searchInput, searchString)

      await waitFor(() => {
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
      })
    })

    it("Calls back to the consumer with the search text", async () => {
      const onSearchInputChange = jest.fn()

      render(
        <SelectionProviderWrapper onSearchInputChange={onSearchInputChange} />
      )
      const searchInput = screen.getByRole("searchbox")
      const searchString = "1"
      await user.type(searchInput, searchString)

      await waitFor(() => {
        expect(onSearchInputChange).toBeCalledTimes(2)
        expect(onSearchInputChange).toBeCalledWith(searchString)
      })
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

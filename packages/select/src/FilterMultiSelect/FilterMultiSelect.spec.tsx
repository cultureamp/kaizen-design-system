import React, { useState } from "react"
import { Selection } from "@react-types/shared"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ItemType } from "../types"
import { FilterMultiSelect } from "./FilterMultiSelect"
import { FilterMultiSelectProps } from "./components/Root"
import { getSelectedOptionLabels } from "./utils"

const user = userEvent.setup()

const mockItems = [
  { label: "Front-End", value: "id-fe", count: "1245" },
  { label: "Back-End", value: "id-be", count: "4", isDisabled: true },
  { label: "SRE", value: "id-sre", count: "4", isDisabled: true },
  { label: "Dev-ops", value: "id-devops" },
  { label: "Others", value: "id-others" },
] satisfies ItemType[]

const FilterMultiSelectWrapper = ({
  selectedKeys: propsSelectedKeys,
  ...props
}: Partial<FilterMultiSelectProps>): JSX.Element => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    propsSelectedKeys ?? new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection): void => setSelectedKeys(keys)

  return (
    <FilterMultiSelect
      label="Engineer"
      onSelectionChange={handleSelectionChange}
      selectedKeys={selectedKeys}
      items={mockItems}
      trigger={(): JSX.Element => (
        <FilterMultiSelect.TriggerButton
          selectedOptionLabels={getSelectedOptionLabels(
            selectedKeys,
            mockItems
          )}
          label="Engineer"
        />
      )}
      {...props}
    >
      {(): JSX.Element => (
        <>
          <FilterMultiSelect.SearchInput />
          <FilterMultiSelect.ListBox>
            {({ allItems, hasNoItems }): JSX.Element | JSX.Element[] => {
              if (hasNoItems) {
                return (
                  <FilterMultiSelect.NoResults>
                    No results found.
                  </FilterMultiSelect.NoResults>
                )
              }

              return allItems.map(item => (
                <FilterMultiSelect.Option key={item.key} item={item} />
              ))
            }}
          </FilterMultiSelect.ListBox>
          <FilterMultiSelect.MenuFooter>
            <FilterMultiSelect.SelectAllButton />
            <FilterMultiSelect.ClearButton />
          </FilterMultiSelect.MenuFooter>
        </>
      )}
    </FilterMultiSelect>
  )
}

describe("<FilterMultiSelect>", () => {
  it("does not show the popover initially", () => {
    const { queryByRole } = render(<FilterMultiSelectWrapper />)
    expect(queryByRole("listbox")).not.toBeInTheDocument()
  })

  it("opens the popover using the trigger button", async () => {
    const { getByRole } = render(<FilterMultiSelectWrapper />)

    const triggerButton = getByRole("button", { name: "Engineer : Front-End" })
    await user.click(triggerButton)

    await waitFor(() => {
      expect(getByRole("listbox")).toBeVisible()
    })
  })

  it("selects an unselected option on click", async () => {
    const { getByRole } = render(<FilterMultiSelectWrapper isOpen />)

    const devOpsOption = getByRole("option", {
      name: "Dev-ops",
      selected: false,
    })
    await user.click(devOpsOption)

    await waitFor(() => {
      expect(devOpsOption).toHaveAttribute("aria-selected", "true")
    })
  })

  it("deselects a selected option on click", async () => {
    const { getByRole } = render(<FilterMultiSelectWrapper isOpen />)

    const devOpsOption = getByRole("option", {
      name: "Front-End",
      selected: true,
    })
    await user.click(devOpsOption)

    await waitFor(() => {
      expect(devOpsOption).toHaveAttribute("aria-selected", "false")
    })
  })

  it("filters out options which do not match the search term", async () => {
    const { getByRole, getAllByRole } = render(
      <FilterMultiSelectWrapper isOpen />
    )
    expect(getAllByRole("option")).toHaveLength(5)

    await user.type(getByRole("searchbox"), "end")

    await waitFor(() => {
      expect(getAllByRole("option")).toHaveLength(2)
    })
  })

  describe("Clear button", () => {
    it("deselects all options when unfiltered", async () => {
      const { getByRole, queryAllByRole } = render(
        <FilterMultiSelectWrapper
          isOpen
          selectedKeys={new Set(["id-fe", "id-devops"])}
        />
      )

      expect(queryAllByRole("option", { selected: true })).toHaveLength(2)

      await user.click(getByRole("button", { name: "Clear selections" }))
      await waitFor(() => {
        expect(queryAllByRole("option", { selected: true })).toHaveLength(0)
      })
    })

    it("deselects only selected filtered options", async () => {
      const { getByRole, queryAllByRole } = render(
        <FilterMultiSelectWrapper
          isOpen
          selectedKeys={new Set(["id-fe", "id-devops"])}
        />
      )

      expect(queryAllByRole("option")).toHaveLength(5)
      expect(queryAllByRole("option", { selected: true })).toHaveLength(2)

      const searchbox = getByRole("searchbox")
      await user.type(searchbox, "dev")
      await waitFor(() => {
        expect(queryAllByRole("option", { selected: true })).toHaveLength(1)
      })

      await user.click(getByRole("button", { name: "Clear selections" }))
      await user.clear(searchbox)
      await waitFor(() => {
        expect(queryAllByRole("option", { selected: true })).toHaveLength(1)
      })
    })
  })

  describe("Select all button", () => {
    const getDisabledOptions = (options: HTMLElement[]): HTMLElement[] =>
      options.filter(option => option.hasAttribute("aria-disabled"))

    it("selects all non-disabled options when unfiltered", async () => {
      const { getByRole, queryAllByRole } = render(
        <FilterMultiSelectWrapper isOpen selectedKeys={new Set([])} />
      )

      const allOptions = queryAllByRole("option")
      expect(allOptions).toHaveLength(5)
      expect(getDisabledOptions(allOptions)).toHaveLength(2)

      await user.click(getByRole("button", { name: "Select all" }))
      await waitFor(() => {
        expect(queryAllByRole("option", { selected: true })).toHaveLength(3)
      })
    })

    it("selects only non-disabled filtered options", async () => {
      const { getByRole, queryAllByRole } = render(
        <FilterMultiSelectWrapper isOpen selectedKeys={new Set([])} />
      )

      expect(queryAllByRole("option")).toHaveLength(5)

      const searchbox = getByRole("searchbox")
      await user.type(searchbox, "end")
      await waitFor(() => {
        const filteredOptions = queryAllByRole("option")
        expect(filteredOptions).toHaveLength(2)
        expect(getDisabledOptions(filteredOptions)).toHaveLength(1)
      })

      await user.click(getByRole("button", { name: "Select all" }))
      await user.clear(searchbox)
      await waitFor(() => {
        expect(queryAllByRole("option", { selected: true })).toHaveLength(1)
      })
    })
  })
})

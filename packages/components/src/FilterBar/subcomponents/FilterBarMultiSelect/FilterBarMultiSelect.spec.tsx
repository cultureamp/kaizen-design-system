import React, { useState } from "react"
import { Selection } from "@react-types/shared"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterAttributes, FilterBarProvider } from "~components/FilterBar"
import { FilterMultiSelect } from "~components/FilterMultiSelect"
import {
  FilterBarMultiSelect,
  FilterBarMultiSelectProps,
} from "./FilterBarMultiSelect"

const user = userEvent.setup()

type Values = {
  toppings: string[]
}

const FilterBarMultiSelectWrapper = ({
  defaultValues,
  filterAttributes,
  ...customProps
}: {
  defaultValues?: Partial<Values>
  filterAttributes?: Partial<FilterAttributes<keyof Values>>
} & Partial<FilterBarMultiSelectProps>): JSX.Element => {
  const [values, setValues] = useState<Partial<Values>>(defaultValues ?? {})
  return (
    <FilterBarProvider<Values>
      filters={[
        {
          id: "toppings",
          name: "Toppings",
          Component: (
            <FilterBarMultiSelect
              id="toppings"
              items={[
                { value: "none", label: "None" },
                { value: "pearls", label: "Pearls" },
                { value: "fruit-jelly", label: "Fruit Jelly" },
              ]}
              {...customProps}
            >
              {(): JSX.Element => (
                <>
                  <FilterMultiSelect.ListBox>
                    {({ allItems }): JSX.Element | JSX.Element[] =>
                      allItems.map(item => (
                        <FilterMultiSelect.Option key={item.key} item={item} />
                      ))
                    }
                  </FilterMultiSelect.ListBox>
                  <FilterMultiSelect.MenuFooter>
                    <FilterMultiSelect.SelectAllButton />
                    <FilterMultiSelect.ClearButton />
                  </FilterMultiSelect.MenuFooter>
                </>
              )}
            </FilterBarMultiSelect>
          ),
          ...filterAttributes,
        },
      ]}
      values={values}
      onValuesChange={setValues}
    >
      {filters => (
        <>
          {Object.values(filters).map(({ id, Component }) => (
            <React.Fragment key={id}>{Component}</React.Fragment>
          ))}
        </>
      )}
    </FilterBarProvider>
  )
}

describe("<FilterBarMultiSelect />", () => {
  it("shows the name in the trigger button", () => {
    const { getByRole } = render(<FilterBarMultiSelectWrapper />)
    const triggerButton = getByRole("button", { name: "Toppings" })
    expect(triggerButton).toBeVisible()
  })

  describe("Removable", () => {
    it("does not show the remove button when isRemovable is false", () => {
      const { queryByRole } = render(<FilterBarMultiSelectWrapper />)
      expect(
        queryByRole("button", { name: "Remove filter - Toppings" })
      ).not.toBeInTheDocument()
    })

    it("shows the remove button when isRemovable is true", () => {
      const { getByRole } = render(
        <FilterBarMultiSelectWrapper
          filterAttributes={{ isRemovable: true }}
          defaultValues={{ toppings: ["pearls"] }}
        />
      )
      expect(
        getByRole("button", { name: "Remove filter - Toppings" })
      ).toBeVisible()
    })

    it("hides the filter when remove button is clicked", async () => {
      const { getByRole } = render(
        <FilterBarMultiSelectWrapper
          filterAttributes={{ isRemovable: true }}
          defaultValues={{ toppings: ["pearls"] }}
        />
      )
      const triggerButton = getByRole("button", { name: "Toppings : Pearls" })
      expect(triggerButton).toBeVisible()

      const removeButton = getByRole("button", {
        name: "Remove filter - Toppings",
      })
      await user.click(removeButton)
      await waitFor(() => {
        expect(triggerButton).not.toBeInTheDocument()
      })
    })
  })

  it("can toggle its open state", async () => {
    const { getByRole, queryByRole } = render(<FilterBarMultiSelectWrapper />)
    const triggerButton = getByRole("button", { name: "Toppings" })

    await user.click(triggerButton)
    await waitFor(() => {
      const listbox = getByRole("listbox")
      expect(listbox).toBeInTheDocument()
    })

    await user.click(document.body)
    await waitFor(() => {
      const listbox = queryByRole("listbox")
      expect(listbox).not.toBeInTheDocument()
    })
  })

  it("shows a selected value when provided", () => {
    const { getByRole } = render(
      <FilterBarMultiSelectWrapper
        defaultValues={{ toppings: ["pearls", "fruit-jelly"] }}
      />
    )
    const triggerButton = getByRole("button", {
      name: "Toppings : Pearls, Fruit Jelly",
    })
    expect(triggerButton).toBeInTheDocument()
  })

  it("updates the selected value in the trigger button", async () => {
    const { getByRole } = render(
      <FilterBarMultiSelectWrapper defaultValues={{ toppings: ["pearls"] }} />
    )
    const triggerButton = getByRole("button", {
      name: "Toppings : Pearls",
    })

    await user.click(triggerButton)
    await waitFor(() => {
      const listbox = getByRole("listbox")
      expect(listbox).toBeInTheDocument()
    })

    await user.click(getByRole("option", { name: "Fruit Jelly" }))
    await waitFor(() => {
      expect(
        getByRole("button", { name: "Toppings : Pearls, Fruit Jelly" })
      ).toBeInTheDocument()
    })
  })

  it("allows calling additional functions on selection change", async () => {
    const onChange = jest.fn<void, [Selection]>()
    const { getByRole } = render(
      <FilterBarMultiSelectWrapper onSelectionChange={onChange} />
    )
    const triggerButton = getByRole("button", { name: "Toppings" })

    await user.click(triggerButton)
    await waitFor(() => {
      const listbox = getByRole("listbox")
      expect(listbox).toBeInTheDocument()
    })

    await user.click(getByRole("option", { name: "Fruit Jelly" }))

    await waitFor(() => {
      // We are currently unable to get the reference to the Set which is created internally to FilterMultiSelect in order to test if the return value.
      // eg. if we create a `new Set(["fruit-jelly"])` in this test, it will not equal the Set made internally.
      expect(onChange).toHaveBeenCalled()
    })
  })
})

import React, { useEffect, useState } from "react"
import { Selection } from "@react-types/shared"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  FilterAttributes,
  FilterBarProvider,
  Filters,
  FiltersValues,
  useFilterBarContext,
} from "~components/FilterBar"
import { FilterMultiSelect, ItemType } from "~components/FilterMultiSelect"
import {
  FilterBarMultiSelect,
  FilterBarMultiSelectProps,
} from "./FilterBarMultiSelect"

const user = userEvent.setup()

type Values = {
  toppings: string[]
}

const SelectContents = (): JSX.Element => (
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
)

const FilterBarMultiSelectWrapper = <ValuesMap extends FiltersValues = Values>({
  defaultValues,
  filterAttributes,
  additionalFilters = [],
  ...customProps
}: {
  defaultValues?: Partial<ValuesMap>
  filterAttributes?: Partial<FilterAttributes<ValuesMap>>
  additionalFilters?: Filters<ValuesMap>
} & Partial<FilterBarMultiSelectProps>): JSX.Element => {
  const [values, setValues] = useState<Partial<ValuesMap>>(defaultValues ?? {})
  return (
    <FilterBarProvider<ValuesMap>
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
              {(): JSX.Element => <SelectContents />}
            </FilterBarMultiSelect>
          ),
          ...filterAttributes,
        },
        ...additionalFilters,
      ]}
      values={values}
      onValuesChange={setValues}
    >
      {filters => (
        <>
          {Object.values(filters).map(({ id, Component }) => (
            <React.Fragment key={id as string}>{Component}</React.Fragment>
          ))}
          <div data-testid="json-values">{JSON.stringify(values)}</div>
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
    const onChange = vi.fn<[Selection], void>()
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

  it("clears selected values if updated items do not contain the value", async () => {
    type ValuesDependent = Values & {
      flavour: string[]
    }

    const FilterFlavour = (): JSX.Element => {
      const data = [
        { value: "jasmine", label: "Jasmine", topping: "pearls" },
        { value: "mango", label: "Mango", topping: "fruit-jelly" },
      ]

      const [allItems, setAllItems] = useState<ItemType[]>([])

      const { getFilterState } = useFilterBarContext<
        ValuesDependent["flavour"],
        ValuesDependent
      >()
      const toppingsFilter = getFilterState("toppings")

      useEffect(() => {
        setAllItems(
          data.filter(({ topping }) => toppingsFilter.value?.includes(topping))
        )
      }, [toppingsFilter.value])

      return (
        <FilterBarMultiSelect id="flavour" items={allItems}>
          {(): JSX.Element => <SelectContents />}
        </FilterBarMultiSelect>
      )
    }

    const { getByRole, getAllByRole, getByTestId } = render(
      <FilterBarMultiSelectWrapper<ValuesDependent>
        additionalFilters={[
          {
            id: "flavour",
            name: "Flavour",
            Component: <FilterFlavour />,
          },
        ]}
      />
    )

    const toppingsButton = getByRole("button", { name: "Toppings" })
    await user.click(toppingsButton)
    await user.click(getByRole("option", { name: "Fruit Jelly" }))
    await user.click(document.body)

    const flavourButton = getByRole("button", { name: "Flavour" })
    await user.click(flavourButton)

    await waitFor(() => {
      expect(getByRole("listbox")).toBeVisible()
    })

    const flavourOptions = getAllByRole("option")
    expect(flavourOptions.length).toBe(1)
    expect(flavourOptions[0].textContent).toBe("Mango")

    await user.click(flavourOptions[0])

    await waitFor(() => {
      expect(getByTestId("json-values").textContent).toBe(
        JSON.stringify({
          toppings: ["fruit-jelly"],
          flavour: ["mango"],
        })
      )
    })

    await user.click(document.body)
    await user.click(toppingsButton)
    // De-select Fruit Jelly
    await user.click(getByRole("option", { name: "Fruit Jelly" }))
    await user.click(getByRole("option", { name: "Pearls" }))

    await waitFor(() => {
      expect(getByTestId("json-values").textContent).toBe(
        JSON.stringify({
          toppings: ["pearls"],
        })
      )
    })
  })
})

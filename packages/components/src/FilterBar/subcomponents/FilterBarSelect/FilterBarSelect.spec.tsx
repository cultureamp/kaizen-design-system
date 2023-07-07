import React, { useEffect, useState } from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  FilterAttributes,
  FilterBarProvider,
  Filters,
  FiltersValues,
  useFilterBarContext,
} from "~components/FilterBar"
import { SelectOption } from "~components/FilterSelect"
import { FilterBarSelect, FilterBarSelectProps } from "./FilterBarSelect"

const user = userEvent.setup()

type Values = {
  flavour: string
}

const FilterBarSelectWrapper = <ValuesMap extends FiltersValues = Values>({
  defaultValues,
  filterAttributes,
  additionalFilters = [],
  ...customProps
}: {
  defaultValues?: Partial<ValuesMap>
  filterAttributes?: Partial<FilterAttributes<ValuesMap>>
  additionalFilters?: Filters<ValuesMap>
} & Partial<FilterBarSelectProps>): JSX.Element => {
  const [values, setValues] = useState<Partial<ValuesMap>>(defaultValues ?? {})
  return (
    <FilterBarProvider<ValuesMap>
      filters={[
        {
          id: "flavour",
          name: "Flavour",
          Component: (
            <FilterBarSelect
              id="flavour"
              items={[
                { value: "jasmine-milk-tea", label: "Jasmine Milk Tea" },
                { value: "honey-milk-tea", label: "Honey Milk Tea" },
                { value: "lychee-green-tea", label: "Lychee Green Tea" },
              ]}
              {...customProps}
            />
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

describe("<FilterBarSelect />", () => {
  it("shows the name in the trigger button", () => {
    const { getByRole } = render(<FilterBarSelectWrapper />)
    const triggerButton = getByRole("button", { name: "Flavour" })
    expect(triggerButton).toBeInTheDocument()
  })

  describe("Removable", () => {
    it("does not show the remove button when isRemovable is false", () => {
      const { queryByRole } = render(<FilterBarSelectWrapper />)
      expect(
        queryByRole("button", { name: "Remove filter - Flavour" })
      ).not.toBeInTheDocument()
    })

    it("shows the remove button when isRemovable is true", () => {
      const { getByRole } = render(
        <FilterBarSelectWrapper
          filterAttributes={{ isRemovable: true }}
          defaultValues={{ flavour: "jasmine-milk-tea" }}
        />
      )
      expect(
        getByRole("button", { name: "Remove filter - Flavour" })
      ).toBeVisible()
    })
  })

  it("can toggle its open state", async () => {
    const { getByRole, queryByRole } = render(<FilterBarSelectWrapper />)
    const triggerButton = getByRole("button", { name: "Flavour" })

    await user.click(triggerButton)
    await waitFor(() => {
      const popover = getByRole("dialog")
      expect(popover).toBeInTheDocument()
    })

    await user.click(document.body)
    await waitFor(() => {
      const popover = queryByRole("dialog")
      expect(popover).not.toBeInTheDocument()
    })
  })

  it("shows a selected value when provided", () => {
    const { getByRole } = render(
      <FilterBarSelectWrapper defaultValues={{ flavour: "jasmine-milk-tea" }} />
    )
    const triggerButton = getByRole("button", {
      name: "Flavour : Jasmine Milk Tea",
    })
    expect(triggerButton).toBeInTheDocument()
  })

  it("updates the selected value in the trigger button", async () => {
    const { getByRole } = render(
      <FilterBarSelectWrapper defaultValues={{ flavour: "jasmine-milk-tea" }} />
    )
    const triggerButton = getByRole("button", {
      name: "Flavour : Jasmine Milk Tea",
    })

    await user.click(triggerButton)
    await waitFor(() => {
      const listbox = getByRole("listbox")
      expect(listbox).toBeInTheDocument()
    })

    await user.click(getByRole("option", { name: "Honey Milk Tea" }))
    await waitFor(() => {
      expect(
        getByRole("button", { name: "Flavour : Honey Milk Tea" })
      ).toBeInTheDocument()
    })
  })

  it("allows calling additional functions on selection change", async () => {
    const onChange = jest.fn<void, [React.Key]>()
    const { getByRole } = render(
      <FilterBarSelectWrapper onSelectionChange={onChange} />
    )
    const triggerButton = getByRole("button", { name: "Flavour" })

    await user.click(triggerButton)
    await waitFor(() => {
      const listbox = getByRole("listbox")
      expect(listbox).toBeInTheDocument()
    })

    await user.click(getByRole("option", { name: "Honey Milk Tea" }))
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("honey-milk-tea")
    })
  })

  it("clears selected values if updated items do not contain the value", async () => {
    type ValuesDependent = Values & {
      topping: string
    }

    type Item = SelectOption & {
      flavour: string
    }

    const FilterTopping = (): JSX.Element => {
      const data = [
        { value: "pearls", label: "Pearls", flavour: "jasmine-milk-tea" },
        {
          value: "fruit-jelly",
          label: "Fruit Jelly",
          flavour: "honey-milk-tea",
        },
      ]

      const [items, setItems] = useState<Item[]>([])

      const { getFilterState } = useFilterBarContext<
        ValuesDependent["topping"],
        ValuesDependent
      >()
      const flavourFilter = getFilterState("flavour")

      useEffect(() => {
        setItems(data.filter(({ flavour }) => flavourFilter.value === flavour))
      }, [flavourFilter.value])

      return <FilterBarSelect id="topping" items={items} />
    }

    const { getByRole, getAllByRole, getByTestId } = render(
      <FilterBarSelectWrapper<ValuesDependent>
        additionalFilters={[
          {
            id: "topping",
            name: "Topping",
            Component: <FilterTopping />,
          },
        ]}
      />
    )

    const flavourButton = getByRole("button", { name: "Flavour" })
    await user.click(flavourButton)
    await user.click(getByRole("option", { name: "Jasmine Milk Tea" }))
    await user.click(document.body)

    const toppingButton = getByRole("button", { name: "Topping" })
    await user.click(toppingButton)

    await waitFor(() => {
      expect(getByRole("listbox")).toBeVisible()
    })

    const toppingOptions = getAllByRole("option")
    expect(toppingOptions.length).toBe(1)
    expect(toppingOptions[0].textContent).toBe("Pearls")

    await user.click(toppingOptions[0])

    await waitFor(() => {
      expect(getByTestId("json-values").textContent).toBe(
        JSON.stringify({
          flavour: "jasmine-milk-tea",
          topping: "pearls",
        })
      )
    })

    await user.click(document.body)
    await user.click(flavourButton)
    await user.click(getByRole("option", { name: "Honey Milk Tea" }))

    await waitFor(() => {
      expect(getByTestId("json-values").textContent).toBe(
        JSON.stringify({
          flavour: "honey-milk-tea",
        })
      )
    })
  })
})

import React, { useState } from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterAttributes, FilterBarProvider } from "~components/FilterBar"
import { FilterBarSelect, FilterBarSelectProps } from "./FilterBarSelect"

const user = userEvent.setup()

type Values = {
  flavour: string
}

const FilterBarSelectWrapper = ({
  defaultValues,
  filterAttributes,
  ...customProps
}: {
  defaultValues?: Partial<Values>
  filterAttributes?: Partial<FilterAttributes<Values>>
} & Partial<FilterBarSelectProps>): JSX.Element => {
  const [values, setValues] = useState<Partial<Values>>(defaultValues ?? {})
  return (
    <FilterBarProvider<Values>
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
})

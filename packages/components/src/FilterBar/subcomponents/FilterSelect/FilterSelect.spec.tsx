import React, { useState } from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterBarProvider } from "~components/FilterBar/context/FilterBarContext"
import { FilterBarSelect, FilterBarSelectProps } from "./FilterSelect"

const user = userEvent.setup()

type Values = {
  flavour: string
}

const FilterBarSelectWrapper = ({
  defaultValues,
  ...customProps
}: {
  defaultValues?: Partial<Values>
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

  it("can toggle its open state", async () => {
    const { getByRole, queryByRole } = render(<FilterBarSelectWrapper />)
    const triggerButton = getByRole("button", { name: "Flavour" })

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
})

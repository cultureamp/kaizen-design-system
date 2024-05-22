import React, { useState } from "react"
import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  FilterAttributes,
  FilterBarProvider,
} from "~components/Filter/FilterBar"
import {
  FilterBarDatePicker,
  FilterBarDatePickerProps,
} from "./FilterBarDatePicker"

const user = userEvent.setup()

type Values = {
  drank: Date
}

const FilterBarDatePickerWrapper = ({
  defaultValues,
  filterAttributes,
  ...customProps
}: {
  defaultValues?: Partial<Values>
  filterAttributes?: Partial<FilterAttributes<Values>>
} & Partial<FilterBarDatePickerProps>): JSX.Element => {
  const [values, setValues] = useState<Partial<Values>>(defaultValues ?? {})
  return (
    <FilterBarProvider<Values>
      filters={[
        {
          id: "drank",
          name: "Drank",
          Component: (
            <FilterBarDatePicker
              id="drank"
              defaultMonth={new Date("2023-06-06")}
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

describe("<FilterBarDatePicker />", () => {
  it("shows the name in the trigger button", () => {
    const { getByRole } = render(<FilterBarDatePickerWrapper />)
    const triggerButton = getByRole("button", { name: "Drank" })
    expect(triggerButton).toBeInTheDocument()
  })

  describe("Removable", () => {
    it("does not show the remove button when isRemovable is false", () => {
      const { queryByRole } = render(<FilterBarDatePickerWrapper />)
      expect(
        queryByRole("button", { name: "Remove filter - Drank" })
      ).not.toBeInTheDocument()
    })

    it("shows the remove button when isRemovable is true", () => {
      const { getByRole } = render(
        <FilterBarDatePickerWrapper
          filterAttributes={{ isRemovable: true }}
          defaultValues={{ drank: new Date("2023-05-01") }}
        />
      )
      expect(
        getByRole("button", { name: "Remove filter - Drank" })
      ).toBeVisible()
    })
  })

  it("can toggle its open state", async () => {
    const { getByRole, queryByRole } = render(<FilterBarDatePickerWrapper />)
    const triggerButton = getByRole("button", { name: "Drank" })

    await user.click(triggerButton)
    await waitFor(() => {
      const dialog = getByRole("dialog")
      expect(dialog).toBeInTheDocument()
    })

    await user.click(document.body)
    await waitFor(() => {
      const dialog = queryByRole("dialog")
      expect(dialog).not.toBeInTheDocument()
    })
  })

  it("shows a selected value when provided", () => {
    const { getByRole } = render(
      <FilterBarDatePickerWrapper
        defaultValues={{ drank: new Date("2023-06-06") }}
      />
    )
    const triggerButton = getByRole("button", {
      name: "Drank : 6 Jun 2023",
    })
    expect(triggerButton).toBeInTheDocument()
  })

  it("updates the selected value in the trigger button when selecting a date", async () => {
    render(
      <FilterBarDatePickerWrapper
        defaultValues={{ drank: new Date("2023-06-06") }}
      />
    )
    const triggerButton = screen.getByRole("button", {
      name: "Drank : 6 Jun 2023",
    })

    await user.click(triggerButton)

    await waitFor(() => {
      const dialog = screen.getByRole("dialog")
      expect(dialog).toBeInTheDocument()
    })

    const targetMonth = screen.getByRole("grid", { name: "June 2023" })
    const targetDay = within(targetMonth).getByRole("gridcell", { name: "7" })

    await user.click(targetDay)

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Drank : 7 Jun 2023" })
      ).toBeInTheDocument()
    })
  })

  it("allows calling additional functions on selection change", async () => {
    const onChange = jest.fn()
    render(<FilterBarDatePickerWrapper onDateChange={onChange} />)

    const triggerButton = screen.getByRole("button", { name: "Drank" })
    await user.click(triggerButton)

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })

    const targetMonth = screen.getByRole("grid", { name: "June 2023" })
    const targetDay = within(targetMonth).getByRole("gridcell", { name: "7" })
    await user.click(targetDay)

    await waitFor(() => {
      expect(onChange.mock.calls).toEqual([[new Date("2023-06-07")]])
    })
  })
})

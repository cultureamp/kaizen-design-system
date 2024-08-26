import React, { useState } from "react"
import { screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderWithIntl } from "~tests"
import {
  FilterAttributes,
  FilterBarProvider,
} from "~components/Filter/FilterBar"
import { DateRange } from "~components/index"
import {
  FilterBarDateRangePicker,
  FilterBarDateRangePickerProps,
} from "./FilterBarDateRangePicker"

const user = userEvent.setup()

type Values = {
  range: DateRange | undefined
}

const FilterBarDateRangePickerWrapper = ({
  defaultValues,
  filterAttributes,
  ...customProps
}: {
  defaultValues?: Partial<Values>
  filterAttributes?: Partial<FilterAttributes<Values>>
} & Partial<FilterBarDateRangePickerProps>): JSX.Element => {
  const [values, setValues] = useState<Partial<Values>>(defaultValues ?? {})
  return (
    <FilterBarProvider<Values>
      filters={[
        {
          id: "range",
          name: "Dates",
          Component: <FilterBarDateRangePicker id="range" {...customProps} />,
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

describe("<FilterBarDateRangePicker />", () => {
  it("shows the name in the trigger button", async () => {
    renderWithIntl(<FilterBarDateRangePickerWrapper />)
    await waitFor(() => {
      const triggerButton = screen.getByRole("button", { name: "Dates" })
      expect(triggerButton).toBeInTheDocument()
    })
  })

  describe("Removable", () => {
    it("does not show the remove button when isRemovable is false", async () => {
      renderWithIntl(<FilterBarDateRangePickerWrapper />)
      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: "Dates" })
        ).toBeInTheDocument()
        expect(
          screen.queryByRole("button", { name: "Remove filter - Dates" })
        ).not.toBeInTheDocument()
      })
    })

    it("shows the remove button when isRemovable is true", async () => {
      const { getByRole } = renderWithIntl(
        <FilterBarDateRangePickerWrapper
          filterAttributes={{ isRemovable: true }}
          defaultValues={{ range: { from: new Date("2023-05-01") } }}
        />
      )
      await waitFor(() => {
        expect(
          getByRole("button", { name: "Remove filter - Dates" })
        ).toBeVisible()
      })
    })
  })

  it("can toggle its open state", async () => {
    const { getByRole, queryByRole } = renderWithIntl(
      <FilterBarDateRangePickerWrapper />
    )
    const triggerButton = getByRole("button", { name: "Dates" })

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

  it("shows a selected value when provided", async () => {
    const { getByRole } = renderWithIntl(
      <FilterBarDateRangePickerWrapper
        defaultValues={{
          range: {
            from: new Date("2022-05-01"),
            to: new Date("2022-11-25"),
          },
        }}
      />
    )
    await waitFor(() => {
      const triggerButton = getByRole("button", {
        name: "Dates : 1 May 2022 - 25 Nov 2022",
      })
      expect(triggerButton).toBeInTheDocument()
    })
  })

  it("updates the selected value in the trigger button", async () => {
    const { getByRole, getByText } = renderWithIntl(
      <FilterBarDateRangePickerWrapper
        defaultValues={{
          range: {
            from: new Date("2022-05-01"),
            to: new Date("2022-06-20"),
          },
        }}
      />
    )
    const triggerButton = getByRole("button", {
      name: "Dates : 1 May 2022 - 20 Jun 2022",
    })

    await user.click(triggerButton)
    await waitFor(() => {
      expect(getByText("May 2022")).toBeVisible()
    })

    const targetMonth = screen.getByRole("grid", { name: "June 2022" })
    const targetDay = within(targetMonth).getByRole("gridcell", { name: "23" })
    await user.click(targetDay)
    await user.click(document.body) // Exit the focus lock

    await waitFor(() => {
      expect(
        getByRole("button", { name: "Dates : 1 May 2022 - 23 Jun 2022" })
      ).toBeInTheDocument()
    })
  }, 10000)

  it("allows calling additional functions on value change", async () => {
    const onChange = vi.fn()
    const { getByRole, getByText } = renderWithIntl(
      <FilterBarDateRangePickerWrapper
        defaultValues={{
          range: {
            from: new Date("2022-05-01"),
            to: new Date("2022-06-20"),
          },
        }}
        onRangeChange={onChange}
      />
    )
    const triggerButton = getByRole("button", {
      name: "Dates : 1 May 2022 - 20 Jun 2022",
    })

    await user.click(triggerButton)
    await waitFor(() => {
      expect(getByText("May 2022")).toBeVisible()
    })

    const targetMonth = screen.getByRole("grid", { name: "June 2022" })
    const targetDay = within(targetMonth).getByRole("gridcell", { name: "23" })
    await user.click(targetDay)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith({
        from: new Date("2022-05-01"),
        to: new Date("2022-06-23"),
      })
    })
  }, 10000)
})

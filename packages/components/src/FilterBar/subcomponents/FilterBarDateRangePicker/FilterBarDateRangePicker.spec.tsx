import React, { useState } from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterBarProvider } from "~components/FilterBar/context/FilterBarContext"
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
  ...customProps
}: {
  defaultValues?: Partial<Values>
} & Partial<FilterBarDateRangePickerProps>): JSX.Element => {
  const [values, setValues] = useState<Partial<Values>>(defaultValues ?? {})
  return (
    <FilterBarProvider<Values>
      filters={[
        {
          id: "range",
          name: "Dates",
          Component: <FilterBarDateRangePicker id="range" {...customProps} />,
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
  it("shows the name in the trigger button", () => {
    const { getByRole } = render(<FilterBarDateRangePickerWrapper />)
    const triggerButton = getByRole("button", { name: "Dates" })
    expect(triggerButton).toBeInTheDocument()
  })

  it("can toggle its open state", async () => {
    const { getByRole, queryByRole } = render(
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

  it("shows a selected value when provided", () => {
    const { getByRole } = render(
      <FilterBarDateRangePickerWrapper
        defaultValues={{
          range: {
            from: new Date("2022-05-01"),
            to: new Date("2022-11-25"),
          },
        }}
      />
    )
    const triggerButton = getByRole("button", {
      name: "Dates : 1 May 2022 - 25 Nov 2022",
    })
    expect(triggerButton).toBeInTheDocument()
  })

  it("updates the selected value in the trigger button", async () => {
    const { getByRole, getByText } = render(
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

    const targetDay = getByRole("button", {
      name: "23rd June (Thursday)",
    })
    await user.click(targetDay)
    await user.click(document.body) // Exit the focus lock

    await waitFor(() => {
      expect(
        getByRole("button", { name: "Dates : 1 May 2022 - 23 Jun 2022" })
      ).toBeInTheDocument()
    })
  }, 10000)

  it("allows calling additional functions on value change", async () => {
    const onChange = jest.fn<void, [DateRange | undefined]>()
    const { getByRole, getByText } = render(
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

    const targetDay = getByRole("button", {
      name: "23rd June (Thursday)",
    })
    await user.click(targetDay)
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith({
        from: new Date("2022-05-01"),
        to: new Date("2022-06-23"),
      })
    })
  })
})

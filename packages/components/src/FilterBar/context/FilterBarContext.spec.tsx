import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { Filters } from "../types"
import { FilterBarProvider, useFilterBarContext } from "./FilterBarContext"

type Values = {
  department: string[]
  manager: string[]
  jobTitle: string[]
}

const MockFilterComponent = ({ id }: { id: string }): JSX.Element => {
  const { getActiveFilterValues } = useFilterBarContext()

  return (
    <div key={id}>{JSON.stringify(getActiveFilterValues())}</div>
  )
}

const config = [
  {
    id: "department",
    name: "Department",
    Component: (
      <MockFilterComponent id="department" />
    ),
  },
  {
    id: "manager",
    name: "Manager",
    Component: <MockFilterComponent id="manager" />,
  },
  {
    id: "jobTitle",
    name: "Job Title",
    Component: (
      <MockFilterComponent id="jobTitle" />
    ),
  },
] satisfies Filters<Values>

export const FilterBarWrapper = ({ defaultValues }: { defaultValues: Partial<Values> }): JSX.Element => {
  const [values, setValues] = useState<Partial<Values>>(defaultValues)

  return (
    <FilterBarProvider
      filters={config}
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

 /*
  * Note: Traditionally we would like to be testing context specific functionality as part of a greater user flow.
  *       However, some methods on useFilterBarContext are not yet supported to easily test this. If that's the case,
  *       we can test them quite explicitly to ensure we have some coverage and confidence.
  */
describe("FilterBarContext", () => {
  describe("useFilterBarContext", () => {
    it("getActiveFilterValues returns expected values", async () => {
      const values = {
        department: ["1", "2"],
        manager: ["30"],
      }

      render(<FilterBarWrapper defaultValues={values} />)

      await waitFor(() => {
        expect(screen.getAllByText(JSON.stringify(values)).length).toEqual(config.length)
      })
    })
  })
})

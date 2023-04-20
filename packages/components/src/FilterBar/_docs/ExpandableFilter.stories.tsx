/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useMemo, useState } from "react"
import { Meta } from "@storybook/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Fetch } from "../components/ExpandableAsyncFilterSelectBox"
import { ExpandableFilterContainer } from "../components/ExpandableFilterContainer"
import { useExpandableFilter } from "../hooks/useExpandableFilter"
import { ExpandableReducer } from "../reducers/expandableReducer"
import { FilterOption, IFilter } from "../types"
import { users, departments } from "./fixtures"
import { mockEndpoint } from "./utils"

type Values = {
  reports?: Array<FilterOption<string>>
  gender?: Array<FilterOption<string>>
  departments?: Array<FilterOption<string>>
  managers?: Array<FilterOption<string>>
}

/**
 * Async filter data fetchers
 * For users we are also emulating a fetch function that conditionally
 * alters results based on another filters value. In this case 'departments'
 *
 * If the department 'Garden' is selected, only names starting with A will be returned
 *
 * This is to showcase the flexibility of the fetch functions
 **/
const getManagers: Fetch = mockEndpoint(users, [
  (model, _, values): any =>
    "departments" in values &&
    Boolean(values.departments.find(d => d.label === "Garden"))
      ? model.filter(m => m.label.toLowerCase().startsWith("a"))
      : model,
])
const getDepartments: Fetch = mockEndpoint(departments)

// Synchronous or static filter data
const reportsOptions = [
  { label: "Directs", value: "directs" },
  { label: "Indirects", value: "indirects" },
]

const genderOptions = [
  { label: "Prefer not to say", value: "nottosay" },
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Non-binary", value: "non-binary" },
]

const client = new QueryClient()

export default {
  tags: ["autodocs"],
  title: "Components/Filter Bar/Expandable Filter",
  component: ExpandableFilterContainer,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    Story => (
      <QueryClientProvider client={client}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof ExpandableFilterContainer>

export const ExpandableFilter = () => {
  /**
   * The URL search params are the source of truth for the 'values' of the filters
   * as we generally want them to be linkable.
   *
   * Because we don't control the URL, the browser does, the filter bar
   * leaves it up to us to manage the storing of the values that it tells
   * us the user has selected. This doesn't HAVE to be the URL, it can be
   * local state as would be the case with some simple filters.
   * */
  const [params, setParams] = useState<Values>({
    reports: [],
    gender: [],
    departments: [],
    managers: [],
  })

  // starting state of the filters, should be memoised
  const filters: Array<IFilter<Values>> = useMemo(
    () => [
      {
        id: "reports",
        name: "Reports",
        Component: (
          <ExpandableFilterContainer.SelectBox
            id="reports"
            options={reportsOptions}
          />
        ),
        removable: true,
        visibility: "hidden",
      },
      {
        id: "gender",
        name: "Gender",
        Component: (
          <ExpandableFilterContainer.SelectBox
            id="gender"
            options={genderOptions}
          />
        ),
        removable: true,
        visibility: "hidden",
      },
      {
        id: "managers",
        name: "Managers",
        Component: (
          <ExpandableFilterContainer.AsyncSelectBox
            id="managers"
            fetch={getManagers}
          />
        ),
        removable: false,
        visibility: "visible",
      },
      {
        id: "departments",
        name: "Departments",
        Component: (
          <ExpandableFilterContainer.AsyncSelectBox
            id="departments"
            fetch={getDepartments}
          />
        ),
        // look at combining these two into one state (machine?)
        // if a filter is not removable, it cannot be hidden once its visible (with the current logic)
        removable: true,
        visibility: "hidden",
      },
    ],
    []
  )

  const expandableState = useExpandableFilter<Values>({
    filters,
    values: params,
    onValuesChange: setParams,
  })

  return (
    <>
      <ExpandableFilterContainer {...expandableState} />
      <div className="my-4 max-w-5xl text-heading5 p-4 border border-green-500 rounded bg-green-200">
        This is just to show the important parts of the state held by the hook
      </div>
      <pre className="text-heading6">
        {JSON.stringify(
          {
            values: expandableState.values,
            ["additionalFilters (computed)"]:
              expandableState.additionalFilters.map(
                ({ Component, ...rest }) => rest
              ),
            ["activeFilters (computed)"]: expandableState.activeFilters.map(
              ({ Component, ...rest }) => rest
            ),
            display: expandableState.display,
            filters: expandableState.filters.map(
              ({ Component, ...rest }) => rest
            ),
          },
          null,
          2
        )}
      </pre>
    </>
  )
}

/**
 *
 * Enforce a visibility for a filter once another has values, give initial value
 */
export const ExpandableFilterConditionalFilters = () => {
  const [params, setParams] = useState<Values>({
    reports: [],
    gender: [],
    departments: [],
    managers: [],
  })

  const [filters, setFilters] = useState<Array<IFilter<Values>>>([
    {
      id: "departments",
      name: "Departments",
      Component: (
        <ExpandableFilterContainer.AsyncSelectBox
          id="departments"
          fetch={getDepartments}
        />
      ),
      // look at combining these two into one state (machine?)
      // if a filter is not removable, it cannot be hidden once its visible (with the current logic)
      removable: true,
      visibility: "hidden",
    },
    {
      id: "managers",
      name: "Managers",
      Component: (
        <ExpandableFilterContainer.AsyncSelectBox
          id="managers"
          fetch={getManagers}
        />
      ),
      removable: false,
      visibility: "visible",
    },
  ])

  /**
   * This showcases how you use the reducer argument to the useExpandableFilter hook
   * to implement conditional filters.
   *
   * You can technically overwrite all internal state through this reducer, but this
   * shouldn't be needed and isn't recommended since there are parts of state that are
   * computed. Without in depth knowledge about how these are calculated, you
   * may end up with undesired results.
   *
   * Since there are computed state values, the reducer exports helper
   * functions to complete common tasks, such as activating/deactivating a filter,
   * to ensure that the resulting state is accurate.
   *
   */
  const reducer: ExpandableReducer<Values> = (
    state,
    event,
    { getFilterById }
  ) => {
    const reportsFilter = getFilterById(state.filters, "reports")
    if (event.type === "removeFilter" && event.data.id === "reports") {
      setParams({ ...params, managers: [], reports: undefined })
      setFilters(state.filters.filter(f => f.id !== "reports"))
      return state
    }

    if (Math.max(params?.managers?.length || 0, 0) > 0 && !reportsFilter) {
      setFilters(
        state.filters.concat({
          id: "reports",
          name: "Reports",
          Component: (
            <ExpandableFilterContainer.SelectBox
              id="reports"
              options={reportsOptions}
            />
          ),
          removable: true,
          visibility: "visible",
        })
      )
      setParams({ ...params, reports: [reportsOptions[0]] })

      return state
    }

    if (Math.max(params?.managers?.length || 0, 0) < 1 && reportsFilter) {
      setParams({ ...params, reports: undefined })

      setFilters(state.filters.filter(f => f.id !== "reports"))
      return state
    }

    return state
  }

  const expandableState = useExpandableFilter<Values>(
    {
      filters,
      values: params,
      onValuesChange: setParams,
    },
    reducer
  )

  return (
    <>
      <ExpandableFilterContainer {...expandableState} />
      <div className="my-4 max-w-5xl text-heading5 p-4 border border-green-500 rounded bg-green-200">
        When a value for the manager filter is confirmed, Reports filter must be
        added and a value of 'Directs' set for it. When no managers are
        selected, the reports filter should not be appear or be available for
        selection.
      </div>
      <pre className="text-heading6">
        {JSON.stringify(
          {
            values: expandableState.values,
            ["additionalFilters (computed)"]:
              expandableState.additionalFilters.map(
                ({ Component, ...rest }) => rest
              ),
            ["activeFilters (computed)"]: expandableState.activeFilters.map(
              ({ Component, ...rest }) => rest
            ),
            display: expandableState.display,
            filters: expandableState.filters.map(
              ({ Component, ...rest }) => rest
            ),
          },
          null,
          2
        )}
      </pre>
    </>
  )
}

const initialFilters: Array<IFilter<Values>> = [
  {
    id: "reports",
    name: "Reports",
    Component: (
      <ExpandableFilterContainer.SelectBox
        id="reports"
        options={reportsOptions}
      />
    ),
    removable: true,
    visibility: "hidden",
  },
  {
    id: "managers",
    name: "Managers",
    Component: (
      <ExpandableFilterContainer.AsyncSelectBox
        id="managers"
        fetch={getManagers}
      />
    ),
    removable: false,
    visibility: "visible",
  },
]

const additionalFilters: Array<IFilter<Values>> = [
  {
    id: "departments",
    name: "Departments",
    Component: (
      <ExpandableFilterContainer.AsyncSelectBox
        id="departments"
        fetch={getDepartments}
      />
    ),
    // look at combining these two into one state (machine?)
    // if a filter is not removable, it cannot be hidden once its visible (with the current logic)
    removable: true,
    visibility: "hidden",
  },
  {
    id: "gender",
    name: "Gender",
    Component: (
      <ExpandableFilterContainer.SelectBox
        id="gender"
        options={genderOptions}
      />
    ),
    removable: true,
    visibility: "hidden",
  },
]

/**
 *
 * filters that become available for selection once another
 * has been selected
 */
export const ExpandableFilterWithDynamicFilters = () => {
  const [params, setParams] = useState<Values>({
    reports: [],
    gender: [],
    departments: [],
    managers: [],
  })

  const [f, setF] = useState(initialFilters)

  const reducer: ExpandableReducer<Values> = (
    state,
    event,
    { getFilterById }
  ) => {
    const reportsFilter = getFilterById(state.filters, "reports")
    if (!reportsFilter) {
      return state
    }

    if (
      event.type === "setFilterVisibility" &&
      event.data.id === "reports" &&
      event.data.visibility !== "hidden"
    ) {
      setTimeout(() => {
        setF(state.filters.concat(additionalFilters))
      }, 500)

      return state
    }

    return state
  }

  const expandableState = useExpandableFilter<Values>(
    {
      filters: f,
      values: params,
      onValuesChange: setParams,
    },
    reducer
  )

  return (
    <>
      <ExpandableFilterContainer {...expandableState} />
      <div className="my-4 max-w-5xl text-heading5 p-4 border border-green-500 rounded bg-green-200">
        More filters become available once Reports has been selected
      </div>
      <pre className="text-heading6">
        {JSON.stringify(
          {
            values: expandableState.values,
            ["additionalFilters (computed)"]:
              expandableState.additionalFilters.map(
                ({ Component, ...rest }) => rest
              ),
            ["activeFilters (computed)"]: expandableState.activeFilters.map(
              ({ Component, ...rest }) => rest
            ),
            display: expandableState.display,
            filters: expandableState.filters.map(
              ({ Component, ...rest }) => rest
            ),
          },
          null,
          2
        )}
      </pre>
    </>
  )
}

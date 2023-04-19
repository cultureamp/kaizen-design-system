import React from "react"
import { ComponentMeta } from "@cultureamp/frontend-storybook"
import { useQueryParam, JsonParam } from "use-query-params"
import { SimpleFilterContainer } from "./components/SimpleFilterContainer"
import { FilterOption, IBaseFilter } from "./types"
import { useSimpleFilter } from "./hooks/useSimpleFilter"

type Values = {
  userStatus: FilterOption<string>[]
  gender: FilterOption<string>[]
}

const userStatusOptions = [
  { label: "Active", value: "active" },
  { label: "Deactivated", value: "deactivated" },
]
const genderOptions = [
  { label: "Prefer not to say", value: "nottosay" },
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Non-binary", value: "non-binary" },
]

const filters: IBaseFilter<Values>[] = [
  {
    id: "userStatus",
    name: "User Status",
    Component: (
      <SimpleFilterContainer.SelectBox
        id="userStatus"
        options={userStatusOptions}
      />
    ),
  },
  {
    id: "gender",
    name: "Gender",
    Component: (
      <SimpleFilterContainer.SelectBox id="gender" options={genderOptions} />
    ),
  },
]

export default {
  component: SimpleFilterContainer,
} as ComponentMeta<typeof SimpleFilterContainer>

export const SimpleFilter = () => {
  const [params, setParams] = useQueryParam("filter", JsonParam)

  const updateUrl = (values: Values) => {
    setParams(values)
  }

  const state = useSimpleFilter<Values>({
    filters,
    values: params,
    onValuesChange: updateUrl,
  })

  return (
    <>
      <SimpleFilterContainer
        dispatch={state.dispatch}
        values={state.values}
        filters={state.filters}
      />
      <pre>
        {JSON.stringify({ values: state.values }, null, 2)}
        {JSON.stringify(
          { filters: state.filters.map(({ Component, ...rest }) => rest) },
          null,
          2
        )}
      </pre>
    </>
  )
}

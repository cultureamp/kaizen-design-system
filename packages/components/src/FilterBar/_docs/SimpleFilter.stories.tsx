/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from "react"
import { Meta } from "@storybook/react"
import { SimpleFilterContainer } from "../components/SimpleFilterContainer"
import { useSimpleFilter } from "../hooks/useSimpleFilter"
import { FilterOption, IBaseFilter } from "../types"

type Values = {
  userStatus: Array<FilterOption<string>>
  gender: Array<FilterOption<string>>
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

const filters: Array<IBaseFilter<Values>> = [
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
  tags: ["autodocs"],
  title: "Components/Filter Bar/Simple Filter",
  component: SimpleFilterContainer,
} satisfies Meta<typeof SimpleFilterContainer>

export const SimpleFilter = () => {
  const [params, setParams] = useState<Values>({
    userStatus: [],
    gender: [],
  })

  const state = useSimpleFilter<Values>({
    filters,
    values: params,
    onValuesChange: setParams,
  })

  return (
    <>
      <SimpleFilterContainer {...state} />
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

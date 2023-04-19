import React from "react"
import { useSimpleFilterProvider } from "../hooks/useSimpleFilterState"
import type { FilterValues, SimpleFilterContainerProps } from "../types"
import { SimpleFilterSelectBox } from "./SimpleFilterSelectBox"
import { Items } from "./Items"

export const SimpleFilterContainer = <T extends FilterValues>(
  props: SimpleFilterContainerProps<T>
) => {
  const SimpleFilterProvider = useSimpleFilterProvider<T>()
  return (
    <SimpleFilterProvider value={props}>
      <Items>
        {props.filters.map(({ Component, id }) => (
          <React.Fragment key={String(id)}>{Component}</React.Fragment>
        ))}
      </Items>
    </SimpleFilterProvider>
  )
}

SimpleFilterContainer.SelectBox = SimpleFilterSelectBox

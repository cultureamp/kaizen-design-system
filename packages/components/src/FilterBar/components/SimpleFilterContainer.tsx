/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React from "react"
import { useSimpleFilterProvider } from "../hooks/useSimpleFilterState"
import type { FilterValues, SimpleFilterContainerProps } from "../types"
import { Items } from "./Items"
import { SimpleFilterSelectBox } from "./SimpleFilterSelectBox"

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

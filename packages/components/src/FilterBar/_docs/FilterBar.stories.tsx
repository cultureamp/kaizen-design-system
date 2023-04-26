import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import { useFilterBarContext } from "../context/FilterBarContext"
import { FilterBar } from "../index"
import { FilterAddButton } from "../subcomponents/FilterAddButton"
import { FilterPancake } from "../subcomponents/FilterPancake"
import { FilterBarSelect } from "../subcomponents/FilterSelect"

const meta = {
  tags: ["autodocs"],
  title: "Components/__Filter Bar",
  component: FilterBar,
} satisfies Meta<typeof FilterBar>

export default meta

// Component must be created to access the context.
// Provider is in FilterBar, thus hook cannot be called in instantiating component.
const VanillaPancake = (): JSX.Element => {
  const { setOpenFilter } = useFilterBarContext()
  return (
    <FilterPancake
      label="Vanilla"
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButtonRemovable
          triggerButtonProps={{ ...triggerProps }}
          removeButtonProps={{ onClick: () => undefined }}
        />
      )}
      onChange={(): void => setOpenFilter("Coffee")}
    />
  )
}

export const Playground: StoryFn<typeof FilterBar> = () => {
  const [filtersState, setFiltersState] = useState({})

  return (
    <div>
      <FilterBar onChange={setFiltersState}>
        <FilterPancake
          label="Chocolate"
          renderTrigger={(triggerProps): JSX.Element => (
            <FilterButton {...triggerProps} />
          )}
        />

        <VanillaPancake />

        <FilterBarSelect
          label="Coffee"
          renderTrigger={(triggerProps): JSX.Element => (
            <FilterButton {...triggerProps} />
          )}
          items={[
            { label: "Short black", value: "short-black" },
            { label: "Long black", value: "long-black" },
            { label: "Batch brew", value: "batch-brew" },
          ]}
        />

        <FilterPancake
          label="Carrots"
          renderTrigger={(triggerProps): JSX.Element => (
            <FilterButton {...triggerProps} />
          )}
          isDefaultHidden
        />

        <FilterAddButton />
      </FilterBar>

      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}

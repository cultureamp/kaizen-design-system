import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import { useFilterBarContext } from "../context/FilterBarContext"
import { FilterBar } from "../index"
import { FilterAddButton } from "../subcomponents/FilterAddButton"
import { FilterClearAllButton } from "../subcomponents/FilterClearAllButton"
import { FilterDRP } from "../subcomponents/FilterDRP"
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
  const { setOpenFilter, hideFilter } = useFilterBarContext()
  const label = "Vanilla"
  return (
    <FilterPancake
      label={label}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButtonRemovable
          triggerButtonProps={{ ...triggerProps }}
          removeButtonProps={{ onClick: () => hideFilter(label) }}
        />
      )}
      onChange={(): void => setOpenFilter("Coffee")}
      isUsableWhen={(state): boolean => state["Chocolate"].selectedValue !== undefined}
    />
  )
}

const CurrySelect = (): JSX.Element => {
  const { hideFilter } = useFilterBarContext()
  const label = "Curry"

  return (
    <FilterBarSelect
      label={label}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButtonRemovable
          triggerButtonProps={{ ...triggerProps }}
          removeButtonProps={{ onClick: () => hideFilter(label) }}
        />
      )}
      items={[
        { label: "Lamb", value: "lamb" },
        { label: "Beef", value: "beef" },
      ]}
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

        <FilterDRP
          id="drp"
          locale="en-AU"
          label="Dates"
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

        <CurrySelect />

        <FilterPancake
          label="Carrots"
          renderTrigger={(triggerProps): JSX.Element => (
            <FilterButton {...triggerProps} />
          )}
          isDefaultHidden
        />

        <FilterAddButton />
        <FilterClearAllButton />
      </FilterBar>

      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}

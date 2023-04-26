import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import { FilterPancake } from "~components/FilterPancake"
import { FilterBar } from "../index"
import { FilterBarSelect } from "../subcomponents/FilterSelect"

const meta = {
  tags: ["autodocs"],
  title: "Components/__Filter Bar",
  component: FilterBar,
} satisfies Meta<typeof FilterBar>

export default meta

export const Playground: StoryFn<typeof FilterBar> = () => {
  const [filtersState, setFiltersState] = useState({})

  const [isOpenChoc, setIsOpenChoc] = useState(false)
  const [isOpenVanilla, setIsOpenVanilla] = useState(false)
  const [isOpenSelect, setIsOpenSelect] = useState(false)

  return (
    <div>
      <FilterBar onChange={setFiltersState}>
        <FilterPancake
          label="Chocolate"
          isOpen={isOpenChoc}
          setIsOpen={setIsOpenChoc}
          renderTrigger={(triggerProps): JSX.Element => (
            <FilterButton {...triggerProps} />
          )}
        />

        <FilterPancake
          label="Vanilla"
          isOpen={isOpenVanilla}
          setIsOpen={setIsOpenVanilla}
          renderTrigger={(triggerProps): JSX.Element => (
            <FilterButtonRemovable
              triggerButtonProps={{ ...triggerProps }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          )}
        />

        <FilterBarSelect
          label="Coffee"
          isOpen={isOpenSelect}
          setIsOpen={setIsOpenSelect}
          renderTrigger={(triggerProps): JSX.Element => (
            <FilterButton {...triggerProps} />
          )}
          items={[
            { label: "Short black", value: "short-black" },
            { label: "Long black", value: "long-black" },
            { label: "Batch brew", value: "batch-brew" },
          ]}
        />
      </FilterBar>

      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}

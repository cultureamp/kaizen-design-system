import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import { FilterPancake } from "~components/FilterPancake"
import { FilterBar } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/__Filter Bar",
  component: FilterBar,
} satisfies Meta<typeof FilterBar>

export default meta

export const Playground: StoryFn<typeof FilterBar> = () => {
  const [filtersState, setFiltersState] = useState({})

  const [isOpenChoc, setIsOpenChoc] = useState(false)
  const [isOpenStrawb, setIsOpenStrawb] = useState(false)
  const [isOpenVanilla, setIsOpenVanilla] = useState(false)

  return (
    <div>
    <FilterBar
      onChange={setFiltersState}
    >
      <FilterPancake
        label="Chocolate"
        isOpen={isOpenChoc}
        setIsOpen={setIsOpenChoc}
        renderTrigger={(triggerProps): JSX.Element => (
          <FilterButton {...triggerProps} />
        )}
      />

      <FilterPancake
        label="Strawberry"
        isOpen={isOpenStrawb}
        setIsOpen={setIsOpenStrawb}
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
            triggerButtonProps={{...triggerProps}}
            removeButtonProps={{ onClick: () => undefined }}
          />
        )}
      />
    </FilterBar>

    <Highlight className="json">
      {JSON.stringify(filtersState, null, 4)}
    </Highlight>
    </div>
  )
}

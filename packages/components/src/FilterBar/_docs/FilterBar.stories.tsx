import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { FilterButton } from "~components/FilterButton"
import { FilterPancake } from "~components/FilterPancake"
import { FilterBar } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/__Filter Bar",
  component: FilterBar,
} satisfies Meta<typeof FilterBar>

export default meta

export const Playground: StoryFn<typeof FilterBar> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
  <FilterBar>
    <FilterPancake
      label="Chocolate"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element => <FilterButton {...triggerProps} />}
    />
  </FilterBar>
  )
}

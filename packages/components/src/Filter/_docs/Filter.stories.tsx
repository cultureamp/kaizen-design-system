import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryFn } from "@storybook/react"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { Filter, FilterContents } from ".."

export default {
  title: "Components/Filter Base",
  component: Filter,
  argTypes: {
    children: { control: "disabled" },
    isOpen: { control: "disabled" },
    setIsOpen: { control: "disabled" },
    renderTrigger: { control: "disabled" },
    onMount: { control: "disabled" },
    ...classNameOverrideArgType,
  },
} satisfies Meta<typeof Filter>

export const SimpleFilter: StoryFn<typeof Filter> = args => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Filter
      {...args}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButton label="Label" {...triggerProps} />
      )}
    >
      <FilterContents>Filter Contents</FilterContents>
    </Filter>
  )
}

export const RemovableFilter: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButtonRemovable
          triggerButtonProps={{
            label: "Label",
            ...triggerProps,
          }}
          removeButtonProps={{
            onClick: action("remove button clicked"),
          }}
        />
      )}
    >
      <FilterContents>Filter Contents</FilterContents>
    </Filter>
  )
}

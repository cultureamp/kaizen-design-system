import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryFn } from "@storybook/react"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import { Filter, FilterContents } from ".."

export default {
  title: "Components/Filter Base",
  component: Filter,
  argTypes: {
    classNameOverride: {
      type: "string",
      description: "Add extra classnames to the component.",
    },
  },
} satisfies Meta<typeof Filter>

export const SimpleFilter: StoryFn<typeof Filter> = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Filter
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

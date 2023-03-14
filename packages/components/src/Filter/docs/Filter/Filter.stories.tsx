import React, { useRef, useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Filter } from "../../Filter"
import { FilterContents } from "../../components/FilterContents"
import { FilterTriggerButton } from "../../components/FilterTriggerButton"
import {
  FilterTriggerButtonRemovable,
  FilterTriggerButtonRemovableRefs,
} from "../../components/FilterTriggerButtonRemovable"

export default {
  title: "Components/Filter/Filter",
  component: Filter,
  parameters: {},
  decorators: [withDesign],
} as ComponentMeta<typeof Filter>

export const DefaultStory: ComponentStory<typeof Filter> = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      filterButton={(triggerButtonProps): JSX.Element => (
        <FilterTriggerButton label="Label" {...triggerButtonProps} />
      )}
    >
      <FilterContents>Filter Contents</FilterContents>
    </Filter>
  )
}
DefaultStory.storyName = "Filter"

export const FilterButtonRemovable: ComponentStory<typeof Filter> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerButtonRef = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const ref = useRef<FilterTriggerButtonRemovableRefs>({
    triggerButtonRef,
    removeButtonRef,
  })
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      filterButton={(triggerButtonProps): JSX.Element => (
        <FilterTriggerButtonRemovable
          ref={ref}
          triggerButtonProps={{ label: "Label", ...triggerButtonProps }}
          removeButtonProps={{ onClick: () => undefined }}
        />
      )}
    >
      <FilterContents>Filter Contents</FilterContents>
    </Filter>
  )
}
FilterButtonRemovable.storyName = "Filter With Trigger Button Removable"

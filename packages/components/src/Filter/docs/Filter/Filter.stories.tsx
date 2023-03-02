import React, { useRef, useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  CATEGORIES,
  SUB_CATEGORIES,
} from "../../../../../../storybook/constants"
import { Filter } from "../../Filter"
import { FilterContents } from "../../components/FilterContents"
import { FilterTriggerButton } from "../../components/FilterTriggerButton"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.filter}/Filter`,
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

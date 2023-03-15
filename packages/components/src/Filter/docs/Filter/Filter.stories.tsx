import React, { useRef, useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../../../../storybook/components/StickerSheet"
import { Filter, FilterProps } from "../../Filter"
import { FilterContents } from "../../components/FilterContents"
import {
  FilterTriggerButton,
  FilterTriggerButtonProps,
} from "../../components/FilterTriggerButton"
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

const StickerSheetTemplate: Story = () => {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <StickerSheet heading="Filter Button">
      <StickerSheet.Header headings={["Open"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Filter
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            filterButton={(triggerButtonProps): JSX.Element => (
              <FilterTriggerButton label="Label" {...triggerButtonProps} />
            )}
          >
            <FilterContents>Filter Contents</FilterContents>
          </Filter>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

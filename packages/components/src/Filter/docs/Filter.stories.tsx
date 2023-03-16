import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../FilterButton"
import { Filter, FilterContents } from "../../index"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>

export const DefaultStory: ComponentStory<typeof Filter> = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      filterButton={(triggerButtonProps): JSX.Element => (
        <FilterButton label="Label" {...triggerButtonProps} />
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
    <StickerSheet
      heading="Filter"
      style={{ paddingBottom: IS_CHROMATIC ? "6rem" : undefined }}
    >
      <StickerSheet.Header headings={["Open"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Filter
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            filterButton={(triggerButtonProps): JSX.Element => (
              <FilterButton label="Label" {...triggerButtonProps} />
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

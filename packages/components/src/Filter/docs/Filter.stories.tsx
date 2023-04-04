import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { Filter, FilterContents } from ".."

const IS_CHROMATIC = isChromatic()

export default {
  tags: ["autodocs"],
  title: "Components/Filter",
  component: Filter,
  parameters: {
    docs: {
      description: {
        component:
          '`import { Filter, FilterContents, FilterButton, FilterButtonRemovable } from "@kaizen/components"`<br />Use a Filter Button for the renderTrigger.<br />Use FilterContents to wrap the contents within a Filter.',
      },
    },
  },
} as ComponentMeta<typeof Filter>

export const DefaultStory: ComponentStory<typeof Filter> = () => {
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
DefaultStory.storyName = "Filter"

export const RemovableFilter: Story = () => {
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
            renderTrigger={(triggerProps): JSX.Element => (
              <FilterButton label="Label" {...triggerProps} />
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

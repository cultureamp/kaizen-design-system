import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic"
import { FilterButton } from "~components/FilterButton"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { Filter, FilterContents } from ".."

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Base",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof Filter>

const StickerSheetTemplate: StoryFn = () => {
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

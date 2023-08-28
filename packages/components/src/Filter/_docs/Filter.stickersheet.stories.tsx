import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { FilterButton } from "~components/FilterButton"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { Filter, FilterContents } from ".."

const IS_CHROMATIC = isChromatic()

const meta = {
  title: "Components/Filter Base",
  component: StickerSheet,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // FIXME: dialog element should have an accessible name
            id: "aria-dialog-name",
            enabled: false,
          },
        ],
      },
    },
    chromatic: { disable: false },
    controls: { disable: true },
  },
  args: { children: undefined },
} satisfies Meta<typeof StickerSheet>

export default meta

type Story = StoryObj<typeof meta>

const StickerSheetTemplate: Story["render"] = () => {
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

export const StickerSheetDefault: Story = {
  render: StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

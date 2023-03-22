import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { singleMockItems } from "@kaizen/select/docs/MockData"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../FilterButton"
import { Filter } from "../../index"
import { FilterSelect } from "../FilterSelect"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Select",
  component: FilterSelect,
  parameters: {
    docs: {
      description: {
        component: '`import { FilterSelect } from "@kaizen/components"`',
      },
    },
  },
} as ComponentMeta<typeof Filter>

export const DefaultStory: ComponentStory<typeof Filter> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <FilterSelect
      label="Pancakes"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerButtonProps): JSX.Element => (
        <FilterButton {...triggerButtonProps} />
      )}
      items={singleMockItems}
    />
  )
}
DefaultStory.storyName = "Filter Select"

const StickerSheetTemplate: Story = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [isCustomItemsOpen, setIsCustomItemsOpen] = React.useState(true)

  return (
    <StickerSheet
      heading="Filter Select"
      style={{ paddingBottom: IS_CHROMATIC ? "26rem" : undefined }}
    >
      <StickerSheet.Header headings={["Open", "Custom items"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <div style={{ width: "250px" }}>
            <FilterSelect
              label="Label"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              renderTrigger={(triggerProps): JSX.Element => (
                <FilterButton {...triggerProps} />
              )}
              items={singleMockItems}
            />
          </div>
          <div>
            <FilterSelect
              label="Label"
              isOpen={isCustomItemsOpen}
              setIsOpen={setIsCustomItemsOpen}
              renderTrigger={(triggerProps): JSX.Element => (
                <FilterButton {...triggerProps} />
              )}
              items={singleMockItems}
            >
              {({ items }): JSX.Element[] =>
                items.map(item => (
                  <FilterSelect.Option
                    key={item.key}
                    item={{
                      ...item,
                      rendered: (
                        <div>
                          <div style={{ fontSize: "0.75rem", color: "gray" }}>
                            Customised in list!
                          </div>
                          <div>{item.rendered}</div>
                        </div>
                      ),
                    }}
                  />
                ))
              }
            </FilterSelect>
          </div>
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

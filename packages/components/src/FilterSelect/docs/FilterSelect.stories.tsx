import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { groupedMockItems, singleMockItems } from "@kaizen/select/docs/MockData"
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
  const [isOpenDefaultSingle, setIsOpenDefaultSingle] = React.useState(true)
  const [isOpenDefaultGroup, setIsOpenDefaultGroup] = React.useState(true)
  const [isOpenCustomSingle, setIsOpenCustomSingle] = React.useState(true)
  const [isOpenCustomPartial, setIsOpenCustomPartial] = React.useState(true)

  return (
    <>
      <StickerSheet
        heading="Default options"
        style={{ paddingBottom: "26rem" }}
      >
        <StickerSheet.Header headings={["Single items", "Groups"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenDefaultSingle}
                setIsOpen={setIsOpenDefaultSingle}
                renderTrigger={(triggerProps): JSX.Element => (
                  <FilterButton {...triggerProps} />
                )}
                items={singleMockItems}
              />
            </div>
            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenDefaultGroup}
                setIsOpen={setIsOpenDefaultGroup}
                renderTrigger={(triggerProps): JSX.Element => (
                  <FilterButton {...triggerProps} />
                )}
                items={groupedMockItems}
              />
            </div>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet
        heading="Customised options"
        style={{ paddingBottom: IS_CHROMATIC ? "26rem" : undefined }}
      >
        <StickerSheet.Header
          headings={["All options (no groups)", "Partial customisation"]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenCustomSingle}
                setIsOpen={setIsOpenCustomSingle}
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

            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenCustomPartial}
                setIsOpen={setIsOpenCustomPartial}
                renderTrigger={(triggerProps): JSX.Element => (
                  <FilterButton {...triggerProps} />
                )}
                items={[
                  { label: "Bacon", value: "bacon" },
                  { label: "Cat", value: "cat" },
                  { label: "Coffee", value: "coffee" },
                  {
                    label: "Desserts",
                    value: [
                      { label: "Pancake", value: "pancake" },
                      { label: "Waffle", value: "waffle" },
                    ],
                  },
                  {
                    label: "Colours",
                    value: [
                      { label: "Blue", value: "blue" },
                      { label: "Red", value: "red" },
                      { label: "Green", value: "green" },
                    ],
                  },
                ]}
              >
                {({ items }): JSX.Element[] =>
                  items.map(item => {
                    if (item.key === "bacon") {
                      return (
                        <FilterSelect.Option
                          key={item.key}
                          item={{
                            ...item,
                            rendered: <div>++ {item.rendered}</div>,
                          }}
                        />
                      )
                    }

                    if (item.key === "Desserts") {
                      return (
                        <FilterSelect.Section
                          key={item.key}
                          section={{
                            ...item,
                            childNodes: Array.from(item.childNodes).map(
                              child => ({
                                ...child,
                                rendered: <div>-- {child.rendered}</div>,
                              })
                            ),
                          }}
                        />
                      )
                    }

                    return (
                      <FilterSelect.ItemDefault key={item.key} item={item} />
                    )
                  })
                }
              </FilterSelect>
            </div>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

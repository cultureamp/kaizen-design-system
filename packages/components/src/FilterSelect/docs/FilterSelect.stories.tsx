import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../FilterButton"
import { Filter } from "../../index"
import { FilterSelect } from "../FilterSelect"
import { groupedMockItems, mixedMockItems, singleMockItems } from "./mockData"

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
  const [isOpenDefaultSingle, setIsOpenDefaultSingle] =
    React.useState<boolean>(IS_CHROMATIC)
  const [isOpenDefaultGroup, setIsOpenDefaultGroup] =
    React.useState<boolean>(IS_CHROMATIC)
  const [isOpenDefaultExisting, setIsOpenDefaultExisting] =
    React.useState<boolean>(IS_CHROMATIC)

  const [isOpenCustomSingle, setIsOpenCustomSingle] =
    React.useState<boolean>(IS_CHROMATIC)
  const [isOpenCustomPartial, setIsOpenCustomPartial] =
    React.useState<boolean>(IS_CHROMATIC)
  const [isOpenCustomDividerMixed, setIsOpenCustomDividerMixed] =
    React.useState<boolean>(IS_CHROMATIC)
  const [isOpenCustomDividerSpecific, setIsOpenCustomDividerSpecific] =
    React.useState<boolean>(IS_CHROMATIC)

  return (
    <>
      <StickerSheet
        heading="Default options"
        style={{ paddingBottom: IS_CHROMATIC ? "26rem" : undefined }}
      >
        <StickerSheet.Header
          headings={["Single items", "Groups", "Existing value"]}
        />
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
            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenDefaultExisting}
                setIsOpen={setIsOpenDefaultExisting}
                renderTrigger={(triggerProps): JSX.Element => (
                  <FilterButton {...triggerProps} />
                )}
                items={singleMockItems}
                selectedKey="mocha"
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
          headings={[
            "All options",
            "Partial customisation",
            "Section dividers",
            "Specific item divider",
          ]}
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
                  { label: "Pancake", value: "pancake" },
                  { label: "Waffle", value: "waffle" },
                  ...groupedMockItems,
                ]}
              >
                {({ items }): JSX.Element[] =>
                  items.map(item => {
                    if (item.key === "pancake") {
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

                    if (item.key === "Flavours") {
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

            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenCustomDividerMixed}
                setIsOpen={setIsOpenCustomDividerMixed}
                renderTrigger={(triggerProps): JSX.Element => (
                  <FilterButton {...triggerProps} />
                )}
                items={mixedMockItems}
              >
                {({ items }): JSX.Element[] =>
                  items.map(item => (
                    <React.Fragment key={item.key}>
                      {item.type === "section" && (
                        <FilterSelect.SectionDivider />
                      )}
                      <FilterSelect.ItemDefault item={item} />
                      {item.type === "section" && (
                        <FilterSelect.SectionDivider />
                      )}
                    </React.Fragment>
                  ))
                }
              </FilterSelect>
            </div>

            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenCustomDividerSpecific}
                setIsOpen={setIsOpenCustomDividerSpecific}
                renderTrigger={(triggerProps): JSX.Element => (
                  <FilterButton {...triggerProps} />
                )}
                items={[
                  { label: "Customise...", value: "custom" },
                  ...singleMockItems,
                ]}
              >
                {({ items }): JSX.Element[] =>
                  items.map(item => {
                    if (item.key === "custom") {
                      return (
                        <React.Fragment key={item.key}>
                          <FilterSelect.Option item={item} />
                          <FilterSelect.SectionDivider />
                        </React.Fragment>
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

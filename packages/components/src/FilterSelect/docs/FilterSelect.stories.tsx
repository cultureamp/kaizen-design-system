import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "../../FilterButton"
import { FilterSelect } from "../FilterSelect"
import {
  groupedMockItems,
  mixedMockItemsUngroupedFirst,
  mixedMockItemsUnordered,
  singleMockItems,
} from "./mockData"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Select",
  component: FilterSelect,
  argTypes: {
    isOpen: { control: "disabled" },
    setIsOpen: { control: "disabled" },
    renderTrigger: {
      options: ["Filter Button", "Filter Button Removable"],
      control: { type: "radio" },
      mapping: {
        "Filter Button": (
          triggerButtonProps: FilterButtonProps
        ): JSX.Element => <FilterButton {...triggerButtonProps} />,
        "Filter Button Removable": (
          triggerButtonProps: FilterButtonProps
        ): JSX.Element => (
          <FilterButtonRemovable
            triggerButtonProps={{ ...triggerButtonProps }}
            removeButtonProps={{ onClick: action("remove button onClick") }}
          />
        ),
      },
    },
    items: {
      options: ["Single", "Grouped", "Mix"],
      control: { type: "radio" },
      mapping: {
        Single: singleMockItems,
        Grouped: groupedMockItems,
        Mix: mixedMockItemsUngroupedFirst,
      },
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: '`import { FilterSelect } from "@kaizen/components"`',
      },
    },
  },
} as ComponentMeta<typeof FilterSelect>

export const DefaultStory: ComponentStory<typeof FilterSelect> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <FilterSelect {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
}
DefaultStory.storyName = "Filter Select"
DefaultStory.args = {
  label: "Coffee",
  /* @ts-expect-error: Storybook controls key; see argTypes in default export */
  items: "Single",
  /* @ts-expect-error: Storybook controls key; see argTypes in default export */
  renderTrigger: "Filter Button",
}

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
                items={mixedMockItemsUngroupedFirst}
              >
                {({ items }): JSX.Element[] =>
                  items.map(item => {
                    if (item.key === "batch-brew") {
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

                    if (item.key === "Syrup") {
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
                items={mixedMockItemsUnordered}
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

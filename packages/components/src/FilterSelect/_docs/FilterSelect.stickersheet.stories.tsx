import React, { useState } from "react"
import { Meta } from "@storybook/react"
import isChromatic from "chromatic"
import {
  StickerSheet,
  StickerSheetStory,
} from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../FilterButton"
import { FilterSelect } from "../FilterSelect"
import {
  groupedMockItems,
  mixedMockItemsDisabled,
  mixedMockItemsUngroupedFirst,
  mixedMockItemsUnordered,
  singleMockItems,
} from "./mockData"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Select",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory["render"] = () => {
  // Only open the dropdowns in Chromatic as the focus locks clash with
  // each other in Storybook.
  const [isOpenDefaultSingle, setIsOpenDefaultSingle] =
    useState<boolean>(IS_CHROMATIC)
  const [isOpenDefaultGroup, setIsOpenDefaultGroup] =
    useState<boolean>(IS_CHROMATIC)
  const [isOpenDefaultExisting, setIsOpenDefaultExisting] =
    useState<boolean>(IS_CHROMATIC)
  const [isOpenDefaultDisabled, setIsOpenDefaultDisabled] =
    useState<boolean>(IS_CHROMATIC)

  const [isOpenCustomSingle, setIsOpenCustomSingle] =
    useState<boolean>(IS_CHROMATIC)
  const [isOpenCustomPartial, setIsOpenCustomPartial] =
    useState<boolean>(IS_CHROMATIC)
  const [isOpenCustomDividerMixed, setIsOpenCustomDividerMixed] =
    useState<boolean>(IS_CHROMATIC)
  const [isOpenCustomDividerSpecific, setIsOpenCustomDividerSpecific] =
    useState<boolean>(IS_CHROMATIC)

  const [isOpenMin, setIsOpenMin] = useState<boolean>(IS_CHROMATIC)
  const [isOpenMax, setIsOpenMax] = useState<boolean>(IS_CHROMATIC)

  return (
    <>
      <StickerSheet
        heading="Default options"
        style={{ paddingBottom: IS_CHROMATIC ? "26rem" : undefined }}
      >
        <StickerSheet.Header
          headings={["Single items", "Groups", "Existing value", "Disabled"]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenDefaultSingle}
                setIsOpen={setIsOpenDefaultSingle}
                renderTrigger={triggerProps => (
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
                renderTrigger={triggerProps => (
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
                renderTrigger={triggerProps => (
                  <FilterButton {...triggerProps} />
                )}
                items={singleMockItems}
                selectedKey="mocha"
              />
            </div>
            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenDefaultDisabled}
                setIsOpen={setIsOpenDefaultDisabled}
                renderTrigger={triggerProps => (
                  <FilterButton {...triggerProps} />
                )}
                items={mixedMockItemsDisabled}
              />
            </div>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet
        heading="Customised options"
        style={{ paddingTop: IS_CHROMATIC ? "26rem" : undefined }}
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
                renderTrigger={triggerProps => (
                  <FilterButton {...triggerProps} />
                )}
                items={singleMockItems}
              >
                {({ items }): JSX.Element[] =>
                  items.map(item => {
                    if (item.type === "item") {
                      return (
                        <FilterSelect.Option
                          key={item.key}
                          item={{
                            ...item,
                            rendered: (
                              <div>
                                <div
                                  style={{ fontSize: "0.75rem", color: "gray" }}
                                >
                                  Customised in list!
                                </div>
                                <div>{item.rendered}</div>
                              </div>
                            ),
                          }}
                        />
                      )
                    }

                    return (
                      <FilterSelect.ItemDefaultRender
                        key={item.key}
                        item={item}
                      />
                    )
                  })
                }
              </FilterSelect>
            </div>

            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenCustomPartial}
                setIsOpen={setIsOpenCustomPartial}
                renderTrigger={triggerProps => (
                  <FilterButton {...triggerProps} />
                )}
                items={mixedMockItemsUngroupedFirst}
              >
                {({ items }): JSX.Element[] =>
                  items.map(item => {
                    if (item.type === "item" && item.key === "batch-brew") {
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

                    if (item.type === "section" && item.key === "Syrup") {
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
                      <FilterSelect.ItemDefaultRender
                        key={item.key}
                        item={item}
                      />
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
                renderTrigger={triggerProps => (
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
                      <FilterSelect.ItemDefaultRender item={item} />
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
                renderTrigger={triggerProps => (
                  <FilterButton {...triggerProps} />
                )}
                items={[
                  { label: "Customise...", value: "custom" },
                  ...singleMockItems,
                ]}
              >
                {({ items }): JSX.Element[] =>
                  items.map(item => {
                    if (item.type === "item" && item.key === "custom") {
                      return (
                        <React.Fragment key={item.key}>
                          <FilterSelect.Option item={item} />
                          <FilterSelect.SectionDivider />
                        </React.Fragment>
                      )
                    }

                    return (
                      <FilterSelect.ItemDefaultRender
                        key={item.key}
                        item={item}
                      />
                    )
                  })
                }
              </FilterSelect>
            </div>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet
        heading="Min/Max"
        style={{ paddingTop: IS_CHROMATIC ? "26rem" : undefined }}
      >
        <StickerSheet.Header headings={["Min size", "Max size"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <div style={{ width: "250px" }}>
              <FilterSelect
                label="Label"
                isOpen={isOpenMin}
                setIsOpen={setIsOpenMin}
                renderTrigger={triggerProps => (
                  <FilterButton {...triggerProps} />
                )}
                items={[{ value: "a", label: "A" }]}
              />
            </div>
            <div>
              <FilterSelect
                label="Label"
                isOpen={isOpenMax}
                setIsOpen={setIsOpenMax}
                renderTrigger={triggerProps => (
                  <FilterButton {...triggerProps} />
                )}
                items={[
                  {
                    value: "long-1",
                    label:
                      "Super long option where the container is fixed width and the selected option goes multiline",
                  },
                  {
                    value: "long-2",
                    label:
                      "Another super long option where the container is fixed width and the selected option goes multiline",
                  },
                  ...singleMockItems,
                ]}
              />
            </div>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  )
}

export const StickerSheetDefault: StickerSheetStory = {
  render: StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

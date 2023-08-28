import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../FilterButton"
import { FilterButtonRemovable } from "../FilterButtonRemovable"
import { FilterButtonBase } from "../_subcomponents/FilterButtonBase"

export default {
  title: "Components/Filter Base/Filter Buttons",
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // FIXME: text inside the buttons not meeting colour contrast requirements
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory["render"] = () => (
  <>
    <StickerSheet heading="Filter Button Base">
      <StickerSheet.Header headings={["Default", "Hover", "Active", "Focus"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <FilterButtonBase>Label</FilterButtonBase>
          <FilterButtonBase classNameOverride="story__filter-button-base--hover">
            Label
          </FilterButtonBase>
          <FilterButtonBase classNameOverride="story__filter-button-base--active">
            Label
          </FilterButtonBase>
          <FilterButtonBase classNameOverride="story__filter-button-base--focus">
            Label
          </FilterButtonBase>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet heading="Filter Button">
      <StickerSheet.Header
        headings={["Closed", "Open", "Has selected value"]}
        hasVerticalHeadings
        verticalHeadingsWidth={70}
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="LTR">
          <FilterButton label="Desserts" />
          <FilterButton label="Desserts" isOpen />
          <FilterButton label="Desserts" selectedValue="Cake" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="RTL" dir="rtl">
          <FilterButton label="Desserts" />
          <FilterButton label="Desserts" isOpen />
          <FilterButton label="Desserts" selectedValue="Cake" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet heading="Filter Button Removable">
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="LTR" rowTitleWidth={70}>
          <FilterButtonRemovable
            triggerButtonProps={{
              label: "Desserts",
            }}
            removeButtonProps={{
              onClick: () => undefined,
            }}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="RTL" dir="rtl">
          <FilterButtonRemovable
            triggerButtonProps={{
              label: "Desserts",
            }}
            removeButtonProps={{
              onClick: () => undefined,
            }}
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  </>
)

export const StickerSheetDefault: StickerSheetStory = {
  render: StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

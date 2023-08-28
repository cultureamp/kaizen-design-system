import React from "react"
import { Meta } from "@storybook/react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { FilterButtonBase } from "~components/FilterButton/_subcomponents/FilterButtonBase"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { ButtonGroup } from "../index"

export default {
  title: "Components/Button Group",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet heading="Button Group">
        <StickerSheet.Header
          headings={["Group of 2", "Group of 3", "With tooltip"]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <ButtonGroup>
              <FilterButtonBase>First</FilterButtonBase>
              <FilterButtonBase>Last</FilterButtonBase>
            </ButtonGroup>
            <ButtonGroup>
              <FilterButtonBase>First</FilterButtonBase>
              <FilterButtonBase>Middle</FilterButtonBase>
              <FilterButtonBase>Last</FilterButtonBase>
            </ButtonGroup>
            <ButtonGroup>
              <Tooltip text="Hello!">
                <FilterButtonBase>Tooltips here</FilterButtonBase>
              </Tooltip>
              <Tooltip text="Pancakes!">
                <FilterButtonBase>Styles should still work</FilterButtonBase>
              </Tooltip>
            </ButtonGroup>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Pseudo states">
        <StickerSheet.Header
          headings={["Hover", "Active", "Focus"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="First">
            <ButtonGroup>
              <FilterButtonBase classNameOverride="story__filter-button-base--hover">
                First
              </FilterButtonBase>
              <FilterButtonBase>Last</FilterButtonBase>
            </ButtonGroup>
            <ButtonGroup>
              <FilterButtonBase classNameOverride="story__filter-button-base--active">
                First
              </FilterButtonBase>
              <FilterButtonBase>Last</FilterButtonBase>
            </ButtonGroup>
            <ButtonGroup>
              <FilterButtonBase classNameOverride="story__filter-button-base--focus story__button-group--focus">
                First
              </FilterButtonBase>
              <FilterButtonBase>Last</FilterButtonBase>
            </ButtonGroup>
          </StickerSheet.Row>

          <StickerSheet.Row rowTitle="Last">
            <ButtonGroup>
              <FilterButtonBase>First</FilterButtonBase>
              <FilterButtonBase classNameOverride="story__filter-button-base--hover">
                Last
              </FilterButtonBase>
            </ButtonGroup>
            <ButtonGroup>
              <FilterButtonBase>First</FilterButtonBase>
              <FilterButtonBase classNameOverride="story__filter-button-base--active">
                Last
              </FilterButtonBase>
            </ButtonGroup>
            <ButtonGroup>
              <FilterButtonBase>First</FilterButtonBase>
              <FilterButtonBase classNameOverride="story__filter-button-base--focus story__button-group--focus">
                Last
              </FilterButtonBase>
            </ButtonGroup>
          </StickerSheet.Row>

          <StickerSheet.Row rowTitle="Middle">
            <ButtonGroup>
              <FilterButtonBase>First</FilterButtonBase>
              <FilterButtonBase classNameOverride="story__filter-button-base--hover">
                Middle
              </FilterButtonBase>
              <FilterButtonBase>Last</FilterButtonBase>
            </ButtonGroup>
            <ButtonGroup>
              <FilterButtonBase>First</FilterButtonBase>
              <FilterButtonBase classNameOverride="story__filter-button-base--active">
                Middle
              </FilterButtonBase>
              <FilterButtonBase>Last</FilterButtonBase>
            </ButtonGroup>
            <ButtonGroup>
              <FilterButtonBase>First</FilterButtonBase>
              <FilterButtonBase classNameOverride="story__filter-button-base--focus story__button-group--focus">
                Middle
              </FilterButtonBase>
              <FilterButtonBase>Last</FilterButtonBase>
            </ButtonGroup>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}

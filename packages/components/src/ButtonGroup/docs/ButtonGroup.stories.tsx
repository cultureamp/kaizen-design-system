import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButtonBase } from "../../Filter/FilterButton/components/FilterButtonBase"
import { ButtonGroup } from ".."

export default {
  title: "Components/Button Group",
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Used to group buttons. Compatible with buttons wrapped by Tooltip. Currently only compatible with Filter Buttons.",
      },
    },
  },
} as ComponentMeta<typeof ButtonGroup>

export const DefaultStory: ComponentStory<typeof ButtonGroup> = args => (
  <ButtonGroup {...args}>
    <FilterButtonBase>First</FilterButtonBase>
    <FilterButtonBase>Last</FilterButtonBase>
  </ButtonGroup>
)
DefaultStory.storyName = "Button Group"

const StickerSheetTemplate: Story = () => (
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

    <StickerSheet heading="RTL">
      <StickerSheet.Header
        headings={["Hover", "Active", "Focus"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="First" dir="rtl">
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

        <StickerSheet.Row rowTitle="Last" dir="rtl">
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

        <StickerSheet.Row rowTitle="Middle" dir="rtl">
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
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

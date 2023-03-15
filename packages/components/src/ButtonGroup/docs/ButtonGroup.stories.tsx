import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../Filter/components/_primitives/FilterButton"
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
    <FilterButton>First</FilterButton>
    <FilterButton>Last</FilterButton>
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
            <FilterButton>First</FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton>Middle</FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <Tooltip text="Hello!">
              <FilterButton>Tooltips here</FilterButton>
            </Tooltip>
            <Tooltip text="Pancakes!">
              <FilterButton>Styles should still work</FilterButton>
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
            <FilterButton classNameOverride="story__filter-button--hover">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton classNameOverride="story__filter-button--active">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton classNameOverride="story__filter-button--focus story__button-group--focus">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Last">
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--hover">
              Last
            </FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--active">
              Last
            </FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--focus story__button-group--focus">
              Last
            </FilterButton>
          </ButtonGroup>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Middle">
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--hover">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--active">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--focus story__button-group--focus">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
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
            <FilterButton classNameOverride="story__filter-button--hover">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton classNameOverride="story__filter-button--active">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton classNameOverride="story__filter-button--focus story__button-group--focus">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Last" dir="rtl">
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--hover">
              Last
            </FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--active">
              Last
            </FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--focus story__button-group--focus">
              Last
            </FilterButton>
          </ButtonGroup>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Middle" dir="rtl">
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--hover">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--active">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </ButtonGroup>
          <ButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--focus story__button-group--focus">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
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

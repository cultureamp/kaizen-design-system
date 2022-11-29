import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { FilterBaseButton } from "../src/FilterDateRangePicker/components/Trigger/FilterBaseButton"
import { FilterButtonGroup } from "../src/FilterDateRangePicker/components/Trigger/FilterButtonGroup"
import { FilterTooltipButton } from "../src/FilterDateRangePicker/components/Trigger/FilterTooltipButton"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Button Group`,
  component: FilterButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use DatePicker or DateRangePicker.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterButtonGroup>

export const DefaultStory: ComponentStory<typeof FilterButtonGroup> = args => (
  <FilterButtonGroup {...args}>
    <FilterBaseButton>First</FilterBaseButton>
    <FilterBaseButton>Last</FilterBaseButton>
  </FilterButtonGroup>
)
DefaultStory.storyName = "Filter Button Group"

const StickerSheetTemplate: Story = () => (
  <>
    <StoryWrapper>
      <StoryWrapper.RowHeader headings={["Group of 2", "Group of 3"]} />
      <StoryWrapper.Row rowTitle="Default">
        <FilterButtonGroup>
          <FilterBaseButton>First</FilterBaseButton>
          <FilterTooltipButton tooltipText="Tooltip">Last</FilterTooltipButton>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterBaseButton>First</FilterBaseButton>
          <FilterBaseButton>Last</FilterBaseButton>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterBaseButton>First</FilterBaseButton>
          <FilterBaseButton>Middle</FilterBaseButton>
          <FilterBaseButton>Last</FilterBaseButton>
        </FilterButtonGroup>
      </StoryWrapper.Row>
    </StoryWrapper>

    <StoryWrapper>
      <StoryWrapper.RowHeader headings={["Hover", "Active", "Focus"]} />
      <StoryWrapper.Row rowTitle="First">
        <FilterButtonGroup>
          <FilterBaseButton classNameOverride="story__filter-button--hover">
            First
          </FilterBaseButton>
          <FilterBaseButton>Last</FilterBaseButton>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterBaseButton classNameOverride="story__filter-button--active">
            First
          </FilterBaseButton>
          <FilterBaseButton>Last</FilterBaseButton>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterBaseButton classNameOverride="story__filter-button--focus">
            First
          </FilterBaseButton>
          <FilterBaseButton>Last</FilterBaseButton>
        </FilterButtonGroup>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Last">
        <FilterButtonGroup>
          <FilterBaseButton>First</FilterBaseButton>
          <FilterBaseButton classNameOverride="story__filter-button--hover">
            Last
          </FilterBaseButton>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterBaseButton>First</FilterBaseButton>
          <FilterBaseButton classNameOverride="story__filter-button--active">
            Last
          </FilterBaseButton>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterBaseButton>First</FilterBaseButton>
          <FilterBaseButton classNameOverride="story__filter-button--focus">
            Last
          </FilterBaseButton>
        </FilterButtonGroup>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="Middle">
        <FilterButtonGroup>
          <FilterBaseButton>First</FilterBaseButton>
          <FilterBaseButton classNameOverride="story__filter-button--hover">
            Middle
          </FilterBaseButton>
          <FilterBaseButton>Last</FilterBaseButton>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterBaseButton>First</FilterBaseButton>
          <FilterBaseButton classNameOverride="story__filter-button--active">
            Middle
          </FilterBaseButton>
          <FilterBaseButton>Last</FilterBaseButton>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterBaseButton>First</FilterBaseButton>
          <FilterBaseButton classNameOverride="story__filter-button--focus">
            Middle
          </FilterBaseButton>
          <FilterBaseButton>Last</FilterBaseButton>
        </FilterButtonGroup>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="(RTL) First">
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterBaseButton classNameOverride="story__filter-button--focus">
              First
            </FilterBaseButton>
            <FilterBaseButton>Last</FilterBaseButton>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterBaseButton classNameOverride="story__filter-button--active">
              First
            </FilterBaseButton>
            <FilterBaseButton>Last</FilterBaseButton>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterBaseButton classNameOverride="story__filter-button--hover">
              First
            </FilterBaseButton>
            <FilterBaseButton>Last</FilterBaseButton>
          </FilterButtonGroup>
        </div>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="(RTL) Last">
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterBaseButton>First</FilterBaseButton>
            <FilterBaseButton classNameOverride="story__filter-button--focus">
              Last
            </FilterBaseButton>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterBaseButton>First</FilterBaseButton>
            <FilterBaseButton classNameOverride="story__filter-button--active">
              Last
            </FilterBaseButton>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterBaseButton>First</FilterBaseButton>
            <FilterBaseButton classNameOverride="story__filter-button--hover">
              Last
            </FilterBaseButton>
          </FilterButtonGroup>
        </div>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="(RTL) Middle">
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterBaseButton>First</FilterBaseButton>
            <FilterBaseButton classNameOverride="story__filter-button--hover">
              Middle
            </FilterBaseButton>
            <FilterBaseButton>Last</FilterBaseButton>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterBaseButton>First</FilterBaseButton>
            <FilterBaseButton classNameOverride="story__filter-button--active">
              Middle
            </FilterBaseButton>
            <FilterBaseButton>Last</FilterBaseButton>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterBaseButton>First</FilterBaseButton>
            <FilterBaseButton classNameOverride="story__filter-button--focus">
              Middle
            </FilterBaseButton>
            <FilterBaseButton>Last</FilterBaseButton>
          </FilterButtonGroup>
        </div>
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

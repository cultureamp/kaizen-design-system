import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { FilterButtonBase } from "../src/FilterDateRangePicker/components/Trigger/FilterButtonBase"
import { FilterButtonGroup } from "../src/FilterDateRangePicker/components/Trigger/FilterButtonGroup"

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
  <FilterButtonGroup {...args} />
)
DefaultStory.storyName = "Filter Button Group"
DefaultStory.args = {
  children: (
    <>
      <FilterButtonBase>First</FilterButtonBase>
      <FilterButtonBase>Last</FilterButtonBase>
    </>
  ),
}

const StickerSheetTemplate: Story = () => (
  <>
    <StoryWrapper>
      <StoryWrapper.RowHeader headings={["Group of 2", "Group of 3"]} />
      <StoryWrapper.Row rowTitle="Default">
        <FilterButtonGroup>
          <FilterButtonBase>First</FilterButtonBase>
          <FilterButtonBase>Last</FilterButtonBase>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterButtonBase>First</FilterButtonBase>
          <FilterButtonBase>Middle</FilterButtonBase>
          <FilterButtonBase>Last</FilterButtonBase>
        </FilterButtonGroup>
      </StoryWrapper.Row>
    </StoryWrapper>

    <StoryWrapper>
      <StoryWrapper.RowHeader headings={["Hover", "Active", "Focus"]} />
      <StoryWrapper.Row rowTitle="First">
        <FilterButtonGroup>
          <FilterButtonBase classNameOverride="story__filter-button--hover">
            First
          </FilterButtonBase>
          <FilterButtonBase>Last</FilterButtonBase>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterButtonBase classNameOverride="story__filter-button--active">
            First
          </FilterButtonBase>
          <FilterButtonBase>Last</FilterButtonBase>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterButtonBase classNameOverride="story__filter-button--focus">
            First
          </FilterButtonBase>
          <FilterButtonBase>Last</FilterButtonBase>
        </FilterButtonGroup>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Last">
        <FilterButtonGroup>
          <FilterButtonBase>First</FilterButtonBase>
          <FilterButtonBase classNameOverride="story__filter-button--hover">
            Last
          </FilterButtonBase>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterButtonBase>First</FilterButtonBase>
          <FilterButtonBase classNameOverride="story__filter-button--active">
            Last
          </FilterButtonBase>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterButtonBase>First</FilterButtonBase>
          <FilterButtonBase classNameOverride="story__filter-button--focus">
            Last
          </FilterButtonBase>
        </FilterButtonGroup>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="Middle">
        <FilterButtonGroup>
          <FilterButtonBase>First</FilterButtonBase>
          <FilterButtonBase classNameOverride="story__filter-button--hover">
            Middle
          </FilterButtonBase>
          <FilterButtonBase>Last</FilterButtonBase>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterButtonBase>First</FilterButtonBase>
          <FilterButtonBase classNameOverride="story__filter-button--active">
            Middle
          </FilterButtonBase>
          <FilterButtonBase>Last</FilterButtonBase>
        </FilterButtonGroup>
        <FilterButtonGroup>
          <FilterButtonBase>First</FilterButtonBase>
          <FilterButtonBase classNameOverride="story__filter-button--focus">
            Middle
          </FilterButtonBase>
          <FilterButtonBase>Last</FilterButtonBase>
        </FilterButtonGroup>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="(RTL) First">
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterButtonBase classNameOverride="story__filter-button--focus">
              First
            </FilterButtonBase>
            <FilterButtonBase>Last</FilterButtonBase>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterButtonBase classNameOverride="story__filter-button--active">
              First
            </FilterButtonBase>
            <FilterButtonBase>Last</FilterButtonBase>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterButtonBase classNameOverride="story__filter-button--hover">
              First
            </FilterButtonBase>
            <FilterButtonBase>Last</FilterButtonBase>
          </FilterButtonGroup>
        </div>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="(RTL) Last">
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterButtonBase>First</FilterButtonBase>
            <FilterButtonBase classNameOverride="story__filter-button--focus">
              Last
            </FilterButtonBase>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterButtonBase>First</FilterButtonBase>
            <FilterButtonBase classNameOverride="story__filter-button--active">
              Last
            </FilterButtonBase>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterButtonBase>First</FilterButtonBase>
            <FilterButtonBase classNameOverride="story__filter-button--hover">
              Last
            </FilterButtonBase>
          </FilterButtonGroup>
        </div>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="(RTL) Middle">
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterButtonBase>First</FilterButtonBase>
            <FilterButtonBase classNameOverride="story__filter-button--hover">
              Middle
            </FilterButtonBase>
            <FilterButtonBase>Last</FilterButtonBase>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterButtonBase>First</FilterButtonBase>
            <FilterButtonBase classNameOverride="story__filter-button--active">
              Middle
            </FilterButtonBase>
            <FilterButtonBase>Last</FilterButtonBase>
          </FilterButtonGroup>
        </div>
        <div dir="rtl">
          <FilterButtonGroup>
            <FilterButtonBase>First</FilterButtonBase>
            <FilterButtonBase classNameOverride="story__filter-button--focus">
              Middle
            </FilterButtonBase>
            <FilterButtonBase>Last</FilterButtonBase>
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

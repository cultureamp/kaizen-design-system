import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../../storybook/components/StickerSheet"
import { FilterBaseButton } from "../../src/FilterDateRangePicker/components/Trigger/FilterBaseButton"
import { FilterButtonGroup } from "../../src/FilterDateRangePicker/components/Trigger/FilterButtonGroup"

export default {
  title:
    "Components/Date Picker/Filter Date Range Picker/Subcomponents/Filter Button Group",
  component: FilterButtonGroup,
  parameters: {
    docs: {
      description: {
        component: "This is a container component to group filter buttons.",
      },
    },
  },
} as Meta<typeof FilterButtonGroup>

export const DefaultStory: StoryFn<typeof FilterButtonGroup> = args => (
  <FilterButtonGroup {...args}>
    <FilterBaseButton>First</FilterBaseButton>
    <FilterBaseButton>Last</FilterBaseButton>
  </FilterButtonGroup>
)
DefaultStory.storyName = "Filter Button Group"

const StickerSheetTemplate: StoryFn = () => (
  <>
    <StickerSheet heading="Filter Button Group">
      <StickerSheet.Header headings={["Group of 2", "Group of 3"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <FilterButtonGroup>
            <FilterBaseButton>First</FilterBaseButton>
            <FilterBaseButton>Last</FilterBaseButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterBaseButton>First</FilterBaseButton>
            <FilterBaseButton>Middle</FilterBaseButton>
            <FilterBaseButton>Last</FilterBaseButton>
          </FilterButtonGroup>
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
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Last">
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
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Middle">
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
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Last" dir="rtl">
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
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Middle" dir="rtl">
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

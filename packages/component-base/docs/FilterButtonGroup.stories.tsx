import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { FilterButton } from "../src/Filter/components/_primitives/FilterButton"
import { FilterButtonGroup } from "../src/Filter/components/_primitives/FilterButtonGroup"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Button Group`,
  component: FilterButtonGroup,
  parameters: {
    docs: {
      description: {
        component: "This is a container component to group filter buttons.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterButtonGroup>

export const DefaultStory: ComponentStory<typeof FilterButtonGroup> = args => (
  <FilterButtonGroup {...args}>
    <FilterButton>First</FilterButton>
    <FilterButton>Last</FilterButton>
  </FilterButtonGroup>
)
DefaultStory.storyName = "Filter Button Group"

const StickerSheetTemplate: Story = () => (
  <>
    <StickerSheet heading="Filter Button Group">
      <StickerSheet.Header headings={["Group of 2", "Group of 3"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton>Middle</FilterButton>
            <FilterButton>Last</FilterButton>
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
            <FilterButton classNameOverride="story__filter-button--hover">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton classNameOverride="story__filter-button--active">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton classNameOverride="story__filter-button--focus">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Last">
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--hover">
              Last
            </FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--active">
              Last
            </FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--focus">
              Last
            </FilterButton>
          </FilterButtonGroup>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Middle">
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--hover">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--active">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--focus">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
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
            <FilterButton classNameOverride="story__filter-button--hover">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton classNameOverride="story__filter-button--active">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton classNameOverride="story__filter-button--focus">
              First
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Last" dir="rtl">
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--hover">
              Last
            </FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--active">
              Last
            </FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--focus">
              Last
            </FilterButton>
          </FilterButtonGroup>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Middle" dir="rtl">
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--hover">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--active">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
          </FilterButtonGroup>
          <FilterButtonGroup>
            <FilterButton>First</FilterButton>
            <FilterButton classNameOverride="story__filter-button--focus">
              Middle
            </FilterButton>
            <FilterButton>Last</FilterButton>
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

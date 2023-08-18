import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { FilterButtonBase } from "~components/FilterButton/_subcomponents/FilterButtonBase"
import { classNameOverrideArgType } from "../../../../../storybook/argTypes"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { ButtonGroup } from ".."

export default {
  tags: ["autodocs"],
  // Not to be nested until full KAIO migration
  // title: "Components/Button/Button Group",
  title: "Components/Button Group",
  component: ButtonGroup,
  argTypes: { ...classNameOverrideArgType },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    isInKaio: true,
    installation: [
      "pnpm add @kaizen/components",
      "import { ButtonGroup } from `@kaizen/components`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/ButtonGroup",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?type=design&node-id=6-28579&t=bowQ0LWOQKOd0UYS-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093959/Filters",
    },
  },
} satisfies Meta<typeof ButtonGroup>

/**
 * Used to group buttons. Compatible with buttons wrapped by Tooltip. Currently only compatible with Filter Buttons.
 */
export const Playground: StoryFn<typeof ButtonGroup> = args => (
  <ButtonGroup {...args}>
    <FilterButtonBase>First</FilterButtonBase>
    <FilterButtonBase>Last</FilterButtonBase>
  </ButtonGroup>
)

const StickerSheetTemplate: StoryFn = () => (
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

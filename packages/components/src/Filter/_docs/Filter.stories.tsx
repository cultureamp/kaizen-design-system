import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { Filter, FilterContents } from ".."

const IS_CHROMATIC = isChromatic()

export default {
  tags: ["autodocs"],
  title: "Components/Filter",
  component: Filter,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    isInKaio: true,
    installation: [
      "yarn add @kaizen/components",
      "import { Filter } from `@kaizen/components`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Filter",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?type=design&node-id=6-28579&t=bowQ0LWOQKOd0UYS-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093959/Filters",
    },
  },
} satisfies Meta<typeof Filter>

/**
 * These components are mainly used for constructing Filters (eg. FilterSelect):
 *
 * - `FilterButton` for the renderTrigger.
 * - `FilterContents` to wrap the contents within a Filter.
 */
export const Playground: StoryFn<typeof Filter> = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButton label="Label" {...triggerProps} />
      )}
    >
      <FilterContents>Filter Contents</FilterContents>
    </Filter>
  )
}
Playground.storyName = "Filter"

export const RemovableFilter: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButtonRemovable
          triggerButtonProps={{
            label: "Label",
            ...triggerProps,
          }}
          removeButtonProps={{
            onClick: action("remove button clicked"),
          }}
        />
      )}
    >
      <FilterContents>Filter Contents</FilterContents>
    </Filter>
  )
}

const StickerSheetTemplate: StoryFn = () => {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <StickerSheet
      heading="Filter"
      style={{ paddingBottom: IS_CHROMATIC ? "6rem" : undefined }}
    >
      <StickerSheet.Header headings={["Open"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Filter
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            renderTrigger={(triggerProps): JSX.Element => (
              <FilterButton label="Label" {...triggerProps} />
            )}
          >
            <FilterContents>Filter Contents</FilterContents>
          </Filter>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../../storybook/components/DocsContainer"
import { MultiSelect } from "../MultiSelect"

export default {
  tags: ["autodocs"],
  title: "Components/#MultiSelect",
  component: MultiSelect,
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
} satisfies Meta<typeof MultiSelect>

export const Playground: StoryFn<typeof MultiSelect> = () => <MultiSelect />

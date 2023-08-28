import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { FilterButtonBase } from "~components/FilterButton/_subcomponents/FilterButtonBase"
import { classNameOverrideArgType } from "../../../../../storybook/argTypes"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { ButtonGroup } from ".."

const meta = {
  tags: ["autodocs"],
  // Not to be nested until full KAIO migration
  // title: "Components/Button/Button Group",
  title: "Components/Button Group",
  component: ButtonGroup,
  argTypes: { ...classNameOverrideArgType },
  args: { children: undefined },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // FIXME: text inside the buttons not meeting colour contrast requirements
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
    docs: {
      container: ComponentDocsTemplate,
    },
    isInKaio: true,
    installation: [
      "yarn add @kaizen/components",
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

export default meta

type Story = StoryObj<typeof meta>

/**
 * Used to group buttons. Compatible with buttons wrapped by Tooltip. Currently only compatible with Filter Buttons.
 */
export const Playground: Story = {
  render: args => (
    <ButtonGroup {...args}>
      <FilterButtonBase>First</FilterButtonBase>
      <FilterButtonBase>Last</FilterButtonBase>
    </ButtonGroup>
  ),
}

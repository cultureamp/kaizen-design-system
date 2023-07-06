import React, { FC, ReactNode } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../../../../storybook/components/StickerSheet"
import { Tag } from ".."

export default {
  tags: ["autodocs"],
  title: "KAIO/Tag",
  component: Tag,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    isInKaio: true,
    installation: [
      "yarn add @kaizen/components",
      "import { Tag } from `@kaizen/components/future`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/__future__/Tag",
      figma:
        "https://www.figma.com/file/hANEprZKom5Br1IBXhE8mr/%F0%9F%A7%AA-Kaizen-Labs?type=design&node-id=28588-183332&mode=design&t=VHZDCTJUpaon8PXg-0",
    },
  },
} satisfies Meta<typeof Tag>

export const Playground: StoryFn<typeof Tag> = args => (
  <Tag {...args}>My tag</Tag>
)

const List: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex flex-col gap-12 items-start">{children}</div>
)

const StickerSheetTemplate: StoryFn = () => (
  <>
    <StickerSheet heading="Tag">
      <StickerSheet.Header headings={["Label Only", "Icon"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <List>
            <Tag>Gray</Tag>
            <Tag color="blue">Blue</Tag>
            <Tag color="green">Green</Tag>
            <Tag color="yellow">Yellow</Tag>
            <Tag color="orange">Orange</Tag>
            <Tag color="red">Red</Tag>
            <Tag color="purple">Purple</Tag>
          </List>
          <List>
            <Tag icon="tag">Gray</Tag>
            <Tag color="blue" icon="tag">
              Blue
            </Tag>
            <Tag color="green" icon="tag">
              Green
            </Tag>
            <Tag color="yellow" icon="tag">
              Yellow
            </Tag>
            <Tag color="orange" icon="tag">
              Orange
            </Tag>
            <Tag color="red" icon="tag">
              Red
            </Tag>
            <Tag color="purple" icon="tag">
              Purple
            </Tag>
          </List>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet heading="RTL">
      <StickerSheet.Header headings={["Label Only", "Icon"]} />
      <StickerSheet.Body dir="rtl">
        <StickerSheet.Row>
          <List>
            <Tag>Gray</Tag>
            <Tag color="blue">Blue</Tag>
            <Tag color="green">Green</Tag>
            <Tag color="yellow">Yellow</Tag>
            <Tag color="orange">Orange</Tag>
            <Tag color="red">Red</Tag>
            <Tag color="purple">Purple</Tag>
          </List>
          <List>
            <Tag icon="tag">Gray</Tag>
            <Tag color="blue" icon="tag">
              Blue
            </Tag>
            <Tag color="green" icon="tag">
              Green
            </Tag>
            <Tag color="yellow" icon="tag">
              Yellow
            </Tag>
            <Tag color="orange" icon="tag">
              Orange
            </Tag>
            <Tag color="red" icon="tag">
              Red
            </Tag>
            <Tag color="purple" icon="tag">
              Purple
            </Tag>
          </List>
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

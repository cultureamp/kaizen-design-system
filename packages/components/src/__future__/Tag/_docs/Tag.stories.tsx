import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { TagIcon } from "~components/Icons"
import { ComponentDocsTemplate } from "~storybook/components/DocsContainer"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { Tag } from ".."

export default {
  tags: ["autodocs"],
  title: "KAIO-staging/Tag",
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

type ListProps = {
  children: React.ReactNode
}
const List = ({ children }: ListProps): JSX.Element => (
  <div className="flex flex-col gap-12 items-start">{children}</div>
)

const StickerSheetTemplate: StoryFn = () => (
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
          <Tag Icon={<TagIcon role="presentation" />}>Gray</Tag>
          <Tag color="blue" Icon={<TagIcon role="presentation" />}>
            Blue
          </Tag>
          <Tag color="green" Icon={<TagIcon role="presentation" />}>
            Green
          </Tag>
          <Tag color="yellow" Icon={<TagIcon role="presentation" />}>
            Yellow
          </Tag>
          <Tag color="orange" Icon={<TagIcon role="presentation" />}>
            Orange
          </Tag>
          <Tag color="red" Icon={<TagIcon role="presentation" />}>
            Red
          </Tag>
          <Tag color="purple" Icon={<TagIcon role="presentation" />}>
            Purple
          </Tag>
        </List>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetRTL = StickerSheetTemplate.bind({})
StickerSheetRTL.storyName = "Sticker Sheet (RTL)"
StickerSheetRTL.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
  textDirection: "rtl",
}

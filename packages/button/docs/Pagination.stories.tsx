import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { DirectionalLink, PaginationLink } from ".."
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import styles from "./styles.module.scss"
import mdx from "./Pagination.mdx"

export default {
  title: `${CATEGORIES.actions}/Pagination`,
  component: PaginationLink,
  args: {
    label: "Label",
    pageNumber: 1,
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    chromatic: { disable: false },
    docs: {
      page: mdx,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenDirectionalLink = args => (
  <DirectionalLink direction="prev" {...args} />
)

export const DefaultKaizenPaginationLink = args => (
  <PaginationLink pageNumber={1} {...args} />
)

DefaultKaizenDirectionalLink.storyName = "Directional Link"
DefaultKaizenPaginationLink.storyName = "Pagination Link"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Default", "Disabled", ""]} />
      <StoryWrapper.Row rowTitle="Directional Link">
        <div className={styles.circleButtonContainer}>
          <DirectionalLink
            direction="prev"
            label="Previous page"
            reversed={isReversed}
          />
          <DirectionalLink
            direction="next"
            label="Next page"
            reversed={isReversed}
          />
          <DirectionalLink
            direction="start"
            label="First page"
            reversed={isReversed}
          />
          <DirectionalLink
            direction="end"
            label="Last page"
            reversed={isReversed}
          />
        </div>
        <div className={styles.circleButtonContainer}>
          <DirectionalLink
            direction="prev"
            label="Previous page"
            reversed={isReversed}
            disabled={true}
          />
          <DirectionalLink
            direction="next"
            label="Next page"
            reversed={isReversed}
            disabled={true}
          />
          <DirectionalLink
            direction="start"
            label="First page"
            reversed={isReversed}
            disabled={true}
          />
          <DirectionalLink
            direction="end"
            label="Last page"
            reversed={isReversed}
            disabled={true}
          />
        </div>
        <div></div>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Pagination Link">
        <div className={styles.circleButtonContainer}>
          <PaginationLink
            pageNumber={1}
            aria-label="Page 1"
            isActive={true}
            reversed={isReversed}
          />
          <PaginationLink
            pageNumber={2}
            aria-label="Page 2"
            isActive={false}
            reversed={isReversed}
          />
          <PaginationLink
            pageNumber={3}
            aria-label="Page 3"
            isActive={false}
            reversed={isReversed}
          />
          <PaginationLink
            pageNumber={4}
            aria-label="Page 4"
            isActive={false}
            reversed={isReversed}
          />
          <PaginationLink
            pageNumber={5}
            aria-label="Page 5"
            isActive={false}
            reversed={isReversed}
          />
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

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}

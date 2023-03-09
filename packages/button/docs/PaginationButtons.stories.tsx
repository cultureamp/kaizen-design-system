import React from "react"
import { StoryFn, Meta } from "@storybook/react"
import { Heading } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { DirectionalLinkProps } from "../src/Button/DirectionalLink"
import { PaginationLinkProps } from "../src/Button/PaginationLink"
import { DirectionalLink, PaginationLink } from ".."

export default {
  title: "Components/Pagination/Subcomponents/Buttons",
  component: DirectionalLink,
  args: {
    label: "Label",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component:
          'import { DirectionalLink, PaginationLink } from "@kaizen/button".',
      },
    },
  },
} as Meta<typeof DirectionalLink>

export const DefaultKaizenDirectionalLink: StoryFn<
  typeof DirectionalLink
> = args => <DirectionalLink {...args} />
DefaultKaizenDirectionalLink.storyName = "Directional Link"
DefaultKaizenDirectionalLink.args = {
  direction: "prev",
}

export const DefaultKaizenPaginationLink: StoryFn<
  typeof PaginationLink
> = args => <PaginationLink {...args} />
DefaultKaizenPaginationLink.storyName = "Pagination Link"
DefaultKaizenPaginationLink.args = {
  pageNumber: 1,
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const SectionHeading = ({ heading }: { heading: string }): JSX.Element => (
    <Heading variant="heading-3" tag="h1" color={isReversed ? "white" : "dark"}>
      {heading}
    </Heading>
  )

  const DIRECTIONAL_LINK_PROPS: Array<{
    title: string
    props: DirectionalLinkProps
  }> = [
    {
      title: "Prev",
      props: {
        direction: "prev",
        label: "Previous page",
      },
    },
    {
      title: "Next",
      props: {
        direction: "next",
        label: "Next page",
      },
    },
    {
      title: "Start",
      props: {
        direction: "start",
        label: "First page",
      },
    },
    {
      title: "End",
      props: {
        direction: "end",
        label: "Last page",
      },
    },
  ]

  const PAGINATION_LINK_PROPS: Array<{
    title: string
    props: PaginationLinkProps
  }> = [
    {
      title: "isActive={false}",
      props: {
        pageNumber: 1,
        "aria-label": "Page 1",
      },
    },
    {
      title: "isActive={true}",
      props: {
        pageNumber: 1,
        "aria-label": "Page 1",
        isActive: true,
      },
    },
  ]

  return (
    <div style={{ paddingBottom: "1rem" }}>
      <StoryWrapper isReversed={isReversed}>
        <SectionHeading heading="Directional Link" />
        <StoryWrapper.RowHeader
          headings={["Base", "Hover", "Active", "Focus", "Disabled", "RTL"]}
        />
        {DIRECTIONAL_LINK_PROPS.map(({ title, props }) => (
          <StoryWrapper.Row key={title} rowTitle={title}>
            <DirectionalLink {...props} reversed={isReversed} />
            <DirectionalLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-hover"
            />
            <DirectionalLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-active"
            />
            <DirectionalLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-focus"
            />
            <DirectionalLink {...props} reversed={isReversed} disabled />
            <div dir="rtl">
              <DirectionalLink {...props} reversed={isReversed} />
            </div>
          </StoryWrapper.Row>
        ))}
      </StoryWrapper>

      <StoryWrapper isReversed={isReversed}>
        <SectionHeading heading="Pagination Link" />
        <StoryWrapper.RowHeader
          headings={["Base", "Hover", "Active", "Focus"]}
        />
        {PAGINATION_LINK_PROPS.map(({ title, props }) => (
          <StoryWrapper.Row key={title} rowTitle={title}>
            <PaginationLink {...props} reversed={isReversed} />
            <PaginationLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-hover"
            />
            <PaginationLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-active"
            />
            <PaginationLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-focus"
            />
          </StoryWrapper.Row>
        ))}
      </StoryWrapper>
    </div>
  )
}

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
  chromatic: { disable: false },
  backgrounds: { default: "Purple 700" },
  controls: { disable: true },
}

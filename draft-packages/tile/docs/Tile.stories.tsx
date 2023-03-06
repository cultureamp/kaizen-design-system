import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import bookmarkIcon from "@kaizen/component-library/icons/bookmark-off.icon.svg"
import { Coaching } from "@kaizen/draft-illustration"
import { Tag } from "@kaizen/draft-tag"
import {
  MultiActionTile,
  TileInformation,
  TileAction,
  InformationTile,
  TileGrid,
} from "@kaizen/draft-tile"
import { Paragraph } from "@kaizen/typography"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Components/Tile",
  component: MultiActionTile,
  subcomponents: { InformationTile, TileGrid },
  parameters: {
    docs: {
      description: {
        component: `import {
                      MultiActionTile,
                      TileInformation,
                      TileAction,
                      InformationTile,
                      TileGrid
                    } from "@kaizen/draft-tile"`,
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=21815%3A82744"
    ),
  },
}

const primaryAction: TileAction = {
  label: "View",
  href: "",
}

const secondaryAction: TileAction = {
  label: "Bookmark",
  href: "",
  icon: bookmarkIcon,
}

const children = (
  <div style={{ width: "170px" }}>
    <Coaching alt="" />
  </div>
)

const information: TileInformation = {
  text:
    "Additional information can be included on the underside of the tile and viewed on click of the information" +
    " icon.",
  secondaryAction: {
    label: "Learn more",
    href: "",
  },
}

export const MultiAction: ComponentStory<typeof MultiActionTile> = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={primaryAction}
  />
)
MultiAction.storyName = "Multi action tile"

export const MultiActionMoods: Story = () => (
  <TileGrid>
    <MultiActionTile
      title="Default"
      metadata="Metadata"
      primaryAction={primaryAction}
    />
    <MultiActionTile
      title="Positive"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="positive"
    />
    <MultiActionTile
      title="Informative"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="informative"
    />
    <MultiActionTile
      title="Cautionary"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="cautionary"
    />
    <MultiActionTile
      title="Assertive"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="assertive"
    />
    <MultiActionTile
      title="Negative"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="negative"
    />
    <MultiActionTile
      title="Prominent"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="prominent"
    />
  </TileGrid>
)
MultiActionMoods.storyName = "Multi action tile moods"
MultiActionMoods.parameters = { chromatic: { disable: false } }

export const MultiActionWithSecondary: Story = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={primaryAction}
    secondaryAction={secondaryAction}
  />
)
MultiActionWithSecondary.storyName = "Multi action tile with secondary action"
MultiActionWithSecondary.parameters = { chromatic: { disable: false } }

export const MultiActionWithChildren: Story = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={primaryAction}
  >
    {children}
  </MultiActionTile>
)
MultiActionWithChildren.storyName = "Multi action tile with children"
MultiActionWithChildren.parameters = { chromatic: { disable: false } }

export const MultiActionWithCustomTitle: Story = () => (
  <MultiActionTile
    title="Custom title"
    primaryAction={primaryAction}
    titleTag="div"
  >
    {children}
  </MultiActionTile>
)
MultiActionWithCustomTitle.storyName = "Multi action tile with custom title tag"

export const MultiActionWithInformation: Story = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={primaryAction}
    information={information}
  />
)
MultiActionWithInformation.storyName = "Multi action tile with information"

export const MultiActionActionInNewTabs: Story = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={{
      ...primaryAction,
      href: "https://www.cultureamp.com",
      newTabAndIUnderstandTheAccessibilityImplications: true,
    }}
    secondaryAction={{
      ...secondaryAction,
      href: "https://www.cultureamp.com",
      newTabAndIUnderstandTheAccessibilityImplications: true,
    }}
  />
)
MultiActionActionInNewTabs.storyName =
  "Multi action tile with actions opening in new tabs"

export const Information: Story = () => (
  <InformationTile
    title="Tile heading"
    metadata="Metadata"
    information={information}
    footer={<Tag variant="statusLive">Live</Tag>}
  />
)
Information.storyName = "Information tile"
Information.parameters = { chromatic: { disable: false } }

export const InformationMood: Story = () => (
  <TileGrid>
    <InformationTile
      title="Default"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
    />
    <InformationTile
      title="Positive"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
      mood="positive"
    />
    <InformationTile
      title="Informative"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
      mood="informative"
    />
    <InformationTile
      title="Cautionary"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
      mood="cautionary"
    />
    <InformationTile
      title="Assertive"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
      mood="assertive"
    />
    <InformationTile
      title="Negative"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
      mood="negative"
    />
    <InformationTile
      title="Prominent"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
      mood="prominent"
    />
  </TileGrid>
)
InformationMood.storyName = "Information tile moods"

export const InformationWithChildren: Story = () => (
  <InformationTile
    title="Tile heading"
    metadata="Metadata"
    information={information}
    footer={<Tag variant="statusLive">Live</Tag>}
  >
    {children}
  </InformationTile>
)
InformationWithChildren.storyName = "Information tile with children"

export const InformationWithCustomTitle: Story = () => (
  <InformationTile
    title="Custom title"
    information={information}
    footer={<Tag variant="statusLive">Live</Tag>}
    titleTag="div"
  >
    {children}
  </InformationTile>
)
InformationMood.storyName = "Information tile moods"

export const InformationCustomInfoElement: Story = () => (
  <InformationTile
    title="Tile heading"
    metadata="Metadata"
    information={<Paragraph variant="body">Anything can go here</Paragraph>}
    footer={<Tag variant="statusLive">Live</Tag>}
  />
)
InformationCustomInfoElement.storyName =
  "Information tile (custom information element)"

export const InformationCustomTitleTag: Story = () => (
  <InformationTile
    title="Tile heading"
    titleTag="div"
    metadata="Metadata"
    information={<Paragraph variant="body">Anything can go here</Paragraph>}
    footer={<Tag variant="statusLive">Live</Tag>}
  />
)
InformationCustomTitleTag.storyName = "Information tile (custom title tag)"

export const TileGridWithTiles: Story = () => (
  <TileGrid>
    <InformationTile
      title="Tile heading"
      metadata="Metadata"
      footer={<Tag variant="statusLive">Live</Tag>}
    />
    <MultiActionTile
      title="Tile heading"
      metadata="Metadata"
      primaryAction={primaryAction}
      information={information}
    />
    <InformationTile
      title="Tile heading"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
    />
    <InformationTile
      title="Tile heading"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
    />
    <MultiActionTile
      title="Tile heading"
      metadata="Metadata"
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      information={information}
    />
    <InformationTile
      title="Tile heading"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
    />
  </TileGrid>
)
TileGridWithTiles.storyName = "Tile Grid"
TileGridWithTiles.parameters = { chromatic: { disable: false } }

export const TileGridWithFewTiles: Story = () => (
  <TileGrid>
    <InformationTile
      title="Tile heading"
      metadata="Metadata"
      footer={<Tag variant="statusLive">Live</Tag>}
    />
    <MultiActionTile
      title="Tile heading"
      metadata="Metadata"
      primaryAction={primaryAction}
      information={information}
    />
  </TileGrid>
)
TileGridWithFewTiles.storyName = "Tile Grid (less than one row)"
TileGridWithFewTiles.parameters = { chromatic: { disable: false } }

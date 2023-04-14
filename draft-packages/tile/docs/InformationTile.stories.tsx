import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import bookmarkIcon from "../../../packages/component-library/icons/bookmark-off.icon.svg"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { Coaching } from "../../illustration"
import { Tag } from "../../tag"
import { InformationTile, TileGrid } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Tile/Information Tile",
  component: InformationTile,
  args: {
    title: "Tile heading",
    footer: "Footer",
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    installation: [
      "npm install @kaizen/draft-tile",
      "import { InformationTile } from '@kaizen/draft-tile'",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/draft-packages/tile/KaizenDraft/Tile",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-37846&t=SWGqgqCIpwFeAORM-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3079077889/Tile",
    },
    alternatives: [
      "components-tile-multi-action-tile--docs",
      "components-card--docs",
      "components-well--docs",
      "components-guidance-block--docs",
    ],
  },
} satisfies Meta<typeof InformationTile>

export default meta

/**
 * For the displaying of hero data
 */
export const Playground: StoryObj<typeof meta> = {
  // As of Storybook V7.0.2 adding this messes up the code preview
  // argTypes: {
  //   children: {
  //     control: "radio",
  //     options: ["none", "example"],
  //     mapping: {
  //       none: undefined,
  //       example: <Coaching alt="" />,
  //     },
  //   },
  // },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

/**
 * Other than the `title` and `metadata` which only accept strings, there are more freeform spaces for you to insert any kind of component.
 * <ul>
 *  <li>`children`: useful for displaying a small graphic in the middle of your card</li>
 *  <li>`footer`: adding any additional information at the bottom eg. a `Tag`</li>
 * </ul>
 */
export const Spaces: StoryFn = () => (
  <InformationTile
    title="Title heading"
    metadata="Metadata"
    footer={<Tag variant="statusLive">Live</Tag>}
  >
    {<Coaching alt="" />}
  </InformationTile>
)

/**
 * By default the title is set to `h3`. Using the `titleTag` you can update the underlying HTML element without affecting the look and feel.
 */
export const CustomisingTheTitleElement: StoryFn = () => (
  <InformationTile title="This title is a h1" titleTag="h1" footer="footer" />
)

const CustomComponent = (): JSX.Element => <>Ultra custom component</>

/**
 * To display more information, you can add details to the flipside of the card (accessible by clicking the top right icon) in two ways:
 * <ul>
 *  <li>Object config: See [type definition](https://github.com/cultureamp/kaizen-design-system/blob/099c9a2dea5e169ceba0d8f8ccc10cb18db364ac/draft-packages/tile/KaizenDraft/Tile/components/GenericTile.tsx#L21).</li>
 *  <li>`ReactNode`: anything you desire</li>
 * </ul>
 */
export const AddingExtraInformation: StoryFn = () => (
  <TileGrid>
    <InformationTile
      title="Object config"
      metadata="Metadata"
      information={{
        text: "Additional information can be included on the underside of the tile and viewed on click of the information",
        primaryAction: {
          label: "Primary",
          href: "",
        },
        secondaryAction: {
          label: "Bookmark",
          href: "",
          icon: bookmarkIcon,
        },
      }}
      footer="Footer"
    />
    <InformationTile
      title="Custom component"
      metadata="Metadata"
      information={<CustomComponent />}
      footer="Footer"
    />
  </TileGrid>
)

export const Moods: StoryFn = () => (
  <TileGrid>
    <InformationTile title="Default" footer="Footer" />
    <InformationTile title="Positive" footer="Footer" mood="positive" />
    <InformationTile title="Informative" footer="Footer" mood="informative" />
    <InformationTile title="Cautionary" footer="Footer" mood="cautionary" />
    <InformationTile title="Assertive" footer="Footer" mood="assertive" />
    <InformationTile title="Negative" footer="Footer" mood="negative" />
    <InformationTile title="Prominent" footer="Footer" mood="prominent" />
  </TileGrid>
)

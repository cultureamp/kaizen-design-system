import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import bookmarkIcon from "../../../packages/component-library/icons/bookmark-off.icon.svg"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { Coaching } from "../../illustration"
import { MultiActionTile, TileGrid } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Tile/Multi Action Tile",
  component: MultiActionTile,
  args: {
    title: "Tile heading",
    primaryAction: {
      label: "Click me",
      href: "#",
    },
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
      "import { MultiActionTile } from '@kaizen/draft-tile'",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/draft-packages/tile/KaizenDraft/Tile",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-37846&t=SWGqgqCIpwFeAORM-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3079077889/Tile#MultiActionTile",
    },
    alternatives: [
      "components-tile-information-tile--docs",
      "components-card--docs",
      "components-well--docs",
      "components-guidance-block--docs",
    ],
  },
} satisfies Meta<typeof MultiActionTile>

export default meta

/**
 * <p>A visually interesting item in a list consisting of a card, visual, title metadata, and call to action.</p>
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
 * MultiActionTile supports the addition of a secondary action through the `secondaryAction` prop.
 */
export const SecondaryAction: StoryObj<typeof meta> = {
  args: {
    primaryAction: {
      label: "View",
      href: "#",
    },
    secondaryAction: {
      label: "Bookmark",
      href: "#",
      icon: bookmarkIcon,
    },
  },
}

export const Moods: StoryFn = () => (
  <TileGrid>
    <MultiActionTile
      title="Default"
      primaryAction={{ label: "View", href: "#" }}
    />
    <MultiActionTile
      title="Positive"
      primaryAction={{ label: "View", href: "#" }}
      mood="positive"
    />
    <MultiActionTile
      title="Informative"
      primaryAction={{ label: "View", href: "#" }}
      mood="informative"
    />
    <MultiActionTile
      title="Cautionary"
      primaryAction={{ label: "View", href: "#" }}
      mood="cautionary"
    />
    <MultiActionTile
      title="Assertive"
      primaryAction={{ label: "View", href: "#" }}
      mood="assertive"
    />
    <MultiActionTile
      title="Negative"
      primaryAction={{ label: "View", href: "#" }}
      mood="negative"
    />
    <MultiActionTile
      title="Prominent"
      primaryAction={{ label: "View", href: "#" }}
      mood="prominent"
    />
  </TileGrid>
)

/**
 * The API is mostly the same as the `InformationTile`, so checkout those docs for more detail!
 */
export const SupportForGenericTileOptions: StoryObj<typeof meta> = {
  args: {
    title: "Title heading",
    titleTag: "h1",
    metadata: "Metadata",
    children: <Coaching alt="" />,
    information: {
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
    },
    primaryAction: {
      label: "View",
      href: "",
    },
    secondaryAction: {
      label: "Bookmark",
      href: "",
      icon: bookmarkIcon,
    },
  },
}

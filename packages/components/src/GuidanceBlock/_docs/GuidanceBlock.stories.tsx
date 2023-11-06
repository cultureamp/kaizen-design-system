import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Heading } from "~components/Heading"
import {
  BrandMomentPositiveOutro,
  Informative,
  SkillsCoachEssentialFeedback,
} from "~components/Illustration"
import { Text } from "~components/Text"
import { GuidanceBlock } from "../index"
import { variantsMap } from "../types"

const meta = {
  title: "Components/GuidanceBlock",
  component: GuidanceBlock,
  args: {
    illustration: <Informative alt="" />,
    text: {
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
      title: "This is the Guidance block title",
    },
  },
  argTypes: {
    actions: {
      control: false,
    },
    persistent: {
      description:
        "This should always return true ()`persistent` will soon be deprecated). The X close icon has been superseded with the pattern 'dismiss' or 'cancel' using the secondary action.",
      control: false,
    },
    illustrationType: {
      description:
        "Sets the how the width and aspect ratio will respond to the Illustration passed in.",
    },
    illustration: {
      control: { type: "radio" },
      options: ["spot", "scene"],
      mapping: {
        spot: <Informative alt="" />,
        scene: <BrandMomentPositiveOutro alt="" />,
      },
      description:
        "This takes a scene scene or spot element, ie: `<Informative />`. This radio button implementation is a storybook only representation to toggle between the two illustration styles.",
    },
    content: {
      description:
        "If you need to render custom content inside of the `GuidanceBlock` that is more than just a title and description use this prop instead of the default `text` option.",
    },
  },
} satisfies Meta<typeof GuidanceBlock>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

const Content = (): JSX.Element => (
  <>
    <Heading tag="h3" variant="heading-3">
      This is the Guidance block title
    </Heading>
    <Text variant="body">
      Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite
      divinis,
    </Text>
  </>
)

export const Actions: Story = {
  args: {
    content: <Content />,
    text: undefined,
    actions: {
      primary: {
        label: "Learn more",
        onClick: () => alert("tada: 🎉"),
      },
      secondary: {
        label: "Dismiss",
        href: "#",
      },
    },
  },
}

export const Tooltip: Story = {
  args: {
    content: <Content />,
    text: undefined,
    actions: {
      primary: {
        label: "Hover me for a tooltip",
        onClick: () => alert("tada: 🎉"),
        tooltip: {
          text: "Opens in a new tab",
          mood: "cautionary",
        },
      },
      secondary: {
        label: "Dismiss",
        href: "#",
      },
    },
  },
}

export const CustomContent: Story = {
  args: {
    content: <Content />,
    text: undefined,
  },
}

export const Stacked: Story = {
  render: args => (
    <div style={{ display: "flex", gap: "36px" }}>
      <GuidanceBlock {...args} />
      <GuidanceBlock {...args} />
    </div>
  ),
  args: {
    layout: "stacked",
  },
}

export const SceneExample: Story = {
  args: {
    illustration: <SkillsCoachEssentialFeedback alt="" />,
    illustrationType: "scene",
  },
}

export const Variants: Story = {
  render: args => (
    <div className="flex flex-col gap-16">
      {variantsMap.map(variant => (
        <GuidanceBlock key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
}

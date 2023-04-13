/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from "react"
import { Decorator, Meta, StoryFn, StoryObj } from "@storybook/react"
import { Card, CardProps } from "../../../draft-packages/card"
import { Tooltip } from "../../../draft-packages/tooltip"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"

const ContentWrapper = ({
  children,
  mood,
}: {
  children?: ReactNode
  mood?: CardProps["variant"]
}): JSX.Element => (
  <Card variant={mood} classNameOverride="p-16 grow">
    {children}
  </Card>
)

const PlaygroundDecorator: Decorator = Story => (
  <ContentWrapper>
    <Story />
  </ContentWrapper>
)

const meta = {
  tags: ["autodocs"],
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    children: "Hover over me for more info",
    text: "This is more info",
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
      controls: { exclude: ["children"] },
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    installation: [
      "npm install @kaizen/draft-tooltip",
      "import { Tooltip } from `@kaizen/draft-tooltip`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/master/packages/draft-well",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-37851&t=DDzgfxEHtZWOOhro-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075604733/Well",
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta

export const Playground: StoryObj<typeof meta> = {
  decorators: [PlaygroundDecorator],
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

/**
 * Unfortunately, the content needed to be wrapped in a div. This can sometimes
 * break the css layout. To get around this, we allow you to specify the css
 * display value directly. If you need to need to modify more values, feel free
 * to use the `classNameOverride` prop, but avoid it if you can.
 */
export const Display: StoryFn<typeof Tooltip> = () => (
  <div className="flex p-16 gap-16">
    <ContentWrapper>
      <Tooltip text="Tooltip label" display="block">
        Block (Default)
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper>
      <Tooltip text="Tooltip label" display="inline">
        Inline
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper>
      <Tooltip text="Tooltip label" display="inline-block">
        Inline Block
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper>
      <Tooltip text="Tooltip label" display="flex">
        Flex
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper>
      <Tooltip text="Tooltip label" display="inline-flex">
        Inline Flex
      </Tooltip>
    </ContentWrapper>
  </div>
)

/**
 * This is more a "desired position". The tooltip will automatically change
 * its position, if there's not enough room to show it in the one specified.
 */
export const Position: StoryFn<typeof Tooltip> = () => (
  <>
    <div className="flex gap-8 p-16">
      <ContentWrapper>
        <Tooltip text="Tooltip label" position="above">
          Above (default)
        </Tooltip>
      </ContentWrapper>
      <ContentWrapper>
        <Tooltip text="Tooltip label" position="below">
          Below
        </Tooltip>
      </ContentWrapper>
      <ContentWrapper>
        <Tooltip text="Tooltip label" position="right">
          Right
        </Tooltip>
      </ContentWrapper>
      <ContentWrapper>
        <Tooltip text="Tooltip label" position="left">
          Left
        </Tooltip>
      </ContentWrapper>
      <ContentWrapper>
        <Tooltip text="Tooltip label" position="right">
          Right, but with no space
        </Tooltip>
      </ContentWrapper>
    </div>
  </>
)

export const Mood: StoryFn<typeof Tooltip> = () => (
  <div className="flex p-16 gap-16">
    <ContentWrapper mood="default">
      <Tooltip text="Tooltip label" mood="default">
        Default (Default)
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper mood="positive">
      <Tooltip text="Tooltip label" mood="positive">
        Positive
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper mood="informative">
      <Tooltip text="Tooltip label" mood="informative">
        Informative
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper mood="cautionary">
      <Tooltip text="Tooltip label" mood="cautionary">
        Cautionary
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper mood="highlight">
      <Tooltip text="Tooltip label" mood="highlight">
        Highlight
      </Tooltip>
    </ContentWrapper>
  </div>
)

/**
 * Set the duration (milliseconds) of how long the tooltip should stay visible for
 */

export const IntiallyVisible: StoryFn<typeof Tooltip> = () => (
  <div className="flex p-16 gap-16">
    <ContentWrapper>
      <Tooltip text="I didn't start visible">Default</Tooltip>
    </ContentWrapper>
    <ContentWrapper>
      <Tooltip text="Look at me! I start visible" isInitiallyVisible>
        Initially visible
      </Tooltip>
    </ContentWrapper>
  </div>
)

/**
 * Set the duration (milliseconds) of how long the tooltip should stay visible for
 */

export const AnimationDuration: StoryFn<typeof Tooltip> = () => (
  <div className="flex p-16 gap-16">
    <ContentWrapper>
      <Tooltip text="Tooltip label" animationDuration={0}>
        Duration: 0
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper>
      <Tooltip text="Tooltip label" animationDuration={1000}>
        Duration: 1000
      </Tooltip>
    </ContentWrapper>
    <ContentWrapper>
      <Tooltip text="Tooltip label" animationDuration={5000}>
        Duration: 5000
      </Tooltip>
    </ContentWrapper>
  </div>
)

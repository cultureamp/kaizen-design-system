import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Heading } from '~components/Heading'
import { LoadingHeading, LoadingParagraph } from '~components/Loading'
import { Text } from '~components/Text'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { Button } from '~components/__next__'
import { Well } from '../index'
import { borderStyleTypes } from '../types'

const meta = {
  title: 'Components/Well',
  component: Well,
  args: {
    children: (
      <div className="flex flex-col gap-8 p-16">
        <Heading variant="heading-3">Default content</Heading>
        <Text variant="body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium doloribus
          dicta odio recusandae repudiandae tenetur! Fugiat vero architecto quasi rem culpa vel
          asperiores, sit, quas suscipit, ea deleniti dolorum.
        </Text>
      </div>
    ),
  },
  argTypes: {
    children: { control: false },
    variant: {
      control: false,
    },
    isAiLoading: {
      control: {
        type: 'radio',
      },
      options: ['true', 'false', 'undefined'],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
      mapping: {
        undefined: undefined,
        true: true,
        false: false,
      },
    },
  },
} satisfies Meta<typeof Well>

export default meta

type Story = StoryObj<typeof meta>

const LoadingContent = (): JSX.Element => (
  <div className="flex flex-col gap-8 p-16">
    <LoadingHeading variant="heading-3" width={25} isAnimated />
    <div>
      <LoadingParagraph isAnimated width={100} />
      <LoadingParagraph isAnimated width={65} classNameOverride="mb-0" />
    </div>
  </div>
)

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const Colors: Story = {
  render: (args) => (
    <>
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `white` is the new default when no color/variant is defined
      </Heading>
      <Well {...args} />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `gray` is the accessible version of the former `default` variant
      </Heading>
      <Well {...args} color="gray" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `blue` replaces the `informative` variant
      </Heading>
      <Well {...args} color="blue" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `yellow` replaces the `cautionary` variant
      </Heading>
      <Well {...args} color="yellow" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `orange` replaces the `assertive` variant
      </Heading>
      <Well {...args} color="orange" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `red` replaces the `negative` variant
      </Heading>
      <Well {...args} color="red" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `green` replaces the `positive` variant
      </Heading>
      <Well {...args} color="green" />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `purple` replaces the `prominent` variant
      </Heading>
      <Well {...args} color="purple" />
    </>
  ),
}

export const BorderStyles: Story = {
  render: (args) => (
    <>
      {borderStyleTypes.map((border) => (
        <>
          <Heading tag="h4" variant="heading-6">
            {border}
          </Heading>
          <Well {...args} borderStyle={border} />
        </>
      ))}
    </>
  ),
}

export const NoMargin: Story = {
  render: (args) => (
    <div className="flex gap-16">
      <div>
        <Heading tag="h4" variant="heading-6">
          Margin (default)
        </Heading>
        <Well {...args} />
        <Well {...args} />
      </div>
      <div>
        <Heading tag="h4" variant="heading-6">
          noMargin
        </Heading>
        <Well {...args} noMargin />
        <Well {...args} />
      </div>
    </div>
  ),
}

export const AIMoment: Story = {
  render: (args) => (
    <>
      <Well {...args} isAiLoading={false} />
      <Well {...args} isAiLoading>
        <LoadingContent />
      </Well>
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-8">
        <Story />
      </div>
    ),
  ],
}

export const AIMomentWithColor: Story = {
  render: (args) => (
    <>
      <Well {...args} color="blue" isAiLoading={true}>
        <LoadingContent />
      </Well>
    </>
  ),
}

export const InteractiveAIMoment: Story = {
  render: (args) => {
    const [isAiMomentLoading, setIsAiMomentLoading] = React.useState(false)
    const [content, setContent] = React.useState<React.ReactNode>(
      <>
        <Heading variant="heading-3">Default content</Heading>
        <Text variant="body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium doloribus
          dicta odio recusandae repudiandae tenetur! Fugiat vero architecto quasi rem culpa vel
          asperiores, sit, quas suscipit, ea deleniti dolorum.
        </Text>
      </>,
    )
    const simulateAiFetch = (): void => {
      const AiResponses = [
        <>
          <Heading variant="heading-3">AI content 1</Heading>
          <Text variant="body">
            I am alive. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            accusantium doloribus dicta odio recusandae repudiandae tenetur! Fugiat vero architecto
            quasi rem culpa vel asperiores, sit, quas suscipit, ea deleniti dolorum.
          </Text>
        </>,
        <>
          <Heading variant="heading-3">AI content 2</Heading>
          <Text variant="body">
            I have evolved. All your base are belong to us. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptas accusantium doloribus dicta odio recusandae repudiandae
            tenetur! Fugiat vero architecto quasi rem culpa vel asperiores, sit, quas suscipit, ea
            deleniti dolorum.
          </Text>
        </>,
      ]
      setIsAiMomentLoading(true)
      setTimeout(() => {
        let randomIndex
        do {
          randomIndex = Math.floor(Math.random() * AiResponses.length)
        } while (AiResponses[randomIndex] === content)
        setContent(AiResponses[randomIndex])
        setIsAiMomentLoading(false)
      }, 6000)
    }

    return (
      <>
        <Well {...args} isAiLoading={isAiMomentLoading}>
          <div className="flex flex-col gap-8 p-16">
            {isAiMomentLoading ? <LoadingContent /> : content}
          </div>
        </Well>
        <div className="flex gap-6">
          <Button
            variant="primary"
            onPress={simulateAiFetch}
            isPending={isAiMomentLoading}
            pendingLabel="loading"
          >
            Update AI
          </Button>
          <Button variant="secondary" onPress={() => setIsAiMomentLoading(!isAiMomentLoading)}>
            Toggle loading
          </Button>
        </div>
      </>
    )
  },
}

export const AiMomentAccessibility: Story = {
  render: (args) => {
    const [isAiMomentLoading, setIsAiMomentLoading] = React.useState(false)
    const [content, setContent] = React.useState<React.ReactNode>(undefined)

    return (
      <>
        <Well {...args} isAiLoading={isAiMomentLoading}>
          {isAiMomentLoading ? (
            <LoadingContent />
          ) : content ? (
            <div className="flex flex-col gap-8 p-16">
              <Text variant="body">{content}</Text>
            </div>
          ) : (
            args.children
          )}
        </Well>
        <div className="flex gap-6">
          <VisuallyHidden>
            <div aria-live="polite">{content}</div>
          </VisuallyHidden>
          <Button
            variant="primary"
            onPress={() => {
              setIsAiMomentLoading(true)
              setTimeout(() => {
                setContent(
                  `${content ?? ''} I heard you like AI content so I put some AI content in your AI content.`,
                )
                setIsAiMomentLoading(false)
              }, 6000)
            }}
            isPending={isAiMomentLoading}
            hasHiddenPendingLabel
            pendingLabel="AI content is loading"
          >
            Update content
          </Button>
        </div>
      </>
    )
  },
}

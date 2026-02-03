import React from 'react'
// import { type Meta, type StoryObj } from "storybook"
import { VisuallyHidden } from 'react-aria'
import { Button } from '~components/Button'
import { Heading } from '~components/Heading'
import { LoadingHeading, LoadingParagraph } from '~components/Loading'
import { Text } from '~components/Text'
import { Card, type CardProps } from '../index'

const LoadingContent = (): JSX.Element => (
  <div className="flex flex-col gap-8 p-16">
    <LoadingHeading variant="heading-3" width={25} isAnimated />
    <div>
      <LoadingParagraph isAnimated width={100} />
      <LoadingParagraph isAnimated width={65} classNameOverride="mb-0" />
    </div>
  </div>
)

const Content = (): JSX.Element => (
  <div className="flex flex-col gap-8 p-16">
    <Heading variant="heading-3">Default content</Heading>
    <Text variant="body">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium doloribus dicta
      odio recusandae repudiandae tenetur! Fugiat vero architecto quasi rem culpa vel asperiores,
      sit, quas suscipit, ea deleniti dolorum.
    </Text>
  </div>
)

const meta = {
  title: 'Components/Card',
  component: Card,
  args: {
    children: <Content />,
  },
  argTypes: {
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
} satisfies any

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

const colors = [
  'blue',
  'green',
  'gray',
  'orange',
  'purple',
  'red',
  'white',
  'yellow',
] satisfies CardProps['color'][]

export const Colors: Story = {
  render: () => (
    <ul className="flex list-none gap-16">
      {colors.map((color) => (
        <li key={color}>
          <Card color={color}>This is a default container</Card>
        </li>
      ))}
    </ul>
  ),
}

export const Elevation: Story = {
  render: () => (
    <ul className="flex list-none gap-16">
      <li>
        <Card>Default</Card>
      </li>
      <li>
        <Card isElevated>isElevated</Card>
      </li>
    </ul>
  ),
}

export const AIMoment: Story = {
  render: (args) => (
    <>
      <Card {...args} isAiLoading={false} />
      <Card {...args} isAiLoading>
        <LoadingContent />
      </Card>
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
      <Card {...args} color="blue" isAiLoading={true}>
        <LoadingContent />
      </Card>
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
        <Card {...args} isAiLoading={isAiMomentLoading}>
          <div className="flex flex-col gap-8 p-16">
            {isAiMomentLoading ? <LoadingContent /> : content}
          </div>
        </Card>
        <div className="flex gap-6 mt-12">
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
        <Card {...args} isAiLoading={isAiMomentLoading}>
          {isAiMomentLoading ? (
            <LoadingContent />
          ) : content ? (
            <div className="flex flex-col gap-8 p-16">
              <Text variant="body">{content}</Text>
            </div>
          ) : (
            args.children
          )}
        </Card>
        <div className="flex gap-6 mt-12">
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

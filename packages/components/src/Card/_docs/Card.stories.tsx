import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Heading } from '~components/Heading'
import { LoadingHeading, LoadingParagraph } from '~components/Loading'
import { Text } from '~components/Text'
import { Button } from '~components/__next__'
import { Card, type CardProps } from '../index'

const meta = {
  title: 'Components/Card',
  component: Card,
  args: {
    children: 'This is a default container',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
} satisfies Meta<typeof Card>

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
  args: {
    classNameOverride: 'p-16',
  },
  render: (args) => (
    <>
      <Card {...args} isAiLoading={false}>
        <Heading variant="heading-3">Loaded AI Moment</Heading>
        <Text variant="body">
          Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick fatback cow tongue
          ground round chicken. Jowl cow short ribs, ham tongue turducken spare ribs pig drumstick
          chuck meatball. Buffalo turducken pancetta tail salami chicken. Bresaola venison pastrami
          beef.
        </Text>
      </Card>
      <Card {...args} isAiLoading>
        <LoadingHeading variant="heading-3" width={25} isAnimated />
        <LoadingParagraph isAnimated />
        <LoadingParagraph isAnimated />
        <LoadingParagraph isAnimated width={65} classNameOverride="mb-6" />
      </Card>
      <Card {...args}>
        <Heading variant="heading-3">Regular card</Heading>
        <Text variant="body">
          Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick fatback cow tongue
          ground round chicken. Jowl cow short ribs, ham tongue turducken spare ribs pig drumstick
          chuck meatball. Buffalo turducken pancetta tail salami chicken. Bresaola venison pastrami
          beef.
        </Text>
      </Card>
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-24">
        <Story />
      </div>
    ),
  ],
}

export const InteractiveAIMoment: Story = {
  render: (args) => {
    const [isAiMomentLoading, setIsAiMomentLoading] = React.useState(false)
    const [content, setContent] = React.useState<React.ReactNode>(args.children)
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
          <div className="p-16">
            {isAiMomentLoading ? (
              <>
                <LoadingHeading variant="heading-3" width={25} isAnimated />
                <div>
                  <LoadingParagraph isAnimated width={100} />
                  <LoadingParagraph isAnimated width={100} />
                  <LoadingParagraph isAnimated width={65} classNameOverride="mb-6" />
                </div>
              </>
            ) : (
              content
            )}
          </div>
        </Card>
        <div className="flex mt-8 gap-6">
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

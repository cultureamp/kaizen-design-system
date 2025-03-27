import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import classnames from 'classnames'
import { Heading } from '~components/Heading'
import { LoadingHeading, LoadingParagraph } from '~components/Loading'
import { Text } from '~components/Text'
import { Button } from '~components/__next__'
import { Well } from '../index'
import { borderStyleTypes } from '../types'
import styles from './prc.module.css'

const meta = {
  title: 'Components/Well',
  component: Well,
  args: {
    children: (
      <>
        <Heading variant="heading-3">Default content</Heading>
        <Text variant="body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium doloribus
          dicta odio recusandae repudiandae tenetur! Fugiat vero architecto quasi rem culpa vel
          asperiores, sit, quas suscipit, ea deleniti dolorum.
        </Text>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
    variant: {
      control: false,
    },
  },
} satisfies Meta<typeof Well>

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
  args: {
    classNameOverride: 'p-16',
  },
  render: (args) => (
    <>
      <Well {...args} isAiLoading={false}>
        <Heading variant="heading-3">Loaded AI Moment</Heading>
        <Text variant="body">
          Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick fatback cow tongue
          ground round chicken. Jowl cow short ribs, ham tongue turducken spare ribs pig drumstick
          chuck meatball. Buffalo turducken pancetta tail salami chicken. Bresaola venison pastrami
          beef.
        </Text>
      </Well>
      <Well {...args} isAiLoading>
        <LoadingHeading variant="heading-3" width={25} isAnimated />
        <LoadingParagraph isAnimated />
        <LoadingParagraph isAnimated width={65} classNameOverride="mb-6" />
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
        <Well {...args} isAiLoading={isAiMomentLoading}>
          <div className="flex flex-col gap-8 p-16">
            {isAiMomentLoading ? (
              <>
                <LoadingHeading variant="heading-3" width={25} isAnimated />
                <div>
                  <LoadingParagraph isAnimated width={100} />
                  <LoadingParagraph isAnimated width={65} classNameOverride="mb-6" />
                </div>
              </>
            ) : (
              content
            )}
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

export const AiMomentPRC: Story = {
  args: {
    classNameOverride: 'p-16',
  },
  render: (args) => (
    <>
      <Heading variant="heading-3">PRC Well loading (rebuilt)</Heading>
      <Well classNameOverride={classnames(styles.prcWell, styles.isAnimated, 'p-16')}>
        <LoadingHeading variant="heading-3" width={25} isAnimated />
        <LoadingParagraph isAnimated />
        <LoadingParagraph isAnimated width={65} classNameOverride="mb-6" />
      </Well>
      <Heading variant="heading-3">KZ Well loading</Heading>
      <Well isAiLoading classNameOverride="p-16">
        <LoadingHeading variant="heading-3" width={25} isAnimated />
        <LoadingParagraph isAnimated />
        <LoadingParagraph isAnimated width={65} classNameOverride="mb-6" />
      </Well>
      <Heading variant="heading-3">PRC Well loaded (rebuilt)</Heading>
      <Well classNameOverride={classnames(styles.prcWell, 'p-16')}>
        <Heading variant="heading-3">Regular well</Heading>
        <Text variant="body">
          Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick fatback cow tongue
          ground round chicken. Jowl cow short ribs, ham tongue turducken spare ribs pig drumstick
          chuck meatball. Buffalo turducken pancetta tail salami chicken. Bresaola venison pastrami
          beef.
        </Text>
      </Well>
      <Heading variant="heading-3">KZ Well loaded</Heading>
      <Well isAiLoading={false} classNameOverride="p-16">
        <Heading variant="heading-3">Regular well</Heading>
        <Text variant="body">
          Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick fatback cow tongue
          ground round chicken. Jowl cow short ribs, ham tongue turducken spare ribs pig drumstick
          chuck meatball. Buffalo turducken pancetta tail salami chicken. Bresaola venison pastrami
          beef.
        </Text>
      </Well>
      <Well {...args}>
        <Heading variant="heading-3">Regular well</Heading>
        <Text variant="body">
          Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick fatback cow tongue
          ground round chicken. Jowl cow short ribs, ham tongue turducken spare ribs pig drumstick
          chuck meatball. Buffalo turducken pancetta tail salami chicken. Bresaola venison pastrami
          beef.
        </Text>
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

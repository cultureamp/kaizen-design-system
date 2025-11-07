import React from 'react'
import { type Meta, type StoryFn } from '@storybook/react'
import { Heading } from '~components/Heading'
import { Text } from '~components/Text'

export default {
  title: 'Guides/Tailwind/Utility Class References/Modifiers/Container Queries',
  parameters: {
    docsLayout: 'fullPage',
    docs: {
      a11y: { disable: true },
      description: {
        component: 'Require @kaizen/tailwind and add it into your tailwind config',
      },
    },
  },
} satisfies Meta

type ContainerQueryInfoProps = {
  selector: string
  selectorValue: string
  children: React.ReactElement
}

const ContainerQueryInfo = ({
  selector,
  selectorValue,
  children,
}: ContainerQueryInfoProps): React.ReactElement => (
  <div className="my-12">
    <Text variant="intro-lede">Container query selector: @{selector}</Text>
    <Text variant="body">Breakpoint: {selectorValue}</Text>
    <Text variant="body">In this example: @{selector}:bg-blue-400</Text>
    {/* Container wrapper to demonstrate container queries */}
    <div className="mt-12 border-2 border-dashed border-purple-300 p-8">
      <Text variant="body">
        <strong>Container wrapper (resize to see effect)</strong>
      </Text>
      <div className="mt-4 resize overflow-auto border border-gray-300">{children}</div>
    </div>
  </div>
)

export const ContainerQueries: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="mb-16">
      Container query breakpoints activate based on the <em>container&apos;s</em> width, not the
      viewport. These elements will change color when their parent container reaches the specified
      width.
    </Heading>

    <ContainerQueryInfo selector="md" selectorValue="768px">
      <div className="@container">
        <div className="@md:bg-blue-400 h-[50px] w-full rounded border-solid" />
      </div>
    </ContainerQueryInfo>

    <ContainerQueryInfo selector="lg" selectorValue="1080px">
      <div className="@container">
        <div className="@lg:bg-blue-400 h-[50px] w-full rounded border-solid" />
      </div>
    </ContainerQueryInfo>
  </div>
)

export const ArbitraryContainerQueries: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="mb-16">
      Custom container query breakpoints can be created with arbitrary values.
    </Heading>

    <div className="my-12">
      <Text variant="body">
        <strong>Custom container width breakpoint</strong> (applied when the container gets wider
        than 500px)
      </Text>
      <Text variant="body">In this example: @[500px]:bg-green-400</Text>
      <div className="mt-12 border-2 border-dashed border-purple-300 p-8">
        <Text variant="body">
          <strong>Container wrapper (resize to see effect)</strong>
        </Text>
        <div className="@container mt-4 resize overflow-auto border border-gray-300">
          <div className="@[500px]:bg-green-400 h-[50px] w-full rounded border-solid" />
        </div>
      </div>
    </div>
  </div>
)

export const NamedContainers: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="mb-16">
      Named containers allow you to query specific containers by name, useful when you have nested
      containers.
    </Heading>

    <div className="my-12">
      <Text variant="body">
        <strong>Named container example</strong> - The inner element responds to the outer
        &quot;sidebar&quot; container, not the inner &quot;card&quot; container
      </Text>
      <Text variant="body">In this example: @container/sidebar and @md/sidebar:bg-green-400</Text>
      <div className="mt-12 border-1 border-dashed border-purple-300 p-8">
        <Text variant="body">
          <strong>Outer container (&quot;sidebar&quot;) - resize to see effect</strong>
        </Text>
        <div className="@container/sidebar mt-4 resize overflow-auto border-2 border-blue-300">
          <div className="p-4">
            <Text variant="body">
              <strong>Inner container (&quot;card&quot;)</strong>
            </Text>
            <div className="@container/card mt-2 border border-gray-300 p-2">
              <div className="@md/sidebar:bg-green-400 h-[50px] w-full rounded border-solid">
                <div className="flex h-full items-center justify-center text-xs">
                  <Text variant="body">Responds to sidebar container</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

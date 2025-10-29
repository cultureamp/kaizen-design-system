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
    <Heading tag="p" variant="heading-4" classNameOverride="text-center mb-16">
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
    <Heading tag="p" variant="heading-4" classNameOverride="text-center mb-16">
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

export const MaxWidthContainerQueries: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="text-center mb-16">
      Max-width container queries apply styles when the container is smaller than the specified
      breakpoint.
    </Heading>

    <div className="my-12">
      <Text variant="body">
        <strong>Max-width container query</strong> (applied when the container gets narrower than
        768px)
      </Text>
      <Text variant="body">In this example: @max-md:bg-red-400</Text>
      <div className="mt-12 border-2 border-dashed border-purple-300 p-8">
        <Text variant="body">
          <strong>Container wrapper (resize to see effect)</strong>
        </Text>
        <div className="@container mt-4 resize overflow-auto border border-gray-300">
          <div className="@max-md:bg-red-400 h-[50px] w-full rounded border-solid" />
        </div>
      </div>
    </div>

    <div className="my-12">
      <Text variant="body">
        <strong>Arbitrary max-width container query</strong> (applied when the container gets
        narrower than 400px)
      </Text>
      <Text variant="body">In this example: @max-[400px]:bg-orange-400</Text>
      <div className="mt-12 border-2 border-dashed border-purple-300 p-8">
        <Text variant="body">
          <strong>Container wrapper (resize to see effect)</strong>
        </Text>
        <div className="@container mt-4 resize overflow-auto border border-gray-300">
          <div className="@max-[400px]:bg-orange-400 h-[50px] w-full rounded border-solid" />
        </div>
      </div>
    </div>
  </div>
)

export const ContainerQueryRanges: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="text-center mb-16">
      Container query ranges allow you to apply styles between specific container sizes.
    </Heading>

    <div className="my-12">
      <Text variant="body">
        <strong>Container query range</strong> (applied when the container is between 400px and
        768px wide)
      </Text>
      <Text variant="body">In this example: @[400px]:@max-md:bg-purple-400</Text>
      <div className="mt-12 border-2 border-dashed border-purple-300 p-8">
        <Text variant="body">
          <strong>Container wrapper (resize to see effect)</strong>
        </Text>
        <div className="@container mt-4 resize overflow-auto border border-gray-300">
          <div className="@[400px]:@max-md:bg-purple-400 h-[50px] w-full rounded border-solid" />
        </div>
      </div>
    </div>

    <div className="my-12">
      <Text variant="body">
        <strong>Multiple breakpoint combination</strong> (red below 400px, blue between 400-768px,
        green above 768px)
      </Text>
      <Text variant="body">In this example: bg-red-400 @[400px]:bg-blue-400 @md:bg-green-400</Text>
      <div className="mt-12 border-2 border-dashed border-purple-300 p-8">
        <Text variant="body">
          <strong>Container wrapper (resize to see effect)</strong>
        </Text>
        <div className="@container mt-4 resize overflow-auto border border-gray-300">
          <div className="bg-red-400 @[400px]:bg-blue-400 @md:bg-green-400 h-[50px] w-full rounded border-solid" />
        </div>
      </div>
    </div>
  </div>
)

export const NamedContainers: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="text-center mb-16">
      Named containers allow you to query specific containers by name, useful when you have nested
      containers.
    </Heading>

    <div className="my-12">
      <Text variant="body">
        <strong>Named container example</strong> - The inner element responds to the outer
        &quot;sidebar&quot; container, not the inner &quot;card&quot; container
      </Text>
      <Text variant="body">
        In this example: @container/sidebar (min-width: 400px) and @sidebar/md:bg-green-400
      </Text>
      <div className="mt-12 border-2 border-dashed border-purple-300 p-8">
        <Text variant="body">
          <strong>Outer container (&quot;sidebar&quot;) - resize to see effect</strong>
        </Text>
        <div className="@container/sidebar mt-4 resize overflow-auto border-2 border-blue-300">
          <div className="p-4">
            <Text variant="body">
              <strong>Inner container (&quot;card&quot;)</strong>
            </Text>
            <div className="@container/card mt-2 border border-gray-300 p-2">
              <div className="@sidebar/md:bg-green-400 h-[50px] w-full rounded border-solid">
                <div className="flex h-full items-center justify-center text-xs">
                  Responds to sidebar container
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="my-12">
      <Text variant="body">
        <strong>Multiple named containers</strong> - Different elements respond to different named
        containers
      </Text>
      <div className="mt-12 border-2 border-dashed border-purple-300 p-8">
        <div className="@container/main resize overflow-auto border-2 border-green-300">
          <div className="p-4">
            <Text variant="body">
              <strong>Main container (resize me)</strong>
            </Text>
            <div className="@main/md:bg-blue-400 mt-2 h-[30px] w-full rounded">
              <div className="flex h-full items-center justify-center text-xs text-white">
                Responds to main container
              </div>
            </div>
            <div className="@container/sidebar mt-4 resize overflow-auto border border-red-300">
              <div className="p-2">
                <Text variant="body">
                  <strong>Sidebar container (resize me too)</strong>
                </Text>
                <div className="@sidebar/md:bg-red-400 mt-2 h-[30px] w-full rounded">
                  <div className="flex h-full items-center justify-center text-xs text-white">
                    Responds to sidebar container
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

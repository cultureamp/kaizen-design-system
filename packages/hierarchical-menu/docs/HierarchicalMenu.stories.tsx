import React, { useState } from "react"

import {
  HierarchicalMenu,
  Hierarchy,
  HierarchyNode,
} from "@kaizen/hierarchical-menu"
import { CATEGORIES } from "../../../storybook/constants"
import {
  ResponseTime,
  levelZero,
  levelOne,
  levelTwo,
  levelThree,
} from "./hierarchicalStoriesHelpers"

interface StoryContainerRenderProps {
  hierarchy: Hierarchy | null
  setHierarchy: (hierarchy: Hierarchy) => void
  navigatedFrom: HierarchyNode | null
  setNavigatedFrom: (node: HierarchyNode) => void
}

interface StoryContainerProps {
  children: (renderProps: StoryContainerRenderProps) => React.ReactNode
}

const StoryContainer = ({ children }: StoryContainerProps) => {
  const [hierarchy, setHierarchy] = useState<Hierarchy | null>(null)
  const [navigatedFrom, setNavigatedFrom] = useState<HierarchyNode | null>(null)

  return (
    <div>
      {children({
        hierarchy,
        setHierarchy,
        navigatedFrom,
        setNavigatedFrom,
      })}
    </div>
  )
}

export default {
  title: `${CATEGORIES.components}/Hierarchical Menu`,
  component: HierarchicalMenu,
  parameters: {
    docs: {
      description: {
        component:
          'import { HierarchicalMenu } from "@kaizen/hierarchical-menu"',
      },
    },
  },
}

export const DefaultStory = () => (
  <StoryContainer>
    {({ hierarchy, setHierarchy, navigatedFrom, setNavigatedFrom }) => (
      <HierarchicalMenu
        hierarchy={hierarchy}
        onLoad={async () => {
          const data = await instantLoadInitialHierarchy()
          setHierarchy(data)
        }}
        onNavigateToParent={async (currentHierarchy, toNode) => {
          const data = await instantLoadHierarchy(toNode)
          setHierarchy(data)
          setNavigatedFrom(currentHierarchy.current)
        }}
        onNavigateToChild={async (currentHierarchy, toNode) => {
          const data = await instantLoadHierarchy(toNode)
          setHierarchy(data)
        }}
        onSelect={onSelect}
        initialFocusIndex={hierarchy?.children.findIndex(
          c => c.value === navigatedFrom?.value
        )}
      />
    )}
  </StoryContainer>
)

DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const RtlStory = () => (
  <div dir="rtl">
    <StoryContainer>
      {({ hierarchy, setHierarchy, navigatedFrom, setNavigatedFrom }) => (
        <HierarchicalMenu
          hierarchy={hierarchy}
          onLoad={async () => {
            const data = await instantLoadInitialHierarchy()
            setHierarchy(data)
          }}
          onNavigateToParent={async (currentHierarchy, toNode) => {
            const data = await instantLoadHierarchy(toNode)
            setHierarchy(data)
            setNavigatedFrom(currentHierarchy.current)
          }}
          onNavigateToChild={async (currentHierarchy, toNode) => {
            const data = await instantLoadHierarchy(toNode)
            setHierarchy(data)
          }}
          onSelect={onSelect}
          initialFocusIndex={hierarchy?.children.findIndex(
            c => c.value === navigatedFrom?.value
          )}
          dir="rtl"
        />
      )}
    </StoryContainer>
  </div>
)

RtlStory.storyName = "Default (RTL)"

export const LoadingStateFastStory = () => (
  <StoryContainer>
    {({ hierarchy, setHierarchy, navigatedFrom, setNavigatedFrom }) => (
      <HierarchicalMenu
        hierarchy={hierarchy}
        onLoad={async () => {
          const data = await fastLoadInitialHierarchy()
          setHierarchy(data)
        }}
        onNavigateToParent={async (currentHierarchy, toNode) => {
          const data = await fastLoadHierarchy(toNode)
          setHierarchy(data)
          setNavigatedFrom(currentHierarchy.current)
        }}
        onNavigateToChild={async (currentHierarchy, toNode) => {
          const data = await fastLoadHierarchy(toNode)
          setHierarchy(data)
        }}
        onSelect={onSelect}
        initialFocusIndex={hierarchy?.children.findIndex(
          c => c.value === navigatedFrom?.value
        )}
      />
    )}
  </StoryContainer>
)

LoadingStateFastStory.storyName = "Loading state (fast)"

export const LoadingStateMediumStory = () => (
  <StoryContainer>
    {({ hierarchy, setHierarchy, navigatedFrom, setNavigatedFrom }) => (
      <HierarchicalMenu
        hierarchy={hierarchy}
        onLoad={async () => {
          const data = await mediumLoadInitialHierarchy()
          setHierarchy(data)
        }}
        onNavigateToParent={async (currentHierarchy, toNode) => {
          const data = await mediumLoadHierarchy(toNode)
          setHierarchy(data)
          setNavigatedFrom(currentHierarchy.current)
        }}
        onNavigateToChild={async (currentHierarchy, toNode) => {
          const data = await mediumLoadHierarchy(toNode)
          setHierarchy(data)
        }}
        onSelect={onSelect}
        initialFocusIndex={hierarchy?.children.findIndex(
          c => c.value === navigatedFrom?.value
        )}
      />
    )}
  </StoryContainer>
)

LoadingStateMediumStory.storyName = "Loading state (medium)"

export const LoadingStateSlowStory = () => (
  <StoryContainer>
    {({ hierarchy, setHierarchy, navigatedFrom, setNavigatedFrom }) => (
      <HierarchicalMenu
        hierarchy={hierarchy}
        onLoad={async () => {
          const data = await slowLoadInitialHierarchy()
          setHierarchy(data)
        }}
        onNavigateToParent={async (currentHierarchy, toNode) => {
          const data = await slowLoadHierarchy(toNode)
          setHierarchy(data)
          setNavigatedFrom(currentHierarchy.current)
        }}
        onNavigateToChild={async (currentHierarchy, toNode) => {
          const data = await slowLoadHierarchy(toNode)
          setHierarchy(data)
        }}
        onSelect={onSelect}
        initialFocusIndex={hierarchy?.children.findIndex(
          c => c.value === navigatedFrom?.value
        )}
      />
    )}
  </StoryContainer>
)

LoadingStateSlowStory.storyName = "Loading state (slow)"

const loadInitialHierarchy = (
  simulatedResponseTime: ResponseTime
) => (): Promise<Hierarchy> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(levelOne)
    }, simulatedResponseTime)
  })

const instantLoadInitialHierarchy = loadInitialHierarchy(ResponseTime.INSTANT)
const fastLoadInitialHierarchy = loadInitialHierarchy(ResponseTime.FAST)
const mediumLoadInitialHierarchy = loadInitialHierarchy(ResponseTime.MEDIUM)
const slowLoadInitialHierarchy = loadInitialHierarchy(ResponseTime.SLOW)

const loadHierarchy = (simulatedResponseTime: ResponseTime) => (
  node: HierarchyNode
): Promise<Hierarchy> =>
  new Promise(resolve => {
    setTimeout(() => {
      if (node.value === "id_didier") return resolve(levelZero)
      if (node.value === "id_rod") return resolve(levelOne)
      if (node.value === "id_virginia") return resolve(levelTwo)
      if (node.value === "id_kavi") return resolve(levelThree)
      resolve(levelZero)
    }, simulatedResponseTime)
  })

const instantLoadHierarchy = loadHierarchy(ResponseTime.INSTANT)
const fastLoadHierarchy = loadHierarchy(ResponseTime.FAST)
const mediumLoadHierarchy = loadHierarchy(ResponseTime.MEDIUM)
const slowLoadHierarchy = loadHierarchy(ResponseTime.SLOW)

const onSelect = (currentHierarchy: Hierarchy, selectedNode: HierarchyNode) =>
  alert(
    `You are currently viewing ${currentHierarchy.current.label}'s hierarchy and have selected ${selectedNode.label}!`
  )

import * as React from "react"

import {
  HierarchicalMenu,
  Hierarchy,
  HierarchyNode,
} from "@kaizen/draft-hierarchical-menu"
import {
  levelZero,
  levelOne,
  levelTwo,
  levelThree,
} from "./hierarchicalStoriesHelpers"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: "400px",
      margin: "12px auto",
      display: "flex",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
)

export default {
  title: "HierarchicalMenu (React)",
}

export const DefaultStory = () => (
  <StoryContainer>
    <HierarchicalMenu
      loadInitialHierarchy={loadInitialHierarchy(0)}
      loadHierarchy={loadHierarchy(0)}
      onSelect={onSelect}
    />
  </StoryContainer>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

export const RtlStory = () => (
  <div dir="rtl">
    <StoryContainer>
      <HierarchicalMenu
        loadInitialHierarchy={loadInitialHierarchy(0)}
        loadHierarchy={loadHierarchy(0)}
        onSelect={onSelect}
        dir="rtl"
      />
    </StoryContainer>
  </div>
)

RtlStory.story = {
  name: "Default (RTL)",
}

export const LoadingStateFastStory = () => (
  <StoryContainer>
    <HierarchicalMenu
      loadInitialHierarchy={loadInitialHierarchy(500)}
      loadHierarchy={loadHierarchy(500)}
      onSelect={onSelect}
    />
  </StoryContainer>
)

LoadingStateFastStory.story = {
  name: "Loading state (fast)",
}

export const LoadingStateMediumStory = () => (
  <StoryContainer>
    <HierarchicalMenu
      loadInitialHierarchy={loadInitialHierarchy(1500)}
      loadHierarchy={loadHierarchy(1500)}
      onSelect={onSelect}
    />
  </StoryContainer>
)

LoadingStateMediumStory.story = {
  name: "Loading state (medium)",
}

export const LoadingStateSlowStory = () => (
  <StoryContainer>
    <HierarchicalMenu
      loadInitialHierarchy={loadInitialHierarchy(2500)}
      loadHierarchy={loadHierarchy(2500)}
      onSelect={onSelect}
    />
  </StoryContainer>
)

LoadingStateSlowStory.story = {
  name: "Loading state (slow)",
}

const loadInitialHierarchy = (simulatedResponseTime: number) => (): Promise<
  Hierarchy
> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(levelOne)
    }, simulatedResponseTime)
  })

const loadHierarchy = (simulatedResponseTime: number) => (
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

const onSelect = (currentHierarchy: Hierarchy, selectedNode: HierarchyNode) =>
  alert(
    `You are currently viewing ${currentHierarchy.current.label}'s hierarchy and have selected ${selectedNode.label}!`
  )

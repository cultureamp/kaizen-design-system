import * as React from "react"

import { HierarchicalMenu } from "@kaizen/draft-hierarchical-menu"
import {
  loadInitialHierarchy,
  loadHierarchy,
  onSelect,
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
      loadInitialHierarchy={loadInitialHierarchy}
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
        loadInitialHierarchy={loadInitialHierarchy}
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
      loadInitialHierarchy={loadInitialHierarchy}
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
      loadInitialHierarchy={loadInitialHierarchy}
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
      loadInitialHierarchy={loadInitialHierarchy}
      loadHierarchy={loadHierarchy(2500)}
      onSelect={onSelect}
    />
  </StoryContainer>
)

LoadingStateSlowStory.story = {
  name: "Loading state (slow)",
}

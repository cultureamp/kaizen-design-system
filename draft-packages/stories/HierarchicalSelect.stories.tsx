import * as React from "react"

import { HierarchicalSelect } from "@kaizen/draft-hierarchical-select"

import {
  loadInitialHierarchy,
  loadHierarchy,
  onSelect,
} from "./hierarchicalStoriesHelpers"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: "250px",
      margin: "12px auto",
      display: "flex",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
)

export default {
  title: "HierarchicalSelect (React)",
}

export const DefaultStory = () => (
  <StoryContainer>
    <HierarchicalSelect
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
      <HierarchicalSelect
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

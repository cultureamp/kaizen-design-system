import React, { useState } from "react"

import { HierarchicalSelect } from "@kaizen/draft-hierarchical-select"
import { Hierarchy, HierarchyNode } from "@kaizen/draft-hierarchical-menu"
import {
  levelZero,
  levelOne,
  levelTwo,
  levelThree,
} from "./hierarchicalStoriesHelpers"

interface StoryContainerRenderProps {
  hierarchy: Hierarchy | null
  setHierarchy: (hierarchy: Hierarchy) => void
  value: HierarchyNode | null
  setValue: (value: HierarchyNode) => void
}

interface StoryContainerProps {
  children: (renderProps: StoryContainerRenderProps) => React.ReactNode
}

const StoryContainer = ({ children }: StoryContainerProps) => {
  const [hierarchy, setHierarchy] = useState<Hierarchy | null>(null)
  const [value, setValue] = useState<HierarchyNode | null>(null)
  return (
    <div
      style={{
        width: "250px",
        margin: "12px auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children({ hierarchy, setHierarchy, value, setValue })}
    </div>
  )
}

export default {
  title: "HierarchicalSelect (React)",
}

export const DefaultStory = () => (
  <StoryContainer>
    {({ hierarchy, setHierarchy, value, setValue }) => (
      <HierarchicalSelect
        loadInitialHierarchy={() => loadInitialHierarchy(hierarchy)}
        loadHierarchy={loadHierarchy(0)}
        onSelect={(currentHierarchy, toNode) => {
          setHierarchy(currentHierarchy)
          setValue(toNode)
        }}
        placeholder="Select..."
        value={value}
      />
    )}
  </StoryContainer>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

export const RtlStory = () => (
  <div dir="rtl">
    <StoryContainer>
      {({ hierarchy, setHierarchy, value, setValue }) => (
        <HierarchicalSelect
          loadInitialHierarchy={() => loadInitialHierarchy(hierarchy)}
          loadHierarchy={loadHierarchy(0)}
          onSelect={(currentHierarchy, toNode) => {
            setHierarchy(currentHierarchy)
            setValue(toNode)
          }}
          placeholder="Select RTL..."
          value={value}
          dir="rtl"
        />
      )}
    </StoryContainer>
  </div>
)

RtlStory.story = {
  name: "Default (RTL)",
}

const loadInitialHierarchy = (
  currentHierarchy: Hierarchy | null
): Promise<Hierarchy> =>
  new Promise(resolve => {
    resolve(currentHierarchy ? currentHierarchy : levelOne)
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

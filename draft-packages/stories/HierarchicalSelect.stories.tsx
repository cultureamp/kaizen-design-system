import React, { useState } from "react"

import { Paragraph } from "@kaizen/component-library"
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
  setValue: (value: HierarchyNode | null) => void
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
        justifyContent: "center",
      }}
    >
      {children({ hierarchy, setHierarchy, value, setValue })}
    </div>
  )
}

const SelectionSummary = (props: {
  node: HierarchyNode | null
  hierarchy: Hierarchy | null
}) => (
  <div style={{ marginTop: "12px" }}>
    {props.node && props.hierarchy ? (
      <Paragraph variant="body">
        Selected <strong>{props.node.label}</strong> from{" "}
        <strong>{props.hierarchy.current.label}'s</strong> hierarchy.
      </Paragraph>
    ) : null}
  </div>
)

export default {
  title: "HierarchicalSelect (React)",
}

export const DefaultStory = () => (
  <StoryContainer>
    {({ hierarchy, setHierarchy, value, setValue }) => (
      <>
        <HierarchicalSelect
          loadInitialHierarchy={() => loadInitialHierarchy(hierarchy)}
          loadHierarchy={node => loadHierarchy(node)}
          onSelect={(currentHierarchy, toNode) => {
            setHierarchy(currentHierarchy)
            setValue(toNode)
          }}
          onClear={() => setValue(null)}
          placeholder="Select..."
          value={value}
        />
        <SelectionSummary node={value} hierarchy={hierarchy} />
      </>
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
        <>
          <HierarchicalSelect
            loadInitialHierarchy={() => loadInitialHierarchy(hierarchy)}
            loadHierarchy={node => loadHierarchy(node)}
            onSelect={(currentHierarchy, toNode) => {
              setHierarchy(currentHierarchy)
              setValue(toNode)
            }}
            onClear={() => setValue(null)}
            placeholder="Select RTL..."
            value={value}
            dir="rtl"
          />
          <SelectionSummary node={value} hierarchy={hierarchy} />
        </>
      )}
    </StoryContainer>
  </div>
)

RtlStory.story = {
  name: "Default (RTL)",
}

export const DisabledStory = () => (
  <StoryContainer>
    {({ hierarchy, setHierarchy, value, setValue }) => (
      <>
        <HierarchicalSelect
          loadInitialHierarchy={() => loadInitialHierarchy(hierarchy)}
          loadHierarchy={node => loadHierarchy(node)}
          onSelect={(currentHierarchy, toNode) => {
            setHierarchy(currentHierarchy)
            setValue(toNode)
          }}
          onClear={() => setValue(null)}
          placeholder="Select..."
          value={value}
          disabled
        />
        <SelectionSummary node={value} hierarchy={hierarchy} />
      </>
    )}
  </StoryContainer>
)

DisabledStory.story = {
  name: "Disabled",
}

const loadInitialHierarchy = (
  currentHierarchy: Hierarchy | null
): Promise<Hierarchy> =>
  new Promise(resolve => {
    resolve(currentHierarchy ? currentHierarchy : levelOne)
  })

const loadHierarchy = (node: HierarchyNode): Promise<Hierarchy> =>
  new Promise(resolve => {
    if (node.value === "id_didier") return resolve(levelZero)
    if (node.value === "id_rod") return resolve(levelOne)
    if (node.value === "id_virginia") return resolve(levelTwo)
    if (node.value === "id_kavi") return resolve(levelThree)
    resolve(levelZero)
  })

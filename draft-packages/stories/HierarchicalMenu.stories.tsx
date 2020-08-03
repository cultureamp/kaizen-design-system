import * as React from "react"

import {
  HierarchicalMenu,
  HierarchyNode,
  Hierarchy,
} from "@kaizen/draft-hierarchical-menu"

const levelZero: Hierarchy = {
  parent: null,
  current: { value: "id_didier", label: "Didier", level: 0 },
  children: [
    { value: "id_aubrey", label: "Aubrey", level: 1, hasChildren: false },
    { value: "id_doug", label: "Doug", level: 1, hasChildren: false },
    { value: "id_rod", label: "Rod", level: 1, hasChildren: true },
  ],
}

const levelOne: Hierarchy = {
  parent: { value: "id_didier", label: "Didier", level: 0 },
  current: { value: "id_rod", label: "Rod", level: 1 },
  children: [
    { value: "id_virginia", label: "Virginia", level: 2, hasChildren: true },
    { value: "id_dan", label: "Dan", level: 2, hasChildren: false },
  ],
}

const levelTwo: Hierarchy = {
  parent: { value: "id_rod", label: "Rod", level: 1 },
  current: { value: "id_virginia", label: "Virginia", level: 2 },
  children: [
    { value: "id_jordan", label: "Jordan", level: 3, hasChildren: false },
    { value: "id_kavi", label: "Kavi", level: 3, hasChildren: true },
    { value: "id_olga", label: "Olga", level: 3, hasChildren: false },
    { value: "id_ronja", label: "Ronja", level: 3, hasChildren: false },
  ],
}

const levelThree: Hierarchy = {
  parent: { value: "id_virginia", label: "Virginia", level: 2 },
  current: { value: "id_kavi", label: "Kavi", level: 3 },
  children: [{ value: "id_dean", label: "Dean", level: 4, hasChildren: false }],
}

const loadHierarchy = (node: HierarchyNode) => {
  if (node.value === "id_didier") return levelZero
  if (node.value === "id_rod") return levelOne
  if (node.value === "id_virginia") return levelTwo
  if (node.value === "id_kavi") return levelThree
  return levelZero
}

export default {
  title: "HierarchicalMenu (React)",
}

export const DefaultStory = () => (
  <HierarchicalMenu initialHierarchy={levelOne} loadHierarchy={loadHierarchy} />
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

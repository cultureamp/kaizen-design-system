import * as React from "react"

import {
  HierarchicalMenu,
  HierarchyNode,
  Hierarchy,
} from "@kaizen/draft-hierarchical-menu"

const levelZero: Hierarchy = {
  parent: null,
  current: { value: "id_didier", label: "Didier Elzinga", level: 0 },
  children: [
    { value: "id_rich", label: "Rich Anstett", level: 1, hasChildren: false },
    { value: "id_josh", label: "Josh Berman", level: 1, hasChildren: false },
    {
      value: "id_aubrey",
      label: "Aubrey Blanche",
      level: 1,
      hasChildren: false,
    },
    { value: "id_doug", label: "Doug English", level: 1, hasChildren: false },
    { value: "id_peter", label: "Peter Haasz", level: 1, hasChildren: false },
    { value: "id_rod", label: "Rod Hamilton", level: 1, hasChildren: true },
    { value: "id_adin", label: "Adin Martin", level: 1, hasChildren: false },
    { value: "id_jd", label: "JD Peterson", level: 1, hasChildren: false },
    { value: "id_kath", label: "Kath Rau", level: 1, hasChildren: false },
    { value: "id_cathy", label: "Cathy Stansen", level: 1, hasChildren: false },
    { value: "id_sarah", label: "Sarah Tinsley", level: 1, hasChildren: false },
    { value: "id_jack", label: "Jack Van Wyk", level: 1, hasChildren: false },
  ],
}

const levelOne: Hierarchy = {
  parent: { value: "id_didier", label: "Didier Elzinga", level: 0 },
  current: { value: "id_rod", label: "Rod Hamilton", level: 1 },
  children: [
    {
      value: "id_virginia",
      label: "Virginia Murdoch",
      level: 2,
      hasChildren: true,
    },
    { value: "id_dan", label: "Dan Johnston", level: 2, hasChildren: false },
  ],
}

const levelTwo: Hierarchy = {
  parent: { value: "id_rod", label: "Rod Hamilton", level: 1 },
  current: { value: "id_virginia", label: "Virginia Murdoch", level: 2 },
  children: [
    { value: "id_jordan", label: "Jordan Lewis", level: 3, hasChildren: false },
    { value: "id_kavi", label: "Kavi Lal", level: 3, hasChildren: true },
    { value: "id_olga", label: "Olga Semeyko", level: 3, hasChildren: false },
    { value: "id_ronja", label: "Ronja Jagusch", level: 3, hasChildren: false },
  ],
}

const levelThree: Hierarchy = {
  parent: { value: "id_virginia", label: "Virginia Murdoch", level: 2 },
  current: { value: "id_kavi", label: "Kavi Lal", level: 3 },
  children: [
    { value: "id_dean", label: "Dean Wan", level: 4, hasChildren: false },
  ],
}

const loadHierarchy = (node: HierarchyNode): Promise<Hierarchy> =>
  new Promise(resolve => {
    if (node.value === "id_didier") return resolve(levelZero)
    if (node.value === "id_rod") return resolve(levelOne)
    if (node.value === "id_virginia") return resolve(levelTwo)
    if (node.value === "id_kavi") return resolve(levelThree)
    resolve(levelZero)
  })

export default {
  title: "HierarchicalMenu (React)",
}

export const DefaultStory = () => (
  <HierarchicalMenu
    initialHierarchy={levelOne}
    loadHierarchy={loadHierarchy}
    onSelect={selected => alert(`Selected ${selected.label}!`)}
  />
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

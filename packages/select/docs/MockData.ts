import { ItemType } from "../src/FilterMultiSelect"

export const items: ItemType[] = [
  {
    label: "Front-End",
    value: "id-fe",
    count: "1245",
  },
  { label: "Back-End", value: "id-be", count: "4" },
  { label: "SRE", value: "id-sre" },
  { label: "Dev-ops", value: "id-devops" },
  { label: "Others", value: "id-others" },
  {
    label: "Engineer-type-1 has a really really long label",
    value: "id-type-1",
  },
  {
    label: "Engineer-type-2 also has a really really long label",
    value: "id-type-2",
    count: "156",
  },
  { label: "Engineer-type-3", value: "id-type-3" },
  { label: "Engineer-type-4", value: "id-type-4" },
  { label: "Engineer-type-5", value: "id-type-5" },
]

export const groupedItems: ItemType[] = [
  {
    label: "Front-End",
    value: "id-fe",
    count: "1245",
    children: [
      { label: "child-1", value: "child-1" },
      { label: "Back-End", value: "id-be", count: "4" },
      { label: "SRE", value: "id-sre" },
      { label: "Dev-ops", value: "id-devops" },
      { label: "Others", value: "id-others" },
    ],
  },
  {
    label: "Group 2",
    value: "gr-2",
    children: [
      { label: "Engineer-type-3", value: "id-type-3" },
      { label: "Engineer-type-4", value: "id-type-4" },
      { label: "Engineer-type-5", value: "id-type-5" },
    ],
  },
]
export const selectedGroupedItems: ItemType[] = [
  {
    label: "Selected Items",
    value: "selected",
    count: "5",
    children: [
      { label: "child-1", value: "child-1" },
      { label: "Back-End", value: "id-be", count: "4" },
      { label: "SRE", value: "id-sre" },
      { label: "Dev-ops", value: "id-devops" },
      { label: "Others", value: "id-others" },
    ],
  },
  {
    label: "",
    value: "gr-2",
    children: [
      { label: "Engineer-type-3", value: "id-type-3" },
      { label: "Engineer-type-4", value: "id-type-4" },
      { label: "Engineer-type-5", value: "id-type-5" },
    ],
  },
]

export const departmentDemographicValues = [
  {
    demographicValueId: "id-fe",
    label: "Front-End",
  },
  {
    demographicValueId: "id-be",
    label: "Back-End",
  },
  {
    demographicValueId: "id-sre",
    label: "SRE",
  },
]

export const locationDemographicValues = [
  {
    demographicValueId: "id-mel",
    label: "Melbourne",
  },
  {
    demographicValueId: "id-sfo",
    label: "San Francisco",
  },
  {
    demographicValueId: "id-nyc",
    label: "New York",
  },
  {
    demographicValueId: "id-lhr",
    label: "London",
  },
]

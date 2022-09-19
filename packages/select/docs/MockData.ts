import { ItemType } from "../src/FilterMultiSelect"

export const items: ItemType[] = [
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

export const options: ItemType[] = [
  {
    label: "Australian",
    value: "aus-2",
    children: [
      { value: 2, label: "Koala" },
      { value: 3, label: "Kangaroo" },
      { value: 4, label: "Platypus" },
    ],
  },
  {
    label: "American",
    value: "ame-2",
    children: [
      { value: 6, label: "Bald Eagle" },
      { value: 7, label: "Bison" },
      { value: 8, label: "Skunk" },
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

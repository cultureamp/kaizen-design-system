import { ItemType } from "../types"

export const mockItems: ItemType[] = [
  { label: "Front-End", value: "id-fe", count: "1245" },
  { label: "Back-End", value: "id-be", count: "4", isDisabled: true },
  { label: "SRE", value: "id-sre", count: "4", isDisabled: true },
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
  {
    label: "Engineer-type-4",
    value: "id-type-4",
    count: "4",
    isDisabled: true,
  },
  { label: "Engineer-type-5", value: "id-type-5" },
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

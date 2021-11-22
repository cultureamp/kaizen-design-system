export type HealthAttributeMap = Array<{
  id: string
  positive: string
  negative: string
}>

export const healthAttributeMap = [
  {
    id: "designed",
    positive: "Designed",
    negative: "Not designed",
  },
  {
    id: "documented",
    positive: "Documented",
    negative: "Not documented",
  },
  {
    id: "implemented",
    positive: "Implemented",
    negative: "Not implemented",
  },
  {
    id: "latestDesign",
    positive: "UI Kit parity",
    negative: "No UI Kit parity",
  },
  {
    id: "allVariants",
    positive: "All variants",
    negative: "Only some variants",
  },
  {
    id: "responsive",
    positive: "Responsive",
    negative: "Not responsive",
  },
  {
    id: "internationalized",
    positive: "Internationalized",
    negative: "Not internationalized",
  },
  {
    id: "accessible",
    positive: "Accessible",
    negative: "Not accessible",
  },
]

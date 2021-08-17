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
    positive: "Matches latest design",
    negative: "Doesn’t match latest design",
  },
  {
    id: "allVariants",
    positive: "Has all variants",
    negative: "Doesn’t have all variants",
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

import { SingleItemType } from "@kaizen/select"

export const singleMockItems: SingleItemType[] = [
  { label: "Short black", value: "short-black" },
  { label: "Long black", value: "long-black" },
  { label: "Batch brew", value: "batch-brew" },
  { label: "Latte", value: "latte" },
  { label: "Flat white", value: "flat-white" },
  { label: "Mocha", value: "mocha" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Magic", value: "magic" },
]

export const groupedMockItems: SingleItemType[] = [
  {
    label: "Colours",
    value: [
      { label: "Blue", value: "blue" },
      { label: "Red", value: "red" },
      { label: "Green", value: "green" },
    ],
  },
  {
    label: "Flavours",
    value: [
      { label: "Vanilla", value: "vanilla" },
      { label: "Chocolate", value: "chocolate" },
      { label: "Strawberry", value: "strawberry" },
    ],
  },
]

export const mixedMockItemsUngroupedFirst: SingleItemType[] = [
  { label: "Batch brew", value: "batch-brew" },
  { label: "Latte", value: "latte" },
  { label: "Magic", value: "magic" },
  {
    label: "Size",
    value: [
      { label: "Regular", value: "regular" },
      { label: "Large", value: "large" },
    ],
  },
  {
    label: "Syrup",
    value: [
      { label: "Vanilla", value: "vanilla" },
      { label: "Caramel", value: "caramel" },
      { label: "Hazelnut", value: "hazelnut" },
    ],
  },
]

export const mixedMockItemsUnordered: SingleItemType[] = [
  {
    label: "Size",
    value: [
      { label: "Regular", value: "regular" },
      { label: "Large", value: "large" },
    ],
  },
  { label: "Batch brew", value: "batch-brew" },
  { label: "Latte", value: "latte" },
  { label: "Magic", value: "magic" },
  {
    label: "Syrup",
    value: [
      { label: "Vanilla", value: "vanilla" },
      { label: "Caramel", value: "caramel" },
      { label: "Hazelnut", value: "hazelnut" },
    ],
  },
]

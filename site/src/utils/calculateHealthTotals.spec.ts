import { healthAttributeMap } from "../constants"
import { calculateHealthTotals } from "./calculateHealthTotals"

const components = [
  {
    title: "Avatar",
    navTitle: "",
    health: {
      designed: true,
      documented: true,
      implemented: true,
      latestDesign: true,
      allVariants: false,
      responsive: true,
      internationalized: true,
      accessible: true,
    },
  },
  {
    title: "Button",
    navTitle: "",
    health: {
      designed: true,
      documented: false,
      implemented: true,
      latestDesign: true,
      allVariants: true,
      responsive: true,
      internationalized: true,
      accessible: true,
    },
  },
  {
    title: "Collapsible",
    navTitle: "",
  },
  {
    title: "Empty State",
    navTitle: "",
    health: {
      designed: true,
      documented: true,
      implemented: false,
    },
  },
]

it("calculates totals correctly", () => {
  const result = calculateHealthTotals(components, healthAttributeMap)
  expect(result).toStrictEqual({
    designed: 3,
    documented: 2,
    implemented: 2,
    latestDesign: 2,
    allVariants: 1,
    responsive: 2,
    internationalized: 2,
    accessible: 2,
  })
})

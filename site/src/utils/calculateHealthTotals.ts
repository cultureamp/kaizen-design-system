import { HealthAttributeMap } from "../constants"
import { HealthAttributes } from "../types"

/**
 * Takes component frontmatter and calculates a total for each health attribute.
 *
 * For example:
 *  Input:
 *    [
 *       {
 *          title: "Button"
 *          health: {
 *            designed: true
 *            documented: false
 *          }
 *       },
 *       {
 *          title: "Avatar"
 *          health: {
 *            designed: true
 *            documented: true
 *          }
 *        }
 *      }
 *    ]
 *
 *  Output:
 *    {
 *       designed: 2
 *       documented: 1
 *    }
 */
type ComponentData = Array<{
  navTitle: string
  title: string
  health?: HealthAttributes
}>

export const calculateHealthTotals = (
  components: ComponentData,
  healthAttributeMap: HealthAttributeMap
) =>
  components.reduce((totalsAccumlator, component) => {
    const updatedCounts = healthAttributeMap.reduce(
      (healthAccumlator, currentHealthAttribute) => {
        const isTick =
          component.health && component.health[currentHealthAttribute.id]
        if (!isTick) return healthAccumlator

        const hasExistingCount = totalsAccumlator[currentHealthAttribute.id]
        return {
          ...healthAccumlator,
          [currentHealthAttribute.id]: hasExistingCount
            ? totalsAccumlator[currentHealthAttribute.id] + 1
            : 1,
        }
      },
      {}
    )

    return {
      ...totalsAccumlator,
      ...updatedCounts,
    }
  }, {})

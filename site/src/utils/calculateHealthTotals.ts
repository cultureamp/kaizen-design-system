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
export const calculateHealthTotals = (components, healthAttributes) =>
  components.reduce((totalsAccumlator, component) => {
    const updatedCounts = healthAttributes.reduce(
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

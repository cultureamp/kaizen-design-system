import { Fetch } from "../components/ExpandableAsyncFilterSelectBox"
import { FilterOption, FilterValues } from "../types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getPage(array: FilterOption[], page: number, perPage: number) {
  const start = (page - 1) * perPage
  const end = page * perPage
  const items = array.slice(start, end)

  return {
    items,
    prev: page > 1 ? page - 1 : null,
    next: end < array.length ? page + 1 : null,
    ...(items.length !== array.length && {
      current: page,
      first: 1,
      last: Math.ceil(array.length / perPage),
    }),
  }
}
type FilterFns = (
  model: FilterOption[],
  searchTerm: string,
  values: FilterValues
) => FilterOption[]

export const mockEndpoint =
  (model: FilterOption[], filterFns: FilterFns[] = []): Fetch =>
  (searchTerm, cursor, values) =>
    new Promise(resolve => {
      setTimeout(() => {
        const filteredTerms = model.filter(d =>
          d.label.toLowerCase().includes(searchTerm.toLowerCase())
        )

        const filteredValues = filterFns.reduce(
          (v, fn) => fn(v, searchTerm, values),
          filteredTerms
        )

        const pagination = getPage(filteredValues, Number(cursor.next) || 1, 10)

        return resolve({
          options: pagination.items,
          cursor: {
            next: pagination.next,
          },
        })
      }, 200)
    })

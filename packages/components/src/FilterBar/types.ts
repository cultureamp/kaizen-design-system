type SelectedValues = {
  chocolate: string
  strawberry: number
  pancake: boolean
  waffle: boolean
}

type IsUsableWhen<T> = (state: {
  [K in keyof T]: {
    isHidden: boolean
    selectedValue: T[K]
  }
}) => boolean

export const q: IsUsableWhen<SelectedValues> = state =>
  state.pancake.selectedValue

type FilterAttr<Id, SelectedValue> = {
  id: Id
  selectedValue?: SelectedValue
}

type FiltersState<T> = { [K in keyof T]: FilterAttr<K, T[K]> }

const tomato: FiltersState<SelectedValues> = {
  strawberry: { id: "strawberry", selectedValue: 3 },
  chocolate: { id: "chocolate", selectedValue: "a" },
  // @ts-expect-error
  pancake: { id: "tomato", selectedValue: true },
  // @ts-expect-error
  waffle: { id: "waffle", selectedValue: 3 },
}

export const a = tomato.pancake.selectedValue

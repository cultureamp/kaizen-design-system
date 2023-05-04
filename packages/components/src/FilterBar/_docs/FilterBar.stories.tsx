import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import {
  Filter,
  StateWithoutComponent,
  useFilterBarContext,
} from "../context/FilterBarContext"
import { FilterBar } from "../index"
import { FilterDRP } from "../subcomponents/FilterDRP"
import { FilterPancake } from "../subcomponents/FilterPancake"
import { FilterBarSelect } from "../subcomponents/FilterSelect"

const meta = {
  tags: ["autodocs"],
  title: "Components/__Filter Bar",
  component: FilterBar,
} satisfies Meta<typeof FilterBar>

export default meta

export const Playground: StoryFn<typeof FilterBar> = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, any>>({
    chocolate: "boo",
  })
  const [filtersState, setFiltersState] = useState<StateWithoutComponent>({})

  // @note: `id` for filter must match `id` in the consuming component
  // Perhaps it's worth cloning the active filters and passing it in for the consumer?
  // The only problem is if the `id` is a different prop name,
  // although we could also make an attribute to override that if needed
  const filters: Filter[] = [
    {
      id: "chocolate",
      label: "Chocolate",
      Component: <FilterPancake id="chocolate" />,
    },
    {
      id: "strawberry",
      label: "Strawberry",
      Component: <FilterPancake id="strawberry" />,
      isRemovable: true,
      isInitHidden: true,
    },
    {
      id: "vanilla",
      label: "Vanilla",
      Component: <FilterPancake id="vanilla" />,
      isRemovable: true,
      isUsableWhen: state => !state["strawberry"].isHidden,
      isInitHidden: true,
    },
    {
      id: "apple",
      label: "Apple",
      Component: <FilterPancake id="apple" />,
      isRemovable: true,
    },
  ]

  return (
    <div>
      <FilterBar
        filters={filters}
        onChange={setFiltersState}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
      />

      <button
        type="button"
        onClick={(): void =>
          setSelectedValues({
            ...selectedValues,
            chocolate: "Hello!",
          })
        }
        className="mt-16"
      >
        Update chocolate value
      </button>

      <p>selectedValues</p>
      <Highlight className="json">
        {JSON.stringify(selectedValues, null, 4)}
      </Highlight>

      <p>filtersState</p>
      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}

// Component must be created to access the context.
// Provider is in FilterBar, thus hook cannot be called in instantiating component.
const VanillaPancake = (props: { id: string }): JSX.Element => {
  const { setOpenFilter } = useFilterBarContext()
  return (
    <FilterPancake
      id={props.id}
      onChange={(): void => setOpenFilter("coffee")}
    />
  )
}

export const Playground2: StoryFn<typeof FilterBar> = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, any>>({})
  const [filtersState, setFiltersState] = useState<StateWithoutComponent>({})

  const filters: Filter[] = [
    {
      id: "chocolate",
      label: "Chocolate",
      Component: <FilterPancake id="chocolate" />,
    },
    {
      id: "drp",
      label: "Dates",
      Component: <FilterDRP id="drp" locale="en-AU" />,
    },
    {
      id: "vanilla",
      label: "Vanilla",
      Component: <VanillaPancake id="vanilla" />,
      isRemovable: true,
      isUsableWhen: state => state["chocolate"]?.selectedValue !== undefined,
    },
    {
      id: "coffee",
      label: "Coffee",
      Component: (
        <FilterBarSelect
          id="coffee"
          items={[
            { label: "Short black", value: "short-black" },
            { label: "Long black", value: "long-black" },
            { label: "Batch brew", value: "batch-brew" },
          ]}
        />
      ),
    },
    {
      id: "carrots",
      label: "Carrots",
      Component: <FilterPancake id="carrots" />,
      isInitHidden: true,
    },
  ]

  return (
    <div>
      <FilterBar
        filters={filters}
        onChange={setFiltersState}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
      />

      <button
        type="button"
        onClick={(): void =>
          setSelectedValues({
            ...selectedValues,
            chocolate: "Hello!",
          })
        }
        className="mt-16"
      >
        Update chocolate value
      </button>

      <p>selectedValues</p>
      <Highlight className="json">
        {JSON.stringify(selectedValues, null, 4)}
      </Highlight>

      <p>filtersState</p>
      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}

export const AnotherExample: StoryFn<typeof FilterBar> = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, any>>({})
  const [filtersState, setFiltersState] = useState<StateWithoutComponent>({})

  const filters: Filter[] = [
    {
      id: "managers",
      label: "Managers",
      Component: (
        <FilterBarSelect
          id="managers"
          items={[
            { label: "Geoff Chong", value: "the-g" },
            { label: "Christian Klammer", value: "ck" },
          ]}
        />
      ),
    },
    {
      id: "reports",
      label: "Reports",
      Component: (
        <FilterBarSelect
          id="reports"
          items={[
            { label: "Directs", value: "directs" },
            { label: "Indirects", value: "indirects" },
          ]}
        />
      ),
      isRemovable: true,
      isInitHidden: true,
    },
    {
      id: "departments",
      label: "Departments",
      Component: (
        <FilterBarSelect
          id="departments"
          items={[
            { label: "Beauty", value: "beauty" },
            { label: "Electronics", value: "electronics" },
          ]}
        />
      ),
      isRemovable: true,
      isInitHidden: true,
      isUsableWhen: state => !state["reports"].isHidden,
    },
    {
      id: "gender",
      label: "Gender",
      Component: (
        <FilterBarSelect
          id="gender"
          items={[
            { label: "Prefer not to say", value: "no-to-say" },
            { label: "Female", value: "female" },
            { label: "Make", value: "male" },
            { label: "Non-binary", value: "non-binary" },
          ]}
        />
      ),
      isRemovable: true,
      isInitHidden: true,
      isUsableWhen: state => !state["reports"].isHidden,
    },
  ]

  return (
    <div>
      <FilterBar
        filters={filters}
        onChange={setFiltersState}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
      />

      <p>selectedValues</p>
      <Highlight className="json">
        {JSON.stringify(selectedValues, null, 4)}
      </Highlight>

      <p>filtersState</p>
      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}

// // @note: Maybe removable ones can be figured out by us to handle the hideFilter?
// const DynamicFilter = ({ label }: { label: string }): JSX.Element => {
//   const { hideFilter } = useFilterBarContext()
//   return (
//     <FilterPancake
//       label={label}
//       renderTrigger={(triggerProps): JSX.Element => (
//         <FilterButtonRemovable
//           triggerButtonProps={{ ...triggerProps }}
//           removeButtonProps={{ onClick: () => hideFilter(label) }}
//         />
//       )}
//       isDefaultHidden
//     />
//   )
// }

// // @note: Filters currently slot themselves in their virtual dom order instead of only at the end
// // Need to change to append instead
// export const ManyFilters: StoryFn<typeof FilterBar> = () => {
//   const [filtersState, setFiltersState] = useState({})

//   return (
//     <div>
//       <FilterBar onChange={setFiltersState}>
//         <FilterPancake
//           label="Default"
//           renderTrigger={(triggerProps): JSX.Element => (
//             <FilterButton {...triggerProps} />
//           )}
//         />

//         {[...Array(100)].map((_, n) => (
//           <DynamicFilter key={n} label={`${n}`} />
//         ))}

//         <FilterAddButton />
//         <FilterClearAllButton />
//       </FilterBar>

//       <Highlight className="json">
//         {JSON.stringify(filtersState, null, 4)}
//       </Highlight>
//     </div>
//   )
// }

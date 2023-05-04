import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import {
  Filter,
  StateWithoutComponent,
  useFilterBarContext,
} from "../context/FilterBarContext"
import { FilterBar } from "../index"
// import { FilterAddButton } from "../subcomponents/FilterAddButton"
// import { FilterClearAllButton } from "../subcomponents/FilterClearAllButton"
import { FilterDRP } from "../subcomponents/FilterDRP"
import { FilterPancake } from "../subcomponents/FilterPancake"
// import { FilterBarSelect } from "../subcomponents/FilterSelect"

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
      Component: <FilterPancake id="coffee" />,
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

// const ReportsFilter = (): JSX.Element => {
//   const { hideFilter } = useFilterBarContext()
//   const label = "Reports"
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
// const GenderFilter = (): JSX.Element => {
//   const { hideFilter } = useFilterBarContext()
//   const label = "Gender"
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
//       isUsableWhen={(state): boolean => state["Reports"]?.isHidden !== true}
//     />
//   )
// }
// const DepartmentsFilter = (): JSX.Element => {
//   const { hideFilter } = useFilterBarContext()
//   const label = "Departments"
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
//       isUsableWhen={(state): boolean => state["Reports"]?.isHidden !== true}
//     />
//   )
// }

// export const AnotherExample: StoryFn<typeof FilterBar> = () => {
//   const [filtersState, setFiltersState] = useState({})

//   return (
//     <div>
//       <FilterBar onChange={setFiltersState}>
//         <FilterDRP
//           id="drp"
//           locale="en-AU"
//           label="Dates"
//           renderTrigger={(triggerProps): JSX.Element => (
//             <FilterButton {...triggerProps} />
//           )}
//         />

//         <FilterPancake
//           label="Managers"
//           renderTrigger={(triggerProps): JSX.Element => (
//             <FilterButton {...triggerProps} />
//           )}
//         />

//         <ReportsFilter />

//         <GenderFilter />
//         <DepartmentsFilter />

//         <FilterAddButton />
//         <FilterClearAllButton />
//       </FilterBar>

//       <Highlight className="json">
//         {JSON.stringify(filtersState, null, 4)}
//       </Highlight>
//     </div>
//   )
// }

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

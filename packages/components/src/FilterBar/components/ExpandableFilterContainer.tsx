import React from "react"
import { Button, IconButton } from "@kaizen/button"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import minimiseIcon from "@kaizen/component-library/icons/minimize.icon.svg"
import { Tooltip } from "@Components/Tooltip"
import { useExpandableProvider } from "../hooks/useExpandableFilterState"
import { FilterValues, ExpandableFilterContainerProps } from "../types"
import { AddFilterButton } from "./AddFilterButton"
import { ExpandableSelectBox } from "./ExpandableFilterSelectBox"
import { Row } from "./Row"
import { Items } from "./Items"
import { ExpandableAsyncSelectBox } from "./ExpandableAsyncFilterSelectBox"

export const ExpandableFilterContainer = <T extends FilterValues>(
  props: ExpandableFilterContainerProps<T>
) => {
  const ExpandableFilterProvider = useExpandableProvider<T>()
  return (
    <ExpandableFilterProvider value={props}>
      <Row>
        {props.display === "expanded" && (
          <Items>
            <>
              {props.activeFilters.map(({ Component, id }) => (
                <React.Fragment key={String(id)}>{Component}</React.Fragment>
              ))}
            </>
            {props.additionalFilters.length > 0 && <AddFilterButton />}
          </Items>
        )}
        {props.display === "expanded" ? (
          <div className="flex">
            <button
              className="appearance-none bg-transparent text-blue-500 mr-2 cursor-pointer"
              onClick={() => props.dispatch({ type: "clearFilters" })}
            >
              Clear all
            </button>
            <div
              style={{
                borderLeft: "solid 1px rgb(244, 244, 245)",
                color: "rgb(1 104 179)",
                height: "100%",
              }}
            >
              <Tooltip position="above" text={"Minimize"}>
                <IconButton
                  icon={minimiseIcon}
                  label={"Minimize"}
                  onClick={() =>
                    props.dispatch({ type: "setDisplay", data: "shrunk" })
                  }
                />
              </Tooltip>
            </div>
          </div>
        ) : (
          <Button
            onClick={() =>
              props.dispatch({ type: "setDisplay", data: "expanded" })
            }
            label={"Filter"}
            secondary
            iconPosition="start"
            icon={filterIcon}
            badge={
              props.activeFilterCount > 0
                ? { text: props.activeFilterCount.toString() }
                : undefined
            }
          />
        )}
      </Row>
    </ExpandableFilterProvider>
  )
}

ExpandableFilterContainer.SelectBox = ExpandableSelectBox
ExpandableFilterContainer.AsyncSelectBox = ExpandableAsyncSelectBox

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react"
import { Button, IconButton } from "@kaizen/button"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import minimiseIcon from "@kaizen/component-library/icons/minimize.icon.svg"
import { Tooltip } from "@kaizen/draft-tooltip"
import { useExpandableProvider } from "../hooks/useExpandableFilterState"
import { FilterValues, ExpandableFilterContainerProps } from "../types"
import { AddFilterButton } from "./AddFilterButton"
import { ExpandableAsyncSelectBox } from "./ExpandableAsyncFilterSelectBox"
import { ExpandableSelectBox } from "./ExpandableFilterSelectBox"
import { Items } from "./Items"
import { Row } from "./Row"

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
          <div className="flex gap-8">
            <Button
              secondary
              onClick={() => props.dispatch({ type: "clearFilters" })}
              label="Clear all"
            />
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

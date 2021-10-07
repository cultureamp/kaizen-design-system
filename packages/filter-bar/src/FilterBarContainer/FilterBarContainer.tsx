import { Button, IconButton } from "@kaizen/draft-button"
import React from "react"
import minimize from "@kaizen/component-library/icons/minimize.icon.svg"
import filter from "@kaizen/component-library/icons/filter.icon.svg"
import add from "@kaizen/component-library/icons/add.icon.svg"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"

import classNames from "classnames"
import { Box } from "@kaizen/component-library"
import { IFilter } from "../types"
import styles from "./styles.module.scss"

type FilterBarContainerProps = {
  filters?: IFilter[]
  expanded?: boolean
  reversed?: boolean
  flexible?: boolean
  showControls?: boolean
  handleClear?: () => void
  handleAdd?: () => void
  handleMinimize?: () => void
}

export default function FilterBarContainer(props: FilterBarContainerProps) {
  const {
    filters,
    expanded,
    reversed,
    flexible,
    showControls,
    handleAdd,
    handleClear,
    handleMinimize,
  } = props
  const hasFilters = !!filters

  return (
    <>
      {!flexible ? (
        <div className={styles.containerWrapper}>
          {/* TODO: Implement real filters components, this is just for stories */}
          {filters?.map(f => (
            <Box mr={0.25}>
              <Button
                label={f.name}
                secondary
                reversed={reversed}
                icon={chevronDown}
                iconPosition="end"
              />
            </Box>
          ))}
        </div>
      ) : (
        <>
          {expanded ? (
            <div
              className={classNames(styles.containerWrapper, {
                [styles.showControls]: showControls,
              })}
            >
              <div className={styles.filterWrapper}>
                {/* TODO: Implement real filters components, this is just for stories */}
                {filters?.map(f => (
                  <Box mr={0.25}>
                    <Button
                      label={f.name}
                      secondary
                      reversed={!flexible && reversed}
                      icon={chevronDown}
                      iconPosition="end"
                    />
                  </Box>
                ))}
                {flexible && (
                  <Button
                    icon={add}
                    label="Add filter"
                    secondary
                    onClick={handleAdd}
                  />
                )}
              </div>
              <div className={styles.containerActions}>
                <Button
                  label="Clear all"
                  secondary
                  disabled={!hasFilters}
                  onClick={handleClear}
                />
                <div className={styles.divider}></div>
                <IconButton
                  onClick={handleMinimize}
                  icon={minimize}
                  label="minimize"
                  secondary
                />
              </div>
            </div>
          ) : (
            <Button
              icon={filter}
              label="Filter"
              onClick={handleMinimize}
              secondary
              reversed={reversed}
              badge={
                hasFilters
                  ? { text: `${filters?.length}`, variant: "active", reversed }
                  : undefined
              }
            />
          )}
        </>
      )}
    </>
  )
}

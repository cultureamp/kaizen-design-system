import React, { useEffect, useRef } from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { Popover } from "react-aria-components"
import { MenuTrigger, Menu, MenuItem, Button } from "~components/__actions__/v3"
import { Icon } from "~components/__future__/Icon"
import { useFilterBarContext } from "../../context/FilterBarContext"

export const AddFiltersMenu = (): JSX.Element => {
  const { formatMessage } = useIntl()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const menuButtonLabel = formatMessage({
    id: "filterBar.addFiltersMenu.buttonLabel",
    defaultMessage: "Add Filters",
    description:
      "Menu button label to show additional available filter options",
  })

  const { getInactiveFilters, showFilter, focusId, setFocus } =
    useFilterBarContext()
  const inactiveFilters = getInactiveFilters()

  useEffect(() => {
    if (focusId === "add_filter") {
      buttonRef.current?.focus()
      setFocus(undefined)
    }
  }, [focusId])

  return (
    <MenuTrigger>
      <Button
        ref={buttonRef}
        size="large"
        icon={<Icon name="add" isPresentational />}
        variant="tertiary"
        isDisabled={inactiveFilters.length === 0}
      >
        {menuButtonLabel}
      </Button>
      <Popover>
        <Menu>
          {inactiveFilters.map(({ id, name }) => (
            <MenuItem key={id} onAction={(): void => showFilter(id)}>
              {name}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}

AddFiltersMenu.displayName = "FilterBar.AddFiltersMenu"

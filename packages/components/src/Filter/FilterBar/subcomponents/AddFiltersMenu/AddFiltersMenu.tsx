import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { AddIcon } from "~components/Icon"
import { Menu, MenuList, MenuItem } from "~components/Menu"
import { Button } from "~components/__actions__/v2"
import { useFilterBarContext } from "../../context/FilterBarContext"

export const AddFiltersMenu = (): JSX.Element => {
  const { formatMessage } = useIntl()

  const menuButtonLabel = formatMessage({
    id: "filterBar.addFiltersMenu.buttonLabel",
    defaultMessage: "Add Filters",
    description:
      "Menu button label to show additional available filter options",
  })

  const { getInactiveFilters, showFilter } = useFilterBarContext()
  const inactiveFilters = getInactiveFilters()

  return (
    <Menu
      button={
        <Button
          label={menuButtonLabel}
          secondary
          disabled={inactiveFilters.length === 0}
          icon={<AddIcon role="presentation" />}
        />
      }
    >
      <MenuList>
        {inactiveFilters.map(({ id, name }) => (
          <MenuItem
            key={id}
            label={name}
            onClick={(): void => showFilter(id)}
          />
        ))}
      </MenuList>
    </Menu>
  )
}

AddFiltersMenu.displayName = "FilterBar.AddFiltersMenu"

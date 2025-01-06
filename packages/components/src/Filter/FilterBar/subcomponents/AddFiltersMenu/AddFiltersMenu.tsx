import React, { useEffect, useRef } from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import { Button } from '~components/Button'
import { Menu, MenuItem, MenuList } from '~components/Menu'
import { Icon } from '~components/__rc__/Icon'
import { useFilterBarContext } from '../../context/FilterBarContext'

export const AddFiltersMenu = (): JSX.Element => {
  const { formatMessage } = useIntl()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const menuButtonLabel = formatMessage({
    id: 'filterBar.addFiltersMenu.buttonLabel',
    defaultMessage: 'Add filters',
    description: 'Menu button label to show additional available filter options',
  })

  const { getInactiveFilters, showFilter, focusId, setFocus } = useFilterBarContext()
  const inactiveFilters = getInactiveFilters()

  useEffect(() => {
    if (focusId === 'add_filter') {
      buttonRef.current?.focus()
      setFocus(undefined)
    }
  }, [focusId, setFocus])

  return (
    <Menu
      button={
        <Button
          ref={buttonRef}
          label={menuButtonLabel}
          secondary
          disabled={inactiveFilters.length === 0}
          icon={<Icon name="add" isPresentational />}
        />
      }
    >
      <MenuList>
        {inactiveFilters.map(({ id, name }) => (
          <MenuItem key={id} label={name} onClick={(): void => showFilter(id)} />
        ))}
      </MenuList>
    </Menu>
  )
}

AddFiltersMenu.displayName = 'FilterBar.AddFiltersMenu'

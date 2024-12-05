import React from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import classnames from 'classnames'
import { Button } from '~components/__actions__/v2'
import { useFilterBarContext } from '../../context/FilterBarContext'
import styles from './ClearAllButton.module.scss'

export const ClearAllButton = (): JSX.Element => {
  const { formatMessage } = useIntl()

  const clearButtonLabel = formatMessage({
    id: 'filterBar.clearAllButton.label',
    defaultMessage: 'Clear all',
    description: 'Button label to clear all values within the filter bar',
  })

  const clearButtonAriaLabel = formatMessage({
    id: 'filterBar.clearAllButton.ariaLabel',
    defaultMessage: 'Clear all filters',
    description: 'Button aria-label to clear all values within the filter bar',
  })

  const { clearAllFilters, isClearable } = useFilterBarContext()

  return (
    <Button
      label={clearButtonLabel}
      aria-label={clearButtonAriaLabel}
      classNameOverride={classnames(styles.clearAllButton, {
        [styles.hidden]: !isClearable,
      })}
      secondary
      onClick={clearAllFilters}
    />
  )
}

ClearAllButton.displayName = 'FilterBar.ClearAllButton'

import React, { useId } from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import { InputSearch } from '~components/Input/InputSearch'
import { useSelectionContext } from '../../context'
import styles from './SearchInput.module.scss'

export type SearchInputProps = {
  label?: string
  id?: string
  isLoading?: boolean
}

export const SearchInput = ({
  label,
  id,
  isLoading,
}: SearchInputProps): JSX.Element => {
  const { formatMessage } = useIntl()
  const { setSearchQuery, searchQuery } = useSelectionContext()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setSearchQuery(e.target.value)
  }

  const handleClear = (): void => setSearchQuery('')

  const reactId = useId()
  const inputId = id ?? reactId

  const defaultAriaLabel = formatMessage({
    id: 'filterMultiSelectSearchInput.label',
    defaultMessage: 'Filter options by search query',
    description: 'Label for the search input',
  })
  const placeholder = formatMessage({
    id: 'filterMultiSelectSearchInput.placeholder',
    defaultMessage: 'Search…',
    description: 'Placeholder for the search input',
  })

  return (
    <div className={styles.inputSearchContainer}>
      <InputSearch
        id={inputId}
        aria-label={label ?? defaultAriaLabel}
        secondary
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        onClear={handleClear}
        loading={isLoading}
      />
    </div>
  )
}

SearchInput.displayName = 'FilterMultiSelect.SearchInput'

import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, type Mock } from 'vitest'
import { useSelectionContext } from '../../context'
import { SearchInput } from '.'

const user = userEvent.setup()

vi.mock('../../context', () => ({
  useSelectionContext: vi.fn(),
}))

const SearchInputWrapper = (): JSX.Element => <SearchInput label="label-mock" />

describe('<SearchInput /> - interaction', () => {
  describe('Given searchQuery is provided', () => {
    it('shows searchQuery as value', async () => {
      ;(useSelectionContext as Mock).mockReturnValue({
        searchQuery: 'search-query-mock',
      })
      render(<SearchInputWrapper />)
      await waitFor(() => {
        expect(screen.getByRole('searchbox')).toHaveValue('search-query-mock')
      })
    })
  })

  it('triggers setSearchQuery with input value when user types the input', async () => {
    const spy = vi.fn()
    ;(useSelectionContext as Mock).mockReturnValue({
      setSearchQuery: spy,
    })

    render(<SearchInputWrapper />)
    const search = screen.getByRole('searchbox')
    await user.type(search, 'want to search this text')

    expect(spy).toHaveBeenLastCalledWith('want to search this text')
  })

  it('triggers setSearchQuery with input value when clear the input', async () => {
    const spy = vi.fn()
    ;(useSelectionContext as Mock).mockReturnValue({
      searchQuery: 'search-query-mock',
      setSearchQuery: spy,
    })

    render(<SearchInputWrapper />)
    const clearButton = screen.getByRole('button')
    await user.click(clearButton)

    expect(spy).toHaveBeenLastCalledWith('')
  })
})

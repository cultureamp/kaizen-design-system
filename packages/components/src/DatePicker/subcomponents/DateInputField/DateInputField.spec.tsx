import React, { useRef } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { enUS } from 'date-fns/locale'
import { vi } from 'vitest'
import { DateInputField, type DateInputFieldProps } from './DateInputField'

const user = userEvent.setup()

const defaultProps: DateInputFieldProps = {
  id: 'test__date-input-field',
  labelText: 'Bacon expiry',
  onButtonClick: vi.fn(),
  onKeyDown: vi.fn(),
  value: undefined,
  locale: enUS,
}

const DateInputFieldWrapper = (props: Partial<DateInputFieldProps>): JSX.Element => (
  <DateInputField {...defaultProps} {...props} />
)

describe('<DateInputField />', () => {
  describe('Input', () => {
    it('associates the description with the input', async () => {
      render(<DateInputFieldWrapper />)
      await waitFor(() => {
        expect(
          screen.getByRole('textbox', {
            name: 'Bacon expiry',
            description: 'Input format : mm/dd/yyyy',
          }),
        ).toBeInTheDocument()
      })
    })
  })

  describe('Icon button', () => {
    it('has helpful label', async () => {
      render(<DateInputFieldWrapper />)
      await waitFor(() => {
        expect(screen.getByRole('button', { name: 'Choose date' })).toBeInTheDocument()
      })
    })

    it('has helpful label showing the current date when one is selected', async () => {
      render(<DateInputFieldWrapper value="Mar 1, 2022" onChange={(): void => undefined} />)
      await waitFor(() => {
        expect(screen.getByRole('button', { name: 'Change date, Mar 1, 2022' })).toBeInTheDocument()
      })
    })
  })

  describe('States', () => {
    it('disables both input and icon button', async () => {
      render(<DateInputFieldWrapper disabled />)
      const input = screen.getByRole('textbox', { name: 'Bacon expiry' })
      const calendarButton = screen.getByRole('button', { name: 'Choose date' })
      await waitFor(() => {
        expect(input).toBeDisabled()
        expect(calendarButton).toBeDisabled()
      })
    })
  })

  describe('Validation', () => {
    it('shows validation message', async () => {
      render(<DateInputFieldWrapper status="error" validationMessage="There is an error" />)
      const errorMessage = screen.getByText('There is an error')
      await waitFor(() => {
        expect(errorMessage).toBeInTheDocument()
      })
    })

    it('does not show validation message when field is disabled', async () => {
      render(
        <DateInputFieldWrapper status="error" validationMessage="There is an error" disabled />,
      )
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: 'Bacon expiry' })).toBeVisible()
      })
      const errorMessage = screen.queryByText('There is an error')
      expect(errorMessage).not.toBeInTheDocument()
    })
  })

  describe('Refs', () => {
    it('correctly passes through input and button refs', async () => {
      const onButtonClick = vi.fn()

      const Wrapper = (): JSX.Element => {
        const inputRef = useRef<HTMLInputElement>(null)
        const buttonRef = useRef<HTMLButtonElement>(null)
        const ref = useRef({ inputRef, buttonRef })

        const handleClick = (): void =>
          onButtonClick(inputRef.current?.id, buttonRef.current?.getAttribute('aria-label'))

        return (
          <>
            <DateInputField
              ref={ref}
              id="test__date-input-field--ref"
              labelText="Adventure time"
              onButtonClick={vi.fn()}
              locale={enUS}
            />
            <button type="button" onClick={handleClick}>
              Click me
            </button>
          </>
        )
      }

      render(<Wrapper />)

      await user.click(screen.getByText('Click me'))
      expect(onButtonClick).toHaveBeenCalledWith('test__date-input-field--ref', 'Choose date')
    })
  })
})

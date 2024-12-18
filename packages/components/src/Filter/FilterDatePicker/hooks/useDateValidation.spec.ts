import { act } from 'react'
import { render, renderHook, waitFor } from '@testing-library/react'

import { useDateValidation } from './useDateValidation'

describe('useDateValidation()', () => {
  describe('with a valid date', () => {
    it('returns no validation message and the same date', () => {
      const { result } = renderHook(() =>
        useDateValidation({
          inputLabel: 'Start date',
        }),
      )
      const { validateDate } = result.current
      const { newDate } = validateDate({
        date: new Date('2022-05-01'),
        inputValue: '1 May 2022',
      })

      expect(result.current.validationMessage).toBeUndefined()
      expect(newDate).toEqual(new Date('2022-05-01'))
    })
  })

  describe('with an invalid date', () => {
    it('returns a validation message and no date', async () => {
      const { result } = renderHook(() => useDateValidation({ inputLabel: 'Date' }))
      const { validateDate, updateValidation } = result.current
      const { validationResponse, newDate } = validateDate({
        date: new Date('potato'),
        inputValue: 'potato',
      })

      act(() => {
        updateValidation(validationResponse)
      })
      expect(newDate).toEqual(undefined)

      expect(result.current.validationMessage?.status).toBe('error')

      const { container } = render(result.current.validationMessage?.message)
      await waitFor(() => {
        expect(container).toHaveTextContent('Date:potato is an invalid date')
      })
    })
  })

  describe('consumer controlled validation', () => {
    it("returns the consumer's error status and validation message", () => {
      const { result } = renderHook(() =>
        useDateValidation({
          inputLabel: 'Start date',
          validationMessage: {
            status: 'caution',
            message: 'Jelly-filled doughnuts',
          },
          onValidate: (): void => undefined,
        }),
      )
      const { validateDate, updateValidation } = result.current
      const { validationResponse, newDate } = validateDate({
        date: new Date('potato'),
        inputValue: 'potato',
      })

      act(() => {
        updateValidation(validationResponse)
      })

      expect(result.current.validationMessage).toStrictEqual({
        status: 'caution',
        message: 'Jelly-filled doughnuts',
      })
      expect(newDate).toBeUndefined()
    })
  })
})

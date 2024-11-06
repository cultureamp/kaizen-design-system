import React from 'react'
import { render } from '@testing-library/react'
import { DateRangeValidationMessage } from './DateRangeValidationMessage'

describe('<DateRangeValidationMessage />', () => {
  it('renders an id when passed in', () => {
    const { container } = render(
      <DateRangeValidationMessage
        dateStartId="date-start-error-message-id"
        dateEndId="date-end-error-message-id"
        validationMessage={{
          dateStart: {
            status: 'caution',
            message: '"Date from" is close to the submission date.',
          },
          dateEnd: {
            status: 'error',
            message:
              '"Date to" cannot be earlier than the "Date from" selection.',
          },
        }}
      />,
    )
    expect(
      container.querySelector('#date-start-error-message-id'),
    ).toBeVisible()
    expect(container.querySelector('#date-end-error-message-id')).toBeVisible()
  })
})

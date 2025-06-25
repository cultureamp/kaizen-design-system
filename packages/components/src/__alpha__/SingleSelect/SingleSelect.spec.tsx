import React from 'react'
import { render } from '@testing-library/react'
import { SingleSelect } from './SingleSelect'
import { singleMockItems } from './_docs/mockData'

const SingleSelectWrapper = (): JSX.Element => (
  <SingleSelect labelText="Coffee" description="Select your fav coffee">
    <SingleSelect.List>
      {singleMockItems.map((item) => (
        <SingleSelect.ListItem key={item.value} value={{ value: item.value }}>
          {item.label}
        </SingleSelect.ListItem>
      ))}
    </SingleSelect.List>
  </SingleSelect>
)

const SingleSelectWrapperWithError = (): JSX.Element => (
  <SingleSelect
    labelText="Coffee"
    validationMessage="Bad choice"
    description="Select your fav coffee"
    status="error"
  >
    <SingleSelect.List>
      {singleMockItems.map((item) => (
        <SingleSelect.ListItem key={item.value} value={{ value: item.value }}>
          {item.label}
        </SingleSelect.ListItem>
      ))}
    </SingleSelect.List>
  </SingleSelect>
)

describe('<SingleSelect />', () => {
  describe('render with a11y', () => {
    it('has the label as the accessible name', () => {
      const { getByRole } = render(<SingleSelectWrapper />)
      const select = getByRole('button', {
        name: 'Coffee',
      })
      expect(select).toBeInTheDocument()
    })

    it('shows the description message when passed', () => {
      const { getByRole } = render(<SingleSelectWrapper />)
      const select = getByRole('button', {
        description: 'Select your fav coffee',
      })
      expect(select).toBeInTheDocument()
    })

    it('shows the validation message when passed', () => {
      const { getByRole } = render(<SingleSelectWrapperWithError />)
      const select = getByRole('button', {
        name: 'Coffee error message Bad choice',
      })
      expect(select).toBeInTheDocument()
    })
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import { SingleSelect } from './SingleSelect'
import { singleMockItems } from './_docs/mockData'

const SingleSelectWrapper = (): JSX.Element => (
  <SingleSelect items={singleMockItems}>
    <SingleSelect.List>
      {singleMockItems.map((item) => (
        <SingleSelect.ListItem key={item.value} id={item.value}>
          {item.label}
        </SingleSelect.ListItem>
      ))}
    </SingleSelect.List>
  </SingleSelect>
)

describe('<SingleSelect />', () => {
  describe('renders', () => {
    it('a basic select component', () => {
      const { getByRole } = render(<SingleSelectWrapper />)
      const select = getByRole('button')
      expect(select).toBeInTheDocument()
    })
  })
})

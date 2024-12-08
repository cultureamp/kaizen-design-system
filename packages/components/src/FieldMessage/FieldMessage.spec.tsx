import React from 'react'
import { render } from '@testing-library/react'
import { FieldMessage, FieldMessageProps } from './FieldMessage'

const defaultFieldMessageProps = {
  id: 'someFieldMessageId',
  message: 'Some FieldMessage.',
}

const FieldMessageWrapper = (props: Partial<FieldMessageProps>): JSX.Element => (
  <FieldMessage
    id={defaultFieldMessageProps.id}
    message={defaultFieldMessageProps.message}
    {...props}
  />
)

describe('<FieldMessage />', () => {
  it('renders a message within a <p> tag when given a string', () => {
    const { getByText } = render(<FieldMessageWrapper message="Hello I am a message" />)
    const labelContainer = getByText('Hello I am a message')

    expect(labelContainer).toBeInTheDocument()
    expect(labelContainer?.tagName === 'P').toBeTruthy()
  })

  it('renders a message within a <div> tag when not given node other than string', () => {
    const { getByText } = render(
      <FieldMessageWrapper message={<span>Hello I am a message within a span</span>} />,
    )

    const labelContainer = getByText('Hello I am a message within a span')

    expect(labelContainer).toBeInTheDocument()
    expect(labelContainer?.tagName === 'SPAN').toBeTruthy()
    expect(labelContainer?.parentElement?.tagName === 'DIV').toBeTruthy()
  })

  it('renders an `id` attribute', () => {
    const { getByTestId } = render(
      <FieldMessageWrapper data-testid="id--fieldMessage" id="id--test" />,
    )

    expect(getByTestId('id--fieldMessage')).toHaveAttribute('id', 'id--test')
  })

  it('renders the error icon with an accessible title', () => {
    const { getByLabelText } = render(<FieldMessageWrapper status="error" />)

    expect(getByLabelText('error message')).toBeInTheDocument()
  })

  it('renders the caution icon with an accessible title', () => {
    const { getByLabelText } = render(<FieldMessageWrapper status="caution" />)

    expect(getByLabelText('caution message')).toBeInTheDocument()
  })
})

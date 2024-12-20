import React from 'react'
import { render } from '@testing-library/react'
import { vi } from 'vitest'
import { type RichTextContentProps } from '../RichTextContent'
import { EditableRichTextContent } from './EditableRichTextContent'
const mockFn = vi.fn()

vi.mock('../RichTextContent', () => ({
  __esModule: true,
  RichTextContent: (props: RichTextContentProps): JSX.Element => {
    mockFn(props)
    return <div>Mocked Component</div>
  },
}))

const content = [
  {
    type: 'paragraph',
    content: [{ type: 'text', text: 'Sample rich text content' }],
  },
]

describe('Content props are passed', () => {
  it('should pass them to RichTextContent component', () => {
    render(
      <EditableRichTextContent
        content={content}
        labelText=""
        onClick={vi.fn()}
        contentProps={{ id: 'sampleId' }}
      />,
    )
    expect(mockFn).toHaveBeenCalledWith({ content, id: 'sampleId' })
  })
})

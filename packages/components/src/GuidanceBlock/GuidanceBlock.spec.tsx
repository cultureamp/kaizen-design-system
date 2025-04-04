import React from 'react'
import { cleanup, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { Informative } from '~components/Illustration'
import { GuidanceBlock } from './GuidanceBlock'
const user = userEvent.setup()

window.matchMedia = vi.fn().mockImplementation(() => ({
  matches: false,
  media: '',
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
}))

describe('GuidanceBlock', () => {
  afterEach(cleanup)

  it('calls the action function when action button is clicked', async () => {
    const onAction = vi.fn()
    const { container } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: 'This is the call to action title',
          description:
            'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.',
        }}
        actions={{
          primary: { label: 'Action!', onClick: onAction },
        }}
      />,
    )
    const actionButton = container.querySelector('button')
    if (actionButton) await user.click(actionButton)

    await waitFor(() => {
      expect(onAction).toHaveBeenCalledTimes(1)
    })
  })

  it('has a default title tag of h3', () => {
    const { getByRole } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: 'This is the call to action title',
          description:
            'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.',
        }}
      />,
    )
    expect(
      getByRole('heading', {
        level: 3,
        name: 'This is the call to action title',
      }),
    ).toBeInTheDocument()
  })

  it('can allow the user to override the title tag', () => {
    const { getByRole } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: 'This is the call to action title',
          description:
            'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.',
          titleTag: 'h2',
        }}
      />,
    )
    expect(
      getByRole('heading', {
        level: 2,
        name: 'This is the call to action title',
      }),
    ).toBeInTheDocument()
  })
})

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { vi } from 'vitest'
import { Informative } from '~components/Illustration'
import { GuidanceBlock } from './GuidanceBlock'

window.matchMedia = vi.fn().mockImplementation(() => ({
  matches: false,
  media: '',
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
}))

describe('GuidanceBlock', () => {
  afterEach(cleanup)

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

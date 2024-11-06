import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('<Avatar />', () => {
  // there is an issue with react-textfit that is only flagged in a test suite
  // this solution silences that specific case https://github.com/malte-wessel/react-textfit/issues/35
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => '')
  })

  it('renders user initials if the image link is broken', () => {
    render(<Avatar fullName="John Doe" avatarSrc="broken" />)
    fireEvent.error(screen.getByRole('img'))

    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  describe('full name provided contains more than two names', () => {
    it('renders the initials for each name', () => {
      render(<Avatar size="large" fullName="Jane With A Very Long Name" />)

      expect(screen.getByText('JWAVLN')).toBeInTheDocument()
    })
  })

  describe('alt text', () => {
    describe('providing alt text, overriding fullName', () => {
      it('uses alt prop over full name when using initials', () => {
        render(<Avatar fullName="Jane Doe" alt="alt override" />)
        expect(screen.getByTitle('alt override')).toBeInTheDocument()
      })

      it('uses alt prop over full name when using fallback img', () => {
        render(
          <Avatar fullName="Jane Doe" alt="alt override" disableInitials />,
        )
        expect(screen.getByRole('img')).toHaveAccessibleName('alt override')
      })

      it('uses alt prop over full name when supplying an img', () => {
        render(
          <Avatar
            fullName="Jane Doe"
            alt="alt override"
            avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
          />,
        )
        expect(screen.getByRole('img')).toHaveAccessibleName('alt override')
      })
    })

    describe('providing fullName, no alt prop', () => {
      it('uses the fullName when using initials', () => {
        render(<Avatar fullName="Jane Doe" />)
        expect(screen.getByTitle('Jane Doe')).toBeInTheDocument()
      })

      it('uses the fullName when using fallback img', () => {
        render(<Avatar fullName="Jane Doe" disableInitials />)
        expect(screen.getByRole('img')).toHaveAccessibleName('Jane Doe')
      })

      it('uses alt prop over full name when supplying an img', () => {
        render(
          <Avatar
            fullName="Jane Doe"
            avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
          />,
        )
        expect(screen.getByRole('img')).toHaveAccessibleName('Jane Doe')
      })
    })

    describe('not providing fullName or alt text', () => {
      it('makes the img presentational on the fallback img', () => {
        render(<Avatar />)
        expect(screen.queryByRole('img')).not.toBeInTheDocument()
      })

      it('has blank alt text when img provided', () => {
        render(
          <Avatar avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png" />,
        )
        expect(screen.queryByRole('img')).not.toBeInTheDocument()
      })
    })
  })
})

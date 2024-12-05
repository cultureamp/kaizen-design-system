import React from 'react'
import { screen, waitFor, render } from '@testing-library/react'
import { vi } from 'vitest'
import { ErrorPage } from './ErrorPage'

describe('<ErrorPage />', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.load = vi.fn()
    window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined)
    window.HTMLMediaElement.prototype.pause = vi.fn()
    window.matchMedia = vi.fn().mockImplementation(() => ({
      media: '',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      matches: false,
    }))
  })

  it('shows the correct content for error 400', async () => {
    render(<ErrorPage code="400" />)
    await waitFor(() => {
      expect(screen.getByText('Problem loading page')).toBeVisible()
      expect(
        screen.getByText('Problem loading page right now. Try again or head home.'),
      ).toBeVisible()
      expect(screen.getByText('Error code 400')).toBeVisible()
    })
  })

  it('shows the correct content for error 401', async () => {
    render(<ErrorPage code="401" />)
    await waitFor(() => {
      expect(screen.getByText("You can't view this page")).toBeVisible()
      expect(
        screen.getByText(
          "Sorry but we can't verify if you're able to view this page. Go back and try again, or head to Home",
        ),
      ).toBeVisible()
      expect(screen.getByText('Error code 401')).toBeVisible()
    })
  })

  it('shows the correct content for error 403', async () => {
    render(<ErrorPage code="403" />)
    await waitFor(() => {
      expect(screen.getByText("You can't view this page")).toBeVisible()
      expect(
        screen.getByText(
          'Sorry but it looks like you don’t have permission to view this page. Go back and try again, or head to Home',
        ),
      ).toBeVisible()
      expect(screen.getByText('Error code 403')).toBeVisible()
    })
  })

  it('shows the correct content for error 404', async () => {
    render(<ErrorPage code="404" />)
    await waitFor(() => {
      expect(screen.getByText('Page not found')).toBeVisible()
      expect(
        screen.getByText(
          "Sorry but we can't find the page you're looking for. Go back and try again, or head to Home",
        ),
      ).toBeVisible()
      expect(screen.getByText('Error code 404')).toBeVisible()
    })
  })

  it('shows the correct content for error 422', async () => {
    render(<ErrorPage code="422" />)
    await waitFor(() => {
      expect(screen.getByText("Change couldn't be made")).toBeVisible()
      expect(
        screen.getByText(
          "Sorry but your change couldn't be made. Go back and try again, or head to Home",
        ),
      ).toBeVisible()
      expect(screen.getByText('Error code 422')).toBeVisible()
    })
  })

  it('shows the correct content for error 500', async () => {
    render(<ErrorPage code="500" />)
    await waitFor(() => {
      expect(screen.getByText("Something's gone wrong on our side")).toBeVisible()
      expect(
        screen.getByText(
          "Sorry there's an issue with our system and this page can't be displayed. Go back and try again, or head to Home",
        ),
      ).toBeVisible()
      expect(screen.getByText('Error code 500')).toBeVisible()
    })
  })

  it('shows the correct content for error 502', async () => {
    render(<ErrorPage code="502" />)
    await waitFor(() => {
      expect(screen.getByText("You can't view this page")).toBeVisible()
      expect(
        screen.getByText('Sorry about this. The best thing to do is go back and try again.'),
      ).toBeVisible()
      expect(screen.getByText('Error code 502')).toBeVisible()
    })
  })

  it('shows the correct content for error 503', async () => {
    render(<ErrorPage code="503" />)
    await waitFor(() => {
      expect(screen.getByText("You can't view this page")).toBeVisible()
      expect(
        screen.getByText('Sorry about this. The best thing to do is go back and try again.'),
      ).toBeVisible()
      expect(screen.getByText('Error code 503')).toBeVisible()
    })
  })

  it('shows the correct content for error 504', async () => {
    render(<ErrorPage code="504" />)
    await waitFor(() => {
      expect(screen.getByText("You can't view this page")).toBeVisible()
      expect(
        screen.getByText('Sorry about this. The best thing to do is go back and try again.'),
      ).toBeVisible()
      expect(screen.getByText('Error code 504')).toBeVisible()
    })
  })
})

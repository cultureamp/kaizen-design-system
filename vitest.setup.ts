import * as JestDomMatchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, expect } from 'vitest'
import 'vitest-axe/extend-expect'
import { mockMatchMedia, reactIntlMock } from '~tests'

expect.extend(JestDomMatchers)

beforeEach(() => {
  reactIntlMock()
  mockMatchMedia()
})

afterEach(() => {
  cleanup()
})

process.env.TZ = 'UTC'

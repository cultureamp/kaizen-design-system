import * as JestDomMatchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, expect } from 'vitest'
import 'vitest-axe/extend-expect'
import { matchMediaMock, reactIntlMock } from '~tests'

expect.extend(JestDomMatchers)

beforeEach(() => {
  reactIntlMock()
  matchMediaMock()
})

afterEach(() => {
  cleanup()
})

process.env.TZ = 'UTC'

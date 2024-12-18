import * as JestDomMatchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, expect } from 'vitest'
import 'vitest-axe/extend-expect'
import { reactIntlMock } from '~tests'

expect.extend(JestDomMatchers)

beforeEach(() => {
  reactIntlMock()
})

afterEach(() => {
  cleanup()
})

process.env.TZ = 'UTC'

import * as JestDomMatchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { expect, afterEach, beforeEach } from 'vitest'
import 'vitest-axe/extend-expect'
import { reactIntlMock } from '~tests'

expect.extend(JestDomMatchers)

// eslint-disable-next-line vitest/require-top-level-describe
beforeEach(() => {
  reactIntlMock()
})

// eslint-disable-next-line vitest/require-top-level-describe
afterEach(() => {
  cleanup()
})

process.env.TZ = 'UTC'

import "@testing-library/jest-dom"

/** @ts-ignore */
global.IS_REACT_ACT_ENVIRONMENT = true

const CONSOLE_FAIL_TYPES = ["error", "warn"] as const

// Throw errors when a `console.error` or `console.warn` happens
// by overriding the functions
CONSOLE_FAIL_TYPES.forEach(type => {
  console[type] = message => {
    throw new Error(
      `Failing due to console.${type} while running test!\n\n${message}`
    )
  }
})

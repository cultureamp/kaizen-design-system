import { transform } from "./index"

describe("main", () => {
  describe("--elm", () => {
    test("preserves the start of the file", () => {
      const file = Buffer.from(
        `port module Update exposing (getInitialData, subscriptions, update)\nimport Browser.Dom as Dom`
      )
      expect(transform("elm", file)).toBe(file.toString())
    })

    test("preseves the end of the file", () => {
      const file = Buffer.from(
        `import Browser.Dom as Dom\n\nupdate : Msg -> Model -> ( Model, Cmd Msg )`
      )
      expect(transform("elm", file)).toBe(file.toString())
    })
  })

  describe("--js", () => {
    test("preserves the start of the file", () => {
      const file = Buffer.from(`// @flow\nimport React from 'react';`)
      expect(transform("js", file)).toBe(file.toString())
    })
    test("preseves the end of the file", () => {
      const file = Buffer.from(
        `\nimport React from 'react';\nexport const test = () => {}`
      )
      expect(transform("js", file)).toBe(file.toString())
    })
  })
})

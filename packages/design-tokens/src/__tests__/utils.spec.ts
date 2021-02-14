import {
  flattenObjectToCSSVariables,
  mapLeafsOfObject,
  objectPathToCssVarReference,
} from "../utils"

describe("utils", () => {
  describe("mapLeafsOfObject", () => {
    test.each([
      [
        {
          test: {
            one: {
              two: {
                three: 123,
              },
            },
          },
        },
        objectPathToCssVarReference,
        {
          test: {
            one: {
              two: {
                three: "var(--test-one-two-three, 123)",
              },
            },
          },
        },
      ],
      [
        {
          rootValue: "Yep",
          test: {
            imACamel: "im-a-camel",
            one: {
              two: {
                three: () => "i'm a function",
              },
            },
          },
        },
        objectPathToCssVarReference,
        {
          rootValue: "var(--root-value, Yep)",
          test: {
            imACamel: "var(--test-im-a-camel, im-a-camel)",
            one: {
              two: {
                three: `var(--test-one-two-three, ${() => "i'm a function"})`,
              },
            },
          },
        },
      ],
      [
        {
          rootValue: "Yep",
          test: {
            imACamel: "im-a-camel",
            one: {
              two: {
                three: () => "this shouldn't show",
              },
            },
          },
        },
        (path: string[], value: unknown) =>
          `${path[path.length - 1]}: ${
            typeof value === "string" ? value : "not-a-string"
          }`,
        {
          rootValue: "rootValue: Yep",
          test: {
            one: {
              two: {
                three: "three: not-a-string",
              },
            },
          },
        },
      ],
    ])("mapLeafsOfObject test case %#", (input, mapper, output) => {
      expect(mapLeafsOfObject(input, mapper)).toMatchObject(output)
    })
  })

  describe("flattenObjectToCSSVariables", () => {
    test.each([
      [
        { test: { one: { two: "#fff", another: { deep: "Greycliff" } } } },
        {
          "--test-one-two": "#fff",
          "--test-one-another-deep": "Greycliff",
        },
      ],
    ])("flattenObjectToCSSVariables test case %#", (input, output) => {
      const actual = flattenObjectToCSSVariables(input)
      expect(actual).toMatchObject(output)
    })
  })
})

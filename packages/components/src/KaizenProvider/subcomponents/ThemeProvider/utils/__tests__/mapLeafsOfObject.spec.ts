import { objectPathToCssVarFunction } from "../cssVariables"
import { mapLeafsOfObject } from "../mapLeafsOfObject"

describe("mapLeafsOfObject()", () => {
  it.each([
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
      objectPathToCssVarFunction,
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
              three: (): string => "i'm a function",
            },
          },
        },
      },
      objectPathToCssVarFunction,
      {
        rootValue: "var(--root-value, Yep)",
        test: {
          imACamel: "var(--test-im-a-camel, im-a-camel)",
          one: {
            two: {
              three: `var(--test-one-two-three, ${(): string =>
                "i'm a function"})`,
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
              three: (): string => "this shouldn't show",
            },
          },
        },
      },
      (path: string[], value: unknown): string =>
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
  ])("test case %#", (input, mapper, output) => {
    expect(mapLeafsOfObject(input, mapper)).toMatchObject(output)
  })
})

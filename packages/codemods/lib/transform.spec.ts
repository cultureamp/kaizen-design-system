import {
  detokenise,
  ElmToken,
  JsToken,
  tokenise,
  transformDrafts,
} from "./transform"

describe("tokenise", () => {
  describe("-- js input", () => {
    test("Converts a default import to a token list", () => {
      const output = tokenise("js", Buffer.from("import React from 'react';"))

      expect(output).toMatchSnapshot()
    })

    test("Converts a named import to a token list", () => {
      const { tokens } = tokenise(
        "js",
        Buffer.from("import { Query } from '@apollo/react-components';")
      )
      expect(tokens).toMatchSnapshot()
    })

    test("Converts multiple named imports to a token list", () => {
      const { tokens } = tokenise(
        "js",
        Buffer.from(
          "import { Button, Text, Icon } from '@kaizen/component-library';"
        )
      )
      expect(tokens).toMatchSnapshot()
    })

    test("Converts multiple multi-line named imports to a token list", () => {
      const { tokens } = tokenise(
        "js",
        Buffer.from(`import type {
        DemographicFocusAgentData,
        DemographicFocusGroup,
        QueryVariables,
      } from '../graphql/queries';`)
      )
      expect(tokens).toMatchSnapshot()
    })

    test("Converts mixed named and default exports", () => {
      const { tokens } = tokenise(
        "js",
        Buffer.from(`import animals, { cat, dog } from './animals.js';`)
      )
      expect(tokens).toMatchSnapshot()
    })
  })

  describe("-- elm input", () => {
    test("Converts a nested import to a list", () => {
      const { tokens } = tokenise(
        "elm",
        Buffer.from("import Browser.Dom as Dom")
      )
      expect(tokens).toMatchSnapshot()
    })

    test("Converts a nested import with exposing", () => {
      const { tokens } = tokenise(
        "elm",
        Buffer.from("import DictSet exposing (DictSet)")
      )
      expect(tokens).toMatchSnapshot()
    })
  })
})

describe("detokenise", () => {
  describe("-- js input", () => {
    test("transforms a single named-export token list back to a string", () => {
      const input = [
        {
          name: {
            named: ["Query"],
          },
          packageName: "@apollo/react-components",
        },
      ]
      expect(detokenise("js", input)).toEqual(
        `import { Query } from '@apollo/react-components';`
      )
    })

    test("transforms multiple named-export token list back to a string", () => {
      const input = [
        {
          name: {
            named: [
              "DemographicFocusAgentData",
              "DemographicFocusGroup",
              "QueryVariables",
            ],
          },
          packageName: "../graphql/queries",
        },
      ]
      expect(detokenise("js", input)).toEqual(
        `import { DemographicFocusAgentData, DemographicFocusGroup, QueryVariables } from '../graphql/queries';`
      )
    })

    test("transforms multiple named-export token list back to a string", () => {
      const input = [
        {
          name: {
            named: ["Button", "Text", "Icon"],
          },
          packageName: "@kaizen/component-library",
        },
      ]
      expect(detokenise("js", input)).toEqual(
        `import { Button, Text, Icon } from '@kaizen/component-library';`
      )
    })

    test("transforms a default token list back to a string", () => {
      const input = [
        {
          name: {
            default: ["React"],
            named: "",
          },
          packageName: "react",
        },
      ]
      expect(detokenise("js", input)).toEqual(`import React from 'react';`)
    })

    test("transforms mixed named and default exports", () => {
      const input = [
        {
          name: {
            named: ["cat", "dog"],
            default: "animals",
          },
          packageName: "react",
        },
      ]

      expect(detokenise("js", input)).toEqual(
        "import animals, { cat, dog } from 'react';"
      )
    })

    test("transforms multiple tokens", () => {
      const input = [
        {
          name: {
            named: ["Button", "Text", "Icon"],
            default: "",
          },
          packageName: "@kaizen/component-library",
        },
        {
          name: {
            default: ["React"],
            named: "",
          },
          packageName: "react",
        },
      ]
      expect(detokenise("js", input)).toEqual(
        `import { Button, Text, Icon } from '@kaizen/component-library';\nimport React from 'react';`
      )
    })
  })

  describe("--elm input", () => {
    test("Converts an array back to a string", () => {
      const tokens = detokenise("elm", [{ name: "import Browser.Dom as Dom" }])
      expect(tokens).toBe("import Browser.Dom as Dom")
    })
  })
})

describe("transformDrafts", () => {
  describe("-- js input", () => {
    test("transforms drafts", () => {
      const token: JsToken[] = [
        {
          name: {
            default: undefined,
            named: ["GuidanceBlock"],
          },
          packageName: "@kaizen/component-library/draft",
          isDefaultExport: false,
          meta: [],
        },
      ]
      const expectedToken = [
        {
          name: {
            default: undefined,
            named: ["GuidanceBlock"],
          },
          packageName: "@kaizen/draft-guidance-block",
          isDefaultExport: false,
          meta: [],
        },
      ]

      expect(transformDrafts("js", token)).toStrictEqual(expectedToken)
    })

    test("ignores non-draft imports", () => {
      const tokens: JsToken[] = [
        {
          name: {
            default: "React",
            named: undefined,
          },
          packageName: "react",
          isDefaultExport: false,
          meta: [],
        },
      ]
      expect(transformDrafts("js", tokens)).toStrictEqual(tokens)
    })

    test("transforms multiple draft imports", () => {
      const tokens: JsToken[] = [
        {
          name: {
            named: ["InformationModal", "LoadingPlaceholder"],
          },
          packageName: "@kaizen/component-library/draft",
          isDefaultExport: false,
          meta: [],
        },
      ]
      expect(transformDrafts("js", tokens)).toStrictEqual([
        {
          name: {
            named: ["InformationModal"],
            default: undefined,
          },
          packageName: "@kaizen/draft-information-modal",
          isDefaultExport: false,
          meta: [],
        },
        {
          name: {
            named: ["LoadingPlaceholder"],
            default: undefined,
          },
          packageName: "@kaizen/draft-loading-placeholder",
          isDefaultExport: false,
          meta: [],
        },
      ])
    })
  })

  describe("--elm input", () => {
    test("converts kaizen draft module to the new scope", () => {
      const input: ElmToken[] = [{ name: "import Kaizen.Well.Well as Well" }]
      expect(transformDrafts("elm", input)).toEqual([
        {
          name: "import KaizenDraft.Well.Well as Well",
        },
      ])
    })

    test("does not convert non-draft modules to the new scope", () => {
      const input: ElmToken[] = [
        { name: "import Kaizen.Select.Select as KaizenSelect" },
      ]
      expect(transformDrafts("elm", input)).toEqual([
        {
          name: "import Kaizen.Select.Select as KaizenSelect",
        },
      ])
    })

    test("converts multiple modules", () => {
      const input = [
        {
          name: "import Kaizen.Select.Select as KaizenSelect",
        },
        {
          name: "import KaizenDraft.Well.Well as Well",
        },
      ]
      expect(transformDrafts("elm", input)).toEqual(input)
    })
  })
})

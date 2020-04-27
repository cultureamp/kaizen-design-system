import * as _ from "lodash"

export interface JsToken {
  packageName: string
  isDefaultExport: boolean
  name: {
    named?: string[]
    default?: string
  }
  meta: any
}

export interface ElmToken {
  name: string
  meta?: any
}

/**
 * Transform a string of named and default exports into an object
 * @param {obj} data
 */
const extractImports = (data: string): JsToken["name"] => {
  const namedExports = /(?:,\s)?(\{.*?\})(?:,\s)?/gs

  let exportsList: string[] = []
  let match
  while ((match = namedExports.exec(data)) !== null) {
    exportsList = match[1]
      .split(",")
      .map((curr) => curr.replace("}", "").replace("{", ""))
      .map((curr) => curr.trim())
      .filter((curr) => !_.isEmpty(curr))
  }

  const defaultExport = data.replace(namedExports, "").trim()
  let defaultExportObj = ""
  if (!_.isEmpty(defaultExport)) {
    defaultExportObj = defaultExport
  }

  return {
    default: defaultExportObj,
    named: exportsList,
  }
}

/**
 * Converts string to a list of imports objects
 */
const jsTokenise = (
  data: string
): {
  tokens: JsToken[]
  endIndex: number
  startIndex: number
} => {
  // @TODO - now that our bastardised mix of flow, ts, and js is removed,
  // in future versions we can use AST to tokenise. This is fine for now.
  const allImportsRegex = /import (?:type)?({?.*?}?) from '(.*?)';/gs
  // const matches = data.matchAll(allImportsRegex)

  const importTokens: JsToken[] = []
  let match
  while ((match = allImportsRegex.exec(data)) !== null) {
    const imports = extractImports(match[1])

    importTokens.push({
      name: imports,
      packageName: match[2],
      isDefaultExport: match[1] === undefined,
      meta: match,
    })
  }

  console.log(importTokens)

  let startIndex = 0
  let endIndex = 0
  if (!_.isEmpty(importTokens)) {
    endIndex =
      importTokens[importTokens.length - 1].meta.index +
      importTokens[importTokens.length - 1].meta[0].length
    startIndex = importTokens[0].meta.index
  }

  return {
    tokens: importTokens,
    endIndex,
    startIndex,
  }
}

/**
 * Converts tokens back to a string
 */
const jsDetokenise = (data) => {
  return data
    .map(({ name, packageName }) => {
      let returnString = "import"
      if (!_.isEmpty(name.default)) {
        returnString += ` ${name.default}`

        if (!_.isEmpty(name.named)) {
          // if there's both named and default, don't forget the comma
          returnString += `,`
        }
      }
      if (!_.isEmpty(name.named)) {
        returnString += ` { ${name.named.join(", ")} }`
      }
      returnString += ` from \'${packageName}\';`

      return returnString
    })
    .join("\n")
}

const jsTransformDrafts = (tokens: JsToken[]): JsToken[] => {
  return tokens.reduce((acc: JsToken[], token: JsToken) => {
    if (token.packageName !== "@kaizen/component-library/draft") {
      acc.push(token)
      return acc
    }
    const {
      name: { named: namedImports },
    } = token
    const newToken = { ...token }

    if (namedImports) {
      // single named import
      if (namedImports.length === 1) {
        newToken.packageName = `@kaizen/draft-${_.kebabCase(namedImports[0])}`
        acc.push(newToken)
      } else {
        // multiple named imports
        namedImports.forEach((curr) => {
          acc.push({
            packageName: `@kaizen/draft-${_.kebabCase(curr)}`,
            name: {
              named: [curr],
              default: newToken.name.default || undefined,
            },
            isDefaultExport: newToken.isDefaultExport,
            meta: newToken.meta,
          })
        })
      }
    }

    return acc
  }, [])
}

/**
 * Converts string to a list of imports objects
 */
const elmTokenise = (data: string) => {
  const allImportsRegex = /import.*/g

  let match
  const importTokens: ElmToken[] = []
  while ((match = allImportsRegex.exec(data)) !== null) {
    importTokens.push({
      name: match[0],
      meta: match,
    })
  }

  let startIndex = 0
  let endIndex = 0
  if (importTokens.length) {
    startIndex = importTokens[0].meta.index
    endIndex =
      importTokens[importTokens.length - 1].meta.index +
      importTokens[importTokens.length - 1].meta[0].length
  }

  return {
    tokens: importTokens,
    endIndex,
    startIndex,
  }
}

/**
 * Oppostite of the above
 */
const elmDetokenise = (data: ElmToken[]) => {
  return data
    .map(({ name }) => {
      return name
    })
    .join("\n")
}

const elmTransformDrafts = (data: ElmToken[]) => {
  // @TODO - list still in progress
  const draftPackages = ["Well"]

  return data.map(({ name, meta }) => {
    if (!name) return name

    const matchedDraft = draftPackages.find((curr) => name.includes(curr))
    let newVal = name
    if (matchedDraft) {
      newVal = newVal.replace(
        `Kaizen.${matchedDraft}`,
        `KaizenDraft.${matchedDraft}`
      )
    }

    return { name: newVal }
  })
}

export const tokenise = (target: string, data: Buffer) => {
  if (target === "elm") {
    return elmTokenise(data.toString("utf8"))
  } else if (target === "js") {
    return jsTokenise(data.toString("utf8"))
  }

  return {
    tokens: null,
    startIndex: 0,
    endIndex: 0,
  }
}

export const detokenise = (target: string, data) => {
  if (target === "elm") {
    return elmDetokenise(data)
  } else if (target === "js") {
    return jsDetokenise(data)
  }
  return ""
}

export const transformDrafts = (target: string, data) => {
  if (target === "elm") {
    return elmTransformDrafts(data)
  } else if (target === "js") {
    return jsTransformDrafts(data)
  }
}

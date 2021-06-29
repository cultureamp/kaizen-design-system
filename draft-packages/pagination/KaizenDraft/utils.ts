import * as _ from "lodash"
import { compile, Key, parse } from "path-to-regexp"
import * as qs from "query-string"

type QueryStringValue =
  | string
  | number
  | null
  | undefined
  | string[]
  | number[]
  | Date
  | Date[]
  | boolean
type QueryStringParams = { [key: string]: QueryStringValue }

export const stringifyQueryParams = (params: QueryStringParams) => {
  if (!params) return ""

  // Remove any null or undefined param values
  let val = _.pick(params, val => val != null)
  // Sort the values, as so we get predictable results.
  // Remember, the ordering of object key/values is never guaranteed.
  val = _.zipObject(_.pairs(val).sort())
  return qs.stringify(val)
}

const getParamNames = (pattern: string): string[] =>
  parse(pattern)
    .filter(m => typeof m !== "string")
    .map(m => `${(m as Key).name}`)

/**
 * Builds a url with express-style pattern matching. eg. /user/:name
 * @param url - the url
 * @param params - The params to be added. Any param that cannot be added
 * will be added as a query string value instead. Array values are supported.
 */
export const buildUrl = (url: string, params: QueryStringParams = {}) => {
  const formattedUrl = compile(url)(params)

  if (!params || !Object.keys(params).length) {
    return formattedUrl
  }

  const paramsInUrl = getParamNames(url)

  let queryStringParams = _.omit(params, (val: QueryStringValue, key: string) =>
    paramsInUrl.includes(key)
  )
  queryStringParams = {
    ...qs.parseUrl(formattedUrl).query,
    ...queryStringParams,
  }

  const queryString = stringifyQueryParams(queryStringParams)

  return !queryString.length
    ? formattedUrl
    : `${qs.parseUrl(formattedUrl).url}?${queryString}`
}

export const createRange = (start: number, end: number): number[] => {
  const range: number[] = []
  for (let i = start; i <= end; i++) {
    range.push(i)
  }
  return range
}

export const getPaginationUrl = (currentLocation: string, page: number) =>
  buildUrl(currentLocation, { page })

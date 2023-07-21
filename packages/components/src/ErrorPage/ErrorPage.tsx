import React from "react"
import {
  Error400,
  Error401,
  Error403,
  Error404,
  Error422,
  Error500,
  Error502,
  Error503,
  Error504,
} from "./subcomponents"
import { ErrorProps } from "./subcomponents/types"

type SubComponent = (props: ErrorProps) => JSX.Element

const ERROR_COMPONENT_MAP: Record<ErrorPageProps["code"], SubComponent> = {
  400: Error400,
  401: Error401,
  403: Error403,
  404: Error404,
  422: Error422,
  500: Error500,
  502: Error502,
  503: Error503,
  504: Error504,
}

export type ErrorPageProps = {
  code: 400 | 401 | 403 | 404 | 422 | 500 | 502 | 503 | 504
} & ErrorProps

export const ErrorPage = ({ code, ...rest }: ErrorPageProps): JSX.Element => {
  const Component = ERROR_COMPONENT_MAP[code]
  return <Component {...rest} />
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react"
import { createMemoryHistory } from "history"
import { Route, Router } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"

export const RouterWrapper = (Story, props) => {
  const history = createMemoryHistory()
  for (const item of props.parameters.history ?? []) {
    history.push(item)
  }
  return (
    <Router history={history}>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Story />
      </QueryParamProvider>
    </Router>
  )
}

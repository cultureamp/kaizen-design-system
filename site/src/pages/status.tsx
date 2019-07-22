import * as React from "react"
import Head from "../components/Head"
import MainNav from "../components/MainNav"

export default props => (
  <>
    <Head pageTitle="Status" />
    <MainNav currentPath={props.location.pathname} />
    Status page
  </>
)

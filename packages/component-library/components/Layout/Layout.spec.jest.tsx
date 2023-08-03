import React from "react"
import { render } from "@testing-library/react"
import Layout from "./Layout"

describe("Layout components", () => {
  it("renders the NavigationBar component correctly", () => {
    const { container } = render(<Layout.NavigationBar />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the Sidebar component correctly", () => {
    const { container } = render(<Layout.Sidebar />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the Header component correctly", () => {
    const { container } = render(<Layout.Header />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the Footer component correctly", () => {
    const { container } = render(<Layout.Footer />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the Toasts component correctly", () => {
    const { container } = render(<Layout.Toasts />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the Announcers component correctly", () => {
    const { container } = render(<Layout.Announcers />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the Layout component correctly", () => {
    const { container } = render(<Layout />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the Layout component's child components in the correct positions", () => {
    const { container } = render(
      <Layout>
        <Layout.NavigationBar>NavigationBar</Layout.NavigationBar>
        <Layout.Sidebar>Sidebar</Layout.Sidebar>
        <Layout.Header>Header</Layout.Header>
        <Layout.Footer>Footer</Layout.Footer>
        <Layout.Toasts>Toasts</Layout.Toasts>
        <Layout.Announcers>Announcers</Layout.Announcers>
        <div>My content</div>
      </Layout>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

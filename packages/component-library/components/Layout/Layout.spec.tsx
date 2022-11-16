import * as React from "react"
import { cleanup, render } from "@testing-library/react"
import Layout from "./Layout"

afterEach(cleanup)

test("The layout components have the correct displayNames", () => {
  expect(Layout.displayName).toBe("Layout")
  expect(Layout.NavigationBar.displayName).toBe("NavigationBar")
  expect(Layout.Sidebar.displayName).toBe("Sidebar")
  expect(Layout.Header.displayName).toBe("Header")
  expect(Layout.Footer.displayName).toBe("Footer")
  expect(Layout.Toasts.displayName).toBe("Toasts")
  expect(Layout.Announcers.displayName).toBe("Announcers")
})

test("The NavigationBar component renders correctly", () => {
  const { container } = render(<Layout.NavigationBar />)

  expect(container.firstChild).toMatchSnapshot()
})

test("The Sidebar component renders correctly", () => {
  const { container } = render(<Layout.Sidebar />)

  expect(container.firstChild).toMatchSnapshot()
})

test("The Header component renders correctly", () => {
  const { container } = render(<Layout.Header />)

  expect(container.firstChild).toMatchSnapshot()
})

test("The Footer component renders correctly", () => {
  const { container } = render(<Layout.Footer />)

  expect(container.firstChild).toMatchSnapshot()
})

test("The Toasts component renders correctly", () => {
  const { container } = render(<Layout.Toasts />)

  expect(container.firstChild).toMatchSnapshot()
})

test("The Announcers component renders correctly", () => {
  const { container } = render(<Layout.Announcers />)

  expect(container.firstChild).toMatchSnapshot()
})

test("The Layout component renders correctly", () => {
  const { container } = render(<Layout />)

  expect(container.firstChild).toMatchSnapshot()
})

test("The Layout component renders child components in the correct positions", () => {
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

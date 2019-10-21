export const stripTrailingSlash = (str: string) => str.replace(/\/$/, "")

export const sortSidebarTabs = tabs => {
  const newTabs = [...tabs].sort((a, b) =>
    a.node.frontmatter.navTitle > b.node.frontmatter.navTitle ? 1 : -1
  )
  return newTabs
}

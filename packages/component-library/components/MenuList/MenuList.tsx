import * as React from "react"
const styles = require("./Menu.module.scss")

const MenuList = (props: { children: React.ReactNode }) => (
  <div className={styles.menuList}>{props.children}</div>
)

MenuList.displayName = "MenuList"

export default MenuList

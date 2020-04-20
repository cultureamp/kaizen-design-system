import React from "react"

const styles = require("./MenuItem.module.scss")

export type MenuItemProps = {
  label: string
  url: string
  method?: "get" | "post" | "put" | "delete"
}

const MenuItem = ({ label, url, method }: MenuItemProps) => {
  const renderForm = () => (
    // HTML forms only accept POST. We use a hidden `_method` input as a convention for emulating other HTTP verbs.
    // This behaviour is the same as what is implemented by UJS and supported by Rails:
    // https://github.com/rails/jquery-ujs
    <form method="post" action={url}>
      <input name="_method" value={method} type="hidden"/>
      <button type="submit" className={styles.itemBtn}>
        {label}
      </button>
    </form>
  )

  const renderLink = () => (
    <a href={url} className={styles.item} tabIndex={0}>
      {label}
    </a>
  )

  return (
    <li className={styles.container}>
      {method && method !== "get" ? renderForm() : renderLink()}
    </li>
  )
}

export default MenuItem

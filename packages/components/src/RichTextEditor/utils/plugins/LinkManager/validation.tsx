import React from "react"

export type ValidationResponse = {
  status: "success" | "error" | "default"
  message?: React.ReactNode
}

export const validateLink = (href: string): ValidationResponse => {
  const isValidLink = /^https?:\/\//.test(href)

  if (!isValidLink) {
    return {
      status: "error",
      message: (
        <>
          Empty or invalid link. Links must start with http or https, e.g:
          <ul>
            <li>https://google.com</li>
            <li>http://www.google.com</li>
          </ul>
        </>
      ),
    }
  }

  return {
    status: "success",
  }
}

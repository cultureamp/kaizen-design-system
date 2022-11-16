export type ValidationResponse = {
  status: "success" | "error" | "default"
  message?: React.ReactNode
}

export function validateLink(href: string): ValidationResponse {
  const isValidLink = /^https?:\/\//.test(href)

  if (!isValidLink) {
    return {
      status: "error",
      message: "Please enter a valid URL",
    }
  }

  return {
    status: "success",
  }
}

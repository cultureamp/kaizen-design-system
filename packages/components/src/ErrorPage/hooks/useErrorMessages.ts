import { useIntl } from "@cultureamp/i18n-react-intl"
export const statusCodes = [
  "400",
  "401",
  "403",
  "404",
  "422",
  "500",
  "502",
  "503",
  "504",
] as const

export type ErrorStatuses = (typeof statusCodes)[number]
type TranslationMap = Record<ErrorStatuses, { title: string; message: string }>

export const useErrorMessages = (
  code: ErrorStatuses
): TranslationMap[ErrorStatuses] => {
  const { formatMessage } = useIntl()

  const translationsMap: TranslationMap = {
    400: {
      title: formatMessage({
        id: "kzErrorPage.400.title",
        defaultMessage: "Your request has slipped into the void",
        description: "Heading for page",
      }),
      message: formatMessage({
        id: "kzErrorPage.400.message",
        defaultMessage:
          "Sorry but your request couldn’t be completed. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      }),
    },
    401: {
      title: formatMessage({
        id: "kzErrorPage.401.title",
        defaultMessage: "You can't view this page",
        description: "Main title for page",
      }),
      message: formatMessage({
        id: "kzErrorPage.401.message",
        defaultMessage:
          "Sorry but we can't verify if you're able to view this page. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      }),
    },
    403: {
      title: formatMessage({
        id: "kzErrorPage.403.title",
        defaultMessage: "You can't view this page",
        description: "Main title for page",
      }),
      message: formatMessage({
        id: "kzErrorPage.403.message",
        defaultMessage:
          "Sorry but it looks like you don’t have permission to view this page. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      }),
    },
    404: {
      title: formatMessage({
        id: "kzErrorPage.404.title",
        defaultMessage: "Missing pages are one of life's mysteries",
        description: "Main title of page",
      }),
      message: formatMessage({
        id: "kzErrorPage.404.message",
        defaultMessage:
          "Sorry but we can't fing the page you're looking for. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      }),
    },
    422: {
      title: formatMessage({
        id: "kzErrorPage.422.title",
        defaultMessage: "Change never comes easy",
        description: "Main title of page",
      }),
      message: formatMessage({
        id: "kzErrorPage.422.message",
        defaultMessage:
          "Sorry but your change couldn't be made. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      }),
    },
    500: {
      title: formatMessage({
        id: "kzErrorPage.500.title",
        defaultMessage: "Something's gone wrong on our side",
        description: "Main title of page",
      }),
      message: formatMessage({
        id: "kzErrorPage.500",
        defaultMessage:
          "Sorry there's an issue with our system and this page can't be displayed. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      }),
    },
    502: {
      title: formatMessage({
        id: "kzErrorPage.502.title",
        defaultMessage: "You can't view this page",
        description: "Main title of page",
      }),
      message: formatMessage({
        id: "kzErrorPage.502.message",
        defaultMessage:
          "Sorry about this. The best thing to do is go back and try again.",
        description: "Call to action instructions for the user",
      }),
    },
    503: {
      title: formatMessage({
        id: "kzErrorPage.503.title",
        defaultMessage: "You can't view this page",
        description: "Main title of page",
      }),
      message: formatMessage({
        id: "kzErrorPage.503.message",
        defaultMessage:
          "Sorry about this. The best thing to do is go back and try again.",
        description: "Call to action instructions for the user",
      }),
    },
    504: {
      title: formatMessage({
        id: "kzErrorPage.504.title",
        defaultMessage: "You can't view this page",
        description: "Main title of page",
      }),
      message: formatMessage({
        id: "kzErrorPage.504.message",
        defaultMessage:
          "Sorry about this. The best thing to do is go back and try again.",
        description: "Call to action instructions for the user",
      }),
    },
  }

  return (
    translationsMap[code] || {
      title: "",
      message: "",
    }
  )
}

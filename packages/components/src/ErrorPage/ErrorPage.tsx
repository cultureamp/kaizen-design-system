import React, { HTMLAttributes } from "react"
import { FormattedMessage, useIntl } from "@cultureamp/i18n-react-intl"
import classNames from "classnames"
import { BrandMomentError } from "@kaizen/draft-illustration"
import { Paragraph } from "@kaizen/typography"
import { BrandMoment } from "~components/BrandMoment"
import { ArrowRightIcon } from "~components/SVG/icons/ArrowRightIcon"
import { EmailIcon } from "~components/SVG/icons/EmailIcon"
import { OverrideClassName } from "~types/OverrideClassName"
import { ErrorStatuses, useErrorMessages } from "./hooks"
import styles from "./ErrorPage.module.scss"

const getMailToHref = (code: ErrorStatuses): string => {
  const supportEmail = "support@cultureamp.com"
  const subject = "Houston we have a problem"
  const body = `Hi there,\n\nI received a ${code} error page while I was trying to...`
  return encodeURI(`mailto:${supportEmail}?subject=${subject}&amp;body=${body}`)
}

const HOME_HREF = "/app/home"

export type ErrorPageProps = {
  code: ErrorStatuses
  title?: string
  message?: React.ReactNode | string
  callToAction?: {
    onContactSupport: () => void
    homeHref?: string
  }
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export function ErrorPage({
  code,
  title,
  message,
  callToAction,
  classNameOverride,
}: ErrorPageProps): JSX.Element {
  const { formatMessage } = useIntl()
  const content = useErrorMessages(code)

  const actions = {
    primary: { href: callToAction?.homeHref || HOME_HREF },
    secondary: callToAction?.onContactSupport
      ? { onClick: callToAction.onContactSupport }
      : { href: getMailToHref(code) },
  }

  return (
    <div className={classNames(classNameOverride)}>
      <BrandMoment
        header={<></>}
        body={
          <>
            <div className={styles.paragraphPadding}>
              <Paragraph variant="intro-lede">
                {message || content.message}
              </Paragraph>
            </div>
            <Paragraph color="dark-reduced-opacity" variant="small">
              <FormattedMessage
                id="kzErrorPage.errorCode"
                defaultMessage="Error code {code}"
                values={{ code }}
              />
            </Paragraph>
          </>
        }
        illustration={<BrandMomentError isAnimated loop />}
        mood="negative"
        primaryAction={{
          ...actions.primary,
          icon: <ArrowRightIcon role="presentation" />,
          iconPosition: "end",
          label: formatMessage({
            id: "kzErrorPage.goToHome",
            defaultMessage: "Go to Home",
            description: "Home button label",
          }),
        }}
        secondaryAction={{
          ...actions.secondary,
          icon: <EmailIcon role="presentation" />,
          label: formatMessage({
            id: "kzErrorPage",
            defaultMessage: "Contact support",
            description: "Label for contact button",
          }),
        }}
        text={{
          title: title || content.title,
        }}
      />
    </div>
  )
}

ErrorPage.displayName = "ErrorPage"

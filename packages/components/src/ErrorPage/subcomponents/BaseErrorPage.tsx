import React, { HTMLAttributes } from "react"
import { FormattedMessage, useIntl } from "@cultureamp/i18n-react-intl"
import classNames from "classnames"
import { BrandMoment } from "@kaizen/brand-moment"
import arrowRightIcon from "@kaizen/component-library/icons/arrow-right.icon.svg"
import email from "@kaizen/component-library/icons/email.icon.svg"
import { BrandMomentError } from "@kaizen/draft-illustration"
import { Paragraph } from "@kaizen/typography"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./BaseErrorPage.module.scss"

const getMailToHref = (code: number): string => {
  const supportEmail = "support@cultureamp.com"
  const subject = "Houston we have a problem"
  const body = `Hi there,\n\nI received a ${code} error page while I was trying to...`
  return encodeURI(`mailto:${supportEmail}?subject=${subject}&amp;body=${body}`)
}

const HOME_HREF = "/app/home"

export type BaseErrorPageProps = {
  code: number
  title: string
  message: React.ReactNode | string
  callToAction?: {
    onContactSupport: () => void
    homeHref?: string
  }
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const BaseErrorPage = ({
  code,
  title,
  message,
  callToAction,
  classNameOverride,
}: BaseErrorPageProps): JSX.Element => {
  const { formatMessage } = useIntl()
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
              <Paragraph variant="intro-lede">{message}</Paragraph>
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
          icon: arrowRightIcon,
          iconPosition: "end",
          label: formatMessage({
            id: "kzErrorPage.goToHome",
            defaultMessage: "Go to Home",
            description: "Home button label",
          }),
        }}
        secondaryAction={{
          ...actions.secondary,
          icon: email,
          label: formatMessage({
            id: "kzErrorPage",
            defaultMessage: "Contact support",
            description: "Label for contact button",
          }),
        }}
        text={{
          title,
        }}
      />
    </div>
  )
}

BaseErrorPage.displayName = "ErrorPage"

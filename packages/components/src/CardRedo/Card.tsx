import React, { HTMLAttributes } from "react"

import classnames from "classnames"
import { tokens } from "@kaizen/design-tokens/js"
import { OverrideClassName } from "~types/OverrideClassName"

export type CardVariants =
  | "default"
  | "informative"
  | "positive"
  | "cautionary"
  | "destructive"
  | "assertive"
  | "highlight"

export type CardProps = OverrideClassName<HTMLAttributes<HTMLElement>> & {
  children?: React.ReactNode
  /**
   * HTML elements that are allowed on Card.
   */
  tag?: "div" | "article" | "header" | "main" | "section" | "li"
  /**
   * determines the card background colour on the card. It should match to the type of content being conveyed.
   */
  variant?: CardVariants
  /**
   * Adds a larger box shadow to to the card container.
   */
  isElevated?: boolean
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094938/Card Guidance} |
 * {@link https://cultureamp.design/?path=/story/components-card--docs Storybook}
 */

// This would be a good reason to have semantic tokens
const variantColors = {
  default: tokens.color.white,
  informative: tokens.color.blue[100],
  positive: tokens.color.green[100],
  cautionary: tokens.color.yellow[100],
  destructive: tokens.color.red[100],
  assertive: tokens.color.orange[100],
  highlight: tokens.color.purple[100],
}

export const Card = ({
  children,
  tag = "div",
  variant = "default",
  isElevated = false,
  classNameOverride,
  ...props
}: CardProps): JSX.Element => {
  const Tag = tag

  return (
    <Tag className={classnames(classNameOverride)} {...props}>
      {/*
       * This is called inline scope and will apply the scope it to the parent of the style tag
       * The only (major) issue here is that ClassNameOverride won't supersede the style tag */}
      <style>
        {`
        @scope {
          :scope {
            color: ${tokens.color.purple[800]};
            background-color: ${variantColors[variant]};
            padding: ${tokens.spacing[12]};
            border-radius: ${tokens.border.solid.borderRadius};
            box-shadow: ${isElevated ? tokens.shadow.large.boxShadow : tokens.shadow.small.boxShadow};

          }

          {/* unlike regular inline styles, :scope has access to pseudo selectors */}
          :scope:hover {
            background: ${tokens.color.gray[300]}
          }

        }
      `}
      </style>
      {children}
    </Tag>
  )
}

Card.displayName = "Card"

export const CardWithUnstyledChildren = ({
  children,
  tag = "div",
  variant = "default",
  isElevated = false,
  classNameOverride,
  ...props
}: CardProps): JSX.Element => {
  const Tag = tag

  return (
    <Tag className={classnames("card", classNameOverride)} {...props}>
      {/*
       * This is called inline scope and will apply the scope it to the parent of the style tag
       * The only (major) issue here is that ClassNameOverride won't supersede the style tag */}
      <style>{`
      @scope (.card) to (.unstyledChildren) {
        h2 {
          color: ${tokens.color.red[600]}
        }
        :scope {
          color: ${tokens.color.purple[800]};
          background-color: ${variantColors[variant]};
          padding: ${tokens.spacing[12]};
          border-radius: ${tokens.border.solid.borderRadius};
          box-shadow: ${isElevated ? tokens.shadow.large.boxShadow : tokens.shadow.small.boxShadow};
        }
      }
    `}</style>
      <h2>This h2 should be red</h2>
      <div className="unstyledChildren">{children}</div>
    </Tag>
  )
}

CardWithUnstyledChildren.displayName = "CardWithUnstyledChildren"

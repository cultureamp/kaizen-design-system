import React from 'react'
import { type Meta } from '@storybook/react'
import { within } from '@storybook/test'
import { Icon } from '~components/__next__/Icon'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Link, type LinkProps } from '../Link'

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const variants = ['primary', 'secondary'] satisfies LinkProps['variant'][]
const sizes = ['extra-small', 'small', 'body', 'intro-lede'] satisfies LinkProps['size'][]
const href = 'https://www.google.com' satisfies LinkProps['href']

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet
        title="Link"
        headers={[
          'isUnderlined',
          'isUnderlined + Icon Start',
          'isUnderlined + Icon End',
          'Icon start',
          'Icon end',
          'isDisabled',
        ]}
        isReversed={isReversed}
      >
        {variants.map((variant) =>
          sizes.map((size) => (
            <StickerSheet.Row key={size + variant} header={`${variant} (${size})`}>
              <Link
                variant={isReversed ? 'white' : variant}
                size={size}
                href={href}
                isUnderlined={true}
                isInline={false}
              >
                Link
              </Link>
              <Link
                variant={isReversed ? 'white' : variant}
                size={size}
                href={href}
                isUnderlined={true}
                isInline={false}
                icon={<Icon name="add" isPresentational />}
                iconPosition="start"
              >
                Link
              </Link>
              <Link
                variant={isReversed ? 'white' : variant}
                size={size}
                href={href}
                isUnderlined={true}
                isInline={false}
                icon={<Icon name="add" isPresentational />}
                iconPosition="end"
              >
                Link
              </Link>
              <Link
                variant={isReversed ? 'white' : variant}
                size={size}
                href={href}
                isUnderlined={false}
                isInline={false}
                icon={<Icon name="add" isPresentational />}
                iconPosition="start"
              >
                Link
              </Link>
              <Link
                variant={isReversed ? 'white' : variant}
                size={size}
                href={href}
                isUnderlined={false}
                isInline={false}
                icon={<Icon name="add" isPresentational />}
                iconPosition="end"
              >
                Link
              </Link>
              <Link
                variant={isReversed ? 'white' : variant}
                size={size}
                href={href}
                isUnderlined={true}
                isInline={false}
                isDisabled={true}
              >
                Link
              </Link>
            </StickerSheet.Row>
          )),
        )}
      </StickerSheet>
      <StickerSheet
        title="Pseudo states"
        headers={['isHovered', 'isFocusVisible', 'isPressed']}
        isReversed={isReversed}
      >
        {variants.map((variant) => (
          <StickerSheet.Row key={variant} isReversed={isReversed} header={variant}>
            <Link
              variant={isReversed ? 'white' : variant}
              size="small"
              href={href}
              isUnderlined={true}
              isInline={false}
              icon={<Icon name="add" isPresentational />}
              data-testid="testid__link-hover"
            >
              Label
            </Link>
            <Link
              variant={isReversed ? 'white' : variant}
              size="small"
              href={href}
              isUnderlined={true}
              isInline={false}
              icon={<Icon name="add" isPresentational />}
              data-testid="testid__link-focus"
            >
              Label
            </Link>
            <Link
              variant={isReversed ? 'white' : variant}
              size="small"
              href={href}
              isUnderlined={true}
              isInline={false}
              icon={<Icon name="add" isPresentational />}
              data-testid="testid__link-pressed"
            >
              Label
            </Link>
          </StickerSheet.Row>
        ))}
      </StickerSheet>
    </>
  ),
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const focusLinks = canvas.getAllByTestId('testid__link-focus')
    const hoverLinks = canvas.getAllByTestId('testid__link-hover')
    const pressedLinks = canvas.getAllByTestId('testid__link-pressed')

    focusLinks.forEach((Link) => {
      Link.setAttribute('data-focus-visible', 'true')
    })
    hoverLinks.forEach((Link) => {
      Link.setAttribute('data-hovered', 'true')
    })
    pressedLinks.forEach((Link) => {
      Link.setAttribute('data-pressed', 'true')
    })
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    textDirection: 'rtl',
  },
}

export const StickerSheetWhite: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (White)',
  parameters: {
    reverseColors: true,
  },
  args: {
    isReversed: true,
  },
}

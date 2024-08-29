import React, { ReactNode, useEffect, useState } from "react"
import classnames from "classnames"
import { Button, Dialog, DialogTrigger, Popover } from "react-aria-components"
import { Heading } from "~components/Heading"
import { RadioField, RadioGroup } from "~components/Radio"
import { Slider } from "~components/Slider"
import { Key } from "~components/__future__"
import { Select } from "~components/__future__/Select"
import styles from "./AccessibilitySettings.module.css"

const headingVars = [
  "display-0",
  "heading-1",
  "heading-2",
  "heading-3",
  "heading-4",
  "heading-5",
  "heading-6",
]

const paragraphVars = [
  "paragraph-intro-lede",
  "paragraph-body",
  "paragraph-small",
  "paragraph-extra-small",
  "button-primary",
  "button-secondary",
]

const macOSFonts = [
  "American Typewriter",
  "Andale Mono",
  "Arial",
  "Arial Black",
  "Arial Narrow",
  "Arial Rounded MT Bold",
  "Arial Unicode MS",
  "Avenir",
  "Avenir Next",
  "Avenir Next Condensed",
  "Baskerville",
  "Big Caslon",
  "Bodoni 72",
  "Bodoni 72 Oldstyle",
  "Bodoni 72 Smallcaps",
  "Bradley Hand",
  "Brush Script MT",
  "Chalkboard",
  "Chalkboard SE",
  "Chalkduster",
  "Charter",
  "Cochin",
  "Comic Sans MS",
  "Copperplate",
  "Courier",
  "Courier New",
  "Didot",
  "DIN Alternate",
  "DIN Condensed",
  "Futura",
  "Geneva",
  "Georgia",
  "Gill Sans",
  "Helvetica",
  "Helvetica Neue",
  "Herculanum",
  "Hoefler Text",
  "Impact",
  "Lucida Grande",
  "Luminari",
  "Marker Felt",
  "Menlo",
  "Microsoft Sans Serif",
  "Monaco",
  "Noteworthy",
  "Optima",
  "Palatino",
  "Papyrus",
  "Phosphate",
  "Rockwell",
  "Savoye LET",
  "SignPainter",
  "Skia",
  "Snell Roundhand",
  "Tahoma",
  "Times",
  "Times New Roman",
  "Trattatello",
  "Trebuchet MS",
  "Verdana",
  "Zapfino",
]

const fontOptions = macOSFonts.map(font => ({
  label: font,
  value: font,
}))

const allTypographyVars = [...headingVars, ...paragraphVars]

type Props = {
  children: ReactNode
}
export const AccessibilitySettingsProvider = ({
  children,
}: Props): JSX.Element => {
  useEffect(() => {
    // make a copy of all of the default values css vars so that we can always return back to them
  }, [])

  const handleFontFamilyChange = (option: Key, type: "body" | "headings") => {
    const root: HTMLElement | null = document.querySelector(":root")
    const varsToAdjust = type === "headings" ? headingVars : paragraphVars

    for (const varToAdjust of varsToAdjust) {
      const newValue =
        option === "default"
          ? getComputedStyle(root).getPropertyValue(
              `--typography-${varToAdjust}-default-font-family`
            )
          : option

      root?.style.setProperty(
        `--typography-${varToAdjust}-font-family`,
        newValue
      )
    }
  }

  const handleFontSizeChange = (option: Key, type: "body" | "headings") => {
    const root: HTMLElement | null = document.querySelector(":root")
    const varsToAdjust = type === "headings" ? headingVars : paragraphVars

    for (const typographyVar of varsToAdjust) {
      const defaultFontSize = getComputedStyle(root)
        .getPropertyValue(`--typography-${typographyVar}-default-font-size`)
        .replace("rem", "")
      const defaultLineHeight = getComputedStyle(root)
        .getPropertyValue(`--typography-${typographyVar}-default-font-size`)
        .replace("rem", "")
      const newFontSize =
        option === "default"
          ? defaultFontSize
          : defaultFontSize * (option / 100)
      const newLineHeight =
        option === "default"
          ? defaultLineHeight
          : defaultLineHeight * (option / 100)

      root?.style.setProperty(
        `--typography-${typographyVar}-font-size`,
        `${newFontSize}rem`
      )
      root?.style.setProperty(
        `--typography-${typographyVar}-line-height`,
        `${newLineHeight}rem`
      )
    }
  }

  const handleLetterSpacingChange = (
    option: Key,
    type: "body" | "headings"
  ) => {
    const root: HTMLElement | null = document.querySelector(":root")
    const varsToAdjust = type === "headings" ? headingVars : paragraphVars

    for (const varToAdjust of varsToAdjust) {
      root?.style.setProperty(
        `--typography-${varToAdjust}-letter-spacing`,
        option
      )
    }
  }

  return (
    <>
      {children}
      {/* <DialogTrigger> */}
      {/* <Button className="">
          <EngagementIcon role="img" aria-label="Accessibilty settings" />
        </Button> */}
      {/* <Popover isOpen> */}
      {/* <Dialog className={styles.dialog}> */}
      <div className={styles.dialog}>
        <Heading variant="heading-4" classNameOverride="mb-40">
          Typography
        </Heading>

        {["headings", "body"].map(type => (
          <div className="mb-40" key={type}>
            <Heading variant="heading-5" classNameOverride="mb-24">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Heading>

            <Select
              id="a11y-settings-heading-font"
              label="Font"
              classNameOverride="mb-12"
              isFullWidth
              defaultSelectedKey="default"
              onSelectionChange={option => handleFontFamilyChange(option, type)}
              items={[
                { label: "Culture Amp default", value: "default" },
                { label: "System default", value: "system-ui" },
                ...fontOptions,
              ]}
            />

            <Select
              id="a11y-settings-font-scaling"
              label="Size"
              classNameOverride="mb-12"
              isFullWidth
              onSelectionChange={option => handleFontSizeChange(option, type)}
              defaultSelectedKey="default"
              items={[
                { label: "67%", value: "67" },
                { label: "80%", value: "80" },
                { label: "90%", value: "90" },
                { label: "100%", value: "default" },
                { label: "110%", value: "110" },
                { label: "120%", value: "120" },
                { label: "133%", value: "133" },
                { label: "150%", value: "150" },
                { label: "170%", value: "170" },
                { label: "200%", value: "200" },
              ]}
            />

            <Select
              id="a11y-settings-letter-spacing"
              label="Letter spacing"
              classNameOverride="mb-12"
              isFullWidth
              onSelectionChange={option =>
                handleLetterSpacingChange(option, type)
              }
              defaultSelectedKey="normal"
              items={[
                { label: "Default", value: "normal" },
                { label: "0.05rem", value: "0.05rem" },
                { label: "0.1rem", value: "0.1rem" },
                { label: "0.15rem", value: "0.15rem" },
                { label: "0.2rem", value: "0.2rem" },
                { label: "0.3rem", value: "0.3rem" },
                { label: "0.4rem", value: "0.4rem" },
                { label: "0.5rem", value: "0.5rem" },
              ]}
            />
          </div>
        ))}

        {/*
              <Slider
                labelText="Font Scaling"
                labelPosition="block"
                onChange={handleFontSizeChange}
                minLabel="50%"
                maxLabel="200%"
                min={0}
                max={10}
              /> */}

        {/* <RadioGroup labelText="Theme">
              <RadioField
                labelText="Default"
                name="global-theme"
                value="default"
                onChange={event => {
                  setTheme(event.target.value)
                }}
                selectedStatus={theme === "default"}
              />
              <RadioField
                labelText="High contrast dark"
                name="global-theme"
                value="hc-dark"
                onChange={event => {
                  setTheme(event.target.value)
                }}
                selectedStatus={theme === "hc-dark"}
              />
            </RadioGroup> */}
      </div>
      {/* </DialogTrigger> */}
    </>
  )
}

AccessibilitySettingsProvider.displayName = "AccessibilitySettingsProvider"

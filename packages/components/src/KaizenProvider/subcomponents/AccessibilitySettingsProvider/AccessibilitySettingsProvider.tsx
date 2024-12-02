import React, { ReactNode, useEffect, useState } from "react"
import classnames from "classnames"
import {
  Button,
  Dialog,
  DialogTrigger,
  Popover,
  ModalOverlay,
} from "react-aria-components"
import { Heading } from "~components/Heading"
import { RadioField, RadioGroup } from "~components/Radio"
import { Slider } from "~components/Slider"
import {
  Key,
  Modal,
  ModalHeader,
  ModalBody,
  Select,
  ModalCloseButton,
} from "~components/__future__"
import styles from "./AccessibilitySettings.module.css"

const fontList = [
  "Arial",
  "Comic Sans MS",
  "Georgia",
  "Open-Dyslexic",
  "PT Mono",
  "Verdana",
]

const fontOptions = fontList.map(font => ({
  label: font,
  value: font,
}))

const allTypographyVars = [
  "display-0",
  "heading-1",
  "heading-2",
  "heading-3",
  "heading-4",
  "heading-5",
  "heading-6",
  "paragraph-intro-lede",
  "paragraph-body",
  "paragraph-small",
  "paragraph-extra-small",
  "button-primary",
  "button-secondary",
]

type Props = {
  children: ReactNode
}
export const AccessibilitySettingsProvider = ({
  children,
}: Props): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [settings, setSettings] = useState<{ [key: string]: string | null }>({
    fontFamily: null,
    fontScaling: null,
    letterSpacing: null,
  })

  useEffect(() => {
    setSettings({
      fontFamily: localStorage.getItem("fontFamily"),
      fontScaling: localStorage.getItem("fontScaling"),
      letterSpacing: localStorage.getItem("letterSpacing"),
    })
  }, [])

  const openOnKeyboardShortcut = event => {
    if (event.ctrlKey && event.key == ",") {
      setOpen(true)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", openOnKeyboardShortcut)

    return () => {
      window.removeEventListener("keydown", openOnKeyboardShortcut)
    }
  }, [])

  const handleFontFamilyChange = (option: Key) => {
    const root: HTMLElement | null = document.querySelector(":root")
    localStorage.setItem("fontFamily", option.toString())
    setSettings({ ...settings, fontFamily: option.toString() })

    for (const varToAdjust of allTypographyVars) {
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

  // const handleFontSizeChange = (option: Key) => {
  //   const root: HTMLElement | null = document.querySelector(":root")
  //   localStorage.setItem("fontScaling", option.toString())
  //   setSettings({ ...settings, fontScaling: option.toString() })

  //   for (const typographyVar of allTypographyVars) {
  //     const defaultFontSize = getComputedStyle(root)
  //       .getPropertyValue(`--typography-${typographyVar}-default-font-size`)
  //       .replace("rem", "")
  //     const defaultLineHeight = getComputedStyle(root)
  //       .getPropertyValue(`--typography-${typographyVar}-default-font-size`)
  //       .replace("rem", "")
  //     const newFontSize =
  //       option === "default"
  //         ? defaultFontSize
  //         : defaultFontSize * (option / 100)
  //     const newLineHeight =
  //       option === "default"
  //         ? defaultLineHeight
  //         : defaultLineHeight * (option / 100)

  //     root?.style.setProperty(
  //       `--typography-${typographyVar}-font-size`,
  //       `${newFontSize}rem`
  //     )
  //     root?.style.setProperty(
  //       `--typography-${typographyVar}-line-height`,
  //       `${newLineHeight}rem`
  //     )
  //   }
  // }

  const handleLetterSpacingChange = (option: Key) => {
    const root: HTMLElement | null = document.querySelector(":root")
    localStorage.setItem("letterSpacing", option.toString())
    setSettings({ ...settings, letterSpacing: option.toString() })

    for (const varToAdjust of allTypographyVars) {
      root?.style.setProperty(
        `--typography-${varToAdjust}-letter-spacing`,
        option
      )
    }
  }

  return (
    <>
      {children}

      <Modal isOpen={isOpen} onOpenChange={setOpen} isDismissable>
        <Dialog className="relative">
          <ModalHeader>
            <Heading variant="heading-3" tag="h2">
              Preferences
            </Heading>
            <ModalCloseButton onPress={() => setOpen(false)} />
          </ModalHeader>
          <ModalBody>
            <div style={{ maxWidth: "340px" }}>
              <Select
                id="a11y-settings-heading-font"
                label="Font"
                classNameOverride="mb-24"
                isFullWidth
                selectedKey={settings.fontFamily}
                onSelectionChange={option => handleFontFamilyChange(option)}
                items={[
                  { label: "Culture Amp defaults", value: "default" },
                  { label: "System default", value: "system-ui" },
                  ...fontOptions,
                ]}
              />

              {/* <Select
                id="a11y-settings-font-scaling"
                label="Font scaling"
                classNameOverride="mb-24"
                isFullWidth
                onSelectionChange={option => handleFontSizeChange(option)}
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
              /> */}

              <Select
                id="a11y-settings-letter-spacing"
                label="Letter spacing"
                classNameOverride="mb-24"
                isFullWidth
                onSelectionChange={option => handleLetterSpacingChange(option)}
                selectedKey={settings.letterSpacing}
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
          </ModalBody>
        </Dialog>
      </Modal>

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
    </>
  )
}

AccessibilitySettingsProvider.displayName = "AccessibilitySettingsProvider"

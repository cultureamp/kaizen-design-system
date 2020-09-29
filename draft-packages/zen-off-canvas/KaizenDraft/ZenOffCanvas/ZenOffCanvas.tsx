import React, { useState, useContext, useEffect } from "react"
import { EventBus, defineEvent } from "ts-bus"
import { ColorScheme } from "@kaizen/draft-zen-navigation-bar/KaizenDraft/ZenNavigationBar/types"
import classNames from "classnames"
import Header from "./components/Header"
import Menu from "./components/Menu"

import styles from "./OffCanvas.module.scss"
import { IconButton } from "@kaizen/draft-button"
import hamburgerIcon from "@kaizen/component-library/icons/hamburger.icon.svg"

type ZenOffCanvasProps = {
  links?: any
  heading: string
  headerComponent: React.ReactNode
  footerComponent?: React.ReactNode
  productSwitcher?: React.ReactNode
  menuId: string
  colorScheme?: ColorScheme
}

type ToggleMobileNavEvent = {
  type: "TOGGLE_MOBILE_NAV"
  payload: {
    id: string
    state: "open" | "close"
  }
}

type OffCanvasContext = {
  visibleMenus: string[]
  toggleVisibleMenu: (menuId: string) => void
  resetVisibleMenus: () => void
}

const bus = new EventBus()

const toggleZenOffCanvasEvent = defineEvent<ToggleMobileNavEvent>(
  "TOGGLE_MOBILE_NAV"
)

export const toggleZenOffCanvas = (params: ToggleMobileNavEvent["payload"]) => {
  bus.publish(toggleZenOffCanvasEvent(params))
}

export const OffCanvasContext = React.createContext<OffCanvasContext>({
  visibleMenus: [],
  toggleVisibleMenu: () => undefined,
  resetVisibleMenus: () => undefined,
})

export const ZenOffCanvasProvider: React.FunctionComponent = ({ children }) => {
  const [visibleMenus, setVisibleMenus] = useState<string[]>([])

  useEffect(() => {
    const unsubscribe = bus.subscribe(toggleZenOffCanvasEvent, event => {
      const { id, state } = event.payload
      if (state === "open") {
        setVisibleMenus([id])
      }
      if (state === "close") {
        resetVisibleMenus()
      }
    })
    return () => unsubscribe()
  }, [])

  const toggleVisibleMenu = (menuId: string) => {
    setVisibleMenus(vm =>
      vm.includes(menuId) ? vm.filter(m => m !== menuId) : [...vm, menuId]
    )
  }

  const resetVisibleMenus = () => setVisibleMenus([])

  return (
    <OffCanvasContext.Provider
      value={{
        visibleMenus,
        toggleVisibleMenu,
        resetVisibleMenus,
      }}
      children={children}
    />
  )
}

export const ZenOffCanvas: React.FunctionComponent<ZenOffCanvasProps> = ({
  menuId,
  headerComponent,
  heading,
  links,
  footerComponent,
  productSwitcher,
  colorScheme,
}) => {
  const { visibleMenus, resetVisibleMenus } = useContext(OffCanvasContext)
  return (
    <div
      className={classNames(styles.root, {
        [styles.active]: visibleMenus.includes(menuId),
      })}
    >
      <Header
        onClose={resetVisibleMenus}
        leftComponent={headerComponent}
        heading={heading}
        colorScheme={colorScheme}
      />
      <div
        className={classNames(styles.contentContainer, {
          [styles.hasFooter]: !!footerComponent,
        })}
      >
        {productSwitcher && productSwitcher}
        <nav className={styles.links}>
          {links &&
            Object.keys(links).map(section => (
              <Menu key={section} section={section} link={links[section]} />
            ))}
        </nav>
      </div>
      {footerComponent && (
        <div className={styles.footerComponent}>{footerComponent}</div>
      )}
    </div>
  )
}

export const ZenControlledOffCanvas: React.FunctionComponent<
  ZenOffCanvasProps & { withTrigger: boolean }
> = props => (
  <ZenOffCanvasProvider>
    {props.withTrigger && (
      <OffCanvasContext.Consumer>
        {({ toggleVisibleMenu }) => (
          <span className={styles.trigger}>
            <IconButton
              label="Open Navigation"
              icon={hamburgerIcon}
              onClick={() => toggleVisibleMenu(props.menuId)}
            />
          </span>
        )}
      </OffCanvasContext.Consumer>
    )}
    <ZenOffCanvas {...props} />
  </ZenOffCanvasProvider>
)

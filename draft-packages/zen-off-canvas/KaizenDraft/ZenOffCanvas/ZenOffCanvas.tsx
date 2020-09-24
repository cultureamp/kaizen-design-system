import * as React from "react"

import { ColorScheme } from "@kaizen/draft-zen-navigation-bar/KaizenDraft/ZenNavigationBar/types"
import classNames from "classnames"
import Header from "./components/Header"
import Menu from "./components/Menu"

import styles from "./OffCanvas.module.scss"

type Props = {
  links?: any
  heading: string
  headerComponent: React.ReactNode
  footerComponent?: React.ReactNode
  productSwitcher?: React.ReactNode
  menuId: string
  colorScheme?: ColorScheme
}

type State = {
  visibleMenus: string[]
}

type OffCanvasContextProps = {
  visibleMenus: string[]
  toggleVisibleMenu: (menuId: string) => void
  resetVisibleMenus: () => void
}

export const OffCanvasContext = React.createContext<OffCanvasContextProps>({
  visibleMenus: [],
  toggleVisibleMenu: menuId => undefined,
  resetVisibleMenus: () => undefined,
})

export class ZenOffCanvas extends React.Component<Props> {
  static defaultProps = {
    withTrigger: false,
    colorScheme: "cultureamp",
  }

  render() {
    const {
      menuId,
      headerComponent,
      heading,
      links,
      footerComponent,
      productSwitcher,
      colorScheme,
    } = this.props

    return (
      <OffCanvasContext.Consumer>
        {({ visibleMenus, resetVisibleMenus }) => (
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
                    <Menu
                      key={section}
                      section={section}
                      link={links[section]}
                    />
                  ))}
              </nav>
            </div>
            {footerComponent && (
              <div className={styles.footerComponent}>{footerComponent}</div>
            )}
          </div>
        )}
      </OffCanvasContext.Consumer>
    )
  }
}

const withContextProvider = (Component: React.ComponentType<any>) =>
  // eslint-disable-next-line max-classes-per-file
  class OffCanvasWithContextProvider extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)

      this.state = {
        visibleMenus: [],
      }
    }

    toggleMenu = (menuId: string) =>
      this.setState({
        visibleMenus: this.state.visibleMenus.includes(menuId)
          ? this.state.visibleMenus.filter(item => item !== menuId)
          : [...this.state.visibleMenus, menuId],
      })

    resetMenu = () => this.setState({ visibleMenus: [] })

    render() {
      return (
        <OffCanvasContext.Provider
          value={{
            ...this.state,
            toggleVisibleMenu: this.toggleMenu,
            resetVisibleMenus: this.resetMenu,
          }}
        >
          <Component {...this.props} />
        </OffCanvasContext.Provider>
      )
    }
  }

const withTrigger = (Component: React.ComponentType<any>) =>
  // eslint-disable-next-line max-classes-per-file
  class OffCanvasWithTrigger extends React.Component<Props> {
    render() {
      return (
        <OffCanvasContext.Consumer>
          {({ toggleVisibleMenu }) => (
            <React.Fragment>
              <button
                className={styles.trigger}
                onClick={() => toggleVisibleMenu(this.props.menuId)}
              >
                <span className={styles.hamburger} />
              </button>
              <Component {...this.props} />
            </React.Fragment>
          )}
        </OffCanvasContext.Consumer>
      )
    }
  }

export default withContextProvider(withTrigger(ZenOffCanvas))

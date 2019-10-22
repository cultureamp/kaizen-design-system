import classNames from "classnames"
import * as React from "react"
import Header from "./components/Header"
import Menu from "./components/Menu"

const styles = require("./OffCanvas.module.scss")

type Props = {
  links: any[]
  heading: string
  headerComponent: React.ReactNode
  footerComponent?: React.ReactNode
  menuId: string
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
  toggleVisibleMenu: menuId => {},
  resetVisibleMenus: () => {},
})

export class OffCanvas extends React.Component<Props> {
  static defaultProps = {
    links: [],
    withTrigger: false,
  }

  render() {
    return (
      <OffCanvasContext.Consumer>
        {({ visibleMenus, resetVisibleMenus }) => (
          <div
            className={classNames(styles.root, {
              [styles.active]: visibleMenus.includes(this.props.menuId),
            })}
          >
            <Header
              onClose={resetVisibleMenus}
              leftComponent={this.props.headerComponent}
              heading={this.props.heading}
            />
            <Menu links={this.props.links} />
            {this.props.footerComponent}
          </div>
        )}
      </OffCanvasContext.Consumer>
    )
  }
}

const withContextProvider = (Component: React.ComponentType<any>) => {
  return class OffCanvasWithContextProvider extends React.Component<
    Props,
    State
  > {
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
}

const withTrigger = (Component: React.ComponentType<any>) => {
  return class OffCanvasWithTrigger extends React.Component<Props> {
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
}

export default withContextProvider(withTrigger(OffCanvas))

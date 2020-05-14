import createSimpleStore, {
  Actions,
  SimpleStore,
  State,
} from "../util/simpleStore"

const initialState: State = {
  navigationBar: {
    menuOpen: false,
  },
}

const actions: Actions = {
  setNavigationBarMenuOpen: menuOpen => state => ({
    navigationBar: {
      ...state.navigationBar,
      menuOpen,
    },
  }),
}

function createGlobalUIStore(): SimpleStore {
  return createSimpleStore(initialState, actions)
}

export default createGlobalUIStore()

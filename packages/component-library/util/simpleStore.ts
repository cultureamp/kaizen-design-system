/**
 * Create store
 *
 *   const initialState = { counter: 0 }
 *   const actions = {
 *     set: value => ({counter: value}).
 *     increment: (value = 1) => (state) => ({counter: state.counter + value})
 *   }
 *   const store = createStore(initialState, actions);
 *
 *   store.subscribe(() => {
 *     doSomethingWithUpdatedState(store.getState());
 *   });
 *
 * @param {Object} state Initial state object
 * @param {Object} actions Actions to modify state
 */

export type State = {
  [key: string]: any
}

export type Actions = {
  // tslint:disable-next-line: ban-types
  [key: string]: Function
}

export type SimpleStore = {
  actions: Actions
  destroy: () => void
  getState: () => State
  // tslint:disable-next-line: ban-types
  subscribe: Function
}

export default function createSimpleStore(
  state: State = {},
  actions: Actions = {}
): SimpleStore {
  // Add a default set action to make it easy to set state
  if (!actions.set) {
    actions.set = (partialState: State) => partialState
  }

  let globalState = { ...state }
  let subscriptions: Array<() => void> = []
  let wiredActions: Actions = wireStateToActions(actions)

  /**
   * Subscribe a function to changes
   * @param {Function} subscription
   */
  function subscribe(subscription: () => void): () => void {
    subscriptions.push(subscription) // Mutation!

    return function unsubscribe(): void {
      const index = subscriptions.indexOf(subscription)
      subscriptions.splice(index, 1) // Mutation!
    }
  }

  /**
   * Wire the state to the passed actions object
   *
   * @param {Object} actions
   */
  function wireStateToActions(actionsToWire: Actions): Actions {
    // tslint:disable-next-line: forin
    for (const key in actionsToWire) {
      const wire = (wiredKey, action) => {
        // Mutate actions object
        actionsToWire[wiredKey] = data => {
          let result = action(data)
          // If an action returns a function, call that function with two
          // arguments: current state, and actions object. This allows us
          // to access both state and other actions.
          if (typeof result === "function") {
            result = result(globalState, actionsToWire)
          }
          if (result) {
            globalState = { ...globalState, ...result }
            dispatch()
          }
          return result
        }
      }
      wire(key, actionsToWire[key])
    }
    return actionsToWire
  }

  /**
   * Dispatch each subscription
   */
  function dispatch() {
    subscriptions.forEach(subscription => {
      subscription()
    })
  }

  /**
   * Return the current global state
   */
  function getState() {
    return globalState
  }

  /**
   * Destroy everything
   */
  function destroy() {
    subscriptions = []
    wiredActions = {}
  }

  return {
    actions: wiredActions,
    destroy,
    getState,
    subscribe,
  }
}

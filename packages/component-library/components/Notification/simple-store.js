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
export default function createStore(state = {}, actions = {}) {
  // Add a default set action to make it easy to set state
  if (!actions.set) {
    actions.set = partialState => partialState
  }

  let globalState = { ...state }
  let subscriptions = []
  let wiredActions = wireStateToActions(actions)

  /**
   * Subscribe a function to changes
   * @param {Function} subscription
   */
  function subscribe(subscription) {
    subscriptions.push(subscription) // Mutation!

    return function unsubscribe() {
      const index = subscriptions.indexOf(subscription)
      subscriptions.splice(index, 1) // Mutation!
    }
  }

  /**
   * Wire the state to the passed actions object
   *
   * @param {Object} actions
   */
  function wireStateToActions(actions) {
    for (const key in actions) {
      // eslint-disable-next-line no-loop-func
      function wire(key, action) {
        // Mutate actions object
        actions[key] = function (data) {
          let result = action(data)
          // If an action returns a function, call that function with two
          // arguments: current state, and actions object. This allows us
          // to access both state and other actions.
          if (typeof result === "function") {
            result = result(globalState, actions)
          }
          if (result) {
            globalState = { ...globalState, ...result }
            dispatch()
          }
          return result
        }
      }
      wire(key, actions[key])
    }
    return actions
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
    wiredActions = null
  }

  return {
    actions: wiredActions,
    destroy,
    getState,
    subscribe,
  }
}

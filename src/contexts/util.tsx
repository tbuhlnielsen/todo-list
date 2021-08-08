import * as React from 'react'
import { Action } from '../types'

/**
 * A helper to create a Context  with no upfront default value, and without
 * having to check for undefined all the time.
 * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context React Typescript Cheatsheeet}
 */
function createDefinedContext<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>(undefined)

  function useDefinedContext() {
    const c = React.useContext(ctx)
    if (c === undefined)
      throw new Error(
        'useDefinedContext must be inside a Provider with a value'
      )
    return c
  }

  return [useDefinedContext, ctx] as const // makes TypeScript infer a tuple
}

const useCombinedReducer = (useReducers: any) => {
  // Global State
  const state = Object.keys(useReducers).reduce(
    (acc, key) => ({ ...acc, [key]: useReducers[key][0] }),
    {}
  )

  // Global Dispatch Function
  const dispatch = (action: Action) =>
    Object.keys(useReducers)
      .map(key => useReducers[key][1])
      .forEach(fn => fn(action))

  return [state, dispatch] as const // makes TypeScript infer a tuple
}

export { createDefinedContext, useCombinedReducer }

import * as React from 'react'
import { createDefinedContext, useCombinedReducer } from './util'
import { initTodos, todosReducer } from './todos'
import { filterReducer } from './filter'
import { colorModeReducer } from './colorMode'
import { Action } from '../types'

interface IGlobalStateContext {
  state: any
  dispatch(action: Action): void
}

const [useGlobalState, GlobalStateContext] =
  createDefinedContext<IGlobalStateContext>()

interface Props {
  children: React.ReactNode
}

const GlobalStateProvider = (props: Props) => {
  const [state, dispatch] = useCombinedReducer({
    todos: React.useReducer(todosReducer, initTodos),
    filter: React.useReducer(filterReducer, 'all'),
    colorMode: React.useReducer(colorModeReducer, 'light')
  })

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export { GlobalStateProvider as default, useGlobalState }

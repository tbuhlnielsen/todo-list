import * as React from 'react'
import { nanoid } from 'nanoid'
import { createDefinedContext, useCombinedReducer } from './util'
import { todosReducer } from './todos'
import { filterReducer } from './filter'
import { colorModeReducer } from './colorMode'
import { Action } from '../types'

const initTodos = [
  {
    id: nanoid(),
    text: 'Hello, world!',
    complete: true
  },
  {
    id: nanoid(),
    text: `This is an example todo item.`,
    complete: true
  },
  {
    id: nanoid(),
    text: 'Add your own todo items in the textbox above.',
    complete: false
  }
]

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

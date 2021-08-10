import * as React from 'react'
import { nanoid } from 'nanoid'
import { createDefinedContext, useCombinedReducer } from './util'
import { todosReducer } from './todos'
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
    todos: React.useReducer(todosReducer, initTodos)
  })

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export { GlobalStateProvider as default, useGlobalState }

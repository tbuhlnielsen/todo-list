import * as React from 'react'
import { todosReducer } from '../reducers/todos'
import { undoable } from '../reducers/undoable'
import { createDefinedContext } from './util'
import { Action, Todo } from '../types'

interface ITodosContext {
  todos: {
    past: Todo[][]
    present: Todo[]
    future: Todo[][]
  }
  dispatchTodos(action: Action): void
}

const [useTodos, TodosContext] = createDefinedContext<ITodosContext>()

interface Props {
  children: React.ReactNode
  initValue?: {
    past: Todo[][]
    present: Todo[]
    future: Todo[][]
  }
}

const TodosProvider = (props: Props) => {
  const [todos, dispatchTodos] = React.useReducer(
    undoable(todosReducer),
    props.initValue || []
  )

  return (
    <TodosContext.Provider value={{ todos, dispatchTodos }}>
      {props.children}
    </TodosContext.Provider>
  )
}

export { TodosProvider as default, useTodos }

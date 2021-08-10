import * as React from 'react'
import { todosReducer } from '../reducers/todos'
import { createDefinedContext } from './util'
import { Action, Todo } from '../types'

interface ITodosContext {
  todos: Todo[]
  dispatchTodos(action: Action): void
}

const [useTodos, TodosContext] = createDefinedContext<ITodosContext>()

interface Props {
  children: React.ReactNode
  initValue?: Todo[]
}

const TodosProvider = (props: Props) => {
  const [todos, dispatchTodos] = React.useReducer(
    todosReducer,
    props.initValue || []
  )

  return (
    <TodosContext.Provider value={{ todos, dispatchTodos }}>
      {props.children}
    </TodosContext.Provider>
  )
}

export { TodosProvider as default, useTodos }

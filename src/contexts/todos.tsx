import * as React from 'react'
import createDefinedContext from './util'
import { Action, Todo } from '../types'

interface ITodoContext {
  todos: Todo[]
  dispatchTodos: React.Dispatch<Action>
}

export const [useTodos, TodoContext] = createDefinedContext<ITodoContext>()

// TODO: use id generator.
const initTodos: Todo[] = [
  {
    id: '0',
    text: 'Cook dinner',
    complete: true
  },
  {
    id: '1',
    text: 'Wash dishes',
    complete: false
  }
]

const todosReducer = (todos: typeof initTodos, action: Action) => {
  switch (action.type) {
    case 'item/toggle':
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })

    case 'item/delete':
      return todos.filter(todo => todo.id !== action.payload.id)

    default:
      throw new Error('unrecognised action type')
  }
}

interface Props {
  children: React.ReactNode
}

export const TodosProvider = (props: Props) => {
  const [todos, dispatchTodos] = React.useReducer(todosReducer, initTodos)

  return (
    <TodoContext.Provider value={{ todos, dispatchTodos }}>
      {props.children}
    </TodoContext.Provider>
  )
}

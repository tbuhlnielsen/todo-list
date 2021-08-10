import * as React from 'react'
import { nanoid } from 'nanoid'
import TodosContext from '../contexts/todos'
import { todosReducer } from '../reducers/todos'

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
interface Props {
  children: React.ReactNode
}

const TodosProvider = (props: Props) => {
  const [todos, dispatchTodos] = React.useReducer(todosReducer, initTodos)

  return (
    <TodosContext.Provider value={{ todos, dispatchTodos }}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosProvider

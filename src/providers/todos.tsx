import * as React from 'react'
import TodosContext from '../contexts/todos'
import { todosReducer } from '../reducers/todos'
import { Todo } from '../types'

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

export default TodosProvider

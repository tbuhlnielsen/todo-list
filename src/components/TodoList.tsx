import * as React from 'react'
import List from '@material-ui/core/List'
import TodoListItem from './TodoListItem'
import { useGlobalState } from '../contexts'
import { Filter, Todo } from '../types'

interface Props {
  filter: Filter
}

const TodoList = (props: Props) => {
  const { state } = useGlobalState()
  const { filter } = props

  const filteredTodos = applyFilter(state.todos, filter)

  return (
    <List>
      {filteredTodos.map(todo => (
        <TodoListItem key={todo.id} item={todo} />
      ))}
    </List>
  )
}

const applyFilter = (todos: Todo[], filter: Filter) => {
  return todos.filter(todo => {
    if (filter === 'all') {
      return true
    }
    if (filter === 'complete' && todo.complete) {
      return true
    }
    if (filter === 'incomplete' && !todo.complete) {
      return true
    }
    return false
  })
}

export default TodoList

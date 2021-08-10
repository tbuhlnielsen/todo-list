import * as React from 'react'
import List from '@material-ui/core/List'
import TodoListItem from './TodoListItem'
import { Filter, Todo } from '../types'
import { useTodos } from '../contexts/todos'

interface Props {
  filter: Filter
}

const TodoList = (props: Props) => {
  const { todos } = useTodos()
  const { filter } = props

  const filteredTodos = applyFilter(todos, filter)
  const todoItems = filteredTodos.map(todo => (
    <TodoListItem key={todo.id} item={todo} />
  ))

  return <List>{todoItems}</List>
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

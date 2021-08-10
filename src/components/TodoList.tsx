import * as React from 'react'
import List from '@material-ui/core/List'
import TodoListItem from './TodoListItem'
import { useTodos } from '../contexts/todos'
import { useFilter } from '../contexts/filter'
import { Filter, Todo } from '../types'

const TodoList = () => {
  const { todos } = useTodos()
  const { filter } = useFilter()

  const filteredTodos = applyFilter(todos, filter)

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

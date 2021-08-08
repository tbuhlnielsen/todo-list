import React from 'react'
import List from '@material-ui/core/List'
import TodoListItem from './TodoListItem'
import { Todo } from '../types'

interface Props {
  todos: Todo[]
  onToggleItem(id: string): void
  onDeleteItem(id: string): void
}

const TodoList = (props: Props) => {
  return (
    <List>
      {props.todos.map(todo => (
        <TodoListItem
          key={todo.id}
          item={todo}
          onToggle={props.onToggleItem}
          onDelete={props.onDeleteItem}
        />
      ))}
    </List>
  )
}

export default TodoList

import React from 'react'
import List from '@material-ui/core/List'
import TodoListItem, { ITodo } from './TodoListItem'

interface Props {
  todos: ITodo[]
  onToggleItem(id: string): void
}

const TodoList = (props: Props) => {
  return (
    <List>
      {props.todos.map(todo => (
        <TodoListItem key={todo.id} item={todo} onToggle={props.onToggleItem} />
      ))}
    </List>
  )
}

export default TodoList

import React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import TodoList from './TodoList'
import { Filter, Todo } from '../types'

interface Props {
  filter: Filter
  todos: Todo[]
  onChangeFilter(filter: Filter): void
  onToggleItem(id: string): void
  onDeleteItem(id: string): void
}

const EditableTodoList = (props: Props) => {
  return (
    <div>
      <FilterButtonGroup
        filter={props.filter}
        onChange={props.onChangeFilter}
      />
      <TodoList
        todos={props.todos}
        onToggleItem={props.onToggleItem}
        onDeleteItem={props.onDeleteItem}
      />
    </div>
  )
}

export default EditableTodoList

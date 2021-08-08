import React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import TodoList from './TodoList'

const EditableTodoList = () => {
  return (
    <div>
      <FilterButtonGroup />
      <TodoList />
    </div>
  )
}

export default EditableTodoList

import * as React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import TodoList from './TodoList'

const EditableTodoList = () => {
  return (
    <>
      <FilterButtonGroup />
      <TodoList />
    </>
  )
}

export default EditableTodoList

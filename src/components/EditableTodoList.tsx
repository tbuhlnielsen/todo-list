import * as React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import NewItemForm from './NewItemForm'
import TodoList from './TodoList'

const EditableTodoList = () => {
  return (
    <>
      <FilterButtonGroup />
      <div style={{ marginTop: '24px' }}>
        <NewItemForm />
        <TodoList />
      </div>
    </>
  )
}

export default EditableTodoList

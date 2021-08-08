import * as React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import NewItemForm from './NewItemForm'
import TodoList from './TodoList'

const formStyles = {
  marginTop: '24px'
}

const EditableTodoList = () => {
  return (
    <>
      <FilterButtonGroup />
      <div style={formStyles}>
        <NewItemForm />
        <TodoList />
      </div>
    </>
  )
}

export default EditableTodoList

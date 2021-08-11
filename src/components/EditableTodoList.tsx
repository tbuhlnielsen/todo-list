import * as React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import NewItemForm from './NewItemForm'
import TodoList from './TodoList'
import FilterProvider from '../contexts/filter'

const EditableTodoList = () => {
  return (
    <FilterProvider initValue="all">
      <FilterButtonGroup />
      <div style={{ marginTop: '24px' }}>
        <NewItemForm />
      </div>
      <TodoList />
    </FilterProvider>
  )
}

export default EditableTodoList

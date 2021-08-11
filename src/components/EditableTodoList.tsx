import * as React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import NewItemForm from './NewItemForm'
import TodoList from './TodoList'
import FilterProvider from '../contexts/filter'

const EditableTodoList = () => {
  return (
    <FilterProvider initValue="all">
      <div style={{ margin: '16px 0' }}>
        <FilterButtonGroup />
      </div>
      <NewItemForm />
      <TodoList />
    </FilterProvider>
  )
}

export default EditableTodoList

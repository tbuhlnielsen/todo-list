import * as React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import NewItemForm from './NewItemForm'
import TodoList from './TodoList'
import FilterProvider from '../providers/filter'
import TodosProvider from '../providers/todos'

const EditableTodoList = () => {
  return (
    <FilterProvider>
      <FilterButtonGroup />
      <TodosProvider>
        <div style={{ marginTop: '24px' }}>
          <NewItemForm />
        </div>
        <TodoList />
      </TodosProvider>
    </FilterProvider>
  )
}

export default EditableTodoList

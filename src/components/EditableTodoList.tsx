import * as React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import NewItemForm from './NewItemForm'
import TodoList from './TodoList'
import TodosProvider from '../providers/todos'
import { Filter } from '../types'

const EditableTodoList = () => {
  const [filter, setFilter] = React.useState<Filter>('all')

  return (
    <>
      <FilterButtonGroup filter={filter} setFilter={setFilter} />
      <TodosProvider>
        <div style={{ marginTop: '24px' }}>
          <NewItemForm />
        </div>
        <TodoList filter={filter} />
      </TodosProvider>
    </>
  )
}

export default EditableTodoList

import * as React from 'react'
import FilterButtonGroup from './FilterButtonGroup'
import NewItemForm from './NewItemForm'
import TodoList from './TodoList'
import { Filter } from '../types'

const EditableTodoList = () => {
  const [filter, setFilter] = React.useState<Filter>('all')

  return (
    <>
      <FilterButtonGroup filter={filter} setFilter={setFilter} />
      <div style={{ marginTop: '24px' }}>
        <NewItemForm />
        <TodoList filter={filter} />
      </div>
    </>
  )
}

export default EditableTodoList

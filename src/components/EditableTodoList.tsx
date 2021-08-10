import * as React from 'react'
import { nanoid } from 'nanoid'
import FilterButtonGroup from './FilterButtonGroup'
import NewItemForm from './NewItemForm'
import TodoList from './TodoList'
import FilterProvider from '../contexts/filter'
import TodosProvider from '../contexts/todos'

const initTodos = [
  {
    id: nanoid(),
    text: 'Hello, world!',
    complete: true
  },
  {
    id: nanoid(),
    text: `This is an example todo item.`,
    complete: true
  },
  {
    id: nanoid(),
    text: 'Add your own todo items in the textbox above.',
    complete: false
  }
]

const EditableTodoList = () => {
  return (
    <FilterProvider initValue="all">
      <FilterButtonGroup />
      <TodosProvider initValue={initTodos}>
        <div style={{ marginTop: '24px' }}>
          <NewItemForm />
        </div>
        <TodoList />
      </TodosProvider>
    </FilterProvider>
  )
}

export default EditableTodoList

import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import FilterButtonGroup, { Filter } from './components/FilterButtonGroup'
import TodoList from './components/TodoList'
import { ITodo } from './components/TodoListItem'

// TODO: use id generator.
const initTodos: ITodo[] = [
  {
    id: '0',
    text: 'Cook dinner',
    complete: true
  },
  {
    id: '1',
    text: 'Wash dishes',
    complete: false
  }
]

const App = () => {
  const [filter, setFilter] = useState<Filter>('all')
  const [todos, setTodos] = useState<ITodo[]>(initTodos)

  const handleToggleItem = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const filteredTodos = applyFilter(todos, filter)

  return (
    <Container maxWidth="sm">
      <h1>Todo List</h1>
      <FilterButtonGroup filter={filter} onChange={setFilter} />
      <TodoList todos={filteredTodos} onToggleItem={handleToggleItem} />
    </Container>
  )
}

const applyFilter = (todos: ITodo[], filter: Filter) => {
  return todos.filter(todo => {
    if (filter === 'all') {
      return true
    }
    if (filter === 'complete' && todo.complete) {
      return true
    }
    if (filter === 'incomplete' && !todo.complete) {
      return true
    }
    return false
  })
}

export default App

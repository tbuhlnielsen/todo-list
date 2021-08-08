import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import EditableTodoList from './components/EditableTodoList'
import { Filter, Todo } from './types'

// TODO: use id generator.
const initTodos: Todo[] = [
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
  const [todos, setTodos] = useState<Todo[]>(initTodos)

  const handleToggleItem = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleDeleteItem = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const filteredTodos = applyFilter(todos, filter)

  return (
    <Container maxWidth="sm">
      <h1>Todo List</h1>
      <EditableTodoList
        filter={filter}
        todos={filteredTodos}
        onChangeFilter={setFilter}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />
    </Container>
  )
}

const applyFilter = (todos: Todo[], filter: Filter) => {
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

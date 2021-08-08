import React from 'react'
import Container from '@material-ui/core/Container'
import EditableTodoList from './components/EditableTodoList'
import { FilterProvider } from './contexts/filter'
import { TodosProvider } from './contexts/todos'

const App = () => {
  return (
    <TodosProvider>
      <FilterProvider>
        <Container maxWidth="sm">
          <h1>Todo List</h1>
          <EditableTodoList />
        </Container>
      </FilterProvider>
    </TodosProvider>
  )
}

export default App

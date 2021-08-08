import * as React from 'react'
import Container from '@material-ui/core/Container'
import GlobalStateProvider from './contexts'
import EditableTodoList from './components/EditableTodoList'

const App = () => {
  return (
    <GlobalStateProvider>
      <Container maxWidth="sm">
        <h1>Todo List</h1>
        <EditableTodoList />
      </Container>
    </GlobalStateProvider>
  )
}

export default App

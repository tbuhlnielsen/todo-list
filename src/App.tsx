import * as React from 'react'
import Container from '@material-ui/core/Container'
import EditableTodoList from './components/EditableTodoList'
import Header from './components/Header'
import GlobalStateProvider from './contexts'

const App = () => {
  return (
    <GlobalStateProvider>
      <Container maxWidth="sm">
        <Header />
        <EditableTodoList />
      </Container>
    </GlobalStateProvider>
  )
}

export default App

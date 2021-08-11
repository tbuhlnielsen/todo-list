import * as React from 'react'
import { nanoid } from 'nanoid'
import Container from '@material-ui/core/Container'
import EditableTodoList from './EditableTodoList'
import Header from './Header'
import TopBar from './TopBar'
import ThemeProvider from '../contexts/theme'
import TodosProvider from '../contexts/todos'

const initTodos = {
  past: [],
  present: [
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
  ],
  future: []
}

const App = () => {
  return (
    <TodosProvider initValue={initTodos}>
      <ThemeProvider>
        <TopBar />
        <Container maxWidth="sm">
          <Header />
          <EditableTodoList />
        </Container>
      </ThemeProvider>
    </TodosProvider>
  )
}

export default App

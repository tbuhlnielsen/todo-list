import * as React from 'react'
import Container from '@material-ui/core/Container'
import { createTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import ColorModeSwitch from './components/ColorModeSwitch'
import EditableTodoList from './components/EditableTodoList'
import Header from './components/Header'
import { useGlobalState } from './contexts'

const App = () => {
  const { state } = useGlobalState()
  const colorMode = state.colorMode

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: { type: colorMode }
      }),
    [colorMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ColorModeSwitch />
      <Container maxWidth="sm">
        <Header />
        <EditableTodoList />
      </Container>
    </ThemeProvider>
  )
}

export default App

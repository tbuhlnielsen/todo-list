import * as React from 'react'
import Container from '@material-ui/core/Container'
import { createTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import ColorModeSwitch from './ColorModeSwitch'
import EditableTodoList from './EditableTodoList'
import Header from './Header'
import { ColorMode } from '../types'

const App = () => {
  const [colorMode, setColorMode] = React.useState<ColorMode>('light')

  const theme = React.useMemo(
    () => createTheme({ palette: { type: colorMode } }),
    [colorMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ColorModeSwitch mode={colorMode} onToggle={setColorMode} />
      <Container maxWidth="sm">
        <Header />
        <EditableTodoList />
      </Container>
    </ThemeProvider>
  )
}

export default App

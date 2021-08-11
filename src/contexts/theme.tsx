import * as React from 'react'
import { createTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { createDefinedContext } from './util'
import { ColorMode } from '../types'

interface IColorModeContext {
  colorMode: ColorMode
  setColorMode(colorMode: ColorMode): void
}

const [useColorMode, ColorModeContext] =
  createDefinedContext<IColorModeContext>()

interface Props {
  children: React.ReactNode
}

const ThemeProvider = (props: Props) => {
  const [colorMode, setColorMode] = React.useState<ColorMode>('light')

  const theme = React.useMemo(
    () => createTheme({ palette: { type: colorMode } }),
    [colorMode]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
        {props.children}
      </ColorModeContext.Provider>
    </MuiThemeProvider>
  )
}

export { ThemeProvider as default, useColorMode }

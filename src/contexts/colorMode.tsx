import * as React from 'react'
import { createDefinedContext } from './util'
import { Action, ColorMode } from '../types'

interface IColorModeContext {
  colorMode: ColorMode
  dispatchColorMode: React.Dispatch<Action>
}

const [useColorMode, ColorModeContext] =
  createDefinedContext<IColorModeContext>()

const colorModeReducer = (mode: ColorMode, action: Action) => {
  switch (action.type) {
    case 'colorMode/toggle':
      return mode === 'light' ? 'dark' : 'light'

    default:
      return mode // ignore unrecognised
  }
}

interface Props {
  children: React.ReactNode
}

const ColorModeProvider = (props: Props) => {
  const [colorMode, dispatchColorMode] = React.useReducer(
    colorModeReducer,
    'light'
  )

  return (
    <ColorModeContext.Provider value={{ colorMode, dispatchColorMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export { ColorModeProvider as default, colorModeReducer, useColorMode }

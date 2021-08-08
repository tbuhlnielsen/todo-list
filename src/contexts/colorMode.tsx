import * as React from 'react'
import { Action, ColorMode } from '../types'

const colorModeReducer = (mode: ColorMode, action: Action) => {
  switch (action.type) {
    case 'colorMode/toggle':
      return mode === 'light' ? 'dark' : 'light'

    default:
      return mode // ignore unrecognised
  }
}

export { colorModeReducer }

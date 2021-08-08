import * as React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Tooltip from '@material-ui/core/Tooltip'
import { useGlobalState } from '../contexts'

const styles: React.CSSProperties = {
  position: 'fixed',
  right: '20px',
  top: '10px'
}

const ColorModeSwitch = () => {
  const { state, dispatch } = useGlobalState()
  const colorMode = state.colorMode
  const oppositeMode = colorMode === 'light' ? 'dark' : 'light'
  const label = `${toTitle(oppositeMode)} mode`

  const handleClick = () => {
    dispatch({ type: 'colorMode/toggle' })
  }

  return (
    <div style={styles}>
      <Tooltip title={label} arrow>
        <IconButton onClick={handleClick} aria-label={label}>
          {colorMode === 'light' && <Brightness4Icon />}
          {colorMode === 'dark' && <Brightness7Icon />}
        </IconButton>
      </Tooltip>
    </div>
  )
}

const toTitle = (str: string) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

export default ColorModeSwitch

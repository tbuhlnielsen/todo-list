import * as React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Tooltip from '@material-ui/core/Tooltip'
import { useColorMode } from '../contexts/theme'

const ColorModeSwitch = () => {
  const { colorMode, setColorMode } = useColorMode()
  const oppositeMode = colorMode === 'light' ? 'dark' : 'light'
  const label = `Activate ${oppositeMode} mode`

  const handleClick = () => {
    setColorMode(oppositeMode)
  }

  return (
    <Tooltip title={label} arrow>
      <IconButton onClick={handleClick} aria-label={label}>
        {colorMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  )
}

export default ColorModeSwitch

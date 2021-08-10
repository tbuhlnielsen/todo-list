import * as React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Tooltip from '@material-ui/core/Tooltip'
import { ColorMode } from '../types'

interface Props {
  mode: ColorMode
  onToggle(colorMode: ColorMode): void
}

const ColorModeSwitch = (props: Props) => {
  const colorMode = props.mode
  const oppositeMode = colorMode === 'light' ? 'dark' : 'light'
  const label = `Activate ${oppositeMode} mode`

  const handleClick = () => {
    props.onToggle(oppositeMode)
  }

  return (
    <div style={{ position: 'fixed', right: '40px', top: '10px' }}>
      <Tooltip title={label} arrow>
        <IconButton onClick={handleClick} aria-label={label}>
          {colorMode === 'light' && <Brightness4Icon />}
          {colorMode === 'dark' && <Brightness7Icon />}
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default ColorModeSwitch

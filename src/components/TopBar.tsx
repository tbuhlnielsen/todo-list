import * as React from 'react'
import Button from '@material-ui/core/Button'
import ColorModeSwitch from './ColorModeSwitch'
import { useTodos } from '../contexts/todos'

const TopBar = () => {
  const { todos, dispatchTodos } = useTodos()

  const handleUndo = () => {
    dispatchTodos({ type: 'undo' })
  }
  const handleRedo = () => {
    dispatchTodos({ type: 'redo' })
  }

  return (
    <div style={containerStyles}>
      <Button disabled={todos.past.length === 0} onClick={handleUndo}>
        Undo
      </Button>
      <Button disabled={todos.future.length === 0} onClick={handleRedo}>
        Redo
      </Button>
      <ColorModeSwitch />
    </div>
  )
}

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
}

export default TopBar

import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
import { Todo } from '../types'

interface Props {
  item: Todo
  onToggle(id: string): void
  onDelete(id: string): void
}

const TodoListItem = (props: Props) => {
  const { id, text, complete } = props.item

  const handleClick = () => {
    props.onToggle(id)
  }

  const handleDelete = () => {
    props.onDelete(id)
  }

  const labelId = `todo-list-label-${id}`
  return (
    <ListItem role="listitem" button onClick={handleClick}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={complete}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={text} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TodoListItem

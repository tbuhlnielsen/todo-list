import * as React from 'react'
import AddIcon from '@material-ui/icons/Add'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { useGlobalState } from '../contexts'

const NewItemForm = () => {
  const [text, setText] = React.useState('')
  const { dispatch } = useGlobalState()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch({
      type: 'item/add',
      payload: { text }
    })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="component-outlined">Add an item</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={text}
          onChange={handleChange}
          label="Add an item"
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
          required
        />
      </FormControl>
    </form>
  )
}

export default NewItemForm

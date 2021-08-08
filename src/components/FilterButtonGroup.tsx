import * as React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { Filter } from '../types'
import { useGlobalState } from '../contexts'

const FilterButtonGroup = () => {
  const { state, dispatch } = useGlobalState()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value as Filter
    dispatch({
      type: 'filter/set',
      payload: { filter }
    })
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Show</FormLabel>
      <RadioGroup
        row
        aria-label="filter"
        name="filter"
        value={state.filter}
        onChange={handleChange}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel
          value="complete"
          control={<Radio />}
          label="Complete"
        />
        <FormControlLabel
          value="incomplete"
          control={<Radio />}
          label="Incomplete"
        />
      </RadioGroup>
    </FormControl>
  )
}

export default FilterButtonGroup

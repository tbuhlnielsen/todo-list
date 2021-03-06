import * as React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { useFilter } from '../contexts/filter'
import { Filter } from '../types'

const FilterButtonGroup = () => {
  const { filter, setFilter } = useFilter()

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Show</FormLabel>
      <RadioGroup
        row
        aria-label="filter"
        name="filter"
        value={filter}
        onChange={event => setFilter(event.target.value as Filter)}
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

import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

export type Filter = 'all' | 'complete' | 'incomplete'

interface Props {
  filter: Filter
  onChange(filter: Filter): void
}

const FilterButtonGroup = (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return props.onChange(event.target.value as Filter)
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Show</FormLabel>
      <RadioGroup
        aria-label="filter"
        name="filter"
        value={props.filter}
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

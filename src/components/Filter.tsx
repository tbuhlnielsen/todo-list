import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

interface FilterProps {
  filter: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const Filter = (props: FilterProps) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Show</FormLabel>
      <RadioGroup
        aria-label="filter"
        name="filter"
        value={props.filter}
        onChange={props.onChange}
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

export default Filter
